import React, {useEffect, useState} from 'react';
import Card from '../../components/CardView';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import {ScrollView} from 'react-native-gesture-handler';
const iconClose = require('../../assets/iconClose.png');

const CustomerProfile = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <BackgroundImage>
        <HeaderContainer>
          <CloseAndSave>
            <IconClose source={iconClose} />
            <SaveAndExit>Save & Exit</SaveAndExit>
          </CloseAndSave>
          <ProfileHeaderContainer
            style={header}
            maxContainerHeight={200}
            leftView={
              <View>
                <Image
                  style={image}
                  source={require('../Dashboard/testImg.jpg')}
                />
              </View>
            }
            rightView={
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: 3,
                  marginLeft: 13,
                }}>
                <CustomerName>Astha Patil</CustomerName>
                <View style={{flexDirection: 'row'}}>
                  <NameAndAge>28</NameAndAge>
                  <NameAndAge>|</NameAndAge>
                  <NameAndAge>Female</NameAndAge>
                </View>
              </View>
            }
          />
        </HeaderContainer>
        <PleaseEnter>
          <Text style={{fontWeight: 'normal'}}>Please enter the </Text>
          customer’s personal details
        </PleaseEnter>
        <LowerConatainer>
          {/**TODO: marginTop:71 has to be deleted after applying steppers on screen*/}
          <AlignedContainer style={{marginTop: 71}}>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Salary"
                    keyboardType="numeric"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                
                    isActive={false}
                    isValue={false}
                    placeholder="Salary"
                    keyboardType="numeric"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    maxLength={10}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>

            <Label>Communication Address</Label>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer
              style={{
                paddingBottom: 26,
                paddingTop: 26,
                justifyContent: 'space-between',
                height: 158, // TODO: this height can be deleted later
              }}>
              <View>
                
                <ToogleRadioText>Same as adhar</ToogleRadioText>
              </View>
              <View>
                <ToogleRadioText>other address</ToogleRadioText>
              </View>
            </AlignedContainer>
          </FullLengthBox>
          <FullLengthBox>
            <AlignedContainer>
              <View
                style={{
                  height: 60,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ToogleRadioText>Do You Want a nominee</ToogleRadioText>
                <Text>Toggle Button</Text>
              </View>
            </AlignedContainer>
          </FullLengthBox>
          <AlignedContainer>
            <Label>Nominee Details</Label>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer
              style={{
                paddingBottom: 26,
                paddingTop: 26,
                justifyContent: 'space-between',
                height: 140, // TODO: this height can be deleted later
              }}>
              <View>
                <ToogleRadioText>Same as adhar</ToogleRadioText>
              </View>
              <View>
                <ToogleRadioText>other address</ToogleRadioText>
              </View>
            </AlignedContainer>
          </FullLengthBox>
        </LowerConatainer>
      </BackgroundImage>
    </ScrollView>
  );
};

export default CustomerProfile;

const ToogleRadioText=styled.Text`

  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;

  color: #25243b;

`

const Label = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;

const CardMargin = styled.View`
  margin-bottom: 20px;
`;
const CardPadding = styled.View`
  padding: 10px;
`;
const IconClose = styled.Image`
  width: 24px;
  height: 24px;
`;

const HeaderContainer = styled(UpperBoxContainer)`
  height: 152px;
  padding: 12px 15px 26px 12px;
  margin-bottom: 38px;
`;
const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const SaveAndExit = styled.Text`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: right;
  color: #9b1e26;
`;
const LowerConatainer = styled.View`
  background-color: #f6f6f6;
  flex: 1;
`;
const PleaseEnter = styled.Text`
align-self:center
  margin-bottom: 40px;
  width: 406px;
  height: 26px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
 
  text-align: center;
  color: #ffffff;
`;

const NameAndAge = styled.Text`
  margin-right: 5px;
`;
const CustomerName = styled.Text`
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 26px;

  color: #25243b;
  margin-bottom: 5px;
`;
const header = {elevation: 0, paddingLeft: 20, alignItems: 'center'};
const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};
