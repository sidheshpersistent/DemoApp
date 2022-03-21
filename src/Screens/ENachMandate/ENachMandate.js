import React, {useState} from 'react';
import Card from '../../components/CardView';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
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
} from './ENachMandateStyle';
const iconClose = require('../../assets/iconClose.png');

const ENachMandate = props => {
  const [isPoliticallyExposed, togglePoliticallyExposed] = useState(false);

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
                  source={require('../../assets/help.png')}
                />
              </TouchableOpacity>
            </LableContainer>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <AutoCompleteTextInput
                  style={{backgroundColor: 'red'}}
                  testID={'12345'}
                  name={`Remitting Bank Name`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={false}
                  isSearchIcon={true}
                  rightImage={require('../../assets/icons_24_search.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={'Remitting Bank Name*'}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                />
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{backgroundColor: '#25243b'}}>
                <CardPadding>
                  <BlackBoxContainer>
                    <Image
                      source={require('../../assets/icons_24_info.png')}
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
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Name as per bank account"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    onChangeText={text => {}}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Minimum monthly transfer ₹10,000"
                    errorMessage=""
                    isError={false}
                    errorColor="red"
                    textColor="black"
                    onChangeText={text => {}}
                    onKeyPress={() => {}}
                  />
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{elevation: 4, borderRadius: 5}}>
                <AutoCompleteTextInput
                  style={{backgroundColor: 'red'}}
                  testID={'12346'}
                  name={`Select Start date`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={true}
                  rightImage={require('../../assets/icons_24_calendar.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={`Select Start date`}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                />
              </Card>
            </CardMargin>
            <Label>MODE OF AUTHENTICATION</Label>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <View style={{flexDirection: 'row', padding: 10}}>
                    <View //TODO: this we will remove and apply ccl
                      style={{
                        marginRight: 20,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderColor: '#9b1e26',
                        borderWidth: 1,
                      }}
                    />
                    <View>
                      <TouchableOpacity onPress={() => {}}>
                        <ToogleRadioText>Net Banking</ToogleRadioText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <View style={{flexDirection: 'row', padding: 10}}>
                    <View //TODO: this we will remove and apply ccl
                      style={{
                        marginRight: 20,
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        borderColor: '#9b1e26',
                        borderWidth: 1,
                      }}
                    />
                    <View>
                      <TouchableOpacity onPress={() => {}}>
                        <ToogleRadioText>Debit Card</ToogleRadioText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </CardPadding>
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{backgroundColor: '#25243b'}}>
                <CardPadding>
                  <BlackBoxContainer>
                    <Image
                      source={require('../../assets/icons_24_info.png')}
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
                    source={require('../../assets/checked.png')}
                    style={checkBoxStyle}
                  />
                ) : (
                  <Image
                    source={require('../../assets/unchecked.png')}
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
                  source={require('../../assets/RightArrowWhite.png')}
                  style={RightArrowImage}
                />
              </RightArrowButtonActive>
            ) : (
              <RightArrowButton>
                <Image
                  source={require('../../assets/RightArrow.png')}
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
