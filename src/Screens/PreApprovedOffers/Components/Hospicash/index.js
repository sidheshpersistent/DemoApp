import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Card, CustomButton, CustomText } from "../../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
  TestIds,
} from "../../../../Utils";

import {
  BoxContainer,
  CardImageStyle,
  ImageContainer,
  ImageTextContainer,
  TitleContainer,
  ApplicationBoxContainer,
  ApplicationStatusContainer,
  ButtonContainer,
  ButtonKM,
  ButtonKMText,
  CardContainer,
  IntroContainer,
} from "./styled";

import { useNavigation } from "@react-navigation/native";
import { StringsOfLanguages } from "../../../../Localization";
import { background2, icon_2 } from "../../../../Assets/Images";
// import { Icon } from "@idfc/ccl-mobile";
// import { IconSize } from "@idfc/ccl-commons/enums";
import CheckBox from "@react-native-community/checkbox";

const Hospicash = ({ item }) => {
  const navigation = useNavigation();

  const [terms, setTerms] = useState(true);
  const [policyterm, setPolicyterm] = useState(true);

  const titleHeading = () => {
    return (
      <View>
        <CustomText
          testID={TestIds.pa_title}
          fontFamily={FontFamily.Inter_Light}
          fontSize={Font_Size.SIZE_24}
          lineHeight={32}
          letterSpacing={-0.6}
          color={Colors.WHITE}
        >
          {"Cover your "}
          <CustomText
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_24}
            lineHeight={32}
            letterSpacing={-0.6}
            color={Colors.WHITE}
          >
            hospitalisation{" "}
          </CustomText>
          <CustomText
            fontFamily={FontFamily.Inter_Light}
            fontSize={Font_Size.SIZE_24}
            lineHeight={32}
            letterSpacing={-0.6}
            color={Colors.WHITE}
          >
            expenses at just{" "}
          </CustomText>
          <CustomText
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_24}
            lineHeight={32}
            letterSpacing={-0.6}
            color={Colors.WHITE}
          >
            ₹2200/yr
          </CustomText>
        </CustomText>
      </View>
    );
  };

  return (
    <Card style={CardContainer}>
      <ImageBackground borderRadius={12} source={background2}>
        {item.isOfferAvailed ? (
          <BoxContainer>
            <ImageTextContainer>
              <ImageContainer>
                <CardImageStyle source={icon_2} resizeMode={"center"} />
              </ImageContainer>
              <TitleContainer>
                <IntroContainer>
                  {titleHeading()}
                  <CustomText
                    testID={TestIds.pa_availed_intro_1}
                    marginTop={4}
                    fontFamily={FontFamily.Inter_REGULAR}
                    fontSize={Font_Size.SIZE_12}
                    lineHeight={Line_Height.HEIGHT_18}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    color={Colors.NEW_WHITE_100}
                  >
                    {
                      StringsOfLanguages.PREAPPROVEDOFFERS.GROUP_SAFEGUARG_THNKYOU
                    }
                  </CustomText>
                </IntroContainer>
              </TitleContainer>
            </ImageTextContainer>
            <ApplicationStatusContainer>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CustomText
                  testID={TestIds.pa_availed_application_status}
                  fontSize={Font_Size.SIZE_10}
                  color={Colors.WHITE}
                  marginTop={25}
                  fontFamily={FontFamily.Inter_REGULAR}
                  letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                  style={{ color: Colors.WHITE }}
                >
                  {StringsOfLanguages.PREAPPROVEDOFFERS.HERE_ARE}
                </CustomText>
                <TouchableOpacity style={{ marginBottom: -20, marginRight: 5 }}>
                  {/* <Icon
                    name="Download"
                    size={IconSize.SIZE_16}
                    primaryColor={Colors.WHITE}
                  /> */}
                </TouchableOpacity>
              </View>
              <ApplicationBoxContainer flag={item.flag}>
                <View>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_title_1}
                    color={Colors.WHITE}
                    fontSize={Font_Size.SIZE_10}
                    fontFamily={FontFamily.Inter_REGULAR}
                    letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.REFERENCE_NUMBER}
                  </CustomText>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_refNumber}
                    color={Colors.WHITE}
                    fontFamily={FontFamily.Inter_SemiBold}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    marginTop={6}
                  >
                    {item?.AvailedCardInfo?.applicationDetail[0]?.refNumber}
                  </CustomText>
                </View>
                <View>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_title_2}
                    color={Colors.WHITE}
                    fontSize={Font_Size.SIZE_10}
                    letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.PROCESSING_TIME}
                  </CustomText>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_time}
                    color={Colors.WHITE}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    fontFamily={FontFamily.Inter_SemiBold}
                    marginTop={6}
                  >
                    {item.AvailedCardInfo.applicationDetail[1].time}
                  </CustomText>
                </View>
              </ApplicationBoxContainer>
            </ApplicationStatusContainer>
          </BoxContainer>
        ) : (
          <BoxContainer>
            <ImageTextContainer>
              <ImageContainer>
                <CardImageStyle source={icon_2} resizeMode="center" />
              </ImageContainer>
              <TitleContainer>
                {titleHeading()}
                <View
                  style={{
                    width: "80%",
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <CheckBox
                    testID={TestIds.pa_terms_checkbox}
                    value={terms}
                    tintColors={{ true: '#9b1e26' }}
                    onValueChange={() => setTerms(!terms)}
                  />
                  <Text
                    style={{
                      color: "white",
                      lineHeight: 20,
                      letterSpacing: 0.1,
                      fontFamily: FontFamily.Inter_REGULAR,
                    }}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.I_ACCEPT + "  "}
                    <Text
                      testID={TestIds.pa_terms_text}
                      style={{ color: "maroon" }}
                      onPress={() => {
                        navigation.navigate(NavigationUrl.CustomWebPage, {
                          isVisibleHeader: false,
                          title: "",
                          subTitle: "",
                          isVisibleDone: false,
                          webViewUrl: item.termsURL
                        });
                      }}
                    >
                      {StringsOfLanguages.PREAPPROVEDOFFERS.TERMS + " "}
                    </Text>
                    <Text>{StringsOfLanguages.PREAPPROVEDOFFERS.OF_IDFC}</Text>
                  </Text>
                </View>
                <View
                  style={{ width: "80%", flexDirection: "row", marginTop: 10 }}
                >
                  <CheckBox
                    testID={TestIds.pa_declartion_checkbox}
                    tintColors={{ true: '#9b1e26' }}
                    value={policyterm}
                    onValueChange={() => setPolicyterm(!policyterm)}


                  />
                  <Text
                    style={{
                      color: "white",
                      lineHeight: 20,
                      letterSpacing: 0.1,
                      fontFamily: FontFamily.Inter_REGULAR,
                    }}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.I_HEREBY}
                    <Text
                      testID={TestIds.pa_declation_text}
                      style={{ color: "maroon" }}
                      onPress={() => {
                        navigation.navigate(NavigationUrl.CustomWebPage, {
                          isVisibleHeader: false,
                          title: "",
                          subTitle: "",
                          isVisibleDone: false,
                          webViewUrl: item.declarationURL

                        });
                      }}
                    // onPress={() =>
                    //   {
                    //     navigation.navigate(NavigationUrl.WebViewComponent, {
                    //       url: "https://firebasestorage.googleapis.com/v0/b/matmdemotest.appspot.com/o/Annexure-3_Policy-Wordings-Group-Safeguard-Insurance.html?alt=media&token=0fa66900-ca51-4cd2-81b1-2835f762ed4b",
                    //     });
                    //   }
                    // }
                    >
                      {"\n"}{StringsOfLanguages.PREAPPROVEDOFFERS.CLICK_HERE}{" "}
                    </Text>
                    <Text>
                      {StringsOfLanguages.PREAPPROVEDOFFERS.TO_DOWNLOAD}
                    </Text>
                  </Text>
                </View>
                <ButtonContainer>
                  <TouchableOpacity
                    testID={TestIds.pa_knowMore_button}
                    onPress={() =>
                      navigation.navigate(NavigationUrl.CustomWebPage, {
                        isVisibleHeader: true,
                        title: item.knowMore.title,
                        subTitle: item.knowMore.subTitle,
                        isVisibleDone: true,
                        webViewUrl: item.knowMore.uri,
                        buttonText: item.knowMore.buttonText
                      })
                    }
                    style={ButtonKM}
                  >
                    <Text style={ButtonKMText}>{StringsOfLanguages.PREAPPROVEDOFFERS.KNOW_MORE}</Text>
                  </TouchableOpacity>
                  {terms && policyterm ? (
                    <CustomButton
                      testID={TestIds.pa_AvailOffer_button}
                      style={{ width: 105, height: 36 }}
                      buttonPress={() =>
                        navigation.navigate(NavigationUrl.ApplyNowForm, {
                          cardID: item.id,
                        })
                      }
                      fontSize={Font_Size.SIZE_12}
                      buttonType="secondary"
                      noBorder
                      title={StringsOfLanguages.PREAPPROVEDOFFERS.AVAIL_OFFER}
                    ></CustomButton>
                  ) : (
                    <CustomButton
                      testID={TestIds.pa_AvailOffer_button}
                      style={{ width: 105, height: 36 }}
                      buttonPress={() => ""}
                      fontSize={Font_Size.SIZE_12}
                      disabled={true}
                      title={StringsOfLanguages.PREAPPROVEDOFFERS.AVAIL_OFFER}
                    ></CustomButton>
                  )}
                </ButtonContainer>
              </TitleContainer>
            </ImageTextContainer>
          </BoxContainer>
        )}
      </ImageBackground>
    </Card>
  );
};

export default Hospicash;
