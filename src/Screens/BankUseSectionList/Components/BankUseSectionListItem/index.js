import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Card, CustomText } from "../../../../Components";
import { Colors, FontFamily, Font_Size, TestIds, NavigationUrl } from "../../../../Utils";
import {
  BoxContainer,
  CardImageStyle,
  ImageContainer,
  ImageTextContainer,
  TitleContainer,
  CardContainer,
  DateContainer,
  Container1Below,
  Container2Below,
  Container3Below,
  ContainerProductName,
  ContainerAccountNum,
  ContainerEmpty,
  ContainerCustomerId,
  Red_Button,
  ButtomBoxContainer,
  BoxContainView
} from "./styled";

import { useNavigation } from '@react-navigation/native';
import { StringsOfLanguages } from "../../../../Localization";
import { bankUseCheck, rightArrowWhite } from "../../../../Assets/Images";



const Item = ({ item }) => {

  const navigation = useNavigation()

  return (
    <Card style={CardContainer}>
      <BoxContainer>
        <ImageTextContainer>
          <ImageContainer>
            <CardImageStyle source={bankUseCheck} resizeMode="center" />
          </ImageContainer>
          <TitleContainer>
            <CustomText
              testID={TestIds.pa_title}
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_16}
              lineHeight={22}
              letterSpacing={-0.5}
              style={capitalizeText}
              color={Colors.NEW_GREY_800.text}>{item?.custName}</CustomText>
          </TitleContainer>
          <DateContainer>
            <CustomText
              testID={TestIds.pa_title}
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_12}
              lineHeight={18}
              letterSpacing={-0.38}
              align={"right"}
              color={Colors.NEW_GREY_800.text}>{item?.accountOpenDate}</CustomText>
          </DateContainer>
        </ImageTextContainer>
      </BoxContainer>

      <View style={BoxContainView}></View>

      <ButtomBoxContainer>
        <ImageTextContainer>
          <Container1Below>
            <ContainerAccountNum>
              <CustomText
                testID={TestIds.bus_produ_head_id}
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_10}
                lineHeight={14}
                letterSpacing={0.5}
                color={Colors.NEW_GREY_600.text}
                style={{paddingBottom:4}}
                >{StringsOfLanguages.BANKUSESECTIONLIST.BUS_PRODUCT_NAME}</CustomText>
              <CustomText
                testID={TestIds.pa_title}
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={20}
                letterSpacing={-0.5}
                color={Colors.NEW_GREY_800.text}>{item?.productName}</CustomText>
            </ContainerAccountNum>

            <ContainerProductName>
              <CustomText
                testID={TestIds.bus_account_head_id}
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_10}
                lineHeight={14}
                letterSpacing={0.5}
                style={{paddingBottom:4}}
                color={Colors.NEW_GREY_600.text}>{StringsOfLanguages.BANKUSESECTIONLIST.BUS_ACCOUNT_NUMBER}</CustomText>
              <CustomText
                testID={TestIds.pa_title}
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={20}
                letterSpacing={-0.5}
                color={Colors.NEW_GREY_800.text}>{item?.acNumber}</CustomText>
            </ContainerProductName>
          </Container1Below>
          <Container2Below>
            <ContainerEmpty>
              {/* empty section */}
            </ContainerEmpty>

            <ContainerCustomerId>
              <CustomText
                testID={TestIds.bus_cust_head_id}
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_10}
                lineHeight={14}
                letterSpacing={0.5}
                style={{paddingBottom:4}}
                color={Colors.NEW_GREY_600.text}>{StringsOfLanguages.BANKUSESECTIONLIST.BUS_CUSTOMER_ID}</CustomText>
              <CustomText
                testID={TestIds.pa_title}
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={20}
                letterSpacing={-0.5}
                color={Colors.NEW_GREY_800.text}>{item?.custId}</CustomText>
            </ContainerCustomerId>
          </Container2Below>
          <Container3Below>
            <Red_Button>
              <TouchableOpacity 
              testID="Test10"
              onPress={() => navigation.navigate(NavigationUrl.BankUseSectionForm, {
                option: item
              })} >
                <Image style={{height:24,width:24}} source={rightArrowWhite} resizeMode="center" />
              </TouchableOpacity>
            </Red_Button>

          </Container3Below>
        </ImageTextContainer>
      </ButtomBoxContainer>

    </Card>
  );
};





export default Item;
const capitalizeText = {
  textTransform: 'capitalize'
};