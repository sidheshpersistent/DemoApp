import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  
  
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UpperBoxContainer from '../../components/UpperBoxContainer/UpperBoxContainer';
import ProfileHeaderContainer from 'components/ProfileHeaderContainer';

const CustomerProfile = () => {
  return (
    <BackgroundImage>

      <HeaderContainer>
        <CloseAndSave>
        <Text>ad</Text>
        <SaveAndExit>Save & Exit</SaveAndExit>
        </CloseAndSave>

        <ProfileHeaderContainer
          style={header}
          maxContainerHeight={200}
          leftView={
            <View >
              <Image
                style={image}
                source={require('../Dashboard/testImg.jpg')}
              />
            </View>
          }
          rightView={<View style={{justifyContent:"center",alignItems:"center"}}>
              <Text >Astha Patil</Text>
              <Text >28 | Female</Text>
          </View>}
        />
      </HeaderContainer>

      <PleaseEnter>Please enter the customer’s personal details</PleaseEnter>
    
          <Conatainer>

          </Conatainer>
          
    </BackgroundImage>
  );
};

export default CustomerProfile;

const  HeaderContainer = styled(UpperBoxContainer)`
  height: 158px;
  padding: 12px 15px 26px 12px;
  margin-bottom:38px
`;
const  CloseAndSave = styled.View`
 flex-direction:row;
 justify-content:space-between
`;

const SaveAndExit = styled.Text`
  width: 70px;
  height: 20px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-align: right;
  color: #9b1e26;
`
const Conatainer=styled.View`
    background-color:white;
    flex:1

`
const PleaseEnter = styled.Text`
margin-bottom:40px;
  width: 406px;
  height: 26px;
  font-family: Inter;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: -0.5px;
  text-align: center;
  color: #ffffff;
`
const header = {elevation: 0, padding: 0, marginTop: 15,alignItems:"center"}
const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};
