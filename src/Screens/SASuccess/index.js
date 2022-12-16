import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
// import { RadioButton } from '@idfc/ccl-mobile/lib/module/v2';
import { RadioButton } from '../../Components';
import { BackgroundImage, Card, CustomText, Popup, CustomButton, PopupShareDetails } from '../../Components';
import { checked, easy_buy, headerbackgroundSuccess, success, unchecked, iconClose, alertIcon, rightArrowWhite } from '../../Assets/Images';
import {
  Button, CardImageStyle, CloseAndSave, SaveAndExit, AccDetailsTextStyle, AccDetailsValueStyle,
  AlignedContainer, CardMargin, checkBoxStyle, confirmationStyle,
  CongratsTextStyle, deb1TextStyle, deb2TextStyle, FullLengthBox, Label,
  NameStyle, successStyle, successTextStyle, ToogleRadioText, IconClose,
  optionsStyles, triggerStyles, UnderLineItem, CardPadding, boxFlex, boxMarging, accDetailBox, accAdsBox, boxCard, MarginTopBox, HrContainer, hrContainerStyle, alignedContainerStyle, RightArrowButtonActive, RightArrowImage, RightArrowButton, deb3TextStyle, adTextStyle, adViewStyle, skipTextStyle, radioRow, backgroundImageStyle, imageCong, radioCard, labelStyle
} from './styled';
import { StringsOfLanguages } from '../../Localization';
import { AsyncStorageUtils, Colors, FontFamily, Font_Size, NavigationUrl } from '../../Utils';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import PopupFeedback from "../../Components/Popup/PopupFeedback";
import { useNavigation } from '@react-navigation/native';
import { Account_Type, LetterSpacing, Line_Height, LocalDB, RadioButtonConstants, TestIds, CommonConstant } from '../../Utils/Constants';
import useSession from '../../App/useSession';
import { isValidEmailId } from '../../Utils/ValidationUtils';
import { userDetails } from './constants';
import { decryptDataValue } from '../../Utils/CryptoHelper';
import { saveBankUseSection } from "../BankUseSectionForm/service";
import LoaderComponent from "../../Components/LoaderComponent";
import { modeOfPayementCheque, modeOfPayementNeft } from "../BankUseSectionForm/constants";
import ErrorPopup from "../../Components/ErrorPopup";


const { Popover } = renderers;

