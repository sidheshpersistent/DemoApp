import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {View} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';

import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import ProductCard from '../Components/ProductCard';
import PersonalizedButton from '../Components/PersonalizedButton';
const InstantBanking = props => {
  return (
    <View>
      <Label>RECOMMENDED PRODUCT</Label>
      <ProductCard
        onPressCard={() => {
          if (!props.isEmulator) {
            alert('You are on emulator');
          } else {
            props.scanNowClicked();
          }
        }}
        isQREnable={true}
      />
      <LabelCenter>OR</LabelCenter>
      <CardMargin>
        <Card style={{elevation: 4}}>
          <CardPadding>
            <CustomTextInput
              isActive={false}
              isValue={false}
              placeholder="Enter Account number"
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
const LabelCenter = styled.Text`
  font-family: Inter;
  font-weight: bold;
  color: #25243b;
  margin-bottom: 16px;
  text-align: center;
  font-size: 16px;
`;
const CardMargin = styled.View`
  margin-bottom: 20px;
`;
const CardPadding = styled.View`
  padding: 10px;
`;
export default InstantBanking;
