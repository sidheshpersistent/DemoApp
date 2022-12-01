import React, { useState } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  CenteredView,
  CloseIconView,
  ModalView,
  popupContainer,
  submitButtonStyle,
  SubTextContainer,
  TopIconView,
} from '../Popup/styled';
import {
  Colors,
  FontFamily,
  LetterSpacing,
} from '../../../Utils';
import { CustomText, CustomButton, CustomTextInput } from '../../../Components';
import { FontColor, LineHeight } from '@idfc/ccl-commons/enums';
import Modal from 'react-native-modal';
import CustomBlurView from '../CustomBlurView';
import { Icon } from '@idfc/ccl-mobile';
import { StringsOfLanguages } from "../../../Localization";
import { RadioButton } from "@idfc/ccl-mobile/lib/module/v2";
import styled from "styled-components/native";
import { icon_mail_golden } from "../../../Assets/Images";
import { SideIcon } from "../PopupStyle";
import { isValidEmailId } from "../../../Utils/ValidationUtils";
import { InputStyleError,KeyboardType, IconName } from "../../../Utils/Constants";

const PopupEmpVerification = props => {
  const {
    isVisible,
    buttonPress,
    animationIn,
    popupIcon,
    popupIconStyle,
    style,
    testID_submit,
    icon,
    buttonWidth,
    isClose,
    closeButton,
    officeEmail,
    personalEmail
  } = props;
  const [radioValue, setRadioValue] = useState(StringsOfLanguages.PERSONAL_DETAIL.YES);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [emailId, setEmailId] = useState(personalEmail);
  const keyboardType = KeyboardType.EMAILADDRESS;
  const SideIconSource = icon_mail_golden;

  const setEmailValidation = async (emailId) => {
    var isemail = await isValidEmailId(emailId);
    if (emailId) {
      if (isemail) {
        setIsErrorEmail(false);
      } else {
        setIsErrorEmail(InputStyleError);
      }
    }
    else {
      setIsErrorEmail(false);
    }
  };
  const checkSubmitButtonEnable = () => {
    if (radioValue == StringsOfLanguages.PERSONAL_DETAIL.YES) {
      return true;
    }
    else {
      if (emailId && isValidEmailId(emailId)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  const changeRadioButton = (value) => {
    setRadioValue(value);
  }
  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
        customBackdrop={<CustomBlurView />}>
        <CenteredView>
          <ModalView style={style}>
            <TopIconView>
              {
                icon ? icon : <Image
                  source={popupIcon}
                  style={[popupIconStyle, IconWidh64]}
                />
              }
            </TopIconView>

            <View style={popupContainer}>
              {isClose &&
                <CloseIconView onPress={closeButton}>
                  <Icon name={IconName.CROSSSMALL} primaryColor={Colors.MAROON} />
                </CloseIconView>
              }
              <CustomText
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={24}
                lineHeight={LineHeight.HEIGHT_32}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                color={FontColor.NEW_GREY_600}>
                {StringsOfLanguages.CID.EMP_VERIFICATION_POPUP_HEADING1}{" \n"}
                <CustomText
                  fontFamily={FontFamily.Inter_SemiBold}
                  fontSize={24}
                  lineHeight={LineHeight.HEIGHT_32}
                  letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                  color={Colors.MAROON}>
                  {officeEmail}{" "}
                </CustomText>
                {StringsOfLanguages.CID.EMP_VERIFICATION_POPUP_HEADING2}
              </CustomText>
              <SubTextContainer>
                <View style={RadioContainer}>
                  <RadioButton
                  testID={'TEST20'}
                    value={StringsOfLanguages.PERSONAL_DETAIL.YES}
                    name="radio-normal"
                    id="1"
                    checked={radioValue === StringsOfLanguages.PERSONAL_DETAIL.YES}
                    onChange={() => changeRadioButton(StringsOfLanguages.PERSONAL_DETAIL.YES)}
                  >
                    {StringsOfLanguages.RESUMEAPPLIST.RAL_YES}
                  </RadioButton>
                  <SpaceInRadio />
                  <RadioButton
                  testID={'TEST10'}
                    value={StringsOfLanguages.PERSONAL_DETAIL.NO}
                    name="radio-normal"
                    id="1"
                    checked={radioValue === StringsOfLanguages.PERSONAL_DETAIL.NO}
                    onChange={() => changeRadioButton(StringsOfLanguages.PERSONAL_DETAIL.NO)}
                  >
                    {StringsOfLanguages.RESUMEAPPLIST.RAL_NO}
                  </RadioButton>
                </View>
                {radioValue === StringsOfLanguages.PERSONAL_DETAIL.NO ?
                  <CustomTextInput
                    isError={isErrorEmail}
                    value={emailId}
                    testID={testID_submit}
                    keyboardType={keyboardType}
                    label={StringsOfLanguages.CID.CID_FIELD_PERSONAL_EMAIL}
                    errorMessage={
                      emailId
                        ? StringsOfLanguages.CID.CID_ERROR_EMAIL
                        : StringsOfLanguages.CID
                          .CID_FIELD_PERSONAL_EMAIL
                    }
                    suffix={<SideIcon source={SideIconSource} />}
                    labelStyle={{
                      color: isErrorEmail == InputStyleError ? Colors.ERROR : Colors.GRAY,
                      opacity: isErrorEmail == InputStyleError ? 1 : 0.32
                    }}
                    onChangeText={(text) => {
                      setEmailId(text);
                      setEmailValidation(text);
                    }}
                    textInputProps={{
                      style: { color: isErrorEmail == InputStyleError ? Colors.ERROR : Colors.GRAY },
                    }}
                    inputBorderProps={{
                      style: {
                        borderBottomColor: isErrorEmail == InputStyleError ? Colors.ERROR : Colors.GRAY,
                        opacity: isErrorEmail == InputStyleError ? 1 : 0.32,
                      },
                    }}
                  ></CustomTextInput>
                  : null
                }
              </SubTextContainer>
            </View>
            <CustomButton
              testID={'TEST30'}
              style={submitButtonStyle}
              disabled={!checkSubmitButtonEnable()}
              buttonType="primary"
              width={buttonWidth ? buttonWidth : "200"}
              title={StringsOfLanguages.PERSONAL_DETAIL.SUBMIT}
              buttonPress={() => buttonPress({ optionValue: radioValue, personalEmailId: emailId })}
            />
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};
export const SpaceInRadio = styled.View`
margin-left: 40px;
`
export const RadioContainer = { 
  flexDirection: 'row', marginBottom: 10
}
export const IconWidh64 = {
  width: 64, height: 64 
}
export default PopupEmpVerification;