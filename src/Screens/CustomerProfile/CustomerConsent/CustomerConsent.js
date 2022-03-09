import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Card from '../../../components/CardView';

const CustomerConsent = props => {
  const {next, prev} = props;
  const forwardArrowPress = () => {
    next();
  };
  const backArrowPress = () => {
    prev();
  };

  return (
    <View style={{flex: 1}}>
      <AlignedContainer>
        <Label>CUSTOMER SIGNATURE</Label>
        <CardMargin>
          <Card
            style={{
              elevation: 4,
              backgroundColor: '#d8d8d8',
              alignItems: 'center',
              paddingVertical: 36,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/upload.png')}
                style={uploadIconStyle}
              />
              <Text style={uploadSignatureText}>Upload Signature Image</Text>
            </View>
          </Card>
        </CardMargin>

        <Label>CUSTOMER PAN CARD</Label>
        <CardMargin>
          <Card
            style={{
              elevation: 4,
              backgroundColor: '#d8d8d8',
              alignItems: 'center',
              paddingVertical: 36,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/upload.png')}
                style={uploadIconStyle}
              />
              <Text style={uploadSignatureText}>Upload Original PAN Image</Text>
            </View>
          </Card>
        </CardMargin>
      </AlignedContainer>

      <FullLengthBox>
        <AlignedContainer>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image
              source={require('../../../assets/upload.png')}
              style={checkBoxStyle}
            />
            <Text style={agreeText}>
              I agree to all{' '}
              <Text style={termsNconditionStyle}>Terms & Conditions</Text> of
              IDFC FIRST Bank and
              <Text style={termsNconditionStyle}> TransUnion CIBIL</Text> and
              authorize IDFC FIRST Bank to receive my CIBIL Score and Report.
            </Text>
          </View>
        </AlignedContainer>
      </FullLengthBox>

      <FullLengthBox>
        <AlignedContainer>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image
              source={require('../../../assets/upload.png')}
              style={checkBoxStyle}
            />
            <Text style={agreeText}>
              I give consent for my Aadhaar authentication to open a new bank
              account
            </Text>
          </View>
        </AlignedContainer>
      </FullLengthBox>

      <AlignedContainer
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 38,
          flexDirection: 'row',
        }}>
        <BackArrowButton onPress={() => backArrowPress()}>
          <Image
            source={require('../../../assets/arrow_back.png')}
            style={RightArrowImage}
          />
        </BackArrowButton>
        {true ? (
          <RightArrowButtonActive onPress={() => forwardArrowPress()}>
            <Image
              source={require('../../../assets/RightArrowWhite.png')}
              style={RightArrowImage}
            />
          </RightArrowButtonActive>
        ) : (
          <RightArrowButton>
            <Image
              source={require('../../../assets/RightArrow.png')}
              style={RightArrowImage}
            />
          </RightArrowButton>
        )}
      </AlignedContainer>
    </View>
  );
};

const Label = styled.Text`
  font-size: 11px;
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;
const termsNconditionStyle = {
  color: '#9b1e26',
  fontSize: 14,
};
const agreeText = {
  color: '#25243b',
  lineHeight: 20,
};
const RightArrowImage = {
  width: 40,
  height: 40,
};
const BackArrowButton = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;
const uploadIconStyle = {
  width: 24,
  height: 24,
  marginRight: 2,
};

const checkBoxStyle = {
  width: 24,
  height: 24,
  marginRight: 12,
};

const uploadSignatureText = {
  color: '#9b1e26',
};
const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;

const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export default CustomerConsent;
