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
              source={popupType=="mobile"?require('../../assets/mobileDedupe.png'):popupType=="mail"?require('../../assets/panCheck.png'):null}
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

                <TextInput
                  keyboardType="numeric"
                  style={{fontSize: 20, width: 380}}
                  placeholder={TextInputPlaceholder}
                  value={TextInputvalue}
                  onChangeText={onchangeText}
                />
              </View>

              <Text
                style={{
                  width: 201,
                  height: 13,
                  fontFamily: 'Inter',
                  fontSize: 11,
                  fontWeight: '500',
                  fontStyle: 'normal',
                  lineHeight: 13,
                  letterSpacing: -0.3,
                  color: '#d60b26',
                  marginBottom: 12,
                }}>
                Please renter mobile number to proceed
              </Text>
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
