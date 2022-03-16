import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Card from '../../components/CardView';

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import {CardPadding} from '../CustomerIdentificationDetails/CustomerIdentificationDetailsStyle';
import {PAO_CONSTANTS} from '../../constants/constants';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';

const iconClose = require('../../assets/iconClose.png');

const Item = ({item}) => (
  <Card
    style={{
      flex: 1,
      margin: 8,
      borderWidth: 0,
      marginHorizontal: 57,
    }}>
    <ImageBackground
      borderRadius={8}
      source={item.backgroundImage}
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={item.itemImage}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 92,
            width: 68,
          }}
          resizeMode={'center'}
        />
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={titleText}>{item.title}</Text>
          <Text style={introText}>{item?.intro_1}</Text>
          <Text style={introText}>{item?.intro_2}</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={() => {}} style={ButtonKM}>
              <Text style={ButtonKMText}>{item.button_1}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={() => {}} style={ButtonAO}>
              <Text style={ButtonAOText}>{item.button_2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  </Card>
);

const PreApprovedOffers = props => {
  const [optionsList, setOptionsList] = useState([
    {
      title: 'FIRST Wealth Credit Card',
      backgroundImage: require('../../assets/background_1.png'),
      itemImage: require('../../assets/icon_1.png'),
      intro_1: 'With Visa Infinite Card',
      intro_2: 'Avg. Monthly Balance ₹25,000',
      button_1: 'Know More',
      button_2: 'Avail Offer',
    },
    {
      title: 'Cover your hospitalisation expenses at just ₹2200/yr',
      backgroundImage: require('../../assets/background_2.png'),
      itemImage: require('../../assets/icon_2.png'),
      intro_1: '',
      intro_2: '',
      button_1: 'Know More',
      button_2: 'Avail Offer',
    },
    {
      title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana',
      backgroundImage: require('../../assets/background_3.png'),
      itemImage: require('../../assets/icon_3.png'),
      intro_1: '',
      intro_2: '',
      button_1: 'Know More',
      button_2: 'Avail Offer',
    },
    {
      title: 'Pradhan Mantri Suraksha Bima Yojana',
      backgroundImage: require('../../assets/background_4.png'),
      itemImage: require('../../assets/icon_4.png'),
      intro_1: '',
      intro_2: '',
      button_1: 'Know More',
      button_2: 'Avail Offer',
    },
  ]);

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <HeaderContainer>
        <CloseAndSave>
          <IconClose source={iconClose} />
          <SaveAndExit>Exit</SaveAndExit>
        </CloseAndSave>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 57,
            marginRight: 152,
          }}>
          <Text style={CongratsTextStyle}>{PAO_CONSTANTS.PAO_INTRO}</Text>
        </View>
      </HeaderContainer>

      <View>
        <FlatList
          data={optionsList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Dashboard');
        }}
        style={Button}>
        <Text style={ButtonText}>{PAO_CONSTANTS.PAO_NAVIGATE_BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
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
  color: #9b1e26;
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

const titleText = {
  fontWeight: '600',
  fontFamily: 'Inter-SemiBold',
  fontSize: 24,
  lineHeight: 32,
  letterSpacing: -0.6,
  textAlign: 'left',
  color: '#ffffff',
};

const introText = {
  fontFamily: 'Inter-Regular',
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: -0.5,
  textAlign: 'left',
  color: '#dbdbde',
};

const ButtonKM = {
  marginTop: 20,
  marginBottom: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: 99,
  height: 36,
  borderRadius: 27,
  borderWidth: 0.8,
  borderColor: '#c9c9c9',
};

const ButtonAO = {
  marginTop: 20,
  marginBottom: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: 99,
  height: 36,
  borderRadius: 27,
  borderWidth: 0.8,
  borderColor: '#ffffff',
  backgroundColor: '#ffffff',
};

const ButtonKMText = {
  fontFamily: 'Inter-SemiBold',
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#ffffff',
};

const ButtonAOText = {
  fontFamily: 'Inter-SemiBold',
  fontSize: 12,
  lineHeight: 18,
  letterSpacing: 0,
  textAlign: 'center',
  color: '#9b1e26',
};

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
  fontSize: 20,
  fontFamily: 'Inter-SemiBold',
  lineHeight: 26,
  color: '#25243b',
  letterSpacing: -0.5,
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

const HeaderContainer = styled(UpperBoxContainer)`
  height: 156px;
  padding: 12px 15px 26px 12px;
  margin-bottom: 38px;
`;
export default PreApprovedOffers;
