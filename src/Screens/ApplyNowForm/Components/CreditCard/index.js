import React, { useEffect, useState } from "react";
import { Image, Keyboard, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import {
  Colors,
  FontFamily,
  Font_Size,
  Icon_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
  TestIds,
} from "../../../../Utils";
import {
  CustomButton,
  CustomPasswordTextInput,
  CustomText,
  CustomTextInput,
  RadioButton,
} from "../../../../Components";
import { Company_Data, nominee_Relation_Data } from "../../constants";
// import { IconSize } from "@idfc/ccl-commons/enums";
import { useNavigation } from "@react-navigation/native";
import { StringsOfLanguages } from "../../../../Localization";
// import { SearchResult, IconButton } from "@idfc/ccl-mobile";
import {
  CardImageTitle,
  BackgroundImageStyle,
  MarginTopBox,
  AlignedContainer,
  BorderLine,
  CardImageStyle,
  CardTitleSubTitleBox,
  CardContainer,
  CardSubtitleContainer,
  AnnualPercent,
  OfferContainer,
  AddressContainer,
  RadioContainer,
  RelationSelection,
  orBackground,
  ClickableTextStyle,
  CheckboxView,
  FullLengthBox,
  RowBox,
  triggerStyles,
  optionsStyles,
  PasswordView,
} from "./styled";
import useSession from "../../../../App/useSession";
import { chevronDown, icons_24_info } from "../../../../Assets/Images";
import {
  isValidEmailId,
  isValidMobileNo,
} from "../../../../Utils/ValidationUtils";
import { Endpoints, NetworkManager } from "../../../../API";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import CheckBox from "@react-native-community/checkbox";
import SelectDropdown from "react-native-select-dropdown";
import { EyeButton } from "../../../CustomerIdentificationDetails/styled";

import Icon from 'react-native-vector-icons/Ionicons';
const { Popover } = renderers;

const CreditCard = ({ response }) => {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const [radioValue, setRadioValue] = useState("Radio 1");
  const [isDirectorRelated, setIsDirectorRelated] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOTPVerified, setIsOtpVerified] = useState(false);
  const [toggleMask, setToggleMask] = useState(false);
  const [value] = useState("+91 8750332889");
  const [companyName, setCompanyName] = useState("");
  const [filterData, setFilterData] = useState(Company_Data);
  const [isErrorCompanyName, setIsErrorCompanyName] = useState(false);
  const [workEmailId, setWorkEmailId] = useState("");
  const [isErrorWorkEmail, setIsErrorWorkEmail] = useState(false);
  const [completeAddress, setCompleteAddress] = useState("");
  const [isCompleteAddressError] = useState(false);
  const [cityName, setCityName] = useState("City");
  const [stateName, setStateName] = useState("State");
  const [pinCode, setPinCode] = useState("");
  const [isPinCodeError, setIsPinCodeError] = useState(false);
  const [alternateMobile, setAlternateMobile] = useState("");
  const [isAlternateMobileError, setIsAlternateMobileError] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  // const [companyDetails, setCompanyDetails] = useState("");
  const [hideSearchResult, sethideSearchResult] = useState(false);
  const [fullNameOfficial, setFullNameOfficial] = useState("");
  const [isFullNameOfficialError, setIsFullNameOfficialError] = useState(false);
  const [customerRelation, setCostumerRelation] = useState("");
  const [otpMobile, setOtpMobile] = useState("");
  const [otpErr, setOtpErr] = useState("error");
  const [toggleInfo, setToggleInfo] = useState(false);
  const [isActiveResend, setIsActiveResend] = useState(true);
  const [timerText, setTimerText] = useState(``);
  let secs = 45;
  let timerId = 0;

  useEffect(() => {
    setIsDirectorRelated("");
    setIsOtpSent(false);
    setIsOtpVerified(false);
    setCompanyName("");
    setFilterData(Company_Data);
    setIsErrorCompanyName(false);
    setWorkEmailId("");
    setIsErrorWorkEmail(false);
    setCompleteAddress("");
    setPinCode("");
    setAlternateMobile("");
    setIsAgree(false);
    sethideSearchResult(false);
    setFullNameOfficial("");
    setCostumerRelation("");
    setOtpMobile("");
  }, [radioValue]);

  const secondsToTime = (seconds) => {
    // var h = Math.floor(e / 3600).toString().padStart(2, '0'),
    let minsTemp = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0');
    let secsTemp = Math.floor(seconds % 60).toString().padStart(2, '0');
    setTimerText(` ${minsTemp}:${secsTemp}`);
  }


  useEffect(() => {
    return () => {
      if (timerId != 0) {
        clearInterval(timerId);
      }

    }
  }, []);

  const createTimer = () => {
    setIsActiveResend(false);
    secondsToTime(secs);
    console.log("timer created");
    timerId = setInterval(() => {
      console.log("timer called", secs);
      secs = secs - 1;

      if (secs <= 0) {
        secondsToTime(secs);
        clearInterval(timerId);
        setIsActiveResend(true);
      } else {
        secondsToTime(secs);
      }

    }, 1000)
  }


  const handleRadioChange = (e) => {
    setRadioValue(e);
  };
  const handleDirectorRelation = (e) => {
    setIsDirectorRelated(e);
  };

  const setEmailValidation = async (emailId, emailIdType) => {
    var isemail = await isValidEmailId(emailId);
    if (isemail) {
      /* istanbul ignore next */
      if (emailIdType === "work_email_id") {
        setIsErrorWorkEmail(false);
      }
    } else {
      /* istanbul ignore next */
      if (emailIdType === "work_email_id") {
        setIsErrorWorkEmail("error");
      }
    }
  };

  const setAlternateMobileValidation = async (mobileNumber) => {
    var ismobile = await isValidMobileNo(mobileNumber);
    if (ismobile) {
      setIsAlternateMobileError(false);
    } else {
      // setIsErrorMobile(true);
      setIsAlternateMobileError("error");
    }
  };

  const searchFilterFunction = (text) => {
    // if (text && text.length >= 3) {
    //   let header={
    //     appName: session.accountType,
    //     mobileNumber:""
    //   }
    // NetworkManager.GetWithSession(
    //   Endpoints.getCompanyList + text + `?pageNo=1&pageSize=5`,
    //   header,
    //   (response) => {
    //     if (response === "timeOut") {
    //       setSession({ ...session, loginFlag: false });
    //     } else {
    //       let data = response?.data;
    //       // setCompanyDetails(data);
    //       if (data && data.length > 0) {
    //         sethideSearchResult(true);
    //         setFilterData(data);
    //         setIsErrorCompanyName(false);
    //       } else {
    //         setFilterData([]);
    //         sethideSearchResult(false);
    //         setIsErrorCompanyName("error");
    //       }
    //     }
    //   }
    // );
    // setFilterData(newData);
    // sethideSearchResult(true);
    // } else {
    // setFilterData(Company_Data);
    //   sethideSearchResult(false);
    //   setIsErrorCompanyName(false);
    // }
  };

  const cancleSearch = () => {
    setCompanyName("");
    Keyboard.dismiss();
    searchFilterFunction("");
    // setFilterData(Company_Data);
    setIsErrorCompanyName(false);
  };

  const onChangePinCode = (text) => {
    if (/^[0-9]*$/g.test(text)) {
      setPinCode(text);
      setIsPinCodeError(false);
      if (text.length == 6) {
        setCityName("Mumbai");
        setStateName("Maharashtra");
      } else {
        setCityName("City");
        setStateName("State");
      }
    } else {
      setIsPinCodeError("error");
    }
  }

  const onChangeFullName = (text) => {
    if (/^[a-zA-Z]*$/g.test(text)) {
      setFullNameOfficial(text);
      setIsFullNameOfficialError(false);
    } else {
      setFullNameOfficial(text);
      setIsFullNameOfficialError("error");
    }
  }
  return (
    <View>
      <AlignedContainer>
        <CustomText
          fontFamily={FontFamily.INTER_BOLD}
          fontSize={Font_Size.SIZE_20}
          marginTop={32}
          lineHeight={Line_Height.HEIGHT_22}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
          color={Colors.BLACK}
        >
          {StringsOfLanguages.APPLYNOW_CREDITCARD.CUSTOMER_ADDRESS}
        </CustomText>
        <CustomText
          fontSize={Font_Size.SIZE_14}
          marginTop={8}
          lineHeight={Line_Height.HEIGHT_22}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
          color={Colors.BLACK}
        >
          {StringsOfLanguages.APPLYNOW_CREDITCARD.YOUR_COMMUNICATION}
        </CustomText>
        <CustomText
          fontFamily={FontFamily.Inter_SemiBold}
          fontSize={Font_Size.SIZE_14}
          lineHeight={Line_Height.HEIGHT_22}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
          color={Colors.BLACK}
        >
          {response.customerAddress}
        </CustomText>
        <CustomText
          fontSize={Font_Size.SIZE_14}
          marginTop={32}
          lineHeight={Line_Height.HEIGHT_22}
          letterSpacing={-0.5}
          color={Colors.BLACK}
        >
          {StringsOfLanguages.APPLYNOW_CREDITCARD.SELECT_YOUR}
        </CustomText>
        <AddressContainer>
          <RadioContainer
            style={
              radioValue == "Radio 1"
                ? { borderColor: "maroon", borderWidth: 1 }
                : ""
            }
          >
            <RadioButton
              testID={TestIds.crc_residence_address}
              style={{
                alignItems: "center",
              }}
              labelStyle={{
                fontSize: Font_Size.SIZE_16,
                marginLeft: 12,
                width: 100,
              }}
              value="Radio 1"
              name="radio-normal"
              id="1"
              checked={radioValue === "Radio 1"}
              onChange={() => handleRadioChange("Radio 1")}
            >
              {StringsOfLanguages.APPLYNOW_CREDITCARD.RESIDENCE_ADDRESS}
            </RadioButton>
          </RadioContainer>
          <View style={orBackground}>
            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_18}
              letterSpacing={LetterSpacing.ZERO_POINT_TWO}
              fontSize={Font_Size.SIZE_12}
              color={Colors.GRAY}
            >
              {" "}
              OR{" "}
            </CustomText>
          </View>
          <RadioContainer
            style={
              radioValue == "Radio 2"
                ? { borderColor: "maroon", borderWidth: 1 }
                : ""
            }
          >
            <RadioButton
              testID={TestIds.crc_office_address}
              style={{
                alignItems: "center",
              }}
              labelStyle={{
                marginLeft: 12,
                fontSize: Font_Size.SIZE_16,
                width: 77,
              }}
              value="Radio 2"
              name="radio-normal"
              id="1"
              checked={radioValue === "Radio 2"}
              onChange={() => handleRadioChange("Radio 2")}
            >
              {StringsOfLanguages.APPLYNOW_CREDITCARD.OFFICE_ADDRESS}
            </RadioButton>
          </RadioContainer>
        </AddressContainer>

        {radioValue == "Radio 1" && (
          <View>
            <BorderLine />

            <MarginTopBox>
              <CustomText
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={-0.5}
                color={Colors.BLACK}
              >
                {StringsOfLanguages.APPLYNOW_CREDITCARD.CUSTOMER_OFFICE}
              </CustomText>
            </MarginTopBox>

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_search_company}
                label={isErrorCompanyName == "error" && companyName != ""
                  ? StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME_ERROR
                  : StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME}
                labelStyle={{
                  color: isErrorCompanyName ? Colors.ERROR : Colors.BLACK,
                  opacity: isErrorCompanyName ? 1 : 0.32,
                }}
                errorMessage={
                  isErrorCompanyName == "error" && companyName != ""
                    ? StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME_ERROR
                    : StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME
                }
                inputBorderProps={{
                  style: {
                    borderBottomColor: isErrorCompanyName
                      ? Colors.ERROR
                      : Colors.BLACK,
                    opacity: 1,
                  },
                }}
                //ASA-588 is resolved already
                value={companyName}
                onChangeText={(text) => {
                  if (/^[a-zA-Z0-9]*$/g.test(text)) {
                    setCompanyName(text);
                    searchFilterFunction(text);
                    setIsErrorCompanyName(false);
                  } else {
                    setCompanyName(text);
                    searchFilterFunction(text);
                    setIsErrorCompanyName("error");
                  }
                }}
                textInputProps={{
                  style: {
                    color: Colors.BLACK,
                  },
                }}
                suffix={
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* <IconButton
                      iconColor={Colors.MAROON_DARK}
                      iconType={companyName ? "Cross" : "Search"}
                      transparent
                      iconSize={
                        companyName ? Icon_Size.SMALL : Icon_Size.NORMAL
                      }
                      onPress={() => {
                        //   setToggleMask(!toggleMask);
                        companyName ? cancleSearch() : null;
                      }}
                    /> */}
                  </View>
                }
              />
            </MarginTopBox>
            {hideSearchResult ? (
              <View
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  elevation: 10,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                {/* <SearchResult>
                  {filterData && filterData.map((company) => (
                    <SearchResult.Item
                      testID={TestIds.crc_filtered_result}
                      key={company.id}
                      onClick={async () => {
                        setCompanyName(company.displayText);
                        sethideSearchResult(false);
                      }}
                    >
                      <SearchResult.Text>{company.displayText}</SearchResult.Text>
                    </SearchResult.Item>
                  ))}
                </SearchResult> */}
              </View>
            ) : null}

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_work_email}
                value={workEmailId}
                label={isErrorWorkEmail == "error" && workEmailId != "" ? "Invalid email" : StringsOfLanguages.APPLYNOW_CREDITCARD.WORK_EMAIL}
                keyboardType="email-address"
                labelStyle={{
                  color:
                    isErrorWorkEmail == "error" && workEmailId != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isErrorWorkEmail == "error" && workEmailId != "" ? 1 : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? 1
                        : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  setWorkEmailId(text);
                  setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                }}

                errorColor={Colors.ERROR}
              />
            </MarginTopBox>

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_complete_address}
                value={completeAddress}
                label={
                  StringsOfLanguages.APPLYNOW_CREDITCARD
                    .CUSTOMER_COMPLETE_ADDRESS
                }
                keyboardType="email-address"
                labelStyle={{
                  color:
                    isCompleteAddressError == "error" && completeAddress != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isCompleteAddressError == "error" && completeAddress != ""
                      ? 1
                      : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? 1
                        : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  setCompleteAddress(text);
                  // setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                  maxLength: 500
                }}
                isError={isCompleteAddressError}
                errorColor={Colors.ERROR}
              />
            </MarginTopBox>

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_pincode}
                label={StringsOfLanguages.APPLYNOW_CREDITCARD.PINCODE}
                errorMessage={
                  isPinCodeError == "error" && pinCode != ""
                    ? StringsOfLanguages.APPLYNOW_CREDITCARD.PINCODE_ERROR
                    : StringsOfLanguages.APPLYNOW_CREDITCARD.PINCODE
                }
                keyboardType="number-pad"
                labelStyle={{
                  color:
                    isPinCodeError == "error" && pinCode != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isPinCodeError == "error" && pinCode != "" ? 1 : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isPinCodeError == "error" && pinCode != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isPinCodeError == "error" && pinCode != "" ? 1 : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  onChangePinCode(text);
                  // setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isPinCodeError == "error" && pinCode != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                  maxLength: 6,
                }}
                value={pinCode}
                isError={isPinCodeError}
                errorColor={Colors.ERROR}
              />
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={-0.5}
                color={Colors.BLACK}
                marginTop={6}
              >
                {`${cityName}, ${stateName}`}
              </CustomText>
            </MarginTopBox>

            <BorderLine />
          </View>

        )}

        {radioValue == "Radio 2" && (
          <>
            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_search_company2}
                label={isErrorCompanyName == "error" && companyName != ""
                  ? StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME_ERROR
                  : StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME}
                labelStyle={{
                  color: isErrorCompanyName ? Colors.ERROR : Colors.BLACK,
                  opacity: isErrorCompanyName ? 1 : 0.32,
                }}
                errorMessage={
                  isErrorCompanyName == "error" && companyName != ""
                    ? StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME_ERROR
                    : StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME
                }
                inputBorderProps={{
                  style: {
                    borderBottomColor: isErrorCompanyName
                      ? Colors.ERROR
                      : Colors.BLACK,
                    opacity: 1,
                  },
                }}
                //ASA-588 is resolved already
                value={companyName}
                onChangeText={(text) => {
                  if (/^[a-zA-Z0-9]*$/g.test(text)) {
                    setCompanyName(text);
                    searchFilterFunction(text);
                    setIsErrorCompanyName(false);
                  } else {
                    setCompanyName(text);
                    searchFilterFunction(text);
                    setIsErrorCompanyName("error");
                  }
                }}
                textInputProps={{
                  style: {
                    color: Colors.BLACK,
                  },
                }}
                suffix={
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* <IconButton
                      iconColor={Colors.MAROON_DARK}
                      iconType={companyName ? "Cross" : "Search"}
                      transparent
                      iconSize={
                        companyName ? Icon_Size.SMALL : Icon_Size.NORMAL
                      }
                      onPress={() => {
                        //   setToggleMask(!toggleMask);
                        companyName ? cancleSearch() : null;
                      }}
                    /> */}
                  </View>
                }
              />
            </MarginTopBox>
            {hideSearchResult ? (
              <View
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  elevation: 10,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                {/* <SearchResult>
                  {filterData && filterData.map((company) => (
                    <SearchResult.Item
                      testID={TestIds.crc_filtered_result2}
                      key={company.id}
                      onClick={async () => {
                        setCompanyName(company.displayText);
                        sethideSearchResult(false);
                      }}
                    >
                      <SearchResult.Text>{company.displayText}</SearchResult.Text>
                    </SearchResult.Item>
                  ))}
                </SearchResult> */}
              </View>
            ) : null}

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_work_email2}
                value={workEmailId}
                label={isErrorWorkEmail == "error" && workEmailId != "" ? "Invalid email" : StringsOfLanguages.APPLYNOW_CREDITCARD.WORK_EMAIL}
                keyboardType="email-address"
                labelStyle={{
                  color:
                    isErrorWorkEmail == "error" && workEmailId != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isErrorWorkEmail == "error" && workEmailId != "" ? 1 : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? 1
                        : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  setWorkEmailId(text);
                  setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isErrorWorkEmail == "error" && workEmailId != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                }}

                errorColor={Colors.ERROR}
              />
            </MarginTopBox>

            <BorderLine />

            <MarginTopBox>
              <CustomText
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={-0.5}
                color={Colors.BLACK}
              >
                {StringsOfLanguages.APPLYNOW_CREDITCARD.CUSTOMER_RESIDENCE}
              </CustomText>
            </MarginTopBox>

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_complete_address2}
                value={completeAddress}
                label={
                  StringsOfLanguages.APPLYNOW_CREDITCARD
                    .CUSTOMER_COMPLETE_ADDRESS
                }
                keyboardType="email-address"
                labelStyle={{
                  color:
                    isCompleteAddressError == "error" && completeAddress != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isCompleteAddressError == "error" && completeAddress != ""
                      ? 1
                      : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? 1
                        : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  setCompleteAddress(text);
                  // setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isCompleteAddressError == "error" && completeAddress != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                  maxLength: 50
                }}
                isError={isCompleteAddressError}
                errorColor={Colors.ERROR}

              />
            </MarginTopBox>

            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.crc_pincode2}
                value={pinCode}
                label={StringsOfLanguages.APPLYNOW_CREDITCARD.PINCODE}
                keyboardType="number-pad"
                labelStyle={{
                  color:
                    isPinCodeError == "error" && pinCode != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isPinCodeError == "error" && pinCode != "" ? 1 : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isPinCodeError == "error" && pinCode != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      isPinCodeError == "error" && pinCode != "" ? 1 : 0.32,
                  },
                }}
                onChangeText={(text) => {
                  onChangePinCode(text);
                  // setEmailValidation(text, "work_email_id");
                }}
                textInputProps={{
                  style: {
                    color:
                      isPinCodeError == "error" && pinCode != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                  },
                  maxLength: 6,
                }}
                isError={isPinCodeError}
                errorColor={Colors.ERROR}
              />
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={-0.5}
                color={Colors.BLACK}
                marginTop={6}
              >
                {`${cityName}, ${stateName}`}
              </CustomText>
            </MarginTopBox>

            <BorderLine />
          </>
        )}
      </AlignedContainer>

      <AlignedContainer>

        <MarginTopBox>
          <CustomText
            fontFamily={FontFamily.INTER_BOLD}
            fontSize={Font_Size.SIZE_20}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.BLACK}
          >
            {StringsOfLanguages.APPLYNOW_CREDITCARD.PLEASE_VERIFY}
          </CustomText>
        </MarginTopBox>
        <MarginTopBox>
          <CustomTextInput
            disabled={true}
            label={StringsOfLanguages.APPLYNOW_CREDITCARD.MOBILE_LINK}
            value={value}
          />
        </MarginTopBox>
        {/* !isOTPVerified && */}

        {isOTPVerified &&
          <MarginTopBox>
            <CustomPasswordTextInput
              testID={TestIds.crc_otp_placeholder}
              disabled={true}
              label={StringsOfLanguages.APPLYNOW_CREDITCARD.OTP_PLACEHOLDER}
              value={otpMobile}
              showPassword={false}
              suffix={
                <View>
                  {/* <IconButton
                    iconColor={Colors.green}
                    iconSize={IconSize.SIZE_20}
                    iconType={"TickFilledClear"}
                    buttonSize={20}
                    transparent
                    disabled
                  /> */}
                  <CustomText
                    fontFamily={FontFamily.Inter_REGULAR}
                    fontSize={Font_Size.SIZE_10}
                    color={Colors.green}
                  >
                    {"Verified"}
                  </CustomText>
                </View>
              }
            />
          </MarginTopBox>
        }
        <MarginTopBox>
          {isOtpSent && !isOTPVerified ? (
            <PasswordView>
              <CustomPasswordTextInput
                testID={TestIds.crc_set_otp}
                fontSize={Font_Size.SIZE_20}
                onChangeText={(text) => {
                  if (/^[0-9]*$/g.test(text)) {
                    setOtpMobile(text);
                    if (text.length == 6) {
                      setOtpErr(false);
                    } else {
                      setOtpErr("error");
                    }
                  } else {
                    setOtpErr("error");
                  }
                }}
                label={otpErr == "error" && otpMobile != ""
                  ? StringsOfLanguages.APPLYNOW_CREDITCARD.OTP_ERROR_PLACEHOLDER
                  : StringsOfLanguages.APPLYNOW_CREDITCARD.OTP_PLACEHOLDER}
                showPassword={false}
                value={otpMobile}
                errorMessage={
                  otpErr == "error" && otpMobile != ""
                    ? StringsOfLanguages.APPLYNOW_CREDITCARD.OTP_ERROR_PLACEHOLDER
                    : StringsOfLanguages.APPLYNOW_CREDITCARD.OTP_PLACEHOLDER
                }
                keyboardType="number-pad"
                labelStyle={{
                  color:
                    otpErr == "error" && otpMobile != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    otpErr == "error" && otpMobile != "" ? 1 : 0.32,
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      otpErr == "error" && otpMobile != ""
                        ? Colors.ERROR
                        : Colors.BLACK,
                    opacity:
                      otpErr == "error" && otpMobile != ""
                        ? 1
                        : 0.32,
                  },
                }}
                passwordInputProps={{
                  style: {
                    color:
                      otpErr == "error" && otpMobile != ""
                        ? Colors.ERROR
                        : Colors.ERROR,
                  },
                  maxLength: 6
                }}
                isError={isPinCodeError}
                errorColor={Colors.ERROR}
                suffix={
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <EyeButton
                      onPress={() => {
                        setToggleMask(!toggleMask);
                      }}>
                      <Icon
                        color={'maroon'}
                        name={toggleMask ? 'eye-off' : 'eye'}
                        buttonSize={24}
                        transparent
                        size={Icon_Size.NORMAL}
                      />
                    </EyeButton>
                  </View>
                }
              />
              <RowBox>
                <MarginTopBox>
                  {/* <CustomText>
                    {timeLeft < 10
                      ? StringsOfLanguages.APPLYNOW_CREDITCARD.TIME_LEFT + " 00:" + "0" + timeLeft
                      : StringsOfLanguages.APPLYNOW_CREDITCARD.TIME_LEFT + " 00:" + timeLeft}
                  </CustomText> */}
                  {/* <CustomText>{StringsOfLanguages.APPLYNOW_CREDITCARD.TIME_LEFT + ` ${mins}:${secs}`}</CustomText> */}
                  <CustomText>{StringsOfLanguages.APPLYNOW_CREDITCARD.TIME_LEFT + ` ${timerText}`}</CustomText>
                </MarginTopBox>
                <MarginTopBox>
                  <TouchableOpacity
                    testID={TestIds.crc_resend_otp}
                    // resend button
                    disabled={!isActiveResend}
                    onPress={() => createTimer()}
                  >
                    <CustomText
                      fontFamily={FontFamily.INTER_BOLD}
                      fontSize={Font_Size.SIZE_14}
                      lineHeight={Line_Height.HEIGHT_18}
                      letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                      color={!isActiveResend ? Colors.NEW_GREY_600.text : Colors.PRIMARY_COLOR}
                      style={{ opacity: !isActiveResend ? 0.9 : 1 }}
                      align={"right"}>
                      {StringsOfLanguages.APPLYNOW_CREDITCARD.RESEND_OTP}
                    </CustomText>
                  </TouchableOpacity>
                </MarginTopBox>
              </RowBox>

              <MarginTopBox>
                <CustomButton
                  testID={TestIds.crc_verify_otp_button}
                  buttonPress={() => {
                    clearInterval(timerId);
                    setIsOtpVerified(true);
                  }}
                  disabled={otpMobile.length != 6 && otpErr == "error"}
                  style={{
                    width: 200,
                    height: 48,
                    marginBottom: 16,
                    color: Colors.NEW_GREY_600.text,
                  }}
                  title={StringsOfLanguages.APPLYNOW_CREDITCARD.VERIFY_OTP}
                />
              </MarginTopBox>
            </PasswordView>
          ) : null}
          {!isOtpSent ? (
            <CustomButton
              testID={TestIds.crc_send_otp}
              buttonPress={() => {
                setIsOtpSent(true);
                createTimer();
              }}
              style={{
                width: 200,
                height: 48,
                marginBottom: 16,
                marginTop: 8,
              }}
              title={StringsOfLanguages.APPLYNOW_CREDITCARD.SEND_OTP}
            />
          ) : null}
        </MarginTopBox>
        <MarginTopBox>
          <CustomTextInput
            testID={TestIds.crc_altrenate_number}
            value={alternateMobile}
            label={
              isAlternateMobileError == "error" && alternateMobile != ""
                ? "Invalid Mobile Number"
                : StringsOfLanguages.APPLYNOW_CREDITCARD.ALTERNATE_NUMBER
            }
            keyboardType="number-pad"
            labelStyle={{
              color:
                isAlternateMobileError == "error" && alternateMobile != ""
                  ? Colors.ERROR
                  : Colors.BLACK,
              opacity:
                isAlternateMobileError == "error" && alternateMobile != ""
                  ? 1
                  : 0.32,
            }}
            inputBorderProps={{
              style: {
                borderBottomColor:
                  isAlternateMobileError == "error" && alternateMobile != ""
                    ? Colors.ERROR
                    : Colors.BLACK,
                opacity:
                  isAlternateMobileError == "error" && alternateMobile != ""
                    ? 1
                    : 0.32,
              },
            }}
            // onChangeText={(text) => {
            //   setAlternateMobile(text.replace(/([^0-9])/g,""));
            //   setAlternateMobileValidation(text.replace(/([^0-9])/g,""));
            // }}
            textInputProps={{
              value: alternateMobile,
              onChangeText: (text) => {
                setAlternateMobile(text.replace(/([^0-9])/g, ""));
                setAlternateMobileValidation(text.replace(/([^0-9])/g, ""));
              },
              style: {
                color:
                  isAlternateMobileError == "error" && alternateMobile != ""
                    ? Colors.ERROR
                    : Colors.BLACK,
              },
              maxLength: 10,
            }}
            errorColor={Colors.ERROR}
          />
        </MarginTopBox>

        <BorderLine />
      </AlignedContainer>

      <AlignedContainer>
        <MarginTopBox>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 9 }} >
              <CustomText
                variant="B2"
                fontSize={Font_Size.SIZE_16}
                fontFamily={FontFamily.INTER_BOLD}
              >
                {StringsOfLanguages.APPLYNOW_CREDITCARD.IDFC_RELATION}
              </CustomText>
            </View>


            <View style={{ flex: 1 }}>
              <Menu
                renderer={Popover}
                rendererProps={{ placement: "bottom" }}
                onSelect={() => setToggleInfo(!toggleInfo)}>
                <MenuTrigger
                  customStyles={triggerStyles}
                  text={'ⓘ'} />
                <MenuOptions
                  customStyles={optionsStyles}
                  style={{ backgroundColor: Colors.PROD_TWILIGHT_300.code }}>
                  <MenuOption
                    style={{ height: 50, justifyContent: 'center', color: Colors.WHITE, fontSize: 14, fontWeight: 'bold', backgroundColor: Colors.PROD_TWILIGHT_300.code }}
                    value={1}
                    text={"ⓘ   This is required as  \n       per RBI regulations  "} //isSelectSkip ? '\u2713 ' + 'Skip funding' : '' + 'Skip funding'}
                  />
                </MenuOptions>
              </Menu>
              {/* <IconButton
                primaryColor={Colors.MAROON_DARK}
                iconColor={"maroon"}
                iconType={"Info"}
                buttonSize={24}
                transparent
                iconSize={Icon_Size.NORMAL}
                onPress={() => {
                  setToggleInfo(!toggleInfo);
                }}
              /> */}
            </View>
          </View>
        </MarginTopBox>

        <MarginTopBox>
          <RelationSelection>
            <RadioContainer>
              <RadioButton
                testID={TestIds.crc_applynow_creditCard_yes}
                style={{
                  marginTop: 10,
                  alignItems: "center",
                }}
                labelStyle={{
                  fontSize: Font_Size.SIZE_16,
                  marginLeft: 12,
                  width: 77,
                }}
                value="Radio 1"
                name="radio-normal"
                id="1"
                checked={isDirectorRelated == "Radio 1"}
                onChange={() => handleDirectorRelation("Radio 1")}
              >
                {StringsOfLanguages.APPLYNOW_CREDITCARD.YES}
              </RadioButton>
            </RadioContainer>

            <RadioContainer>
              <RadioButton
                testID={TestIds.crc_applynow_creditCard_no}
                style={{
                  marginTop: 10,
                  alignItems: "center",
                }}
                labelStyle={{
                  fontSize: Font_Size.SIZE_16,
                  marginLeft: 12,
                  width: 77,
                }}
                value="Radio 2"
                name="radio-normal"
                id="1"
                checked={isDirectorRelated == "Radio 2"}
                onChange={() => handleDirectorRelation("Radio 2")}
              >
                {StringsOfLanguages.APPLYNOW_CREDITCARD.NO}
              </RadioButton>
            </RadioContainer>
          </RelationSelection>
        </MarginTopBox>
      </AlignedContainer>

      {isDirectorRelated == "Radio 1" && (
        <AlignedContainer>
          <MarginTopBox>
            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              fontSize={Font_Size.SIZE_14}
              lineHeight={Line_Height.HEIGHT_22}
              letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
              color={Colors.BLACK}
            >
              {StringsOfLanguages.APPLYNOW_CREDITCARD.FULL_NAME_TITLE}
            </CustomText>
          </MarginTopBox>

          <MarginTopBox>
            <CustomTextInput
              testID={TestIds.crc_full_name}
              value={fullNameOfficial}
              label={isFullNameOfficialError == "error" && fullNameOfficial != ""
                ? "Please enter valid inputs"
                : StringsOfLanguages.APPLYNOW_CREDITCARD.FULL_NAME}
              labelStyle={{
                color: isFullNameOfficialError ? Colors.ERROR : Colors.BLACK,
                opacity: isFullNameOfficialError ? 1 : 0.32,
              }}
              errorMessage={
                isFullNameOfficialError == "error" && fullNameOfficial != ""
                  ? "Please enter valid inputs"
                  : StringsOfLanguages.APPLYNOW_CREDITCARD.COMPANY_NAME
              }
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    isFullNameOfficialError == "error" && fullNameOfficial != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                  opacity:
                    isFullNameOfficialError == "error" && fullNameOfficial != ""
                      ? 1
                      : 0.32,
                },
              }}
              textInputProps={{
                value: fullNameOfficial,
                style: {
                  color:
                    isFullNameOfficialError == "error" && fullNameOfficial != ""
                      ? Colors.ERROR
                      : Colors.BLACK,
                },
                // onChangeText: (text) => {
                // setFullNameOfficial(text.replace(/[^A-Za-z ]+/g, ""));
                // }
              }}
              onChangeText={(text) => {
                onChangeFullName(text);
              }}
              isError={isFullNameOfficialError}
              errorColor={Colors.ERROR}
            />
          </MarginTopBox>

          <MarginTopBox>
            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              fontSize={Font_Size.SIZE_14}
              lineHeight={Line_Height.HEIGHT_22}
              letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
              color={Colors.BLACK}
            >
              {StringsOfLanguages.APPLYNOW_CREDITCARD.RELATIONSHIP_TITILE}
            </CustomText>
          </MarginTopBox>

          <MarginTopBox>
            <SelectDropdown
              testID={TestIds.crc_relationship_with_customer}
              defaultSelectedItem={customerRelation}
              value={customerRelation}
              defaultButtonText={StringsOfLanguages.APPLYNOW_CREDITCARD.RELATIONSHIP}
              data={nominee_Relation_Data}
              onSelect={(value) => {
                setCostumerRelation(value);
              }}
              dropdownIconPosition={"right"}
              buttonStyle={{ width: '100%' }}
              buttonTextStyle={{
                fontSize: 14,
                fontFamily: FontFamily.Inter_SemiBold,
                lineHeight: 14,
                color: Colors.GRAY,
              }}
              rowTextStyle={{
                fontSize: 14,
                fontFamily: FontFamily.Inter_SemiBold,
                lineHeight: 14,
                color: Colors.GRAY,
                letterSpacing: -0.5,
                marginTop: 6,
              }}
              renderDropdownIcon={() => {
                return <Image
                  source={chevronDown}
                  style={{
                    padding: 10,
                    margin: 5,
                    height: 25,
                    width: 25,
                    resizeMode: 'stretch',
                  }}
                />
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.displayText
              }}
              rowTextForSelection={(item, index) => {
                return item.displayText
              }}
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
            />
          </MarginTopBox>
        </AlignedContainer>
      )}

      <CardContainer>
        <BackgroundImageStyle
          borderRadius={12}
          source={response.backgroundImage}
        >
          <CardImageTitle>
            <CardImageStyle source={response.CardData.cardImage} />
            <CardTitleSubTitleBox>
              <CustomText
                marginBottom={12}
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_24}
                lineHeight={Line_Height.HEIGHT_32}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_SIX}
                color={Colors.WHITE}
              >
                {response.CardData.cardName}
              </CustomText>
              <CardSubtitleContainer>
                <View>
                  <CustomText
                    fontFamily={FontFamily.INTER_BOLD}
                    fontSize={Font_Size.SIZE_10}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
                    marginBottom={5}
                    style={{ color: Colors.NEW_GREY_100.code }}
                  >
                    {response.CardData.creditTitle}
                  </CustomText>
                  <CustomText
                    fontFamily={FontFamily.Inter_Bold}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                    color={Colors.WHITE}
                  >
                    {response.CardData.creditLimit}
                  </CustomText>
                </View>
                <AnnualPercent>
                  <View style={{ flexDirection: "row" }}>
                    <CustomText
                      fontFamily={FontFamily.INTER_BOLD}
                      fontSize={Font_Size.SIZE_10}
                      letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
                      marginBottom={5}
                      style={{ color: Colors.NEW_GREY_100.code }}
                    >
                      {response.CardData.annualTitle}
                    </CustomText>
                    <Image
                      style={{ width: 16, height: 16, marginLeft: 5 }}
                      source={icons_24_info}
                    />
                  </View>

                  <CustomText
                    fontFamily={FontFamily.Inter_SemiBold}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                    color={Colors.WHITE}
                  >
                    {response.CardData.annualPercentage}
                  </CustomText>
                </AnnualPercent>
              </CardSubtitleContainer>
            </CardTitleSubTitleBox>
          </CardImageTitle>
          <OfferContainer>
            {response.CardData.Offers.map((item) => (
              <View style={{ flexDirection: "row" }} key={item}>
                <CustomText
                  marginTop={0}
                  fontFamily={FontFamily.Inter_REGULAR}
                  fontSize={Font_Size.SIZE_14}
                  letterSpacing={LetterSpacing.MINUS_ZERO_POINT_THREE}
                  lineHeight={Line_Height.HEIGHT_20}
                  color={Colors.WHITE}
                >
                  •
                </CustomText>
                <CustomText
                  marginLeft={5}
                  key={item}
                  fontFamily={FontFamily.Inter_REGULAR}
                  fontSize={Font_Size.SIZE_14}
                  letterSpacing={LetterSpacing.MINUS_ZERO_POINT_THREE}
                  lineHeight={Line_Height.HEIGHT_20}
                  color={Colors.WHITE}
                >
                  {item}
                </CustomText>
              </View>
            ))}
          </OfferContainer>
        </BackgroundImageStyle>
      </CardContainer>

      <FullLengthBox>
        <CheckboxView>
          <CheckBox
            testID={TestIds.crc_terms_and_conditions_checkbox}
            style={{ marginLeft: 12 }}
            tintColors={{ true: '#9b1e26' }}
            value={isAgree}
            onValueChange={() => {
              setIsAgree(!isAgree);
            }}
          >
            <CustomText
              testID={TestIds.cc_i_agree_text}
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_20}
            >
              I agree to all the{" "}
              <Text
                testID={TestIds.cc_terms_and_conditions_text}
                style={ClickableTextStyle}
                onPress={() => {
                  navigation.navigate(NavigationUrl.CustomWebPage, {
                    isVisibleHeader: false,
                    title: "",
                    subTitle: "",
                    isVisibleDone: false,
                    webViewUrl:
                      "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/termsAndCondition.html?alt=media&token=2e638c7f-e66b-46d5-ae0e-a3b69a2889b0",
                  });
                }}
              >
                Terms & Conditions{"  "}
              </Text>
              of IDFC FIRST Credit Card.
            </CustomText>
          </CheckBox>
        </CheckboxView>
      </FullLengthBox>

      <MarginTopBox>
        {/* we will do avail offer api call on Press and then navigate to pre-approved
          and on pre-approved screen the api call will directly give the availed */}
        <CustomButton
          testID={TestIds.crc_ApplyNow_button}
          buttonPress={() => {
            if (isDirectorRelated == "") {
              setToggleInfo(true);
            } else {
              navigation.navigate(NavigationUrl.PreApprovedOffersId, {
                isApplied: true,
              });
              // navigation.navigate(NavigationUrl.PreApprovedOffersId, { applied: "applied" });
              setSession({ ...session, availedCardFlag: response.flag });
            }
          }}
          disabled={
            workEmailId &&
              !isErrorWorkEmail &&
              completeAddress &&
              !isCompleteAddressError &&
              pinCode &&
              !isPinCodeError &&
              isOTPVerified &&
              (isDirectorRelated == "Radio 1" ? fullNameOfficial && customerRelation : isDirectorRelated) &&
              isAgree
              ? false
              : true
          }
          style={{ marginBottom: 32, marginTop: 16, width: 360, height: 60 }}
          title={StringsOfLanguages.APPLYNOW_CREDITCARD.APPLY_NOW}
        />
      </MarginTopBox>
    </View>
  );
};

export default CreditCard;
