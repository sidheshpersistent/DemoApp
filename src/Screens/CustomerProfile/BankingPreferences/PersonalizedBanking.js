import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {View, Image, Text, Pressable, FlatList} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';

import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import ProductCard from '../Components/ProductCard';
import PersonalizedButton from '../Components/PersonalizedButton';
import {CPD_CONSTANTS} from '../../../constants/constants';

const Item = ({title}) => (
  <Card
    style={{
      flex: 0.5,
      padding: 16,
      margin: 8,
      borderWidth: 1,
      borderColor: '#9b1e26',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
      }}>
      <Image
        source={require('../../../assets/checkbox_selected.png')}
        style={checkBoxImage}
      />
      <Image
        source={require('../../../assets/checkbox_selected.png')}
        style={checkBoxImage}
      />
    </View>
    <Text style={{fontSize: 12, fontWeight: '700', padding: 8}}>{title}</Text>
  </Card>
);

const PersonalizedBanking = props => {
  const [optionsList, setOptionsList] = useState([
    {
      title: 'Chequebook',
      isSelected: false,
    },
    {
      title: 'Debit Card',
      isSelected: true,
    },
  ]);

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View>
      <Label>RECOMMENDED PRODUCT</Label>
      <ProductCard
        onPressCard={() => {
          alert('card press');
        }}
      />
      <Label>PLEASE SELECT A PRODUCT</Label>
      <CardMargin>
        <Card style={{elevation: 4}}>
          <AutoCompleteTextInput
            style={{backgroundColor: 'red'}}
            testID={'12345'}
            name={`Reason`}
            invalid={false}
            maxLength={40}
            isRightImage={true}
            rightImage={require('../../../assets/icons_24_chevron_down.png')}
            // errorMessage={errors?.cityBal?.message}
            // data={businessCities}
            value={''}
            onChangeText={text => {
              //   onChange(text);
            }}
            placeholder={`Relationship with the applicant*`}
            // onSelectListItem={item => onSelectCity(item, onChange)}
          />
        </Card>
      </CardMargin>

      <CardMargin>
        <Card style={{elevation: 4, padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/benefit1.png')}
                style={benefitStyle}
              />
              <Text style={{}}>Earn gift vouchers</Text>
              <Text>worth ₹500 on your</Text>
              <Text>monthly spends</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/benefit2.png')}
                style={benefitStyle}
              />
              <Text>Complimentary</Text>
              <Text>Lakme Salon & Spa</Text>
              <Text>gift vouchers</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/benefit3.png')}
                style={benefitStyle}
              />
              <Text>Lifetime free</Text>
              <Text>health benefits</Text>
              <Text>from vHealth & IHO</Text>
            </View>
          </View>
          <Pressable style={{alignSelf: 'center'}}>
            <Text style={{color: '#da3442'}}>View All Benefits</Text>
          </Pressable>
        </Card>
      </CardMargin>

      <Label>PREFERRED BANK BRANCH</Label>
      <CardMargin>
        <Card style={{elevation: 4}}>
          <AutoCompleteTextInput
            style={{backgroundColor: 'red'}}
            testID={'12345'}
            name={`Reason`}
            invalid={false}
            maxLength={40}
            isRightImage={true}
            rightImage={require('../../../assets/icons_24_chevron_down.png')}
            // errorMessage={errors?.cityBal?.message}
            // data={businessCities}
            value={''}
            onChangeText={text => {
              //   onChange(text);
            }}
            placeholder={`Preferred branch location*`}
            // onSelectListItem={item => onSelectCity(item, onChange)}
          />
        </Card>
      </CardMargin>

      <Label>{CPD_CONSTANTS.CPD_SERVICES_REQUIRED}</Label>
      <FlatList
        data={optionsList}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
      />
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

const benefitStyle = {
  width: 40,
  height: 40,
  marginBottom: 8,
};

const checkBoxImage = {
  width: 24,
  height: 24,
};

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const CardMargin = styled.View`
  margin-bottom: 20px;
`;
export default PersonalizedBanking;
