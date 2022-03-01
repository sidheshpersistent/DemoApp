import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import Popup from '../../components/Popup/Popup';

const PopupTextInput = props => {
  const {
    popupType,
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    animationIn,
    popupIcon,
    TextInputPlaceholder,
    TextInputvalue,
    onchangeText,
  } = props;


  const SideIconSource =
    popupType == 'mobile'
      ? require('../../assets/mobileDedupe.png')
      : popupType == 'pan'
      ? require('../../assets/panCheck.png')
      : require('../../assets/emailCheck.png');


  const keyboardType =
    popupType == 'mobile'
      ? 'numeric'
      : popupType == 'pan'
      ? 'default'
      : 'email-address';
  
  const ERROR_TEXT={
    MOBILE:"Please renter mobile number to proceed",
    PAN:"Permanent Account Number (PAN)",
    EMAIL:"Please re-enter email address to proceed",
  }

  // NOTE: valid popup types are= mobile,email,pan
  return (
    <Popup
      style={{backgroundColor: '#f6f6f6'}}
      animationIn={animationIn}
      popupIcon={popupIcon}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{marginBottom: 34}}>
            <PopupText>{popupInfo}</PopupText>
          </View>

          <WhiteRectangleBox>
            <SideIcon source={SideIconSource} />
            <InputContainer>
              <TextInputStyle>
                {popupType == 'mobile' ? (
                  <CountryCodeStyle>+91</CountryCodeStyle>
                ) : null}

                <TextInput
                  keyboardType={keyboardType}
                  style={{fontSize: 20, width: '100%'}}
                  placeholder={TextInputPlaceholder}
                  value={TextInputvalue}
                  onChangeText={onchangeText}
                />
              </TextInputStyle>

              {popupType == 'mobile' ? (
                <RedText>{ERROR_TEXT.MOBILE}</RedText>
              ) : popupType == 'email' ? (
                <RedText>{ERROR_TEXT.EMAIL}</RedText>
              ) : (
                <RedText>{ERROR_TEXT.PAN}</RedText>
              )}
            </InputContainer>
          </WhiteRectangleBox>
        </BodyContainer>
      }
      ButtonText={ButtonText}
      buttonPress={() => buttonPress()}
    />
  );
};

export default PopupTextInput;

const RedText = styled.Text`


height: 13px;
font-family: Inter;
font-size: 10px;
font-weight: 500,
font-style: normal;
line-height: 13px;
letter-spacing: -0.3px;
color: #d60b26;
margin-bottom: 12px;
`;

const PopupText = styled.Text`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;
  color: #25243b;
`;

const WhiteRectangleBox = styled.View`
  width: 100%;
  height: 100px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  background-color: white;
  elevation: 3;
  shadow-color: #d60b26;
`;

const SideIcon = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: -15px;
`;
const InputContainer = styled.View`
  border-bottom-color: #d60b26;
  border-bottom-width: 1px;
`;
const BodyContainer = styled.View`
  padding-bottom: 20px;
`;

const TextInputStyle = styled.View`
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;

const CountryCodeStyle = styled.Text`
  width: 46px;

  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: #9b1e26;
`;
