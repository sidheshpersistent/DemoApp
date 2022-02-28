import React, { useState } from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  Container,
  CustomerDetailsBG,
  HeadingText,
  CardInnerContainer,
  FormFieldText,
  FooterContainer,
  FooterText,
  RightArrowButton,
  CardMargin,
  CardPadding,
  RightArrowImage,
  BackArrowView,
  InfoIconContainer,
  infoIconStyle,
} from './CustomerIdentificationDetailsStyle';
import {CUSTOMERDETAILS} from '../../constants/constants';
import Card from '../../components/CardView';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Popup from '../../components/Popup/Popup';
import styled from 'styled-components/native';
const icon = require('../../assets/info.png');
const HEADING = 'When is it mandatory to enter PAN?';
const PAN_INCOME_CHECK = [
  'Customer is below 60 years of age and gross annual income is above ₹2.5 lacs',
  'Customer is between 60-79 years of age and gross annual income is above ₹3 lacs',
  'Customer is aged 80 years or above and gross annual income is above ₹5 lacs',
];
const CustomerIdentificationDetails = props => {
 

  const [panVisible,setPanVisible]=useState(false)


  const buttonPress = () => {
    console.log('i am pressed');
    setPanVisible(false);
  };
  return (
    <Container>
      <BackgroundImage>
        <CustomerDetailsBG>
          <BackArrowView>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
          </BackArrowView>
          <HeadingText>{CUSTOMERDETAILS.CID_FORM_HEADING}</HeadingText>
          <Card>
            <CardInnerContainer>
              <FormFieldText>
                {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
              </FormFieldText>
              <CardMargin>
                <Card>
                  <CardPadding>
                    <AutoCompleteTextInput
                      testID={'123'}
                      name={CUSTOMERDETAILS.CID_FIELD_COMPANY}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../assets/icons_24_search.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={'Indian Army - Defense'}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_COMPANY}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    />
                  </CardPadding>
                </Card>
              </CardMargin>

              <CardMargin>
                <Card>
                  <CardPadding>
                    <AutoCompleteTextInput
                      testID={'1234'}
                      name={CUSTOMERDETAILS.CID_FIELD_RANK}
                      invalid={false}
                      maxLength={40}
                      isRightImage={true}
                      rightImage={require('../../assets/icons_24_chevron_down.png')}
                      // errorMessage={errors?.cityBal?.message}
                      // data={businessCities}
                      value={''}
                      onChangeText={text => {
                        //   onChange(text);
                      }}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_RANK}
                      // onSelectListItem={item => onSelectCity(item, onChange)}
                    />
                  </CardPadding>
                </Card>
              </CardMargin>

              <FormFieldText>
                {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
              </FormFieldText>
              <CardMargin>
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_MOBILE}
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
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_EMAIL}
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
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_PAN}
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
              <InfoIconContainer>
                <FormFieldText>
                  {CUSTOMERDETAILS.CID_LABEL_PAN_MANDATORY}
                </FormFieldText>
                {/** popup */}
                <Popup
                  animationIn="bounceIn"
                  popupIcon={icon}
                  isVisible={panVisible}
                  Heading={HEADING}
                  ButtonText="Ok"
                  buttonPress={() => buttonPress()}
                  component={PAN_INCOME_CHECK.map(item => (
                    <ComponentContainer key={item}>
                      <Bullet>•</Bullet>
                      <ComponentText>{item}</ComponentText>
                    </ComponentContainer>
                  ))}
                />
                <TouchableOpacity onPress={() => setPanVisible(true)}>
                  <Image
                    style={infoIconStyle}
                    source={require('../../assets/help.png')}
                  />
                </TouchableOpacity>
              </InfoIconContainer>
              <CardMargin>
                <Card>
                  <CardPadding>
                    <CustomTextInput
                      isRightImage={true}
                      rightImage={require('../../assets/icons_24_search.png')}
                      isActive={false}
                      isValue={false}
                      placeholder={CUSTOMERDETAILS.CID_FIELD_AADHAAR}
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

              <FooterContainer>
                <FooterText>{CUSTOMERDETAILS.CID_LABEL_FOOTER}</FooterText>
                <RightArrowButton>
                  <Image
                    source={require('../../assets/RightArrow.png')}
                    style={RightArrowImage}
                  />
                </RightArrowButton>
              </FooterContainer>
            </CardInnerContainer>
          </Card>
        </CustomerDetailsBG>
      </BackgroundImage>
    </Container>
  );
};

const ComponentContainer = styled.View`
  flex-direction: row;

`;

const Bullet = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #25243b;
`;
const ComponentText = styled.Text`
  padding-left: 10px;
  margin-bottom: 20px;
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;

  color: #25243b;
`;


export default CustomerIdentificationDetails;
