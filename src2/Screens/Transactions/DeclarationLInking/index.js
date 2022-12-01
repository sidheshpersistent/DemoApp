

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { alertIcon, arrowBack } from "../../../Assets/Images";
import { CustomButton, CustomText, Popup } from "../../../Components";
import { StringsOfLanguages } from "../../../Localization";
import { Colors, FontFamily, Font_Size, LetterSpacing, Line_Height, NavigationUrl, TestIds } from "../../../Utils";
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
  BottomContainer,
  SubTitleTextStyle,
  DeclineBtn,
} from "./styled";

const DeclarationLinking = () => {
  const navigation = useNavigation();
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <>
      <HeaderContainer>
        <CloseAndSave>
          <TouchableOpacity
            testID={TestIds.tra_back_button}
            onPress={() => navigation.goBack()}>
            <IconClose source={arrowBack} />
          </TouchableOpacity>
          <SaveAndExit 
          onPress={()=>{
            setPopupVisible(true)
          }}
          >{StringsOfLanguages.COMMON.EXIT}</SaveAndExit>
        </CloseAndSave>

        <MarginBox>
          <TitleContainer>
            <Text
              testID={TestIds.km_text_title}
              style={CongratsTextStyle}
            >{StringsOfLanguages.DECLARATION.DEC_TITLE}</Text>
          </TitleContainer>
          <TitleContainer>
            <Text
              testID={TestIds.km_text_title}
              style={SubTitleTextStyle}
            >{StringsOfLanguages.DECLARATION.DEC_SUBTITLE}</Text>
          </TitleContainer>
        </MarginBox>



      </HeaderContainer>
      <AlignedContainer>
        <MarginTopBox>
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.BLACK}
          >
            {StringsOfLanguages.DECLARATION.DEC_TEXT}
          </CustomText>
        </MarginTopBox>

      </AlignedContainer>
      <BottomContainer>
        <CustomButton
          buttonType={"secondary"}
          maxWidth={"100%"}
          buttonPress={() => {
            navigation.goBack();
          }}
          style={DeclineBtn}
          title={StringsOfLanguages.DECLARATION.DEC_DECLINE}
        />

        <CustomButton
         maxWidth={"100%"}
          buttonPress={() => {
            navigation.navigate(NavigationUrl.AadhaarSuccess,{type:"linking"});
          }}
          style={{  height: 60 }}
          title={StringsOfLanguages.DECLARATION.DEC_ACCEPT}
        />
      </BottomContainer>
      {
        <Popup
          cancelButtonPress={() => setPopupVisible(false)}
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={popupVisible}
          Heading={StringsOfLanguages.TRANSACTIONS.TRA_ALERT}
          ButtonText={"Exit"}
          buttonPress={() => {
            setPopupVisible(false);
            navigation.navigate(NavigationUrl.drawerId, {
              screen: NavigationUrl.dashboardId,
            });
          }}
        />
      }

    </>
  );
};

export default DeclarationLinking;
