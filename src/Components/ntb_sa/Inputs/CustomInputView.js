import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Typography } from 'styles';
import { iconConstants, CONSTANTS } from 'constants/ntb_sa';
import { isIos } from 'utils/platform';
import MaskedIcon from '../common/MaskedIcon';
import CardView from '../common/CardView';
import CustomIcon from '../common/CustomIcon';

const { width } = Dimensions.get('window');
const inputWidth = width * 0.9;
const isIOS = isIos();

const styles = StyleSheet.create({
  iconImage: {
    color: Colors.ACCENT_1,
    position: 'absolute',
    top: isIOS ? -2 : 2,
    right: 58,
  },
  textStyle: {
    marginTop: isIOS ? 5 : -15,
    marginBottom: isIOS ? 5 : 8,
    paddingLeft: isIOS ? 0 : 5,
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  cardStyle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: isIOS ? 10 : 0,
    alignSelf: 'center',
    width: inputWidth,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginTop: isIOS ? 8 : 0,
    marginBottom: 5,
    borderColor: Colors.GREY,
  },
  textInputStyle: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingLeft: 0,
    width: inputWidth,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingBottom: isIOS ? 10 : 0,
  },
  prefixTxtStyle: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingLeft: 0,
    width: inputWidth,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingBottom: isIOS ? 10 : 0,
  },
  inputContainer: {
    flex: 1,
    paddingTop: isIOS ? 5 : 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    alignSelf: 'center',
    position: 'relative',
    fontSize: 14,
    color: Colors.MAROON,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  containerStyle: { marginVertical: 10 },
});

