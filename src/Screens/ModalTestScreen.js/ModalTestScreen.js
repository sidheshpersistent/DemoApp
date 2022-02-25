import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Popup from '../../components/Popup/Popup';
import styled from 'styled-components/native';
import PopupTextInput from '../../components/Popup/PopupTextInput';
const ModelTestScreen = props => {
  const [isVisible, setIsvisible] = useState(false);
  const [isVisible2, setIsvisible2] = useState(false);
  const [number, setNumber] = useState('');

  //dzc
  const icon = require('../../assets/info.png');
  const alertIcon = require('../../assets/alertIcon.png');
  const HEADING = 'When is it mandatory to enter PAN?';
  const PAN_INCOME_CHECK = [
    'Customer is below 60 years of age and gross annual income is above ₹2.5 lacs',
    'Customer is between 60-79 years of age and gross annual income is above ₹3 lacs',
    'Customer is aged 80 years or above and gross annual income is above ₹5 lacs',
  ];

  const buttonPress = () => {
    console.log('i am pressed');
    setIsvisible(false);
  };

  const buttonPress2 = () => {
    console.log(
      'i am text input and popup and this is the phone number',
      number,
    );

    setIsvisible2(false);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => setIsvisible(true)}>
        <Text style={{fontSize: 40}}>PAN SALARY CHECK</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsvisible2(true)}>
        <Text style={{fontSize: 40}}>Popup For Mobile Input</Text>
      </TouchableOpacity>

      {/** PAN SALARY CHECK */}
      <Popup
        animationIn="bounceIn"
        popupIcon={icon}
        isVisible={isVisible}
        Heading={HEADING}
        ButtonText="Ok"
        buttonPress={() => buttonPress()}
        component={PAN_INCOME_CHECK.map(item => (
          <ComponentContainer key={item}>
            <Bullet>•</Bullet>
            <ComponentText>{item}</ComponentText>
          </ComponentContainer>
        ))}
      />

      {/* Popup For Mobile Input */}
      
      <PopupTextInput
        popupType="mobile"
        animationIn="bounceIn"
        popupIcon={alertIcon}
        isVisible={isVisible2}
        Heading="Please provide another mobile number to proceed further"
        popupInfo="The mobile number entered already exists in the Bank under the Customer ID: *****6471 Name: Vicky Patilas fetched from CBS/MDM."
        TextInputPlaceholder=""
        ButtonText="Submit"
        TextInputvalue={number}
        onchangeText={setNumber}
        buttonPress={() => buttonPress2()}
      />
    </View>
  );
};

const ComponentContainer = styled.View`
  flex-direction: row;
  width: 416px;
`;

const Bullet = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #25243b;
`;
const ComponentText = styled.Text`
  padding-left: 10px;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;

  color: #25243b;
`;

export default ModelTestScreen;
