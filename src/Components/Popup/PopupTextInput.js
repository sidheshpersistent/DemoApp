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

  console.log(popupType);

  // NOTE: valid popup types are= mobile,email,pan
  return (
    <Popup
      style={{backgroundColor: '#f6f6f6'}}
      animationIn={animationIn}
      popupIcon={popupIcon}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <View style={{paddingBottom: 20}}>
          <View style={{width: 416, marginBottom: 34}}>
            <Text
              style={{
                width: 416,
                height: 72,
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 24,

                color: '#25243b',
              }}>
              {popupInfo}
            </Text>
          </View>

          <View
            style={{
              width: 416,
              height: 100,

              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 8,
              backgroundColor: 'white',
              elevation: 3,
              shadowColor: '#d60b26',
            }}>
            <Image
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                right: 16,
                top: -15,
              }}
              source={
                popupType == 'mobile'
                  ? require('../../assets/mobileDedupe.png')
                  : popupType == 'pan'
                  ? require('../../assets/panCheck.png')
                  : require('../../assets/emailCheck.png')
              }
            />
            <View
              style={{
                borderBottomColor: '#d60b26',
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  overflow: 'hidden',
                  alignItems: 'center',
                }}>
                {popupType == 'mobile' ? (
                  <Text
                    style={{
                      width: 46,
                      height: 26,
                      fontFamily: 'Inter',
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontStyle: 'normal',
                      lineHeight: 26,
                      letterSpacing: -0.5,
                      color: '#9b1e26',
                    }}>
                    +91
                  </Text>
                ) : null}

                <TextInput
                  keyboardType={
                    popupType == 'mobile'
                      ? 'numeric'
                      : popupType == 'pan'
                      ? 'default'
                      : 'email-address'
                  }
                  style={{fontSize: 20, width: 380}}
                  placeholder={TextInputPlaceholder}
                  value={TextInputvalue}
                  onChangeText={onchangeText}
                />
              </View>

              {popupType == 'mobile' ? (
                <RedText>Please renter mobile number to proceed</RedText>
              ) : popupType == 'mail' ? (
                <RedText>Please re-enter email address to proceed</RedText>
              ) : (
                <RedText>Permanent Account Number (PAN)</RedText>
              )}
            </View>
          </View>
        </View>
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