const CustomInputView = ({
  value,
  isTxtBtnEnable = false,
  returnKeyType = 'next',
  multiline = false,
  maxLength = CONSTANTS.INPUT_TEXT_LENGTH,
  disabledValue = true,
  btnColor = Colors.MAROON,
  checkBox = false,
  isEditable = true,
  placeholder,
  hintText = placeholder,
  autoCapitalize,
  inputRef,
  errors,
  name,
  indicator,
  onBlurInput,
  BtnTitle,
  errorMessage,
  iconName,
  ...props
}) => {
  const [isFocusedInput, SetFocusedInput] = useState(false);
  const errorMessageStr = errorMessage || (errors && errors?.[name]?.message);
  const inputVWidth = () => {
    if (indicator && value.length > 0) {
      if (isTxtBtnEnable) {
        return inputWidth - 75;
      }
      return isIOS ? inputWidth - 110 : inputWidth - 110;
    }
    return inputWidth - 85;
  };
  const rightBtnLeft = () => {
    if (indicator) {
      return value ? -50 : 0;
    }
    return 0;
  };
  const maskedIconLeft = () => {
    if (indicator) {
      if (value.length > 0) {
        return isIos ? 0 : -60;
      }
      return 0;
    }
    return 0;
  };
  const bottomLineColor = () => {
    if (isFocusedInput) {
      return Colors.MAROON;
    }
    return errorMessageStr ? Colors.RED : Colors.GREY;
  };
  const iconGradientColr = () => {
    if (value && value.length > 0 && !isFocusedInput && errorMessageStr) {
      return [Colors.RED, '#710000'];
    }
    return isFocusedInput ? [Colors.ICON_ORANGE, '#f6aa00'] : ['rgba(52, 52, 52, 0)', 'rgba(52, 52, 52, 0)'];
  };

  const imputVConatinerStyle = { width: inputVWidth() };
  const rightBtnStyle = { left: rightBtnLeft() };
  const rightBtnTxt = {
    opacity: value && value.length > 0 && !errorMessageStr && disabledValue ? 1 : 0.4,
    color: btnColor,
  };
  const maskedIconStyle = {
    marginTop: value && value.length > 0 && isFocusedInput ? -30 : -25,
    position: 'relative',
    left: maskedIconLeft(),
  };
  const errorTxtStyle = {
    color: !isFocusedInput && errorMessageStr ? Colors.RED : Colors.TEXTINPUT_PLACEHOLDER,
  };
  const bottomLineStyle = {
    borderColor: bottomLineColor(),
  };

  return (
    <View style={styles.containerStyle}>
      <CardView style={styles.cardStyle}>
        <View style={styles.inputContainer}>
          <If condition={!!(indicator && value.length > 0)}>
            <Text
              style={
                ([styles.prefixTxtStyle],
                {
                  fontSize: value && value.length > 0 && isFocusedInput ? 20 : 16,
                  fontFamily: Typography.FONT_FAMILY_BOLD,
                  color: isFocusedInput ? Colors.MAROON : Colors.DARK,
                })
              }
            >
              {indicator}
            </Text>
          </If>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (inputRef !== undefined && inputRef instanceof Object) inputRef.current.focus();
            }}
          >
            <View
              style={{ ...imputVConatinerStyle }}
              pointerEvents={inputRef === undefined || inputRef instanceof Function || isFocusedInput ? 'auto' : 'none'}
            >
              <TextInput
                {...props}
                maxLength={maxLength}
                multiline={multiline}
                value={value}
                ref={inputRef}
                selectionColor={Colors.DARK}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor={Colors.TEXTINPUT_PLACEHOLDER}
                color={isFocusedInput ? Colors.MAROON : Colors.DARK}
                style={
                  ([styles.textInputStyle],
                  {
                    fontSize: value && value.length > 0 && isFocusedInput ? 20 : 16,
                    fontFamily: Typography.FONT_FAMILY_BOLD,
                  })
                }
                onBlur={e => {
                  if (value && value.length > 0 && !errorMessageStr && disabledValue) {
                    if (onBlurInput) {
                      onBlurInput(props.KeyID, value);
                    }
                  }
                  if (props.onBlur) {
                    props.onBlur(e);
                  }
                  SetFocusedInput(false);
                }}
                onFocus={() => SetFocusedInput(true)}
                editable={isEditable}
              />
            </View>
          </TouchableOpacity>
          {/** Text button View OR Masked Gradient Icon */}

          <If condition={isTxtBtnEnable}>
            <TouchableOpacity
              style={{ ...rightBtnStyle }}
              disabled={!(value && value.length > 0 && !errorMessageStr && disabledValue)}
              onPress={() => value.length > 0 && props.inputButtonClick({ key: name })}
            >
              {checkBox && <CustomIcon style={styles.iconImage} name={iconConstants.IC_VERIFIED} size={20} />}
              <Text
                disabled
                style={[
                  styles.labelStyle,
                  {
                    ...rightBtnTxt,
                  },
                ]}
              >
                {BtnTitle}
              </Text>
            </TouchableOpacity>
          </If>
          <If condition={(isFocusedInput || errorMessageStr) && !isTxtBtnEnable}>
            <MaskedIcon
              style={{ ...maskedIconStyle }}
              // (OnSubmit validate:- remove  value && value.length > 0 &&)
              gradientColor={iconGradientColr()}
              iconName={iconName}
              size={45}
            />
          </If>
        </View>
        {/** Hint Text & error message  (OnSubmit validate:- add || errorMessageStr) */}
        <If condition={!!(value && value.length > 0) || errorMessageStr}>
          <Text
            style={[
              styles.textStyle,
              {
                ...errorTxtStyle,
              },
            ]}
          >
            {!isFocusedInput && errorMessageStr ? errorMessageStr : hintText}
          </Text>
        </If>
        {/** bottom Input Separator //(OnSubmit validate:- remove  value && value.length > 0 &&) */}
        <If condition={!(value && value.length && !isFocusedInput) || errorMessageStr}>
          <View
            style={[
              styles.horizontalLine,
              {
                ...bottomLineStyle,
              },
            ]}
          />
        </If>
      </CardView>
    </View>
  );
};

CustomInputView.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  returnKeyType: PropTypes.string,
  btnColor: PropTypes.string,
  placeholder: PropTypes.string,
  hintText: PropTypes.string,
  autoCapitalize: PropTypes.string,
  indicator: PropTypes.string,
  BtnTitle: PropTypes.string,
  errorMessage: PropTypes.string,
  iconName: PropTypes.string,
  KeyID: PropTypes.string,
  maxLength: PropTypes.number,
  isTxtBtnEnable: PropTypes.bool,
  multiline: PropTypes.bool,
  disabledValue: PropTypes.bool,
  checkBox: PropTypes.bool,
  isEditable: PropTypes.bool,
  errors: PropTypes.object,
  onBlurInput: PropTypes.func,
  onBlur: PropTypes.func,
  inputButtonClick: PropTypes.func,
};

CustomInputView.defaultProps = {
  name: undefined,
  value: undefined,
  returnKeyType: 'next',
  btnColor: Colors.MAROON,
  placeholder: undefined,
  hintText: undefined,
  autoCapitalize: undefined,
  indicator: undefined,
  BtnTitle: undefined,
  errorMessage: undefined,
  iconName: undefined,
  KeyID: undefined,
  maxLength: CONSTANTS.INPUT_TEXT_LENGTH,
  isTxtBtnEnable: false,
  multiline: false,
  disabledValue: true,
  checkBox: false,
  isEditable: true,
  onBlurInput: undefined,
  onBlur: undefined,
  inputButtonClick: undefined,
  errors: null,
};

export default CustomInputView;
