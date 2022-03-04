import React, {useEffect, useState} from 'react';
import Card from '../../components/CardView';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import {ScrollView} from 'react-native-gesture-handler';

import TimeLineView from '../../components/TimeLineView/TimeLineView';
import PersonalDetail from './personalDetail/PersonalDetail';
import OccupationDetails from './OccupationDetails/OccupationDetails'
const iconClose = require('../../assets/iconClose.png');

const CustomerProfile = props => {
  return (
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
        <AlignedContainer>
          <View
            style={{
              position: 'absolute',
              top: -30,
              height: 100,
              width: '100%',
              alignSelf: 'center',
            }}>
            <TimeLineView></TimeLineView>
          </View>
        </AlignedContainer>
           <ScrollView style={{flex: 1, marginTop: 80, paddingTop: 20}}> 
           {/**TODO: below we will conditinally render**/}


          {/* <PersonalDetail /> */}
          <OccupationDetails></OccupationDetails>


        </ScrollView>
      </LowerConatainer>
    </BackgroundImage>
  );
};

export default CustomerProfile;

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
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
