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
import Card from '../../components/CardView';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
const iconClose = require('../../assets/iconClose.png');
const SASuccess = props => {
  return (
    <BackgroundImage
      style={{height: 282}}
      imageSource={require('../../assets/headerBackgroundSuccessPage.png')}>
      <CloseAndSave>
        <IconClose source={iconClose} />
        <SaveAndExit>Exit</SaveAndExit>
      </CloseAndSave>

      <Congratulations>
        <View></View>
      </Congratulations>
    </BackgroundImage>
  );
};

const CloseAndSave = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 12px;
  margin-horizontal: 16px;
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
`;

const header = {elevation: 0, paddingLeft: 20, alignItems: 'center'};

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
export default SASuccess;
