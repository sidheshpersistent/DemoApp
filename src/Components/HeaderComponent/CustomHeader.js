/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Colors, Typography} from 'styles';

const styles = StyleSheet.create({
  customIconStyle: {
    marginEnd: 0,
    marginTop: -15,
    position: 'relative',
  },
});

const MainContainer = styled(View)`
  :padding-end: 0px;
`;

const CustomHeader = props => {
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

export default CustomHeader;
