import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { arrowBack, help, info } from "../../Assets/Images";
import {
  CustomButton,
  CustomPasswordTextInput,
  CustomText,
  CustomTextInput,
  Popup,
} from "../../Components";
import { StringsOfLanguages } from "../../Localization";
import {
  Colors,
  FontFamily,
  Font_Size,
  Icon_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
  TestIds,
} from "../../Utils";
import {
  HeaderContainer,
  CloseAndSave,
  IconClose,
  SaveAndExit,
  CongratsTextStyle,
  MarginBox,
  TitleContainer,
  MarginTopBox,
  AlignedContainer,
  ComponentContainer,
  BottomContainer,
  infoIconStyle,
  PasswordIconStyle,
} from "./styled";
// import { PasswordInput } from "@idfc/ccl-mobile/lib/module/v2";
// import { IconButton } from "@idfc/ccl-mobile";

import { isValidAadhar } from "../../Utils/ValidationUtils";
import {
  HEADING,
  SUB_HEADING,
} from "../CustomerIdentificationDetails/constants";
import { AdharTooltipHindden, EyeButton } from "../CustomerIdentificationDetails/styled";
import Icon from "react-native-vector-icons/Ionicons";

const Transactions = () => {
  const navigation = useNavigation();
  const [aadharNo, setAadharNo] = useState("");
  const [adharVisible, setAdharVisible] = useState(false);
  const [toggleMask, setToggleMask] = useState(false);
  const [isErrorAadhar, setIsErrorAadhar] = useState(false);
  const [accNo, setAccNo] = useState("");
  const [isAccNoError, setIsAccNoError] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setAadharNo("");
      setAccNo("");
    }, [])
  );

  const setAadharValidation = async (aadhar) => {
    var isAadhar = await isValidAadhar(aadhar);
    if (isAadhar) {
      setIsErrorAadhar(false);
    } else {
      setIsErrorAadhar("error");
    }
  };
  //TODO: regex needs to be changed
  const setAccountNumValidation = async (number) => {
    const test = /^[0-9]*$/g.test(number);
    // alert(test);
    if (number.length > 8 && number.length < 19) {
      if (test) {
        setIsAccNoError(false);
      } else {
        setIsAccNoError("error");
      }
    } else {
      setIsAccNoError("error");
    }
  };

  return (
    <>
      <HeaderContainer>
        <CloseAndSave>
          <TouchableOpacity
            testID={TestIds.tra_back_button}
            onPress={() => navigation.goBack()}
          >
            <IconClose source={arrowBack} />
          </TouchableOpacity>
          <SaveAndExit></SaveAndExit>
        </CloseAndSave>

        <MarginBox>
          <TitleContainer>
            <Text testID={TestIds.km_text_title} style={CongratsTextStyle}>
              {StringsOfLanguages.TRANSACTIONS.TRA_TITLE}
            </Text>
          </TitleContainer>
        </MarginBox>
      </HeaderContainer>
      {/*TODO: inline style remove*/}
      <AlignedContainer style={{ paddingLeft: 30, paddingRight: 30 }}>
        <MarginTopBox>
          <CustomText
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_12}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.ZERO_POINT_ONE}
            color={Colors.NEW_GREY_600.text}
          >
            {StringsOfLanguages.TRANSACTIONS.TRA_CUST_DETAILS}
          </CustomText>
        </MarginTopBox>

        <MarginTopBox>
          <CustomPasswordTextInput
            value={aadharNo}
            testID={TestIds.cid_aadhar}
            onBlur={() => keyboardBlurHandle()}
            onFocus={() => keyboardFocusHandle()}
            // testID={TestIds.lg_password_input}
            inputBorderProps={{
              style:
                isErrorAadhar == 'error' && aadharNo != ''
                  ? { borderBottomColor: Colors.ERROR }
                  : { borderBottomColor: Colors.GRAY },
            }}
            fontSize={16}
            onChangeText={text => {
              setAadharNo(text);
              setAadharValidation(text);
            }}
            label={
              aadharNo && aadharNo.length < 12
                ? StringsOfLanguages.CID.CID_ERROR_ADHAR
                : isErrorAadhar == 'error' && aadharNo
                  ? StringsOfLanguages.CID.CID_ERROR_VID
                  : StringsOfLanguages.CID.CID_FIELD_AADHAAR
            }
            labelStyle={
              isErrorAadhar == 'error' && aadharNo != ''
                ? { color: Colors.ERROR }
                : { color: Colors.GRAY }
            }
            secureTextEntry={toggleMask}
            passwordInputProps={{
              style:
                isErrorAadhar == 'error' && aadharNo != ''
                  ? { color: Colors.ERROR }
                  : { color: Colors.GRAY },
              selectionColor: 'black',
              maxLength: 16,
            }}
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

                <AdharTooltipHindden
                  onPress={() => setAdharVisible(true)}>
                  <Image style={infoIconStyle} source={help} />
                </AdharTooltipHindden>
              </View>
            }
          />
        </MarginTopBox>
        {/* <MarginTopBox>
          <PasswordInput
            value={aadharNo}
            testID={TestIds.tra_adhar_no}
            inputBorderProps={{
              opacity: isAccNoError == "error" && accNo != "" ? 1 : 0.32,
              style:
                isErrorAadhar == "error" && aadharNo != ""
                  ? { borderBottomColor: Colors.ERROR }
                  : { borderBottomColor: Colors.GRAY },
            }}
            fontSize={20}
            onChangeText={(text) => {
              setAadharNo(text);
              setAadharValidation(text);
            }}
            label={
              aadharNo && aadharNo.length < 12
                ? StringsOfLanguages.TRANSACTIONS.TRA_ERROR_ADHAR
                : isErrorAadhar == "error" && aadharNo
                ? StringsOfLanguages.TRANSACTIONS.TRA_ERROR_VID
                : StringsOfLanguages.TRANSACTIONS.TRA_AADHAAR_NUMBER
            }
            labelStyle={
              isErrorAadhar == "error" && aadharNo != ""
                ? { color: Colors.ERROR }
                : { color: Colors.GRAY }
            }
            showPassword={toggleMask}
            passwordInputProps={{
              style:
                isErrorAadhar == "error" && aadharNo != ""
                  ? { color: Colors.ERROR }
                  : { color: Colors.GRAY },
              selectionColor: "black",
              maxLength: 16,
            }}
            suffix={
              <View
                style={PasswordIconStyle}
              >
                <IconButton
                  primaryColor={Colors.MAROON_DARK}
                  iconColor={"maroon"}
                  iconType={toggleMask ? "Eye2Off" : "Eye2"}
                  buttonSize={24}
                  transparent
                  iconSize={Icon_Size.NORMAL}
                  onPress={() => {
                    setToggleMask(!toggleMask);
                  }}
                />
                <AdharTooltipHindden onPress={() => setAdharVisible(true)}>
                  <Image style={infoIconStyle} source={help} />
                </AdharTooltipHindden>
              </View>
            }
          />
        </MarginTopBox> */}

        <MarginTopBox>
          <CustomTextInput
            testID={TestIds.tra_acc_no}
            value={accNo}
            label={
              isAccNoError == "error" && accNo != ""
                ? StringsOfLanguages.TRANSACTIONS.TRA_ACCOUNT_NUMBER_ERROR
                : StringsOfLanguages.TRANSACTIONS.TRA_ACCOUNT_NUMBER
            }
            //error lable is missing
            labelStyle={{
              color:
                isAccNoError == "error" && accNo != ""
                  ? Colors.MAROON
                  : Colors.GRAY,
            }}
            inputBorderProps={{
              style: {
                borderBottomColor:
                  isAccNoError == "error" && accNo != ""
                    ? Colors.ERROR
                    : Colors.GRAY,
                opacity: isAccNoError == "error" && accNo != "" ? 1 : 0.32,
              },
            }}
            keyboardType="number-pad"
            onChangeText={(text) => {
              setAccountNumValidation(text);
              setAccNo(text);


            }}

            textInputProps={{
              style: {
                color:
                  isAccNoError == "error" && accNo != ""
                    ? Colors.ERROR
                    : Colors.GRAY,
              },
              maxLength: 18,
            }}
            errorColor={Colors.MAROON}
          />
        </MarginTopBox>
      </AlignedContainer>
      <BottomContainer>
        <CustomButton
          buttonType={"secondary"}
          maxWidth={"100%"}
          buttonPress={() => {
            navigation.navigate(NavigationUrl.DeclarationLinking);
          }}
          disabled={
            aadharNo && !isErrorAadhar && accNo && !isAccNoError ? false : true
          }
          style={{
            height: 60,
            width: 240
          }}
          title={StringsOfLanguages.TRANSACTIONS.TRA_AADHAAR_LINKING}
        />

        <CustomButton
          buttonPress={() => {
            navigation.navigate(NavigationUrl.DeclarationSeeding);
          }}
          maxWidth={"100%"}
          disabled={
            aadharNo && !isErrorAadhar && accNo && !isAccNoError ? false : true
          }
          style={{
            height: 60,
            width: 240,
          }}
          title={StringsOfLanguages.TRANSACTIONS.TRA_SEEDING}
        />
      </BottomContainer>
      {/* </KeyboardAvoidingView> */}

      {/* show PAN popup dialog  here */}
      {
        <Popup
          testID_submit={TestIds.tra_adhar_pop_up_submit}
          testID_cancel={TestIds.tra_adhar_pop_up_cancel}
          animationIn="bounceIn"
          popupIcon={info}
          isVisible={adharVisible}
          Heading={HEADING.ADHAR}
          ButtonText="Ok, Got it"
          buttonPress={() => setAdharVisible(!adharVisible)}
          component={
            <ComponentContainer>
              <CustomText
                marginBottom={20}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                color={Colors.NEW_GREY_800.text}
              >
                {SUB_HEADING.ADHAR_INFO}
              </CustomText>
            </ComponentContainer>
          }
        />
      }
    </>
  );
};

export default Transactions;
