import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Popup from '../../components/Popup/Popup';
import styled from 'styled-components/native';
import PopupTextInput from '../../components/Popup/PopupTextInput';
const icon = require('../../assets/info.png');
const alertIcon = require('../../assets/alertIcon.png');
const HEADING = {
  PAN_MANDATORY: 'When is it mandatory to enter PAN?',
  PAN_CHECK: 'Sorry!  Customer must provide PAN to open account.',
  MOBILE_CHECK: 'Please provide another mobile number to proceed further',
  EMAIL_CHECK: 'Please provide another email address to proceed further',
};

var PAN_INCOME_CHECK = [
  'Customer is below 60 years of age and gross annual income is above ₹2.5 lacs',
  'Customer is between 60-79 years of age and gross annual income is above ₹3 lacs',
  'Customer is aged 80 years or above and gross annual income is above ₹5 lacs',
];

{/** TODO: popup info to be deleted later as it would come from backend*/}
const POPUP_INFO = {
 
  PAN_CHECK_INFO: 'It is mandatory for customers below 60 years of age to provide PAN if their income is above ₹2.5Lacs',
  MOBILE_CHECK_INFO: "The mobile number entered already exists in the Bank under the Customer ID: *****6471 Name: Vicky Patilas fetched from CBS/MDM.",
  EMAIL_CHECK_INFO: 'The email address entered already exists in the Ban under the Customer ID: *****6471 and Name: Vicky Patil as fetched from CBS/MDM.',
};


const ModelTestScreen = props => {
  const [isVisible, setIsvisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [pan, setPan] = useState(false);
  const [email, setEmail] = useState(false);
  const [number, setNumber] = useState('');
  const [panIncomeInfo, setPanIncomeInfo] = useState(PAN_INCOME_CHECK);

  const buttonPress = () => {
    setIsvisible(false);
  };

  const buttonPress2 = () => {
    setMobile(false);
  };
  const buttonPress3 = () => {
    setPan(false);
  };
  const buttonPress4 = () => {
    setEmail(false);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => setIsvisible(true)}>
        <Text style={{fontSize: 40}}>PAN SALARY CHECK</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMobile(true)}>
        <Text style={{fontSize: 40}}>Popup For Mobile Input</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPan(true)}>
        <Text style={{fontSize: 40}}>Popup For PAN Input</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setEmail(true)}>
        <Text style={{fontSize: 40}}>Popup For email Input</Text>
      </TouchableOpacity>

      {/** PAN SALARY CHECK */}

      <Popup
        animationIn="bounceIn"
        popupIcon={icon}
        isVisible={isVisible}
        Heading={HEADING.PAN_MANDATORY}
        ButtonText="Ok"
        buttonPress={() => buttonPress()}
        component={panIncomeInfo.map(item => (
          <ComponentContainer key={item}>
            <Bullet>•</Bullet>
            <ComponentText>{item}</ComponentText>
          </ComponentContainer>
        ))}
      />

      {/* Popup For Mobile Input */}
      {mobile?<PopupTextInput
        popupType="mobile"
        animationIn="bounceIn"
        popupIcon={alertIcon}
        isVisible={mobile}
        Heading={HEADING.MOBILE_CHECK} // Heading is assumed to be taken from constants
        popupInfo={POPUP_INFO.MOBILE_CHECK_INFO}
        TextInputPlaceholder=""
        ButtonText="Submit"
        TextInputvalue={number}
        onchangeText={setNumber}
        buttonPress={() => buttonPress2()}
      />:null}

      {
        pan?<PopupTextInput
        popupType="pan"
        animationIn="bounceIn"
        popupIcon={alertIcon}
        isVisible={pan}
        Heading={HEADING.PAN_CHECK} // Heading is assumed to be taken from constants
        popupInfo={POPUP_INFO.PAN_CHECK_INFO}
        TextInputPlaceholder=""
        ButtonText="Submit"
        TextInputvalue={number}
        onchangeText={setNumber}
        buttonPress={() => buttonPress3()}
      />:null
      }
      {
        email?<PopupTextInput
        popupType="email"
        animationIn="bounceIn"
        popupIcon={alertIcon}
        isVisible={email}
        Heading={HEADING.EMAIL_CHECK} // Heading is assumed to be taken from constants
        popupInfo={POPUP_INFO.EMAIL_CHECK_INFO}
        TextInputPlaceholder=""
        ButtonText="Submit"
        TextInputvalue={number}
        onchangeText={setNumber}
        buttonPress={() => buttonPress4()}
      />:null
      }
      
      
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
