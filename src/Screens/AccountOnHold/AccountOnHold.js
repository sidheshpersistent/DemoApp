import React, {useEffect, useState} from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Card from '../../components/CardView';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import {CardPadding} from '../CustomerIdentificationDetails/CustomerIdentificationDetailsStyle';
import {AOH_CONSTANTS} from '../../constants/constants';
const iconClose = require('../../assets/iconClose.png');
const AccountOnHold = props => {
  const [referenceNumber, setReferenceNumber] = useState(
    AOH_CONSTANTS.AOH_CONTENT_BODY,
  );

  return (
    <View style={{flex: 1}}>
      <BackgroundImage
        style={{height: 282, marginBottom: 32}}
        imageSource={require('../../assets/gold_1_03.png')}>
        <CloseAndSave>
          <IconClose source={iconClose} />
          <SaveAndExit>Exit</SaveAndExit>
        </CloseAndSave>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/group_9.png')}
            style={successStyle}
          />
          <Text style={CongratsTextStyle}>
            {AOH_CONSTANTS.AOH_YOUR_ACCOUNT}
          </Text>
          <Text style={NameStyle}>{AOH_CONSTANTS.AOH_IS_ON_HOLD}</Text>
        </View>
      </BackgroundImage>

      <ScrollView>
        <Text style={IntroTextStyle}>{AOH_CONSTANTS.AOH_INTRO}</Text>

        <AlignedContainer>
          <CardMargin>
            <Card
              style={{
                elevation: 4,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                padding: 20,
                flexDirection: 'row',
              }}>
              <View style={{flex: 3}}>
                <Text style={AccDetailsTextStyle}>
                  {AOH_CONSTANTS.AOH_CONTENT_HEADER}
                </Text>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={AccDetailsValueStyle}>{referenceNumber}</Text>
              </View>
            </Card>
          </CardMargin>
        </AlignedContainer>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SASuccess');
        }}
        style={Button}>
        <Text style={ButtonText}>{AOH_CONSTANTS.AOH_NAVIGATE_BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 16px;
  margin-horizontal: 16px;
`;

const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;

  color: #25243b;
`;

const IconClose = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #ffffff;
`;

const SaveAndExit = styled.Text`
  font-family: Inter-SemiBold;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #ffffff;
`;
const Congratulations = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const header = {elevation: 0, paddingLeft: 20, alignItems: 'center'};

const ButtonText = {
  fontWeight: '600',
  width: 174,
  height: 24,
  fontFamily: 'Inter',
  fontSize: 17,
  alignSelf: 'center',
  fontStyle: 'normal',
  lineHeight: 24,
  letterSpacing: -0.6,
  textAlign: 'center',
  color: '#ffffff',
};
const Button = {
  alignSelf: 'center',
  marginTop: 20,
  marginBottom: 40,
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  height: 56,
  borderRadius: 27,
  backgroundColor: '#9b1e26',
};
const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};

const CustomerName = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;

  color: #25243b;
  margin-bottom: 5px;
`;

const NameAndAge = styled.Text`
  margin-right: 5px;
`;

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;

const Label = styled.Text`
  font-size: 11px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;
const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};
const successStyle = {
  height: 63,
  width: 63,
};
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;
const CardMargin = styled.View`
  margin-bottom: 20px;
`;

const AccDetailsTextStyle = {
  fontFamily: 'Inter-Bold',
  color: '#686873',
};
const AccDetailsValueStyle = {
  fontFamily: 'Inter-SemiBold',
  color: '#25243b',
  fontWeight: 'bold',
};
const CongratsTextStyle = {
  fontSize: 24,
  fontFamily: 'Inter - Light',
  lineHeight: 32,
  color: '#ffffff',
  marginTop: 12,
};

const IntroTextStyle = {
  fontSize: 16,
  fontFamily: 'Inter-Regular',
  lineHeight: 22,
  letterSpacing: -0.5,
  color: '#686873',
  textAlign: 'center',
  marginVertical: 32,
  marginHorizontal: 100,
};

const NameStyle = {
  fontSize: 24,
  fontFamily: 'Inter - Bold',
  lineHeight: 32,
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: 4,
};
const successTextStyle = {
  fontSize: 16,
  fontFamily: 'Inter',
  lineHeight: 20,
  color: '#ffffff',
};

const confirmationStyle = {
  color: '#25243b',
  fontSize: 14,
  fontFamily: 'Inter',
  lineHeight: 20,
};
export default AccountOnHold;