import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {View, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';

import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import ProductCard from '../Components/ProductCard';
import PersonalizedButton from '../Components/PersonalizedButton';
import PersonalizedBanking from './PersonalizedBanking';
import InstantBanking from './InstantBanking';
const BankingPreferences = props => {
  const {next, prev} = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const forwardArrowPress = () => {
    next();
  };
  const backArrowPress = () => {
    prev();
  };

  
  return (
    <View>
      <AlignedContainer>
        <PersonalizedButton
          selectedButtonIndex={index => {
            setActiveIndex(index);
          }}
        />
        <ScrollView>
          {activeIndex === 0 ? <PersonalizedBanking /> : <InstantBanking />}
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
        </ScrollView>
      </AlignedContainer>
    </View>
  );
};
const Label = styled.Text`
  font-family: Inter;
  font-weight: bold;
  font-style: normal;
  line-height: 13px;
  color: #686873;
  margin-bottom: 16px;
`;

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

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export default BankingPreferences;
