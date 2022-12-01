import React, {useState} from 'react';
import {Card} from '../../Components';
import {View,Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
// import AutoCompleteTextInput from '../../Components/AutoCompleteTextInput/AutoCompleteTextInput';
import { rightArrowWhite,iconClose,help,icons_24_info,checked,unchecked,rightArrow } from '../../Assets/Images'

import {
  Container,
  AlignedContainer,
  IconClose,
  HeaderContainer,
  CloseAndSave,
  SaveAndExit,
  LowerConatainer,
  HeadingText,
  CardMargin,
  CardPadding,
  LabelText,
  Label,
  ToogleRadioText,
  FullLengthBox,
  CheckBoxText,
  checkBoxStyle,
  RightArrowButtonActive,
  RightArrowButton,
  RightArrowImage,
  infoIconStyle,
  LableContainer,
  RedText,
  BlackBoxContainer,
  BlackBoxText,
  whiteInfoIconStyle,
} from './styled';

import {RadioButton} from '@idfc/ccl-mobile/lib/module/v2';

const ENachMandate = props => {
  const [isPoliticallyExposed, togglePoliticallyExposed] = useState(false);
  const [selValue, setSelValue] = useState('Net Banking');

  const handleChange = v => {
    console.log('e click ', v);
    setSelValue(v);
  };

  return (
    <Container>
      <HeaderContainer>
        <CloseAndSave>
          <IconClose source={iconClose} />
          <SaveAndExit>Save & Exit</SaveAndExit>
        </CloseAndSave>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <HeadingText>
            Let’s get your monthly salary credited into this account
          </HeadingText>
        </View>
      </HeaderContainer>

      <LowerConatainer>
        <ScrollView style={{flex: 1}}>
          <AlignedContainer>
            <LabelText>
              Please fill below details to proceed with your e-NACH mandate
              registration
            </LabelText>
            <LableContainer>
              <Label>REMITTING BANK’S DETAILS</Label>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={infoIconStyle}
                  source={help}
                />
              </TouchableOpacity>
            </LableContainer>
            <CardMargin>
              <Card style={{elevation: 4}}>
                {/* <AutoCompleteTextInput
                  style={{backgroundColor: 'red'}}
                  testID={'12345'}
                  name={`Remitting Bank Name`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={false}
                  isSearchIcon={true}
                  rightImage={require('../../Assets/Images/icons_24_search.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={'Remitting Bank Name*'}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                /> */}
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{backgroundColor: '#25243b'}}>
                <CardPadding>
                  <BlackBoxContainer>
                    <Image
                      source={icons_24_info}
                      style={whiteInfoIconStyle}
                    />
                    <BlackBoxText>
                      If you can’t find your bank name in this list, please
                      visit branch to set up mandate.
                    </BlackBoxText>
                  </BlackBoxContainer>
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <CustomTextInput
                isActive={false}
                isValue={false}
                label="Name as per bank account"
                errorMessage=""
                isError={false}
                errorColor="red"
                textColor="black"
                onChangeText={text => console.log(text)}
                onKeyPress={() => {}}
              />
            </CardMargin>

            <CardMargin>
              <CustomTextInput
                isActive={false}
                isValue={false}
                label="Minimum monthly transfer ₹10,000"
                errorMessage=""
                isError={false}
                errorColor="red"
                textColor="black"
                onChangeText={text => console.log(text)}
                onKeyPress={() => {}}
              />
            </CardMargin>

            <CardMargin>
              <Card style={{elevation: 4, borderRadius: 5}}>
                {/* <AutoCompleteTextInput
                  style={{backgroundColor: 'red'}}
                  testID={'12346'}
                  name={`Select Start date`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={true}
                  rightImage={require('../../Assets/Images/icons_24_calendar.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={`Select Start date`}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                /> */}
              </Card>
            </CardMargin>
            <Label>MODE OF AUTHENTICATION</Label>

            <CardPadding>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItem: 'center',
                }}>
                <View style={{flex: 1, alignItem: 'center'}}>
                  <RadioButton
                    value="Net Banking"
                    name="radio-normal"
                    id="1"
                    checked={selValue == 'Net Banking'}
                    onChange={() => handleChange('Net Banking')}></RadioButton>
                </View>

                <View
                  style={{
                    flex: 9,
                    justifyContent: 'center',
                    alignItem: 'center',
                  }}>
                  <ToogleRadioText>{'Net Banking'}</ToogleRadioText>
                </View>
              </View>
            </CardPadding>

            <CardPadding>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItem: 'center',
                }}>
                <View style={{flex: 1, alignItem: 'center'}}>
                  <RadioButton
                    value="Debit Card"
                    name="radio-normal"
                    id="1"
                    checked={selValue == 'Debit Card'}
                    onChange={() => handleChange('Debit Card')}></RadioButton>
                </View>

                <View
                  style={{
                    flex: 9,
                    justifyContent: 'center',
                    alignItem: 'center',
                  }}>
                  <ToogleRadioText>{'Debit Card'}</ToogleRadioText>
                </View>
              </View>
            </CardPadding>

            <CardMargin>
              <Card style={{backgroundColor: '#25243b'}}>
                <CardPadding>
                  <BlackBoxContainer>
                    <Image
                      source={icons_24_info}
                      style={whiteInfoIconStyle}
                    />
                    <BlackBoxText>
                      Bank account authentication ensures funds are coming from
                      and going to legitimate bank accounts.
                    </BlackBoxText>
                  </BlackBoxContainer>
                </CardPadding>
              </Card>
            </CardMargin>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer
              style={{
                paddingBottom: 26,
                paddingTop: 26,
                flexDirection: 'row',
                height: 70, // TODO: this height can be deleted later
              }}>
              <TouchableOpacity
                onPress={() => togglePoliticallyExposed(!isPoliticallyExposed)}
                style={checkBoxStyle}>
                {isPoliticallyExposed ? (
                  <Image
                    source={checked}
                    style={checkBoxStyle}
                  />
                ) : (
                  <Image
                    source={unchecked}
                    style={checkBoxStyle}
                  />
                )}
              </TouchableOpacity>
              <CheckBoxText style={{marginLeft: 12}}>
                I agree to all <RedText> Terms & Conditions</RedText> of e-NACH
                Mandate registration
              </CheckBoxText>
            </AlignedContainer>
          </FullLengthBox>
          <AlignedContainer
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 38,
            }}>
            {isPoliticallyExposed ? (
              <RightArrowButtonActive
                onPress={() => props.navigation.navigate('PreApprovedOffers')}>
                <Image
                  source={rightArrowWhite}
                  style={RightArrowImage}
                />
              </RightArrowButtonActive>
            ) : (
              <RightArrowButton>
                <Image
                  source={rightArrow}
                  style={RightArrowImage}
                />
              </RightArrowButton>
            )}
          </AlignedContainer>
        </ScrollView>
      </LowerConatainer>
    </Container>
  );
};
export default ENachMandate;
