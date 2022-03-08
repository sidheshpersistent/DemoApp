import React, {useEffect, useState} from 'react';
import Card from '../../../components/CardView';
import {
  View,
  Switch,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import CustomTextInput from '../../../components/ntb_sa/Inputs/CustomTextInput';

import UpperBoxContainer from '../../../components/UpperBoxContainer/UpperBoxContainer';
import AutoCompleteTextInput from '../../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import {NEWCOMMUNICATIONADDRESS} from '../../../constants/constants';
import PopupCommunicationAddress from '../../../components/PopupNewCommunicationAddress/PopupCommunicationAddress';

const PersonalDetail = props => {
  const {data, next}=props
  const [nomineeVisible, setNomineeVisible] = useState(true);
  const [communicationAddress, setCommunicationAddress] = useState(false);
  const [form60Visible, setForm60Visible] = useState(false);
  const [panApplied, setPanApplied] = useState(false);
  


  const closeCAModal = () => {
    setCommunicationAddress(false);
  };

  const SubmitButtonEnable = () => {
    return true;
  };

  const popupCheck = text => {
    if (text > 3 * 10 ** 5) {
      setForm60Visible(true);
    } else {
      setForm60Visible(false);
    }
  };

  const arrowPress=()=>{
    next()
  }





  return (
    <View>
      <AlignedContainer>
        <CardMargin>
          <Card style={{elevation: 4}}>
            <CardPadding>
              <CustomTextInput
                isActive={false}
                isValue={false}
                placeholder="Gross Annual Income*"
                keyboardType="numeric"
                errorMessage=""
                isError={false}
                errorColor="red"
                textColor="black"
                maxLength={10}
                onChangeText={text => {
                  popupCheck(text);
                }}
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
                placeholder="Mother's Name*"
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
      </AlignedContainer>
      {form60Visible ? (
        <View>
          <AlignedContainer>
            <View>
              <Label>FORM 60 DETAILS</Label>
              <CardMargin>
                <Card style={{elevation: 4}}>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder="Father's Name*"
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
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer>
              <View
                style={{
                  height: 60,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ToogleRadioText>Have you applied for PAN?</ToogleRadioText>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <ToogleRadioText>No</ToogleRadioText>

                  <Switch
                    onValueChange={() => setPanApplied(!panApplied)}
                    value={panApplied}
                  />

                  <ToogleRadioText>Yes</ToogleRadioText>
                </View>
              </View>
            </AlignedContainer>
          </FullLengthBox>
          {panApplied ? (
            <AlignedContainer>
              <CardMargin>
                <Card style={{elevation: 4, borderRadius: 5}}>
                  <AutoCompleteTextInput
                    style={{backgroundColor: 'red'}}
                    testID={'12346'}
                    name={`Nominee’s date of birth*ason`}
                    invalid={false}
                    maxLength={40}
                    isRightImage={true}
                    rightImage={require('../../../assets/icons_24_calendar.png')}
                    // errorMessage={errors?.cityBal?.message}
                    // data={businessCities}
                    value={''}
                    onChangeText={text => {
                      //   onChange(text);
                    }}
                    placeholder={`Date of application*`}
                    // onSelectListItem={item => onSelectCity(item, onChange)}
                  />
                </Card>
              </CardMargin>
              <CardMargin>
                <Card style={{elevation: 4}}>
                  <CardPadding>
                    <CustomTextInput
                      isActive={false}
                      isValue={false}
                      placeholder="Acknowledgement No.*"
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
            </AlignedContainer>
          ) : null}
        </View>
      ) : null}

      <AlignedContainer>
        <Label>COMMUNICATION ADDRESS</Label>
      </AlignedContainer>
      <FullLengthBox>
        <AlignedContainer
          style={{
            paddingBottom: 26,
            paddingTop: 26,
            justifyContent: 'space-between',
            // TODO: this height can be deleted later
          }}>
          <View style={{flexDirection: 'row'}}>
            <View //TODO: this we will remove and apply ccl
              style={{
                marginRight: 20,
                width: 24,
                height: 24,
                borderRadius: 12,
                borderColor: '#9b1e26',
                borderWidth: 1,
              }}></View>

            <View style={{width: 309, marginBottom: 22}}>
              <ToogleRadioText>Same as Adhar</ToogleRadioText>
              <Text style={{color: '#25243b', fontSize: 12}}>
                401, El Tara, Hiranandani Gardens, Powai, Mumbai, Maharashtra
                400076
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View //TODO: this we will remove and apply ccl
              style={{
                marginRight: 20,
                width: 24,
                height: 24,
                borderRadius: 12,
                borderColor: '#9b1e26',
                borderWidth: 1,
              }}></View>
            <View>
              <TouchableOpacity onPress={() => setCommunicationAddress(true)}>
                <ToogleRadioText>other address</ToogleRadioText>
              </TouchableOpacity>

              <Text></Text>
            </View>
          </View>
        </AlignedContainer>
      </FullLengthBox>
      <FullLengthBox>
        <AlignedContainer>
          <View
            style={{
              height: 60,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ToogleRadioText>Do You Want a nominee</ToogleRadioText>
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ToogleRadioText>No</ToogleRadioText>

              <Switch
                onValueChange={() => setNomineeVisible(!nomineeVisible)}
                value={nomineeVisible}
              />

              <ToogleRadioText>Yes</ToogleRadioText>
            </View>
          </View>
        </AlignedContainer>
      </FullLengthBox>
      {nomineeVisible ? (
        <View>
          <AlignedContainer>
            <Label>Nominee Details</Label>

            <CardMargin>
              <Card style={{elevation: 4}}>
                <CardPadding>
                  <CustomTextInput
                    isActive={false}
                    isValue={false}
                    placeholder="Nominee Name*"
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
                  placeholder={`Reason`}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                />
              </Card>
            </CardMargin>
            <CardMargin>
              <Card style={{elevation: 4, borderRadius: 5}}>
                <AutoCompleteTextInput
                  style={{backgroundColor: 'red'}}
                  testID={'12346'}
                  name={`Nominee’s date of birth*ason`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={true}
                  rightImage={require('../../../assets/icons_24_calendar.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={`Nominee’s date of birth*`}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                />
              </Card>
            </CardMargin>
          </AlignedContainer>
          <AlignedContainer>
            <Label>Nominee Address</Label>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer
              style={{
                paddingBottom: 26,
                paddingTop: 26,
                justifyContent: 'space-between',
                height: 140, // TODO: this height can be deleted later
              }}>
              <View style={{flexDirection: 'row'}}>
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

                <View style={{width: 309, marginBottom: 22}}>
                  <ToogleRadioText>Same as Adhar</ToogleRadioText>
                  <Text style={{color: '#25243b', fontSize: 12}}>
                    401, El Tara, Hiranandani Gardens, Powai, Mumbai,
                    Maharashtra 400076
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
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
                  <TouchableOpacity
                    onPress={() => setCommunicationAddress(true)}>
                    <ToogleRadioText>other address</ToogleRadioText>
                  </TouchableOpacity>

                  <Text></Text>
                </View>
              </View>
            </AlignedContainer>
          </FullLengthBox>
        </View>
      ) : null}

      <AlignedContainer
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 38,
        }}>
        {SubmitButtonEnable() ? (
          <RightArrowButtonActive onPress={()=>arrowPress()}>
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

      {communicationAddress ? (
        <PopupCommunicationAddress
          popupType="communication_address"
          animationIn="bounceIn"
          popupIcon={require('../../../assets/icon_24_location.png')}
          isVisible={communicationAddress}
          Heading={NEWCOMMUNICATIONADDRESS.NCA_FORM_HEADING} // Heading is assumed to be taken from constants
          popupInfo={NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING}
          isActive={false}
          isValue={false}
          TextInputPlaceholder=""
          textColor="black"
          // maxLength={10}
          ButtonText="Confirm"
          buttonPress={data => {
            closeCAModal();
            console.log(data);
          }}
          CancelButtonText="Cancel"
          cancelButtonPress={() => closeCAModal()}
          isError={false}
          error_text={'validation failed'}
        />
      ) : null}
    </View>
  );
};

const RightArrowImage = {
  width: 40,
  height: 40,
};
const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;

const ToogleRadioText = styled.Text`
  font-family: Inter;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;

  color: #25243b;
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

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;

const CardMargin = styled.View`
  margin-bottom: 20px;
`;
const CardPadding = styled.View`
  padding: 10px;
`;



export default PersonalDetail;