const SASuccess = (props) => {

  const navigation = useNavigation()
  const { session } = useSession();
  const [isConfirmed, setConfirmation] = useState(true);
  const [radio, setRadio] = useState({
    check1: RadioButtonConstants.RADIO1,
    check2: RadioButtonConstants.RADIO2,
    check3: RadioButtonConstants.RADIO2
  });
  const [userName,] = useState(userDetails.userName);
  const [custId,] = useState(userDetails.custId);
  const [ifscNo,] = useState(userDetails.ifscNo);
  const [accNo,] = useState(userDetails.accNo);
  const [branch,] = useState(userDetails.branch);
  const [isSelectSkip, setIsSelectSkip] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [shareWithHrVisible, setShareWithHrVisible] = useState(false);
  const [emailHR, setEmailHR] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [enableSubmitButton, setenableSubmitButton] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (session.accountType == Account_Type.ASSISTED_CS) {
      getCompanyDetailsFromLocalData();
    }

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  const handleBackPress = () => {
    if (props.navigation.isFocused()) {
      setPopupVisible(true);
    } else {
      navigation.goBack(null);
    }
    return true;
  };

  const handlePaymentRadio = (e) => {

    if (e == "2") {
      setRadio({ ...radio, check1: "Radio 2", check2: "Radio 1", check3: "Radio 2" })
    } else {
      if (e == "3") {
        setRadio({ ...radio, check3: "Radio 1", check2: "Radio 2", check1: "Radio 2" })
      }
      else {
        setRadio({ ...radio, check1: "Radio 1", check3: "Radio 2", check2: "Radio 2" })
      }
    }
  }

  const onPressSkipFunding = () => {
    setIsSelectSkip(!isSelectSkip);
  }


  const setEmailValidation = async (emailId) => {
    var isemail = await isValidEmailId(emailId);
    if (isemail) {
      /* istanbul ignore next */
      setEmailError(false);
      setenableSubmitButton(false);
    } else {
      setEmailError("error");
      setenableSubmitButton(true);
    }
  };

  async function getCompanyDetailsFromLocalData() {
    let company = await AsyncStorageUtils.getObjectItem(LocalDB.companyDetails);
    let companyDetails = decryptDataValue(company);
    setEmailHR(companyDetails.hrMail);
    setEmailError(false);
    setenableSubmitButton(false);
  }

  const getBankUseSectionRequest = () => {
    let paymentMode = "";
    if (radio.check2 === RadioButtonConstants.RADIO1) {
      paymentMode = modeOfPayementNeft;
    } else if (radio.check3 === RadioButtonConstants.RADIO1) {
      paymentMode = modeOfPayementCheque;
    }
    return {
      userId: session.agentDetails.userId,
      isInitialFunding: (session.accountType == Account_Type.CS) ? false : !isSelectSkip,
      isBUCompleted: false,
      modeOfPayment: paymentMode
    }
  }
  const saveBankUserSectionForm = () => {
    navigation.navigate(NavigationUrl.PreApprovedOffersId);
    return;
    setShowLoader(true);
    let finalRequest = getBankUseSectionRequest();
    let header = {
      appName: session.accountType,
      mobileNumber: ""
    }
    saveBankUseSection(finalRequest, header, (response) => {
      setShowLoader(false);
      if (response?.status == CommonConstant.SUCCESS) {
        navigation.navigate(NavigationUrl.PreApprovedOffersId)
      } else {
        setErrorMsg(response.message);
        setErrorPopup(true);
      }
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <LoaderComponent
        isVisible={showLoader}
        heading={StringsOfLanguages.LOADER.CID_HEADING}
        subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
      />
      <View style={{ flex: 1.3 }}>
        <BackgroundImage
          style={backgroundImageStyle}
          imageSource={headerbackgroundSuccess}>
          <CloseAndSave>
            <TouchableOpacity onPress={() => setPopupVisible(true)}>
              <IconClose source={iconClose} tintColor={Colors.WHITE} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPopupVisible(true)}>
              <SaveAndExit>{StringsOfLanguages.COMMON.EXIT}</SaveAndExit>
            </TouchableOpacity>
          </CloseAndSave>

          <View style={imageCong}>
            <Image
              source={success}
              style={successStyle}
            />

            <Text style={CongratsTextStyle}>{StringsOfLanguages.SAS.SAS_CONGRATULATIONS}</Text>
            <Text style={NameStyle}>{userName}</Text>
            <Text style={successTextStyle}>{session.accountType == Account_Type.ASSISTED_CS ? StringsOfLanguages.SAS.SAS_CS_SUCCESS_MESSAGE : StringsOfLanguages.SAS.SAS_SUCCESS_MESSAGE}</Text>
          </View>
        </BackgroundImage>
      </View>


      {session.accountType == Account_Type.ASSISTED_CS &&
        <HrContainer style={hrContainerStyle}>
          <MarginTopBox>
            <CustomText
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_20}
              marginTop={20}
              lineHeight={Line_Height.HEIGHT_22}
              letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
              color={Colors.BLACK}
              align={"left"}
            >
              {StringsOfLanguages.SAS.SAS_SHARE_HR}
            </CustomText>
          </MarginTopBox>

          <RightArrowButton>
            <RightArrowButtonActive
              testID={TestIds.sas_right_arrow}
              onPress={() => setShareWithHrVisible(true)}
            >
              <Image
                source={rightArrowWhite}
                style={RightArrowImage} />
            </RightArrowButtonActive>
          </RightArrowButton>
        </HrContainer>
      }

      <View style={{ flex: 2 }}>
        <ScrollView>
          {/* HH journey */}
          {session.accountType == Account_Type.ASSISTED_SA &&
            <AlignedContainer>
              <Label>{StringsOfLanguages.SAS.SAS_ACCOUNT_DETAILS}</Label>
              <CardMargin>
                <Card style={boxCard}>
                  <View
                    style={accDetailBox}>
                    <View style={boxFlex}>
                      <View>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_CUST_ID}</Text>
                        <Text style={AccDetailsValueStyle}>{custId}</Text>
                      </View>

                      <View style={boxMarging}>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_IFSC}</Text>
                        <Text style={AccDetailsValueStyle}>{ifscNo}</Text>
                      </View>
                    </View>

                    <View style={boxFlex}>
                      <View>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_ACC_NO}</Text>
                        <Text style={AccDetailsValueStyle}>{accNo}</Text>
                      </View>

                      <View style={boxMarging}>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_BRANCH}</Text>
                        <Text style={AccDetailsValueStyle}>{branch}</Text>
                      </View>
                    </View>
                  </View>

                  <UnderLineItem></UnderLineItem>

                  <View style={accAdsBox}>
                    <View >
                      {/* image */}
                      <CardImageStyle source={easy_buy} resizeMode="center" />
                    </View>

                    <View style={adTextStyle}>
                      <Text style={deb1TextStyle}>{StringsOfLanguages.SAS.SAS_DEBIT_1}</Text>
                      <Text style={deb3TextStyle}>{`₹XX lakh `}<Text style={deb1TextStyle}>{StringsOfLanguages.SAS.SAS_DEBIT_3}</Text></Text>
                    </View>
                  </View>

                  <View style={adViewStyle}>
                    <Text style={deb2TextStyle}>{StringsOfLanguages.SAS.SAS_DEBIT_2}</Text>
                  </View>
                </Card>

              </CardMargin>

              <View style={labelStyle}>
                <Label>{StringsOfLanguages.SAS.SAS_MODE_PAY}</Label>

                <View style={{ marginBottom: 16, }}>
                  <Menu
                    renderer={Popover}
                    rendererProps={{ placement: "left" }}
                    onSelect={() => onPressSkipFunding()}>
                    <MenuTrigger
                      customStyles={triggerStyles}
                      text=' ⋮ ' />
                    <MenuOptions customStyles={optionsStyles}>
                      <MenuOption
                        style={skipTextStyle}
                        value={1}
                        text={isSelectSkip ? '\u2713 ' + 'Skip funding' : '' + 'Skip funding'} />
                    </MenuOptions>
                  </Menu>
                </View>

              </View>

              {!isSelectSkip &&
                <View>
                  <CardMargin>
                    <Card style={[radioCard, { borderColor: radio.check1 === RadioButtonConstants.RADIO1 ? Colors.MAROON : Colors.WHITE }]}>
                      <CardPadding>
                        <View style={radioRow}>
                          <RadioButton
                            name="radio-normal"
                            id="1"
                            value={radio.check1}
                            checked={radio.check1 === RadioButtonConstants.RADIO1}
                            labelStyle={{ color: Colors.MAROON }}
                            onChange={() => handlePaymentRadio("1")}>

                          </RadioButton>
                          <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity
                              onPress={() => handlePaymentRadio("1")}>
                              <ToogleRadioText>{StringsOfLanguages.SAS.SAS_ON_THIS_DEVICE}</ToogleRadioText>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </CardPadding>
                    </Card>
                  </CardMargin>

                  <CardMargin>
                    <Card style={[radioCard, { borderColor: radio.check2 === RadioButtonConstants.RADIO1 ? Colors.MAROON : Colors.WHITE }]}>
                      <CardPadding>
                        <View style={radioRow}>
                          <RadioButton
                            name="radio-normal"
                            id="1"
                            value={radio.check2}
                            checked={radio.check2 === RadioButtonConstants.RADIO1}
                            labelStyle={{ color: Colors.MAROON, }}
                            onChange={() => handlePaymentRadio("2")} />
                          <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity
                            >
                              <ToogleRadioText>{StringsOfLanguages.SAS.SAS_ON_PER_DEVICE}</ToogleRadioText>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </CardPadding>
                    </Card>
                  </CardMargin>

                  <CardMargin>
                    <Card style={[radioCard, { borderColor: radio.check3 === RadioButtonConstants.RADIO1 ? Colors.MAROON : Colors.WHITE }]}>
                      <CardPadding>
                        <View style={radioRow}>
                          <RadioButton
                            name="radio-normal"
                            id="1"
                            value={radio.check3}
                            checked={radio.check3 === RadioButtonConstants.RADIO1}
                            labelStyle={{ color: Colors.MAROON }}
                            onChange={() => handlePaymentRadio("3")} />
                          <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity
                            >
                              <ToogleRadioText>{StringsOfLanguages.SAS.SAS_PAY_CHEQUE}</ToogleRadioText>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </CardPadding>
                    </Card>
                  </CardMargin>
                </View>
              }



            </AlignedContainer>
          }

          {/* CS journey */}
          {session.accountType == Account_Type.ASSISTED_CS &&
            <AlignedContainer style={alignedContainerStyle}>

              <Label>{StringsOfLanguages.SAS.SAS_ACCOUNT_DETAILS}</Label>
              <CardMargin>
                <Card
                  style={boxCard}>
                  <View
                    style={accDetailBox}>
                    <View style={boxFlex}>
                      <View>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_CUST_ID}</Text>
                        <Text style={AccDetailsValueStyle}>{custId}</Text>
                      </View>

                      <View style={boxMarging}>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_IFSC}</Text>
                        <Text style={AccDetailsValueStyle}>{ifscNo}</Text>
                      </View>
                    </View>

                    <View style={boxFlex}>
                      <View>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_ACC_NO}</Text>
                        <Text style={AccDetailsValueStyle}>{accNo}</Text>
                      </View>

                      <View style={boxMarging}>
                        <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_BRANCH}</Text>
                        <Text style={AccDetailsValueStyle}>{branch}</Text>
                      </View>
                    </View>
                  </View>

                </Card>
              </CardMargin>
            </AlignedContainer>
          }

          {/* cofirmation tick */}
          {session.accountType == Account_Type.ASSISTED_SA && !isSelectSkip &&
            <FullLengthBox>
              <AlignedContainer>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                  <TouchableOpacity
                    onPress={() => setConfirmation(!isConfirmed)}
                    style={checkBoxStyle}>
                    {isConfirmed ? (
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
                  <Text style={confirmationStyle}>{StringsOfLanguages.SAS.SAS_CONFIRM}</Text>
                </View>
              </AlignedContainer>
            </FullLengthBox>
          }

          {/* proceed button */}
          {session.accountType == Account_Type.ASSISTED_SA &&
            <CustomButton
              style={Button}
              disabled={!isConfirmed}
              buttonType="primary"
              fontSize={20}
              title={(radio.check1 === RadioButtonConstants.RADIO1 && !isSelectSkip) ?
                StringsOfLanguages.SAS.SAS_FUND_ACCOUNT
                :
                StringsOfLanguages.SAS.SAS_PROCEED
              }
              buttonPress={() => {
                (radio.check1 != RadioButtonConstants.RADIO1 || isSelectSkip) ?
                  saveBankUserSectionForm() : ""
              }}
            />
          }
          {session.accountType == Account_Type.ASSISTED_CS &&
            <CustomButton
              style={Button}
              disabled={!isConfirmed}
              buttonType="primary"
              fontSize={20}
              title={StringsOfLanguages.SAS.SAS_PROCEED
              }
              buttonPress={() => { saveBankUserSectionForm() }}
            />
          }

          {/* share via SMS */}
          <TouchableOpacity>
            <CustomText
              // testID={TestIds.sas_title}
              fontFamily={FontFamily.INTER_BOLD}
              fontSize={Font_Size.SIZE_20}
              lineHeight={28}
              letterSpacing={-0.2}
              align={"center"}
              paddingVertical={20}
              color={Colors.MAROON}>{StringsOfLanguages.SAS.SAS_SHARE}</CustomText>
          </TouchableOpacity>

        </ScrollView>
      </View>
      {/* {
        <PopupFeedback
          animationIn="bounceIn"
          isVisible={feedbackVisible}
          Heading={StringsOfLanguages.SAS.PLEASE_PROVIDE}
          ButtonText={StringsOfLanguages.SAS.SAS_OKAY}
          buttonPress={() => { 
            setFeedbackVisible(false) 
          }}
        />
      } */}
      {
        <Popup
          cancelButtonPress={() => setPopupVisible(false)}
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={popupVisible}
          Heading={StringsOfLanguages.SAS.SAS_ALERT}
          ButtonText={StringsOfLanguages.SAS.SAS_EXIT}
          buttonPress={() => {
            setPopupVisible(false);
            props.navigation.navigate(NavigationUrl.drawerId, {
              screen: NavigationUrl.dashboardId,
            });
          }}
        />
      }
      {/* {
        <PopupShareDetails
          animationIn="bounceIn"
          isVisible={shareWithHrVisible}
          Heading={StringsOfLanguages.SAS.SAS_SHARE_HEADER}
          popupInfo={StringsOfLanguages.SAS.SAS_SHARE_SUBHEADER}
          ButtonText={StringsOfLanguages.SAS.SAS_SHARE_SUBMIT}
          maxLength={40}
          onchangeText={(text) => {
            setEmailHR(text)
            if (text) {
              setEmailValidation(text)
            } else {
              setEmailError(false);
            }
          }}
          isError={emailError}
          enableSubmit={enableSubmitButton}
          buttonPress={() => {
            // setEmailHR("");
            // setEmailError(false);
            // setenableSubmitButton(true);
            setShareWithHrVisible(false);
            getCompanyDetailsFromLocalData();
          }}
          closeButton={() => {
            // setEmailHR("");
            // setEmailError(false);
            // setenableSubmitButton(true);
            setShareWithHrVisible(false);
            getCompanyDetailsFromLocalData();
          }}
          value={emailHR}
          userName={userName}
          ifscNo={ifscNo}
          accNo={accNo}
          branch={branch}
        />
      } */}
      {/* {
        <ErrorPopup
          popUpshow={errorPopup}
          message={errorMsg}
          callBack={() => {
            setErrorPopup(false);
          }}
        ></ErrorPopup>
      } */}
    </View>
  );
};


export default SASuccess;
