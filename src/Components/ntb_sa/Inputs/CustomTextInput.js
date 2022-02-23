/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Colors, Typography} from 'styles';
// import MaskedIcon from 'components/ntb_sa/common/MaskedIcon';

const styles = StyleSheet.create({
  customIconStyle: {
    marginEnd: 0,
    marginTop: -15,
    position: 'relative',
  },
});

const HorizontalLine = styled(View)`
  opacity: 0.2;
  border-bottom-color: ${Colors.DARK};
  border-bottom-width: 1px;
  margin-top: 8px;
`;
const MainContainer = styled(View)`
  :padding-end: 0px;
`;
const InputContainer = styled(View)`
  flex-direction: row;
`;

const SubHintText = styled(Text)`
  font-size: 10px;
  line-height: 16px;
  font-family: ${Typography.FONT_FAMILY_REGULAR};
  opacity: ${props => (props.isError ? 1 : 0.4)};
  color: ${props => (props.isError ? Colors.ACCENT_2 : props.errorColor)};
`;

const Input = styled(TextInput).attrs({
  type: 'text',
})`
  font-size: 20px;
  font-family: ${Typography.FONT_FAMILY_BOLD};
  padding-right: 1px;
  text-align: left;
  width: 84%;
  opacity: ${props => (props.isValue ? 1 : 0.4)};
`;

const CustomTextInput = props => {
  const {
    textColor,
    fontName = undefined,
    errorColor = Colors.DARK,
    isActive,
    isValue = false,
    isError = false,
    errorMessage,
    handleChangeText,
    ...remainingProps
  } = props;

  return (
    <MainContainer>
      <InputContainer>
        <Input
          {...remainingProps}
          contextMenuHidden
          onSubmitEditing={props.onKeyPress}
          placeholder={`${props.placeholder} `}
          placeholderTextColor={Colors.DARK}
          color={textColor}
          underlineColorAndroid="transparent"
          onChangeText={props.onChangeText}
          isValue={isValue}
        />

        {/* <MaskedIcon
          style={styles.customIconStyle}
          // (OnSubmit validate:- remove  value && value.length > 0 &&)
          gradientColor={
            props.value && props.value.length > 0 && isError
              ? ['#ff4646', '#710000']
              : props.value && props.value.length > 0
              ? ['#ffdd93', '#f6aa00']
              : ['#FFF', '#959595']
          }
          iconName={fontName}
          size={48}
        /> */}
      </InputContainer>
      {/* <SubHintText isError={isError} errorColor={errorColor}>
        {' '}
        {errorMessage}
      </SubHintText> */}
      <HorizontalLine isError={isError}>{}</HorizontalLine>
    </MainContainer>
  );
};

CustomTextInput.propTypes = {
  textColor: PropTypes.string,
  fontName: PropTypes.string,
  errorColor: PropTypes.string,
  isActive: PropTypes.bool,
  isValue: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChangeText: PropTypes.func,
};

CustomTextInput.defaultProps = {
  textColor: Colors.MAROON,
  fontName: undefined,
  errorColor: Colors.DARK,
  isActive: false,
  isError: false,
  isValue: false,
  errorMessage: '',
  handleChangeText: () => {},
};

export default CustomTextInput;
