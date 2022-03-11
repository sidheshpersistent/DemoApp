import React, {useEffect, useState} from 'react';
import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Card from '../../components/CardView';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
const iconClose = require('../../assets/iconClose.png');
const SASuccess = props => {
  const [iseNachMandate, seteNachMandate] = useState(true);
  const [isConfirmed, setConfirmation] = useState(true);
  return (
    <View style={{flex: 1}}>
      <BackgroundImage
        style={{height: 282, marginBottom: 32}}
        imageSource={require('../../assets/headerBackgroundSuccessPage.png')}>
        <CloseAndSave>
          <IconClose source={iconClose} />
          <SaveAndExit>Exit</SaveAndExit>
        </CloseAndSave>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/success.png')}
            style={successStyle}
          />
          <Text>Congratulations</Text>
          <Text>Rohit Babar</Text>
          <Text>Savings account has been successfully opened</Text>
        </View>
      </BackgroundImage>

      <AlignedContainer>
        <Label>ACCOUNT DETAILS</Label>
        <CardMargin>
          <Card
            style={{
              elevation: 4,
              backgroundColor: '#ffffff',
              alignItems: 'center',
              padding: 20,
              flexDirection: 'row',
            }}>
            <View style={{flex: 0.5}}>
              <View>
                <Text style={AccDetailsTextStyle}>Customer ID</Text>
                <Text style={AccDetailsValueStyle}>5000006233</Text>
              </View>

              <View style={{marginTop: 20}}>
                <Text style={AccDetailsTextStyle}>IFSC Code</Text>
                <Text style={AccDetailsValueStyle}>IDFB0040101</Text>
              </View>
            </View>

            <View style={{flex: 0.5}}>
              <View>
                <Text style={AccDetailsTextStyle}>Account No.</Text>
                <Text style={AccDetailsValueStyle}>100345678030</Text>
              </View>

              <View style={{marginTop: 20}}>
                <Text style={AccDetailsTextStyle}>Branch name</Text>
                <Text style={AccDetailsValueStyle}>Powai</Text>
              </View>
            </View>
          </Card>
        </CardMargin>

        <Label>MODE OF PAYMENT</Label>
        <CardMargin></CardMargin>
      </AlignedContainer>
      <FullLengthBox>
        <AlignedContainer>
          <View
            style={{
              height: 60,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ToogleRadioText>Setup eNach mandate?</ToogleRadioText>
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ToogleRadioText>No</ToogleRadioText>

              <Switch
                onValueChange={() => seteNachMandate(!iseNachMandate)}
                value={iseNachMandate}
              />

              <ToogleRadioText>Yes</ToogleRadioText>
            </View>
          </View>
        </AlignedContainer>
      </FullLengthBox>

      <FullLengthBox>
        <AlignedContainer>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => setConfirmation(!isConfirmed)}
              style={checkBoxStyle}>
              {isConfirmed ? (
                <Image
                  source={require('../../assets/checked.png')}
                  style={checkBoxStyle}
                />
              ) : (
                <Image
                  source={require('../../assets/unchecked.png')}
                  style={checkBoxStyle}
                />
              )}
            </TouchableOpacity>
            <Text>
              I confirm that the funds will be transferred from my own account
            </Text>
          </View>
        </AlignedContainer>
      </FullLengthBox>
      <TouchableOpacity onPress={() => alert('hi')} style={Button}>
        <Text style={ButtonText}>Fund Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 12px;
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
};
export default SASuccess;
