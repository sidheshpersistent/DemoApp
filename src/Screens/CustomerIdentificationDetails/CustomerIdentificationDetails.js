import React, {useState} from 'react';
import {Image, TouchableOpacity, View, ScrollView} from 'react-native';
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
  InfoIconContainer,
  infoIconStyle,
  BoldText,
  infoIconView,
  RightArrowButtonActive,
} from './CustomerIdentificationDetailsStyle';
import {CUSTOMERDETAILS} from '../../constants/constants';
import Card from '../../components/CardView';
import CustomTextInput from '../../components/ntb_sa/Inputs/CustomTextInput';
import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import BackArrowHeader from '../../components/HeaderComponent/BackArrowHeader';
import {useRoute} from '@react-navigation/native';
import {
  isValidMobileNo,
  isValidEmailId,
  isValidPan,
  validation,
  isValidAadhar,
} from '../../Utils/ValidationUtils';
import Popup from '../../components/Popup/Popup';
import styled from 'styled-components/native';
const icon = require('../../assets/info.png');
const HEADING = 'When is it mandatory to enter PAN?';
import PopupTextInput from '../../components/Popup/PopupTextInput';
import PopUpExistingCustomer from '../../components/Popup/PopUpExistingCustomer';
const alertIcon = require('../../assets/alertIcon.png');
const HEADING_PAN = {
  PAN_MANDATORY: 'When is it mandatory to enter PAN?',
  PAN_CHECK: 'Sorry!  Customer must provide PAN to open account.',
  MOBILE_CHECK: 'Please provide another mobile number to proceed further',
  EMAIL_CHECK: 'Please provide another email address to proceed further',
};
const POPUP_INFO = {
  PAN_CHECK_INFO:
    'It is mandatory for customers below 60 years of age to provide PAN if their income is above ₹2.5Lacs ',
  MOBILE_CHECK_INFO:
    'The mobile number entered already exists in the Bank under the Customer ID: *****6471 Name: Vicky Patilas fetched from CBS/MDM.',
  EMAIL_CHECK_INFO:
    'The email address entered already exists in the Ban under the Customer ID: *****6471 and Name: Vicky Patil as fetched from CBS/MDM.',
};
const data = {
  accountList: [
    {
      accountType: 'Type 1',
      accountNumber: '******5415',
    },
    {
      accountType: 'Type 2',
      accountNumber: '******4579',
    },
  ],
  customerID: '****6471',
  mobileNumber: '+91 7085762345',
  offerList: [
    {
      ID: '1',
      reason: 'Better offers on Card',
    },
    {
      ID: '2',
      reason: 'PPF account',
    },
  ],
};
const PAN_INCOME_CHECK = [
  'Customer is below 60 years of age and gross annual income is above ₹2.5 lacs',
  'Customer is between 60-79 years of age and gross annual income is above ₹3 lacs',
  'Customer is aged 80 years or above and gross annual income is above ₹5 lacs',
];
const CustomerIdentificationDetails = props => {
  const [panVisible, setPanVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [panNo, setPanNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [isErrorMobile, setIsErrorMobile] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPan, setIsErrorPan] = useState(false);
  const [isErrorAadhar, setIsErrorAadhar] = useState(false);
  const [pan, setPan] = useState(false);
  const [number, setNumber] = useState('');
  const [isVisible3, setIsvisible3] = useState(false);
  const route = useRoute();
  const buttonPress3 = () => {
    setPan(false);
    setIsvisible3(true);
  };
  const setMobileValidation = async mobileNumber => {
    var ismobile = await isValidMobileNo(mobileNumber);
    if (ismobile) {
      setIsErrorMobile(false);
    } else {
      setIsErrorMobile(true);
    }
  };
  const setEmailValidation = async emailId => {
    var isemail = await isValidEmailId(emailId);
    if (isemail) {
      setIsErrorEmail(false);
    } else {
      setIsErrorEmail(true);
    }
  };
  const setPanValidation = async panNo => {
    var ispan = await isValidPan(panNo);
    if (ispan) {
      setIsErrorPan(false);
    } else {
      setIsErrorPan(true);
    }
  };
  const setAadharValidation = async aadhar => {
    var isAadhar = await isValidAadhar(aadhar);
    if (isAadhar) {
      setIsErrorAadhar(false);
    } else {
      setIsErrorAadhar(true);
    }
  };
  const SubmitButtonEnable = () => {
    if (
      mobileNumber !== '' &&
      aadharNo !== '' &&
      isValidMobileNo(mobileNumber) &&
      isValidAadhar(aadharNo)
    ) {
      // return true;
      if (emailId !== '' && panNo !== '') {
        console.log('log 1');
        if (isValidEmailId(emailId) && isValidPan(panNo)) {
          return true;
        } else {
          return false;
        }
      } else if (emailId !== '' && panNo === '') {
        console.log('log 2');
        if (isValidEmailId(emailId)) {
          return true;
        } else {
          return false;
        }
      } else if (emailId === '' && panNo !== '') {
        console.log('log 3');
        if (isValidPan(emailId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  const buttonPress = () => {
    console.log('i am pressed');
    setPanVisible(false);
  };
  return (
    <Container>
      <BackgroundImage>
        <BackArrowHeader
          onPressBack={() => {
            props.navigation.goBack(null);
          }}
        />
        <ScrollView>
          <CustomerDetailsBG>
            <HeadingText>
              {`Enter your`} <BoldText> {`customer details`} </BoldText>{' '}
              {`to proceed`}{' '}
            </HeadingText>
            <Card>
              <CardInnerContainer>
                {route.params.accountType === 'CS' && (
                  <View>
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
                  </View>
                )}
                <FormFieldText>
                  {CUSTOMERDETAILS.CID_LABEL_CUSTOMER_DETAILS}
                </FormFieldText>

                <CardMargin>
                  <Card>
                    <CardPadding>
                      <CustomTextInput
                        value={mobileNumber}
                        isActive={false}
                        isValue={false}
                        placeholder={CUSTOMERDETAILS.CID_FIELD_MOBILE}
                        keyboardType="numeric"
                        errorMessage={validation.mobile.message}
                        isError={isErrorMobile}
                        errorColor="red"
                        textColor="black"
                        maxLength={10}
                        onChangeText={text => {
                          setMobileNumber(text);
                          setMobileValidation(text);
                        }}
                      />
                    </CardPadding>
                  </Card>
                </CardMargin>
                <CardMargin>
                  <Card>
                    <CardPadding>
                      <CustomTextInput
                        value={emailId}
                        isActive={false}
                        isValue={false}
                        placeholder={CUSTOMERDETAILS.CID_FIELD_EMAIL}
                        errorMessage={validation.email.message}
                        isError={isErrorEmail}
                        errorColor="red"
                        textColor="black"
                        onChangeText={text => {
                          setEmailId(text);
                          setEmailValidation(text);
                        }}
                      />
                    </CardPadding>
                  </Card>
                </CardMargin>
                <CardMargin>
                  <Card>
                    <CardPadding>
                      <CustomTextInput
                        value={panNo}
                        isActive={false}
                        isValue={false}
                        placeholder={CUSTOMERDETAILS.CID_FIELD_PAN}
                        errorMessage={validation.pan.message}
                        isError={isErrorPan}
                        errorColor="red"
                        textColor="black"
                        maxLength={10}
                        onChangeText={text => {
                          setPanNo(text);
                          setPanValidation(text);
                        }}
                      />
                    </CardPadding>
                  </Card>
                </CardMargin>
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
                <InfoIconContainer>
                  <FormFieldText>
                    {CUSTOMERDETAILS.CID_LABEL_PAN_MANDATORY}
                  </FormFieldText>
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
                        value={aadharNo}
                        isRightImage={true}
                        rightImage={require('../../assets/icons_24_search.png')}
                        isActive={false}
                        isValue={false}
                        placeholder={CUSTOMERDETAILS.CID_FIELD_AADHAAR}
                        keyboardType="numeric"
                        errorMessage={validation.aadhar.message}
                        isError={isErrorAadhar}
                        errorColor="red"
                        textColor="black"
                        onChangeText={text => {
                          setAadharNo(text);
                          setAadharValidation(text);
                        }}
                        maxLength={16}
                      />
                    </CardPadding>
                  </Card>
                </CardMargin>

                <FooterContainer>
                  <FooterText>{CUSTOMERDETAILS.CID_LABEL_FOOTER}</FooterText>
                  {SubmitButtonEnable() ? (
                    <TouchableOpacity onPress={() => setPan(true)}>
                      <RightArrowButtonActive>
                        <Image
                          source={require('../../assets/RightArrowWhite.png')}
                          style={RightArrowImage}
                        />
                      </RightArrowButtonActive>
                    </TouchableOpacity>
                  ) : (
                    <RightArrowButton>
                      <Image
                        source={require('../../assets/RightArrow.png')}
                        style={RightArrowImage}
                      />
                    </RightArrowButton>
                  )}
                </FooterContainer>
              </CardInnerContainer>
            </Card>
          </CustomerDetailsBG>
        </ScrollView>
      </BackgroundImage>
      {/* show PAN popup dialog */}
      { 
        <PopupTextInput
          popupType="pan"
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={pan}
          Heading={HEADING_PAN.PAN_CHECK} // Heading is assumed to be taken from constants
          popupInfo={POPUP_INFO.PAN_CHECK_INFO}
          TextInputPlaceholder=""
          ButtonText="Submit"
          TextInputvalue={number}
          onchangeText={setNumber}
          buttonPress={() => buttonPress3()}
        />
      }
      <PopUpExistingCustomer
        animationIn="bounceIn"
        popupIcon={icon}
        isVisible={isVisible3}
        heading="The application already has a banking relationship with us"
        subText={`The following accounts exist under the Customer ID *****6471 `}
        popupInfo="The following account exist under the customer ID *****6471."
        data={data}
        ButtonText="Confirm"
        TextInputvalue={number}
        buttonPress={() => {
          setIsvisible3(false)
          props.navigation.navigate('CustomerProfile');
        }}
        cancelBtnPressed={()=>{setIsvisible3(false)}}
      />
      {/* end  popup dialog */}
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
