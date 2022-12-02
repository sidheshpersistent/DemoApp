// import {IconButton} from '@idfc/ccl-mobile';
import React from "react";
import { View } from "react-native";
import { emailCheck, mobileDedupe, panCheck } from "../../../Assets/Images";
import Popup from "../Popup";
import { Colors } from "../../../Utils";
import { CustomText, CustomTextInput } from "../../../Components";
import { BodyContainer, SideIcon } from "../PopupStyle";
import { TestIds } from "../../../Utils/Constants";

const PopupTextInput = (props) => {
  const {
    TextInputvalue,
    popupType,
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    animationIn,
    popupIcon,
    TextInputPlaceholder,
    onchangeText,
    testID_submit,
    testID_cancel,
    isError,
    cancelButtonPress,
    maxLength,
    errorMessage,
    disabled,
  } = props;

  const SideIconSource =
    popupType == "mobile"
      ? mobileDedupe
      : popupType == "pan"
      ? panCheck
      : emailCheck;

  const keyboardType =
    popupType == "mobile"
      ? "numeric"
      : popupType == "pan"
      ? "default"
      : "email-address";

  // const ERROR_TEXT = {
  //   MOBILE: 'Please renter mobile number to proceed',
  //   PAN: 'Permanent Account Number (PAN)',
  //   EMAIL: 'Please re-enter email address to proceed',
  // };

  // NOTE: valid popup types are= mobile,email,pan
  return (
    <Popup
      disabled={disabled}
      testID_submit={testID_submit}
      testID_cancel={testID_cancel}
      animationIn={animationIn}
      popupIcon={popupIcon}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{ marginBottom: 34 }}>
            <CustomText
              testID={TestIds.pti_popup_info_text}
              fontSize={16}
              lineHeight={24}
              color={Colors.NEW_GREY_800.text}
            >
              {popupInfo}
            </CustomText>
          </View>

          <CustomTextInput
            isError={isError}
            value={TextInputvalue}
            testID={TestIds.pti_popup_text_input}
            keyboardType={keyboardType}
            label={TextInputPlaceholder}
            errorMessage={errorMessage}
            suffix={<SideIcon source={SideIconSource} />}
            labelStyle={{
              color: isError == "error" ? Colors.ERROR : Colors.GRAY,
              opacity: isError == "error" ? 1 : 0.32,
            }}
            textInputProps={{
              onChangeText:
                popupType == "pan"
                  ? (e) => (e.length < 11 ? onchangeText(e) : null)
                  : onchangeText,
              value: TextInputvalue,

              style: {
                color: isError == "error" ? Colors.ERROR : Colors.GRAY,
              },
              autoComplete: "off",
              autoCapitalize: "characters",
              maxLength: maxLength,
            }}
            inputBorderProps={{
              style: {
                borderBottomColor:
                  isError == "error" ? Colors.ERROR : Colors.GRAY,
                opacity: isError == "error" ? 1 : 0.32,
              },
            }}
          ></CustomTextInput>
        </BodyContainer>
      }
      ButtonText={ButtonText}
      buttonPress={() => buttonPress()}
      cancelButtonPress={cancelButtonPress}

      // cancelButtonPress={()=> cancelButtonPress()}
    />
  );
};

export default PopupTextInput;
