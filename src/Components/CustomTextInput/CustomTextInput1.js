/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {TextInput} from 'react-native';

import {Colors} from '../../Utils';
// import { TextInput } from '@idfc/ccl-mobile/lib/module/v2';

const CustomTextInput = props => {
  const {
    onChange,
    style,
    labelStyle,
    onChangeText,
    label,
    keyboardType,
    inputBorderProps,
    textInputProps,
    textProps,
    value,
    placeholder,
    isActive,
    isValue,
    errorMessage,
    isError,
    errorColor,
    textColor,
    testID,
    onBlur,
    onFocus,
    suffix,
    disabled,
    reference,
    autofocus,
  } = props;

  textInputProps
    ? (textInputProps.maxLength = textInputProps.maxLength
        ? textInputProps.maxLength
        : 30)
    : null;

  return (
    <TextInput
      ref={reference}
      autofocus={autofocus}
      onChange={onChange}
      disabled={disabled}
      testID={testID}
      style={style}
      suffix={suffix}
      onBlur={onBlur}
      onFocus={onFocus}
      onChangeText={onChangeText}
      label={label}
      labelStyle={labelStyle}
      keyboardType={keyboardType}
      inputBorderProps={inputBorderProps}
      textInputProps={textInputProps}
      textProps={textProps}
      value={value}
      placeholder={placeholder}
      isActive={isActive}
      isValue={isValue}
      validationStatus={isError}
      validationMessage={errorMessage}
      errorColor={errorColor || Colors.PRIMARY_COLOR}
      textColor={textColor}
    />
  );
};

export default CustomTextInput;
