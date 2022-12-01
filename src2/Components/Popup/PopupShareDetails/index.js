import React from "react";
import { Text, View } from "react-native";
import { emailCheck } from "../../../Assets/Images";
import Popup from "../Popup";
import { Colors } from "../../../Utils";
import { CustomText, CustomTextInput } from "../..";
import { BodyContainer, SideIcon } from "../PopupStyle";
import { TestIds } from "../../../Utils/Constants";
import { StringsOfLanguages } from "../../../Localization";
import { Card } from "../../../Components";
import { accDetailBox, AccDetailsTextStyle, AccDetailsValueStyle, boxCard, boxFlex, boxMarging, CardMargin, Label, LabelText } from "./styled";

const PopupShareDetails = (props) => {
  const {
    value,
    popupType,
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    animationIn,
    popupIcon,
    onchangeText,
    testID_submit,
    testID_cancel,
    isError,
    cancelButtonPress,
    maxLength,
    userName,
    ifscNo,
    accNo,
    branch,
    enableSubmit,
    closeButton,
  } = props;
  const SideIconSource = emailCheck;
  const keyboardType = "email-address";

  return (
    <Popup
      testID_submit={testID_submit}
      testID_cancel={testID_cancel}
      animationIn={animationIn}
      popupIcon={popupIcon}
      isVisible={isVisible}
      Heading={Heading}
      isClose={true}
      closeButton={closeButton}
      onClose={() => buttonPress()}
      component={
        <BodyContainer>
          <CustomText
            testID={TestIds.pti_popup_info_text}
            style={{ marginBottom: 16 }}
            fontSize={14}
            lineHeight={16}
            color={Colors.NEW_GREY_800.text}
          >{popupInfo}</CustomText>

          <CustomTextInput
            isError={isError}
            value={value}
            testID={TestIds.sas_popup_text_input}
            keyboardType={keyboardType}
            label={StringsOfLanguages.SAS.SAS_PLACEHOLDER}
            errorMessage={StringsOfLanguages.SAS.SAS_PLACEHOLDER_ERROR}
            suffix={<SideIcon source={SideIconSource} />}
            labelStyle={{
              color: isError == "error" ? Colors.ERROR : Colors.GRAY,
              opacity: isError == "error" ? 1 : 0.32,
            }}
            textInputProps={{
              onChangeText: popupType == "pan"
                ? (e) => (e.length < 11 ? onchangeText(e) : null)
                : onchangeText,
              value: value,
              style: { color: isError == "error" ? Colors.ERROR : Colors.GRAY,
              paddingRight: 50 },
              autoComplete: "off",
              autoCapitalize: "characters",
              maxLength: maxLength,
            }}
            inputBorderProps={{
              style: {
                borderBottomColor: isError == "error" ? Colors.ERROR : Colors.GRAY,
                opacity: isError == "error" ? 1 : 0.32,
              },
            }}
          ></CustomTextInput>


          <Label>{StringsOfLanguages.SAS.SAS_SHARE_REVIEW}</Label>
          <CardMargin>
            <Card
              style={boxCard}>
              <LabelText>{StringsOfLanguages.SAS.SAS_DEAR}</LabelText>
              <LabelText>{StringsOfLanguages.SAS.SAS_MESSAGE}</LabelText>
              <View
                style={accDetailBox}>
                <View style={boxFlex}>
                  <View>
                    <Text style={AccDetailsTextStyle}>{StringsOfLanguages.SAS.SAS_CUST_NAME}</Text>
                    <Text style={AccDetailsValueStyle}>{userName}</Text>
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

        </BodyContainer>
      }
      disabled={enableSubmit}
      ButtonText={ButtonText}
      buttonPress={() => buttonPress()}
      cancelButtonPress={cancelButtonPress}
    />
  );
};

export default PopupShareDetails;
