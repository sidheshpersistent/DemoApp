import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
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
    </BackgroundImage>
  );
};

export default CustomerProfile;

const  HeaderContainer = styled(UpperBoxContainer)`
  height: 158px;
  padding: 12px 15px 26px 12px;
`;
const  CloseAndSave = styled.View`
 
`;
const header = {elevation: 0, padding: 0, marginTop: 15,alignItems:"center",backgroundColor:"yellow"};
const image = {
  width: 48,
  height: 48,
  borderRadius: 24,
};
