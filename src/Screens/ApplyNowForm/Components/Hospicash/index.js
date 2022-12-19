
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import useSession from "../../../../App/useSession";
import {
  CustomButton,
  CustomText,
  CustomTextInput
} from "../../../../Components";
import CustomDateInput from "../../../../Components/CustomDateInput/CustomDateInput";
import CustomDropDown from "../../../../Components/CustomDropDown/CustomDropDown";
import { StringsOfLanguages } from "../../../../Localization";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
  TestIds
} from "../../../../Utils";
import { PREAPPROVED_FLAG_TYPE } from "../../../../Utils/Constants";
import { addressCheck, allowOnlyNum, avoidNumNChar, dateFormat, minDate } from "../../../CustomerProfile/personalDetail/constants";
import { City_Data, nominee_Relation_Data, State_Data } from "../../constants";
import {
  AlignedContainer, BackgroundImageStyle, CardContainer, MarginTopBox, OfferBox,
  OfferBoxContainer,
  OfferImage,
  OfferText, WhiteBox
} from "./styled";

const Hospicash = ({ response }) => {
  const navigation = useNavigation();

  const { session, setSession } = useSession();
  const [isNomineAddressSame, setIsNomineAddressSame] = useState(true);
  const [nomineeDob, setNomineeDob] = useState("");
  const [isNomineeMinor, setIsNomineeMinor] = useState(false);
  const [isGuardianAdrressSame, setIsGuardianAdrressSame] = useState(true);
  const [nomineeName, setNomineeName] = useState("");
  const [confirmCheckbox, setConfirmCheckbox] = useState(true);
  const [termsCheckbox, setTermsCheckbox] = useState(true);
  const [insuredRelation, setInsuredRelation] = useState("");
  const [nomineePincode, setNomineePincode] = useState("");
  const [nomineeAddress1, setNomineeAddress1] = useState("");
  const [nomineeAddress2, setNomineeAddress2] = useState("");
  const [nomineeAddress3, setNomineeAddress3] = useState("");
  const [guardianPincode, setGuardianPincode] = useState("");
  const [guardianAddress1, setGuardianAddress1] = useState("");
  const [guardianAddress2, setGuardianAddress2] = useState("");
  const [guardianAddress3, setGuardianAddress3] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [nomineePinError, setNomineePinError] = useState("");
  const [guardianPinError, setGuardianPinError] = useState("");
  const [nomineeState, setNomineeState] = useState("");
  const [nomineeCity, setNomineeCity] = useState("");
  const [guardianState, setGuardianState] = useState("");
  const [guardianCity, setGuardianCity] = useState("");



  useEffect(() => {

    const getAge = (nomineeDob) =>
      Math.floor((new Date() - new Date(nomineeDob).getTime()) / 3.15576e10);
    const nomineeAge = getAge(nomineeDob);
    if (nomineeAge < 18) {
      setIsNomineeMinor(true);
    } else {
      setIsNomineeMinor(false);
    }
  }, [nomineeDob]);

  const pincodeHandler = (text) => {
    if (text.length < 6 && text != "") {
      setNomineePinError("error");
    } else {
      setNomineePinError("");
    }

    text.charAt(0) != 0 || text.charAt(0) == ""
      ? /[1-9]{1}[0-9]{6}/.test(text)
        ? null
        : setNomineePincode(text.replace(allowOnlyNum, ""))
      : null;
  };
  const pincodeHandler2 = (text) => {
    if (text.length < 6 && text != "") {
      setGuardianPinError("error");
    } else {
      setGuardianPinError("");
    }

    text.charAt(0) != 0 || text.charAt(0) == ""
      ? /[1-9]{1}[0-9]{6}/.test(text)
        ? null
        : setGuardianPincode(text.replace(allowOnlyNum, ""))
      : null;
  };

  const nomineeAddressCheck = () => {
    if (isNomineAddressSame) {
      return true;
    } else {
      if (
        nomineePincode != "" &&
        nomineeState != "" &&
        nomineeCity != "" &&
        nomineeAddress1 != ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const guardianAddressCheck = () => {
    if (isGuardianAdrressSame) {
      return true;
    } else {
      if (
        guardianPincode != "" &&
        guardianState != "" &&
        guardianCity != "" &&
        guardianAddress1 != ""
      ) {
        return true;
      } else {
        false;
      }
    }
  };

  const buttonActive = () => {
    if (
      nomineeName != "" &&
      insuredRelation != "" &&
      nomineeDob != "" &&
      termsCheckbox &&
      confirmCheckbox
    ) {
      if (!isNomineeMinor) {
        if (nomineeAddressCheck()) {
          return true
        } else {
          return false
        }

      } else {
        if (guardianName != "") {
          if (nomineeAddressCheck() && guardianAddressCheck()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };
  return (
    <View>
      <CardContainer>
        <BackgroundImageStyle
          borderRadius={12}
          source={response.backgroundImage}
        >
          <CustomText
            marginBottom={12}
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_24}
            lineHeight={Line_Height.HEIGHT_32}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_SIX}
            color={Colors.WHITE}
          >
            <CustomText
              marginBottom={12}
              fontFamily={FontFamily.Inter_Light}
              fontSize={Font_Size.SIZE_24}
              lineHeight={Line_Height.HEIGHT_32}
              letterSpacing={LetterSpacing.MINUS_ZERO_POINT_SIX}
              color={Colors.WHITE}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.ENROLL_IN}{" "}
            </CustomText>

            {response.CardData.cardName}
          </CustomText>
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            letterSpacing={LetterSpacing.ZERO_POINT_ONE}
            color={Colors.WHITE}
            marginBottom={14}
            fontSize={Font_Size.SIZE_14}
          >
            {response.CardData.cardSubtitle_1}
          </CustomText>
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            letterSpacing={LetterSpacing.ZERO_POINT_ONE}
            color={Colors.WHITE}
            marginBottom={5}
            fontSize={Font_Size.SIZE_12}
          >
            {response.CardData.cardSubtitle_2}
          </CustomText>
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            letterSpacing={LetterSpacing.ZERO_POINT_ONE}
            color={Colors.WHITE}
            marginBottom={5}
            fontSize={Font_Size.SIZE_12}
          >
            {response.CardData.cardSubtitle_3}
          </CustomText>

          <OfferBoxContainer>
            {response.CardData.Offers.map((item) => (
              <OfferBox key={item.id}>
                <OfferImage source={item.offerImg} />

                <OfferText>
                  <CustomText
                    fontFamily={FontFamily.Inter_REGULAR}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_THREE}
                    lineHeight={Line_Height.HEIGHT_20}
                    color={Colors.WHITE}
                  >
                    {item.offerData}
                  </CustomText>
                </OfferText>
              </OfferBox>
            ))}
          </OfferBoxContainer>
        </BackgroundImageStyle>
      </CardContainer>
      <AlignedContainer>
        <MarginTopBox>
          <CustomText
            fontSize={Font_Size.SIZE_16}
            fontFamily={FontFamily.Inter_REGULAR}
            lineHeight={Line_Height.HEIGHT_22}
          >
            {StringsOfLanguages.APPLYNOW_HOSPICASH.PLEASE}
            <CustomText
              fontSize={Font_Size.SIZE_16}
              fontFamily={FontFamily.Inter_SemiBold}
              lineHeight={Line_Height.HEIGHT_22}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.CHECK}
            </CustomText>
          </CustomText>
        </MarginTopBox>
        <MarginTopBox>
          <CustomTextInput
            disabled={true}
            value="Self"
            label={StringsOfLanguages.APPLYNOW_HOSPICASH.RELATIONSHIP_INSURED}
          />
        </MarginTopBox>
        <MarginTopBox>
          <MarginTopBox>
            <CustomText
              fontSize={Font_Size.SIZE_16}
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_22}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.PLEASE_FILL}
              <CustomText
                fontSize={Font_Size.SIZE_16}
                fontFamily={FontFamily.Inter_SemiBold}
                lineHeight={Line_Height.HEIGHT_22}
              >
                {StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_DETAIL}
              </CustomText>
            </CustomText>
          </MarginTopBox>
        </MarginTopBox>

        <MarginTopBox>
          <CustomTextInput
            testID={TestIds.hc_nominee_name}
            value={nomineeName}
            label={StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_NAME}
            textInputProps={{
              onChangeText: (e) =>
                setNomineeName(e.replace(avoidNumNChar, "")),
              value: nomineeName,
            }}
          />
        </MarginTopBox>
        <MarginTopBox>
          <CustomDropDown
            testID={TestIds.hc_insured_relation}
            label={StringsOfLanguages.APPLYNOW_HOSPICASH.RELATIONSHIP_INSURED}
            options={nominee_Relation_Data}
            labelStyle={{ color: Colors.NEW_GREY_800.text }}
            iconColor={Colors.MAROON_DARK}
            onChange={(e) => setInsuredRelation(e)}
            value={insuredRelation}
          />
        </MarginTopBox>
        <MarginTopBox>
          <CustomDateInput
            testID={TestIds.hc_nomineeDOB}
            dateFormat={dateFormat}
            label={StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_DOB}
            minDate={minDate}
            maxDate={new Date(new Date().getTime()).setDate(
              new Date().getDate() - 2
            )}
            selectedDate={nomineeDob}
            onSetDatePress={(e) => setNomineeDob(e)}
          // datePickerProps={{ onSetDatePress: (e) => setNomineeDob(e) }}
          />
        </MarginTopBox>
      </AlignedContainer>
      <WhiteBox>
        <AlignedContainer>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              testID={TestIds.hc_is_nomineeAddressSame}
              value={isNomineAddressSame}
              tintColors={{ true: '#9b1e26' }}
              style={{ marginRight: 10 }}
              onValueChange={() => setIsNomineAddressSame(!isNomineAddressSame)}
            />

            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_20}>
              {StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_ADDRESS_SAME}
            </CustomText>
          </View>
        </AlignedContainer>
      </WhiteBox>

      {!isNomineAddressSame ? (
        <AlignedContainer>
          <MarginTopBox>
            <CustomText
              fontSize={Font_Size.SIZE_10}
              fontFamily={FontFamily.Inter_REGULAR}
              style={{ color: Colors.NEW_GREY_100.text }}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_ADDRESS}
            </CustomText>
          </MarginTopBox>
          <MarginTopBox>
            <CustomTextInput
              testID={TestIds.hc_nominee_pincode}
              keyboardType={"numeric"}
              label={
                nomineePinError
                  ? StringsOfLanguages.APPLYNOW_HOSPICASH.INVALID_PINCODE
                  : StringsOfLanguages.APPLYNOW_HOSPICASH.PINCODE
              }
              value={nomineePincode}
              textInputProps={{
                onChangeText: (text) => {
                  pincodeHandler(text);
                },
                value: nomineePincode,

                style: {
                  color:
                    nomineePinError == "error" ? Colors.ERROR : Colors.GRAY,
                },
              }}
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    nomineePinError == "error"
                      ? Colors.LABEL_ERROR
                      : Colors.GRAY,
                  opacity: nomineePinError == "error" ? 1 : 0.32,
                },
              }}
              errorMessage={nomineePinError == "error" ? true : false}
            />
          </MarginTopBox>

          <MarginTopBox>
            <CustomDropDown
              testID={TestIds.hc_nominee_state}
              label={StringsOfLanguages.APPLYNOW_HOSPICASH.STATE}
              defaultSelectedItem={nomineeState}
              options={State_Data}
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
              onChange={(e) => setNomineeState(e)}
            />
          </MarginTopBox>
          <MarginTopBox>
            <CustomDropDown
              testID={TestIds.hc_nominee_city}
              label={StringsOfLanguages.APPLYNOW_HOSPICASH.CITY}

              defaultSelectedItem={nomineeCity}
              options={City_Data}
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
              onChange={(e) => setNomineeCity(e)}
            />
          </MarginTopBox>
          <MarginTopBox>
            <CustomTextInput
              testID={TestIds.hc_nominee_address1}
              value={nomineeAddress1}
              textInputProps={{
                onChangeText: (text) =>
                  setNomineeAddress1(text.replace(addressCheck, "")),
                value: nomineeAddress1,
              }}
              label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS1}
            />
          </MarginTopBox>
          <MarginTopBox>
            <CustomTextInput
              testID={TestIds.hc_nominee_address2}
              value={nomineeAddress2}
              textInputProps={{
                onChangeText: (text) =>
                  setNomineeAddress2(text.replace(addressCheck, "")),
                value: nomineeAddress2,
              }}
              label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS2}
            />
          </MarginTopBox>
          <MarginTopBox>
            <CustomTextInput
              testID={TestIds.hc_nominee_address_3}
              value={nomineeAddress3}
              textInputProps={{
                onChangeText: (text) =>
                  setNomineeAddress3(text.replace(addressCheck, "")),
                value: nomineeAddress3,
              }}
              label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS3}
            />
          </MarginTopBox>
        </AlignedContainer>
      ) : null}

      <AlignedContainer>
        <CustomText
          fontSize={Font_Size.SIZE_14}
          lineHeight={Line_Height.HEIGHT_20}
          fontFamily={FontFamily.Inter_REGULAR}
        >
          {StringsOfLanguages.APPLYNOW_HOSPICASH.NOMINEE_DETAILS_PROVIDED}
        </CustomText>
      </AlignedContainer>
      {isNomineeMinor ? (
        <>
          <AlignedContainer>
            <CustomText
              fontSize={Font_Size.SIZE_14}
              lineHeight={Line_Height.HEIGHT_20}
              fontFamily={FontFamily.Inter_REGULAR}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.SINCE_NOMINEE}
              <CustomText
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                fontFamily={FontFamily.Inter_SemiBold}
              >
                {StringsOfLanguages.APPLYNOW_HOSPICASH.PLEASE_ENTER}
              </CustomText>
            </CustomText>
            <MarginTopBox>
              <CustomTextInput
                testID={TestIds.hc_guardian_name}
                label={StringsOfLanguages.APPLYNOW_HOSPICASH.GUARDIAN_NAME}
                value={guardianName}
                textInputProps={{
                  onChangeText: (e) =>
                    setGuardianName(e.replace(avoidNumNChar, "")),
                  value: guardianName,
                }}
              />
            </MarginTopBox>
          </AlignedContainer>

          <WhiteBox>
            <AlignedContainer>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  testID={TestIds.hc_is_guardian_address}
                  onValueChange={() =>
                    setIsGuardianAdrressSame(!isGuardianAdrressSame)
                  }
                  tintColors={{ true: '#9b1e26' }}
                  style={{ marginRight: 10 }}
                  value={isGuardianAdrressSame}
                />
                <CustomText
                  fontFamily={FontFamily.Inter_REGULAR}
                  lineHeight={Line_Height.HEIGHT_20}>
                  {StringsOfLanguages.APPLYNOW_HOSPICASH.GUARDIAN_ADDRESS_SAME}
                </CustomText>
              </View>
            </AlignedContainer>
          </WhiteBox>

          {!isGuardianAdrressSame ? (
            <AlignedContainer>
              <MarginTopBox>
                <CustomText
                  fontSize={Font_Size.SIZE_10}
                  fontFamily={FontFamily.Inter_REGULAR}
                  style={{ color: Colors.NEW_GREY_100.text }}
                  letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                >
                  {StringsOfLanguages.APPLYNOW_HOSPICASH.GUARDIAN_ADDRESS}
                </CustomText>
              </MarginTopBox>
              <MarginTopBox>
                <CustomTextInput
                  testID={TestIds.hc_guardian_pincode}
                  keyboardType="numeric"
                  label={
                    guardianPinError
                      ? StringsOfLanguages.APPLYNOW_HOSPICASH.INVALID_PINCODE
                      : StringsOfLanguages.APPLYNOW_HOSPICASH.PINCODE
                  }
                  value={guardianPincode}
                  textInputProps={{
                    onChangeText: (text) => {
                      pincodeHandler2(text);
                    },
                    value: guardianPincode,

                    style: {
                      color:
                        guardianPinError == "error"
                          ? Colors.ERROR
                          : Colors.GRAY,
                    },
                  }}
                  inputBorderProps={{
                    style: {
                      borderBottomColor:
                        guardianPinError == "error"
                          ? Colors.LABEL_ERROR
                          : Colors.GRAY,
                      opacity: guardianPinError == "error" ? 1 : 0.32,
                    },
                  }}
                  errorMessage={guardianPinError == "error" ? true : false}
                />
              </MarginTopBox>

              <MarginTopBox>
                <CustomDropDown
                  testID={TestIds.hc_guardian_state}
                  label={StringsOfLanguages.APPLYNOW_HOSPICASH.STATE}
                  defaultSelectedItem={guardianState}
                  options={State_Data}
                  labelStyle={{ color: Colors.NEW_GREY_800.text }}
                  iconColor={Colors.MAROON_DARK}
                  onChange={(e) => setGuardianState(e)}
                />
              </MarginTopBox>
              <MarginTopBox>
                <CustomDropDown
                  testID={TestIds.hc_guardian_city}
                  label={StringsOfLanguages.APPLYNOW_HOSPICASH.CITY}
                  defaultSelectedItem={guardianCity}
                  options={City_Data}
                  labelStyle={{ color: Colors.NEW_GREY_800.text }}
                  iconColor={Colors.MAROON_DARK}
                  onChange={(e) => setGuardianCity(e)}
                />
              </MarginTopBox>
              <MarginTopBox>
                <CustomTextInput
                  testID={TestIds.hc_guardian_address1}
                  label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS1}
                  value={guardianAddress1}
                  textInputProps={{
                    onChangeText: (e) =>
                      setGuardianAddress1(e.replace(addressCheck, "")),
                    value: guardianAddress1,
                  }}
                />
              </MarginTopBox>
              <MarginTopBox>
                <CustomTextInput
                  label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS2}
                  value={guardianAddress2}
                  testID={TestIds.hc_guardian_address2}
                  textInputProps={{
                    onChangeText: (e) =>
                      setGuardianAddress2(e.replace(addressCheck, "")),
                    value: guardianAddress2,
                  }}
                />
              </MarginTopBox>
              <MarginTopBox>
                <CustomTextInput
                  label={StringsOfLanguages.APPLYNOW_HOSPICASH.ADDRESS3}
                  value={guardianAddress3}
                  testID={TestIds.hc_guardian_address3}
                  textInputProps={{
                    onChangeText: (e) =>
                      setGuardianAddress3(e.replace(addressCheck, "")),
                    value: guardianAddress3,
                  }}
                />
              </MarginTopBox>
            </AlignedContainer>
          ) : null}
        </>
      ) : null}

      <WhiteBox>
        <AlignedContainer>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              testID={TestIds.hc_terms_checkbox}
              value={true}
              onValueChange={() => {
                setTermsCheckbox(!termsCheckbox);
              }}
              style={{ marginRight: 10 }}
              tintColors={{ true: '#9b1e26' }}
            />
            <CustomText
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
            >
              {StringsOfLanguages.APPLYNOW_HOSPICASH.IDFC_TERMS}
              <Text
                testID={TestIds.hc_terms_text}
                onPress={() => {
                  navigation.navigate(NavigationUrl.CustomWebPage, {
                    isVisibleHeader: false,
                    title: "",
                    subTitle: "",
                    isVisibleDone: false,
                    webViewUrl: response.terms

                  });
                }}
              >
                <CustomText
                  fontSize={Font_Size.SIZE_14}
                  color={Colors.MAROON}
                  fontFamily={FontFamily.Inter_SemiBold}
                >
                  {StringsOfLanguages.APPLYNOW_HOSPICASH.TERMS + " "}
                </CustomText>
              </Text>

              <CustomText
                fontSize={Font_Size.SIZE_14}
                fontFamily={FontFamily.Inter_REGULAR}
              >
                {StringsOfLanguages.APPLYNOW_HOSPICASH.OF_IDFC}
              </CustomText>
            </CustomText>
          </View>
        </AlignedContainer>
      </WhiteBox>

      <WhiteBox>
        <AlignedContainer>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              testID={TestIds.hc_declaration_checkbox}
              value={true}
              onValueChange={() => {
                setConfirmCheckbox(!confirmCheckbox);
              }}
              style={{ marginRight: 10 }}
              tintColors={{ true: '#9b1e26' }}
            />
            <View>
              <Text>{StringsOfLanguages.APPLYNOW_HOSPICASH.I_CONFIRM}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  testID={TestIds.hc_declaration_text}
                  onPress={() => {
                    navigation.navigate(NavigationUrl.CustomWebPage, {
                      isVisibleHeader: false,
                      title: "",
                      subTitle: "",
                      isVisibleDone: false,
                      webViewUrl: response.declaration

                    });
                  }}
                  style={{
                    color: Colors.MAROON,
                    fontFamily: FontFamily.Inter_SemiBold,
                    lineHeight: Line_Height.HEIGHT_20,
                    fontSize: Font_Size.SIZE_14,
                  }}
                >
                  {StringsOfLanguages.APPLYNOW_HOSPICASH.CLICK_HERE}
                </Text>
                <Text
                  marginLeft={50}
                  lineHeight={Line_Height.HEIGHT_20}
                  fontSize={Font_Size.SIZE_14}
                  fontFamily={FontFamily.Inter_REGULAR}
                >
                  {StringsOfLanguages.APPLYNOW_HOSPICASH.TO_DOWNLOAD}
                </Text>
              </View>
            </View>
          </View>
        </AlignedContainer>
      </WhiteBox>

      <MarginTopBox>
        <CustomButton
          testID={TestIds.hc_apply_now_button}
          buttonPress={() => {
            navigation.navigate(NavigationUrl.PreApprovedOffersId, {
              isApplied: true,
            });
            setSession({ ...session, availedCardFlag: PREAPPROVED_FLAG_TYPE.HOSPICASH });
          }}
          style={{ marginBottom: 32, padding: 15, width: 280 }}
          disabled={!buttonActive()}
          title={StringsOfLanguages.APPLYNOW_HOSPICASH.APPLY_NOW}
        />
      </MarginTopBox>
    </View>
  );
};

export default Hospicash;