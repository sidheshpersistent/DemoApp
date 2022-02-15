import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { deviceConstants, iconConstants } from 'constants/ntb_sa';
import { Colors, Typography } from 'styles';
import CardView from 'components/ntb_sa/common/CardView';
import CustomIcon from 'components/ntb_sa/common/CustomIcon';
import If from 'utils/ntb_sa';
import { Menu, MenuTrigger, MenuOptions, MenuOption, renderers } from 'react-native-popup-menu';

const styles = StyleSheet.create({
  mainConatiner: { marginHorizontal: 20, marginVertical: 10 },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 20,
    paddingLeft: 0,
    textAlignVertical: 'center',
    textAlign: 'left',
    width: deviceConstants.deviceWidth * 0.9 - 60,
    height: 28,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginBottom: 15,
    borderColor: Colors.GREY,
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 15,
  },
});

const optionsStyles = {
  optionsContainer: {
    padding: 5,
    marginTop: 75,
    marginHorizontal: 20,
    width: deviceConstants.deviceWidth * 0.9,
    borderRadius: 10,
  },
  optionWrapper: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    width: deviceConstants.deviceWidth * 0.8,
    borderBottomColor: Colors.GREY,
    height: 40,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: Colors.BLACK,
    fontSize: 13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
};

const ModalDropdown = props => {
  const { placeholder, isBottom = false, hintTxt = placeholder, value, options, errors, name } = props;
  const [isVisible, setVisible] = useState(false);
  const errorMessageStr = errors && errors?.[name]?.message;
  const lineStyle = { ...styles.horizontalLine, borderColor: errorMessageStr ? Colors.RED : Colors.GREY };
  const selectedValue = value ? value.label : null;
  const selectedColorVal = () => {
    if (selectedValue && selectedValue.length > 0 && isVisible) {
      return Colors.MAROON;
    }
    return selectedValue && selectedValue.length > 0 ? Colors.DARK : Colors.TEXTINPUT_PLACEHOLDER;
  };

  const placeholderTxtStyle = {
    marginBottom: isVisible || (selectedValue && selectedValue.length > 0) ? 0 : 8,
    color: selectedColorVal(),
    fontSize: selectedValue && selectedValue.length > 0 && isVisible ? 20 : 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  };
  const optionsHeightStyle = { height: options.length > 4 ? 200 : options.length * 40 };
  const bottomHeightStyle = { height: options.length > 4 ? 210 : options.length * 43 };

  return (
    <Menu
      renderer={renderers.NotAnimatedContextMenu}
      onOpen={() => {
        Keyboard.dismiss();
        setVisible(true);
      }}
      onClose={() => {
        setVisible(false);
      }}
      onSelect={item => {
        props.onChange(item);
      }}
    >
      <MenuTrigger style={styles.mainConatiner}>
        <CardView>
          <View style={styles.inputContainer}>
            <View>
              <Text
                style={[
                  styles.textInputStyle,
                  {
                    ...placeholderTxtStyle,
                  },
                ]}
              >
                {selectedValue || placeholder}
              </Text>
              <If condition={isVisible || (selectedValue && selectedValue.length > 0) || errorMessageStr}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: errorMessageStr ? Colors.RED : Colors.TEXTINPUT_PLACEHOLDER,
                    },
                  ]}
                >
                  {errorMessageStr || hintTxt}
                </Text>
              </If>
            </View>
            {/* <Feather
              style={{ marginLeft: -5, marginTop: isVisible ? -20 : 0 }}
              name={isVisible ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#9b1e26"
            /> */}
            <CustomIcon
              style={{ color: Colors.MAROON }}
              name={isVisible ? iconConstants.IC_CHEVRON_UP : iconConstants.IC_CHEVRON_DOWN}
              size={24}
            />
          </View>
          <If condition={isVisible || selectedValue == null || errorMessageStr}>
            <View style={{ ...lineStyle }} />
          </If>
        </CardView>
        {/* </TouchableOpacity> */}
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <FlatList
          data={options}
          renderItem={({ item }) => <MenuOption value={item} text={item.label} />}
          style={{ ...optionsHeightStyle }}
          keyExtractor={(item, index) => index.toString()}
        />
      </MenuOptions>
      <If condition={isVisible && isBottom}>
        <View style={{ ...bottomHeightStyle }} />
      </If>
    </Menu>
  );
};

ModalDropdown.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hintTxt: PropTypes.string,
  isBottom: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

ModalDropdown.defaultProps = {
  value: undefined,
  placeholder: undefined,
  hintTxt: undefined,
  isBottom: false,
  options: [],
  errors: null,
};

export default ModalDropdown;
