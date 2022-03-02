import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import {deviceConstants, iconConstants} from 'constants/ntb_sa';
import {Colors, Typography} from 'styles';
import CardView from 'components/ntb_sa/common/CardView';
import CustomIcon from 'components/ntb_sa/common/CustomIcon';
import {If} from 'utils/ntb_sa';
import {
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
} from 'react-native-popup-menu';

const styles = StyleSheet.create({
  mainConatiner: {marginHorizontal: 15, marginVertical: 10},
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textInputStyle: {
    marginTop: 10,
    fontSize: 16,
    marginHorizontal: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 28,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    width: deviceConstants.deviceWidth / 2 - 100,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginBottom: 15,
    borderColor: '#e9e9e9',
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginHorizontal: 10,
    marginTop: 0,
    textAlign: 'center',
    marginBottom: 15,
  },
});

const optionsStyles = {
  optionsContainer: {
    padding: 5,
    marginTop: 75,
    marginHorizontal: 20,
    width: deviceConstants.deviceWidth * 0.4 - 10,
    borderRadius: 10,
  },
  optionWrapper: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    // width: deviceConstants.deviceWidth * 0.4,
    borderBottomColor: '#e8e8ea',
    height: 40,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: 'black',
    fontSize: 13,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  flex8Style: {flex: 8.5},
  flex1Style: {flex: 1.5},
};

const OptionDropdown = props => {
  const {
    placeholder,
    isBottom = false,
    hintTxt = placeholder,
    options,
    selectedOptions = '',
  } = props;
  const [isVisible, setVisible] = useState(false);
  const [selectedValue, setselectedValue] = useState(selectedOptions);

  const selectedColorVal = () => {
    if (selectedValue && selectedValue.length > 0 && isVisible) {
      return Colors.MAROON;
    }
    return selectedValue && selectedValue.length > 0
      ? Colors.DARK
      : Colors.TEXTINPUT_PLACEHOLDER;
  };

  const placeholderTxtStyle = {
    marginBottom:
      isVisible || (selectedValue && selectedValue.length > 0) ? 0 : 8,
    color: selectedColorVal(),
    fontSize: selectedValue && selectedValue.length > 0 && isVisible ? 20 : 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  };

  const optionsHeightStyle = {
    height: options.length > 4 ? 200 : options.length * 40,
  };
  const bottomHeightStyle = {
    height: options.length > 4 ? 210 : options.length * 43,
  };

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
        setselectedValue(item.value);
        props.onChange(item);
      }}>
      <MenuTrigger style={styles.mainConatiner}>
        <CardView>
          <View style={styles.inputContainer}>
            <View style={styles.flex8Style}>
              <Text style={[styles.textInputStyle, {...placeholderTxtStyle}]}>
                {selectedValue || placeholder}
              </Text>

              <If condition={isVisible || selectedValue.length > 0}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: Colors.TEXTINPUT_PLACEHOLDER,
                    },
                  ]}>
                  {hintTxt}
                </Text>
              </If>
            </View>
            <View style={styles.flex1Style}>
              <CustomIcon
                style={{color: Colors.MAROON}}
                name={
                  isVisible
                    ? iconConstants.IC_CHEVRON_UP
                    : iconConstants.IC_CHEVRON_DOWN
                }
                size={24}
              />
            </View>
          </View>
          <If condition={isVisible || selectedValue == null}>
            <View style={styles.horizontalLine} />
          </If>
        </CardView>
        {/* </TouchableOpacity> */}
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <FlatList
          data={options}
          renderItem={({item}) => <MenuOption value={item} text={item.label} />}
          style={{...optionsHeightStyle}}
          keyExtractor={(item, index) => index.toString()}
        />
      </MenuOptions>
      {/* </Card> */}

      <If condition={isVisible && isBottom}>
        <View style={{...bottomHeightStyle}} />
      </If>
    </Menu>
  );
};

OptionDropdown.propTypes = {
  selectedOptions: PropTypes.string,
  placeholder: PropTypes.string,
  hintTxt: PropTypes.string,
  isBottom: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

OptionDropdown.defaultProps = {
  selectedOptions: '',
  placeholder: undefined,
  hintTxt: undefined,
  isBottom: false,
  options: [],
};

export default OptionDropdown;
