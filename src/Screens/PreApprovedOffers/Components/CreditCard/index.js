import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
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
import { background1, icons_24_info, icon_1 } from "../../../../Assets/Images";
// import { Icon } from "@idfc/ccl-mobile";
// import { IconSize } from "@idfc/ccl-commons/enums";

const CreditCard = ({ item }) => {
  const navigation = useNavigation();

  const titleContainer = (title) => {

    return (
      <CustomText
        testID={TestIds.pa_title}
        fontFamily={FontFamily.Inter_SemiBold}
        fontSize={Font_Size.SIZE_24}
        lineHeight={32}
        color={Colors.WHITE}
      >
        {title + " "}

        <CustomText
          fontFamily={FontFamily.Inter_Light}
          fontSize={Font_Size.SIZE_24}
          lineHeight={Line_Height.HEIGHT_32}
          letterSpacing={-0.6}
          color={Colors.WHITE}
        >
          Credit Card
        </CustomText>
      </CustomText>
    );
  };

  return (
    <Card style={CardContainer}>
      <ImageBackground borderRadius={12} source={background1}>
        {item.isOfferAvailed ? (
          <BoxContainer>
            <ImageTextContainer>
              <ImageContainer>
                <CardImageStyle source={icon_1} resizeMode={"center"} />
              </ImageContainer>
              <TitleContainer>
                <IntroContainer>
                  {titleContainer(item.title)}
                  <CustomText
                    testID={TestIds.pa_availed_intro_1}
                    marginTop={4}
                    fontFamily={FontFamily.Inter_REGULAR}
                    fontSize={Font_Size.SIZE_12}
                    lineHeight={Line_Height.HEIGHT_18}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    color={Colors.NEW_WHITE_100}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.THANKYOU_FOR_APPLYING}
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
                  marginTop={15}
                  fontFamily={FontFamily.Inter_REGULAR}
                  letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                  style={{ color: Colors.lightGrey }}
                >
                  {StringsOfLanguages.PREAPPROVEDOFFERS.HERE_ARE}
                </CustomText>
                <TouchableOpacity style={{ marginBottom: -10, marginRight: 5 }}>
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
                    letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.REFERENCE_NUMBER}
                  </CustomText>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_refNumber}
                    color={Colors.WHITE}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                    marginTop={6}
                    fontFamily={FontFamily.Inter_SemiBold}
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
                    fontFamily={FontFamily.Inter_REGULAR}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.PROCESSING_TIME}
                  </CustomText>
                  <CustomText
                    testID={TestIds.pa_availed_applicationDetail_time}
                    color={Colors.WHITE}
                    fontSize={Font_Size.SIZE_14}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    marginTop={6}
                    fontFamily={FontFamily.Inter_SemiBold}
                  >
                    {item.AvailedCardInfo.applicationDetail[1].time}
                  </CustomText>
                </View>
              </ApplicationBoxContainer>

              <CustomText
                testID={TestIds.pa_availed_processingInfo}
                color={Colors.WHITE}
                letterSpacing={LetterSpacing.ZERO_POINT_TWO}
                fontSize={Font_Size.SIZE_12}
                fontFamily={FontFamily.Inter_REGULAR}
                lineHeight={Line_Height.HEIGHT_18}
              >
                {
                  StringsOfLanguages.PREAPPROVEDOFFERS.THE_PROCESSING_TIME
                }
              </CustomText>
            </ApplicationStatusContainer>
          </BoxContainer>
        ) : (
          <BoxContainer>
            <ImageTextContainer>
              <ImageContainer>
                <CardImageStyle source={icon_1} resizeMode="center" />
              </ImageContainer>
              <TitleContainer>
                <View>
                  {titleContainer(item.title)}
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View style={{ marginRight: "20%" }}>
                      <CustomText
                        testID={TestIds.pa_intro_1}
                        fontFamily={FontFamily.Inter_REGULAR}
                        fontSize={Font_Size.SIZE_10}
                        lineHeight={Line_Height.HEIGHT_18}
                        letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                        style={{ color: "lightgrey" }}
                      >
                        {StringsOfLanguages.PREAPPROVEDOFFERS.CREDIT_LIMIT}
                      </CustomText>
                      <CustomText
                        testID={TestIds.pa_intro_1}
                        marginTop={2}
                        fontFamily={FontFamily.Inter_REGULAR}
                        fontSize={Font_Size.SIZE_14}
                        lineHeight={Line_Height.HEIGHT_18}
                        letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                        color={Colors.NEW_WHITE_100}
                      >
                        ₹XXXX
                      </CustomText>
                    </View>
                    <View style={{}}>
                      <View style={{ flexDirection: "row" }}>
                        <CustomText
                          testID={TestIds.pa_intro_1}
                          fontFamily={FontFamily.Inter_REGULAR}
                          fontSize={Font_Size.SIZE_10}
                          lineHeight={Line_Height.HEIGHT_18}
                          letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                          style={{ color: "lightgrey" }}
                        >
                          {StringsOfLanguages.PREAPPROVEDOFFERS.ANNUAL_PERCENTAGE}
                        </CustomText>
                        <Image source={icons_24_info} style={{ width: 15, height: 15, marginLeft: 5, marginTop: 1 }} />
                      </View>

                      <CustomText
                        testID={TestIds.pa_intro_1}
                        marginTop={2}
                        fontFamily={FontFamily.Inter_REGULAR}
                        fontSize={Font_Size.SIZE_14}
                        lineHeight={Line_Height.HEIGHT_18}
                        letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                        color={Colors.NEW_WHITE_100}
                      >
                        XX%
                      </CustomText>
                    </View>
                  </View>
                  <CustomText
                    testID={TestIds.pa_intro_1}
                    fontFamily={FontFamily.Inter_Light}
                    fontSize={Font_Size.SIZE_12}
                    lineHeight={Line_Height.HEIGHT_18}
                    letterSpacing={LetterSpacing.ZERO_POINT_ONE}
                    color={Colors.NEW_WHITE_100}
                    marginTop={10}
                  >
                    {
                      StringsOfLanguages.PREAPPROVEDOFFERS.EVERGREEN_REWARDS
                    }
                  </CustomText>
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
                  <CustomButton
                    testID={TestIds.pa_AvailOffer_button}
                    style={{ width: 105, height: 36 }}
                    buttonPress={() => {
                      navigation.navigate(NavigationUrl.ApplyNowForm, {
                        cardID: item.id,
                      })
                    }

                    }
                    fontSize={Font_Size.SIZE_12}
                    buttonType="secondary"
                    noBorder
                    title={StringsOfLanguages.PREAPPROVEDOFFERS.AVAIL_OFFER}
                  ></CustomButton>
                </ButtonContainer>
              </TitleContainer>
            </ImageTextContainer>
          </BoxContainer>
        )}
      </ImageBackground>
    </Card>
  );
};

export default CreditCard;
