import React, { useState } from 'react';
import { StyleSheet, View, Text, Keyboard, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Colors, Typography } from 'styles';
import { deviceConstants, iconConstants } from 'constants/ntb_sa';
import { If, isIOS } from 'utils/ntb_sa';
import CardView from '../common/CardView';
import CustomIcon from '../common/CustomIcon';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingRight: 30,
    paddingVertical: 4,
  },
  textInputStyle: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingLeft: 0,
    width: deviceConstants.deviceWidth * 0.9 - 60,
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginBottom: 15,
    marginHorizontal: 20,
    borderColor: '#e9e9e9',
  },
  textStyle: {
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: isIOS ? 12 : 0,
    marginTop: isIOS ? 5 : 0,
    color: Colors.TEXTINPUT_PLACEHOLDER,
  },
  cardContainer: { marginHorizontal: 20, marginVertical: 10 },
  iconStyle: { marginLeft: -10 },
});

const CustomDatePicker = ({
  value = undefined,
  onChange,
  placeholder,
  hintTxt = placeholder,
  mode = 'date',
  minDate = null,
  maxDate = new Date(),
  errors,
  name,
  errorMessage = null,
}) => {
  const [isVisible, setVisible] = useState(false);
  const selectedValue = value !== undefined ? value : null;
  const errorMessageStr = errorMessage || (errors && errors?.[name]?.message);
  const lineStyle = { ...styles.horizontalLine, borderColor: errorMessageStr ? Colors.RED : Colors.GREY };
  const hintStyle = { ...styles.textStyle, color: errorMessageStr ? Colors.RED : Colors.TEXTINPUT_PLACEHOLDER };

  const placeholderColor = () => {
    if (selectedValue) {
      return isVisible ? Colors.MAROON : Colors.DARK;
    }
    return Colors.TEXTINPUT_PLACEHOLDER;
  };

  const fontSize = () => {
    if (selectedValue) {
      return isVisible ? 20 : 16;
    }
    return 16;
  };

  const dynamicTextStyle = {
    marginBottom: isVisible || (selectedValue && selectedValue.length > 0) ? 0 : 8,
    color: placeholderColor(),
    fontSize: fontSize(),
    fontFamily: Typography.FONT_FAMILY_BOLD,
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Keyboard.dismiss();
          setVisible(true);
        }}
      >
        <CardView style={styles.cardContainer}>
          <View style={styles.inputContainer}>
            <View>
              <Text style={[styles.textInputStyle, { ...dynamicTextStyle }]}>{selectedValue || placeholder}</Text>
              <If condition={isVisible || (selectedValue && selectedValue.length > 0) || errorMessageStr}>
                <Text style={{ ...hintStyle }}>{errorMessageStr || hintTxt}</Text>
              </If>
            </View>
            <CustomIcon style={styles.iconStyle} name={iconConstants.IC_DATE} size={25} color="#9b1e26" />
          </View>
          <If condition={selectedValue == null || errorMessageStr}>
            <View style={{ ...lineStyle }} />
          </If>
        </CardView>
      </TouchableOpacity>
      <If condition={isVisible}>
        <DateTimePickerModal
          isVisible={isVisible}
          // value={date}
          //   date={date}
          mode={mode}
          minimumDate={minDate}
          maximumDate={maxDate}
          locale="en_IN"
          onConfirm={val => {
            onChange(val);
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </If>
    </>
  );
};

CustomDatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hintTxt: PropTypes.string,
  mode: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  errors: PropTypes.object,
  errorMessage: PropTypes.string,
};

CustomDatePicker.defaultProps = {
  value: undefined,
  mode: 'date',
  minDate: null,
  placeholder: undefined,
  maxDate: new Date(),
  hintTxt: undefined,
  errors: null,
  errorMessage: null,
};

export default CustomDatePicker;
