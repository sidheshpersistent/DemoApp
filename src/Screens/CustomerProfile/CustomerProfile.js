import React, {useEffect, useState} from 'react';
import Card from '../../components/CardView';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import {ScrollView} from 'react-native-gesture-handler';

import TimeLineView from '../../components/TimeLineView/TimeLineView';
import PersonalDetailsEnabled from '../../components/TimeLineView/images/personalDetailsEnabled.png';
import OccupationDetailsEnabled from '../../components/TimeLineView/images/occupationDetailsEnabled.png';
import OccupationDetailsDisabled from '../../components/TimeLineView/images/occupationDetailsDisabled.png';
import BankingPreferenceEnabled from '../../components/TimeLineView/images/bankingPreferenceEnabled.png';
import BankingPreferenceDisabled from '../../components/TimeLineView/images/bankingPreferenceDisabled.png';
import CustomerConsentEnabled from '../../components/TimeLineView/images/customerConsentEnabled.png';
import CustomerConsentDisabled from '../../components/TimeLineView/images/customerConsentDisabled.png';
import PersonalDetail from './personalDetail/PersonalDetail';
import OccupationDetails from './OccupationDetails/OccupationDetails';
import CustomerConsent from './CustomerConsent/CustomerConsent';
import BankingPreferences from './BankingPreferences/BankingPreferences'
const iconClose = require('../../assets/iconClose.png');
const data = [
  {
    ID: 1,
    type: 'personalDetail',
    img: 'source',
    text: 'Personal Details',
    isSelected: true,
    iconEnabled: PersonalDetailsEnabled,
    iconDisabled: PersonalDetailsEnabled,
  },
  {
    ID: 2,
    type: 'occupation',
    img: 'source',
    text: 'Occupational Details',
    isSelected: false,
    iconEnabled: OccupationDetailsEnabled,
    iconDisabled: OccupationDetailsDisabled,
  },
  {
    ID: 3,
    img: 'source',
    type: 'banking',
    text: 'Banking Preference',
    isSelected: false,
    iconEnabled: BankingPreferenceEnabled,
    iconDisabled: BankingPreferenceDisabled,
  },
  {
    ID: 4,
    img: 'source',
    type: 'consent',
    text: 'Customer Consent',
    isSelected: false,
    iconEnabled: CustomerConsentEnabled,
    iconDisabled: CustomerConsentDisabled,
  },
];

const CustomerProfile = props => {
  const [screen, setScreen] = useState(data);

  const SelectPage = () => {
    let selectedIndex = screen.reduce((acc, curr, index) => {
      if (curr.isSelected) {
        acc = index;
        return acc;
      } else {
        return acc;
      }
    });
    const nextPage = type => {
      let newScreen = screen.map(element =>
        element.type == type ? {...element, isSelected: true} : element,
      );
      setScreen(newScreen);
    };
    const prevPage = type => {
      let newScreen = screen.map(element =>
        element.type == type ? {...element, isSelected: false} : element,
      );
      setScreen(newScreen);
    };

    switch (selectedIndex) {
      case 0:
        return <PersonalDetail next={() => nextPage('occupation')} />;
      case 1:
        return (
          <OccupationDetails
            next={() => nextPage('banking')}
            prev={() => prevPage('occupation')}
          />
        );
      case 2:
        return (
          <BankingPreferences
            next={() => nextPage('occupation')}
            prev={() => prevPage('BankingPreferences')}
          />
        );
      case 3:
        return <CustomerConsent />;
      default:
        return <PersonalDetail next={() => nextPage('occupation')} />;
    }
  };

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
              position:"absolute",
              top:-35,
              height: 100,
              width: '100%',
              alignSelf: 'center',
            }}>
            <TimeLineView data={screen}></TimeLineView>
          </View>
        </AlignedContainer>
        <ScrollView style={{flex: 1, marginTop: 80, paddingTop: 20}}>
          {/**TODO: below we will conditinally render**/}

          <SelectPage />
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
