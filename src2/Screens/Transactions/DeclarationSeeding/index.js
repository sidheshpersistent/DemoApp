


import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
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
  BottomContainer,
  SubTitleTextStyle,
  RadioContainer,
  MarginTopBoxRadio,
  MarginBoxSelect,
  AlignedContainerScroll,
} from "./styled";
import { RadioButton, Select, } from "@idfc/ccl-mobile/lib/module/v2";
import { dec_banks_data } from "../../ApplyNowForm/constants";


const DeclarationSeeding = () => {
  const navigation = useNavigation();
  const [radioValue, setRadioValue] = useState("Yes");
  const [customerBank, setcustomerBank] = useState();
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
            >{StringsOfLanguages.SEEDING.DEC_TITLE}</Text>

            <Text
              testID={TestIds.km_text_title}
              style={SubTitleTextStyle}
            >{StringsOfLanguages.SEEDING.DEC_SUBTITLE}</Text>
          </TitleContainer>
        </MarginBox>



      </HeaderContainer>

      <ScrollView style={AlignedContainerScroll}>
        <MarginTopBox>
          <CustomText
            fontFamily={FontFamily.INTER_BOLD}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.NEW_GREY_800.text}
          >
            {StringsOfLanguages.SEEDING.DEC_OPT1}
          </CustomText>
        </MarginTopBox>

        <MarginTopBox>
          <RadioContainer>
            <RadioButton
              value="Yes"
              name="radio-normal"
              id="1"
              checked={radioValue === "Yes"}
              onChange={() => setRadioValue("Yes")}
            >
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                color={Colors.NEW_GREY_800.text}
              >
                {StringsOfLanguages.SEEDING.DEC_OPT1_TEXT1}
              </CustomText>
            </RadioButton>

          </RadioContainer>

        </MarginTopBox>

        <MarginTopBox>
          <RadioContainer>
            <RadioButton
              value="No"
              name="radio-normal"
              id="2"
              checked={radioValue === "No"}
              onChange={() => setRadioValue("No")}
            >
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                color={Colors.NEW_GREY_800.text}
              >{StringsOfLanguages.SEEDING.DEC_OPT1_TEXT2}</CustomText>
            </RadioButton>
          </RadioContainer>
        </MarginTopBox>

        <MarginTopBoxRadio>
          {/* dropdown bank */}
          <MarginBoxSelect>
            <Select
              testID={TestIds.dec_bank_name}
              //defaultSelectedItem={customerBank}
              disabled={radioValue!="No"}
              value={customerBank}
              label={customerBank?StringsOfLanguages.SEEDING.BANK_SELECTED:StringsOfLanguages.SEEDING.BANKNAME}
              options={dec_banks_data}
              onChange={(value) => {
                setcustomerBank(value)
              }}
              
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
            />
          </MarginBoxSelect>


          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.NEW_GREY_800.text}
          >{"having "}<CustomText
            fontFamily={FontFamily.INTER_BOLD}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.NEW_GREY_800.text}
          >{"IN Number 608061"}</CustomText>{StringsOfLanguages.SEEDING.DEC_OPT1_TEXT3}</CustomText>

        </MarginTopBoxRadio>

        {/* <MarginTopBox>
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            color={Colors.NEW_GREY_600.text}
          >
            {StringsOfLanguages.SEEDING.DEC_TEXT}
          </CustomText>
        </MarginTopBox> */}

        <MarginTopBox>
          <CustomText
            marginTop={10}
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
            color={Colors.NEW_GREY_800.text}
          >
            {StringsOfLanguages.SEEDING.DEC_OPT2}
          </CustomText>
        </MarginTopBox>

        <MarginTopBox>
          <CustomText
          marginTop={10}
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_16}
            lineHeight={Line_Height.HEIGHT_22}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
            color={Colors.NEW_GREY_800.text}
          >
            {StringsOfLanguages.SEEDING.DEC_OPT3}
          </CustomText>
        </MarginTopBox>

      </ScrollView>
      <BottomContainer>
        <CustomButton
          buttonType={"secondary"}
          buttonPress={() => {
            navigation.goBack();
          }}
          maxWidth={"100%"}
          style={{  height: 60, backgroundColor: Colors.NEW_GREY_100.code }}
          title={StringsOfLanguages.SEEDING.DEC_DECLINE}
        />

        <CustomButton
          disabled={radioValue=="No"?customerBank?false:true:false}
          buttonPress={() => {
            navigation.navigate(NavigationUrl.AadhaarSuccess);
          }}
          maxWidth={"100%"}
          style={{ height: 60}}
          title={StringsOfLanguages.SEEDING.DEC_ACCEPT}
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

export default DeclarationSeeding;

//button visibility remaining
