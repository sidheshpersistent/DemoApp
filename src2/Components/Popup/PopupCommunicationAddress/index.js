import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { Colors } from "../../../Utils";
import { Font_Size, Line_Height, TestIds,CommonConstant, Account_Type } from "../../../Utils/Constants";
import CustomText from "../../CustomText/CustomText";
import Popup from "../../Popup/Popup";
import { BodyContainer } from "../PopupStyle";
import { CardMargin, PopupContainer } from "./styled";
import { StringsOfLanguages } from "../../../Localization";
import { CustomTextInput } from "../../../Components";

import NetworkManager from "../../../API/NetworkManager";
import { Endpoints } from "../../../API";
import { isValidPinCode, validation } from "../../../Utils/ValidationUtils";

const PopupCommunicationAddress = (props) => {
  const {
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    CancelButtonText,
    cancelButtonPress,
    animationIn,
    popupIcon,
    textColor,
    maxLength,
    testID_submit,
    testID_cancel,
    checkPincode,
    checkAddress1,
    checkAddress2,
    checkAddress3,
  } = props;

  const [pincode, setPincode] = useState(checkPincode);
  const [address1, setAddress1] = useState(checkAddress1);
  const [address2, setAddress2] = useState(checkAddress2);
  const [address3, setAddress3] = useState(checkAddress3);
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [country, setCountry] = useState("Country");
  const [pinError, setPinError] = useState("");
  const [label,setLabel]=useState(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_PINCODE)
  useEffect(() => {
    if (pincode && pincode.length == 6) {
      cityPincodeFinder();
    } else {
      setCity("City");
      setState("State");
      setCountry("Country");
    }
  }, [pincode]);
 function cityPincodeFinder() {
  let header = {
    appName: Account_Type.ASSISTED_SA,
    mobileNumber: ""
  }
    NetworkManager.IDFCNetworkGet(
      Endpoints.getCityStateByPin + pincode, header,
      (response) => {
       
        if (response?.status == CommonConstant.SUCCESS) {
          let data = response;
          setCity(data.city);
          setState(data.state);
          setCountry(data.country);
          setLabel(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_PINCODE)
          setPinError("");
        }
        else{
          if(response?.status == CommonConstant.ERROR){
            setLabel(response.message)
          }else{
            setLabel(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_WENT_WRONG)
          }

        }
      }
    );
  }

  const onPressButton = () => {
    let data = {
      pincode: pincode,
      address1: address1,
      address2: address2,
      address3: address3,
      city: city,
      state: state,
      country: country,
    };
    buttonPress(data);
  };
  const buttonDisableHandler = () => {
    if (
      pincode != "" &&
      pincode.length == 6 &&
      address1 != "" &&
      city != "City" &&
      state != "State" &&
      country != "Country"
    ) {
      return false;
    } else {
      return true;
    }
  };

  const pincodeHandler = (text) => {
    if(text!=""){
      setPinError("error");
      setLabel(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_INVALID_PINCODE)
    }
    else{
      setPinError("");
      setLabel(StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_PINCODE)
    }
    text.charAt(0) != 0 || text.charAt(0) == ""
      ? isValidPinCode(text)
        ? null
        : setPincode(text.replace(validation.pinCodeReplace.pattern, ""))
      : null;
  };

  return (
    <Popup
      testID_submit={testID_submit}
      testID_cancel={testID_cancel}
      style={PopupContainer}
      animationIn={animationIn}
      popupIcon={popupIcon}
      popupIconStyle={{}}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{ marginBottom: 34 }}>
            <CustomText
              testID={TestIds.nca_popuInfo}
              fontSize={Font_Size.SIZE_16}
              lineHeight={Line_Height.HEIGHT_24}
              color={Colors.NEW_GREY_800.text}
            >
              {popupInfo}
            </CustomText>
          </View>
          <CardMargin>
            <CustomTextInput
              testID={TestIds.nca_pincode}
              label={
               label
              }
              keyboardType="numeric"
              textColor={textColor}
              maxLength={maxLength}
              value={pincode}
              textInputProps={{
                maxLength:6,
                onChangeText: (text) => {
                  pincodeHandler(text);
                },
                value: pincode,

                style: {
                  color: pinError == "error" ? Colors.ERROR : Colors.GRAY,
                },
              }}
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    pinError == "error" ? Colors.LABEL_ERROR : Colors.GRAY,
                  opacity: pinError == "error" ? 1 : 0.32,
                },
              }}
              errorMessage={pinError == "error" ? true : false}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.nca_address1}
              isActive={false}
              isValue={false}
              label={StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_ADDRESS1}
              keyboardType="default"
              textColor={textColor}
              maxLength={maxLength}
              value={address1}
              textInputProps={{
                value: address1,
                onChangeText: (e) =>
                  setAddress1(e.replace(validation.address.pattern, "")),
              }}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.nca_address2}
              isActive={false}
              isValue={false}
              label={StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_ADDRESS2}
              keyboardType="default"
              textColor={textColor}
              maxLength={maxLength}
              value={address2}
              textInputProps={{
                value: address2,
                onChangeText: (e) =>
                  setAddress2(e.replace(validation.address.pattern, "")),
              }}
            />
          </CardMargin>
          <CardMargin>
            <CustomTextInput
              testID={TestIds.nca_address3}
              isActive={false}
              isValue={false}
              label={StringsOfLanguages.NEWCOMMUNICATIONADDRESS.NCA_ADDRESS3}
              keyboardType="default"
              textColor={textColor}
              maxLength={maxLength}
              value={address3}
              textInputProps={{
                value: address3,
                onChangeText: (e) =>
                  setAddress3(e.replace(validation.address.pattern, "")),
              }}
            />
          </CardMargin>

          <View style={{ margin: 16 }}>
            <CustomText
              testID={TestIds.nca_citytext}
              fontSize={Font_Size.SIZE_14}
            >
              {city} | {state} | {country}
            </CustomText>
          </View>
        </BodyContainer>
      }
      ButtonText={ButtonText}
      buttonPress={() => onPressButton()}
      disabled={buttonDisableHandler()}
      CancelButtonText={CancelButtonText}
      cancelButtonPress={() => cancelButtonPress()}
    />
  );
};

export default PopupCommunicationAddress;
