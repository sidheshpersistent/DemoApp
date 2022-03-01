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
const CustomerIdentificationDetails = props => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [panNo, setPanNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [isErrorMobile, setIsErrorMobile] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPan, setIsErrorPan] = useState(false);
  const [isErrorAadhar, setIsErrorAadhar] = useState(false);
  const route = useRoute();

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
      return true;
      // if (emailId !== '' && panNo !== '') {
      //   console.log("log 1")
      //   if (isValidEmailId(emailId) && isValidPan(panNo)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // } else if (emailId !== '' && panNo === '') {
      //   console.log("log 2")
      //   if (isValidEmailId(emailId)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // } else if (emailId === '' && panNo !== '') {
      //   console.log("log 3")
      //   if (isValidPan(emailId)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // } else {
      //   return true;
      // }
    } else {
      return false;
    }
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
                <InfoIconContainer>
                  <FormFieldText>
                    {CUSTOMERDETAILS.CID_LABEL_PAN_MANDATORY}
                  </FormFieldText>
                  <TouchableOpacity style={infoIconView} onPress={() => {}}>
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
                      />
                    </CardPadding>
                  </Card>
                </CardMargin>

                <FooterContainer>
                  <FooterText>{CUSTOMERDETAILS.CID_LABEL_FOOTER}</FooterText>
                  {SubmitButtonEnable() ? (
                    <RightArrowButtonActive>
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
                </FooterContainer>
              </CardInnerContainer>
            </Card>
          </CustomerDetailsBG>
        </ScrollView>
      </BackgroundImage>
    </Container>
  );
};

export default CustomerIdentificationDetails;
