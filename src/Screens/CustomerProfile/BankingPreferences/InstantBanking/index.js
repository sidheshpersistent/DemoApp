import React, { useEffect, useRef } from "react";

import { Image, TouchableOpacity, View } from "react-native";

import CustomTextInput from "../../../../Components/CustomTextInput/CustomTextInput";
import { qrIcon, right_icon } from "../../../../Assets/Images";
import { Card, CustomText } from "../../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  TestIds,
} from "../../../../Utils";
import NavigationUrl from "../../../../Utils/NavigationUrl";
import useSession from "../../../../App/useSession";
import { CardMargin, QRContainer, QRLeft, QRRight } from "./styled";
import { StringsOfLanguages } from "../../../../Localization";
import { timeoutConst } from "../../../../Utils/Constants";

const InstantBanking = (props) => {
  const { navigation } = props;
  const { session, setSession } = useSession();
  const { inputAccountNumber,Success } =
    session.customerProfile.bankingPreference;

  const prevSession = session;

  const bankingPreferenceContext =
    prevSession.customerProfile.bankingPreference;

  const totalField = useRef(0);
  const startScan = () => {
    navigation.navigate(NavigationUrl.Scanner);
  };

  useEffect(() => {
    totalFieldToFill();
  }, []);
  useEffect(() => {
    const timeOut=setTimeout(()=>{
      totalFieldToFill();
    },timeoutConst.VALUE_8000)
  return()=>{
    clearTimeout(timeOut)
  }
}, []);

useEffect(()=>{
  prevSession.progressLoader=prevSession.progressLoader+1
  setSession({...session,prevSession})
},[])


  function totalFieldToFill () {
    totalField.current = 2;

    calcPercentValue();
  };

  function calcPercentValue () {
    const eachFieldValue = 33 / totalField.current;
    let total = 33;
    if (inputAccountNumber.length > 10) {
      total = total + eachFieldValue;
    }
    if (Success) {
      total = total + eachFieldValue;
    }

    calculateProgressValue(Math.trunc(total));
  };

 
  function calculateProgressValue (value) {
    setSession({ ...session, progressPercent: value });
  };

  return (
    <View>
      <CustomText
        testID={TestIds.ib_please_assign}
        fontSize={Font_Size.SIZE_10}
        letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
        fontFamily={FontFamily.INTER_BOLD}
        style={{ color: Colors.NEW_GREY_100 }}
        marginBottom={16}
      >
        {StringsOfLanguages.INSTABANKING.PLEASE_ASSIGN}
      </CustomText>
      <Card>
        <QRContainer>
          <QRLeft>
            <Image
              style={{ width: 28, height: 28, marginRight: 12 }}
              source={qrIcon}
            />
            <View style={{ width: "75%" }}>
              <CustomText
                testID={TestIds.ib_scan_qr}
                fontSize={Font_Size.SIZE_12}
                fontFamily={FontFamily.Inter_REGULAR}
                lineHeight={Line_Height.HEIGHT_18}
                letterSpacing={LetterSpacing.ZERO_POINT_TWO}
              >
                {StringsOfLanguages.INSTABANKING.SCAN_QR}
                <CustomText
                  fontSize={Font_Size.SIZE_12}
                  fontFamily={FontFamily.Inter_SemiBold}
                  lineHeight={Line_Height.HEIGHT_18}
                >
                  {StringsOfLanguages.INSTABANKING.PLATINUM_KIT + " "}
                </CustomText>
                <CustomText
                  fontSize={Font_Size.SIZE_12}
                  fontFamily={FontFamily.Inter_REGULAR}
                  lineHeight={Line_Height.HEIGHT_18}
                >
                  {StringsOfLanguages.INSTABANKING.TO_PROCEED}
                </CustomText>
              </CustomText>
            </View>
          </QRLeft>
          <TouchableOpacity
            testID={TestIds.ib_scan_button}
            onPress={() => startScan()}
          >
            <QRRight>
              <CustomText
                testID={TestIds.ib_scan_now}
                fontSize={Font_Size.SIZE_14}
                fontFamily={FontFamily.Inter_SemiBold}
                color={Colors.MAROON}
              >
                {StringsOfLanguages.INSTABANKING.SCAN_NOW}
              </CustomText>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  marginLeft: 8,
                }}
                source={right_icon}
              />
            </QRRight>
          </TouchableOpacity>
        </QRContainer>
      </Card>
      <CustomText
        testID={TestIds.ib_or}
        fontSize={Font_Size.SIZE_14}
        fontFamily={FontFamily.Inter_SemiBold}
        marginTop={25}
        marginBottom={25}
        align="center"
      >
        {StringsOfLanguages.INSTABANKING.OR}
      </CustomText>
      <CardMargin>
        <CustomTextInput
          testID={TestIds.ib_account_number_input}
          value={inputAccountNumber}
          errorMessage={
            inputAccountNumber.length < 11 && inputAccountNumber != ""
              ? true
              : false
          }
          onBlur={() => totalFieldToFill()}
          onChangeText={(e) => {
            bankingPreferenceContext.inputAccountNumber = e.replace(
              /([^0-9])/g,
              ""
            );
            setSession({ ...session, prevSession });
          }}
         
          textInputProps={{
            onChangeText: (e) => {
              bankingPreferenceContext.inputAccountNumber = e.replace(
                /([^0-9])/g,
                ""
              );
              setSession({ ...session, prevSession });
            },
            value: inputAccountNumber,
            maxLength: 18,
            style: {
              color:
                inputAccountNumber.length < 11 && inputAccountNumber != ""
                  ? Colors.ERROR
                  : Colors.BLACK,
            },
          }}
          label={
            inputAccountNumber.length < 11 && inputAccountNumber != ""
              ? "Invalid Account Number"
              : StringsOfLanguages.INSTABANKING.ENTER_ACCOUNT
          }
          labelStyle={{
            color:
              inputAccountNumber.length < 11 && inputAccountNumber != ""
                ? Colors.ERROR
                : Colors.BLACK,
          }}
        />
      </CardMargin>
      <CardMargin />
    </View>
  );
};

export default InstantBanking;
