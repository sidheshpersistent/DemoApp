import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { savings_regular_25k } from "../../../Assets/Images";
import { CustomText } from "../../../Components";
import { FontFamily, Font_Size, Line_Height } from "../../../Utils";
import { StringsOfLanguages } from "../../../Localization";

const ProductCard = () => {

  return (
    <View
      style={{
        marginBottom: 32,
        backgroundColor: '#f4d8cf',
        paddingTop: "6%",
        borderRadius: 12,
        paddingBottom: "6%",
        flexDirection: 'row'
      }}
    >
      <Image
        style={{ width: "25%", height: "96%", marginLeft: 16 }}
        source={savings_regular_25k}
      />
      <ProductCardRight>
        <CustomText
          fontFamily={FontFamily.INTER_BOLD}
          fontSize={Font_Size.SIZE_16}
          lineHeight={Line_Height.HEIGHT_24}
        >
          {StringsOfLanguages.BANKING_PREFERNCE.SAVING_REG_25K}
        </CustomText>
        <CustomText
          marginTop={5}
          fontFamily={FontFamily.Inter_REGULAR}
          fontSize={Font_Size.SIZE_12}
          lineHeight={Line_Height.HEIGHT_18}
        >
          {StringsOfLanguages.BANKING_PREFERNCE.WITH_VISA}
          <CustomText
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_12}
            lineHeight={Line_Height.HEIGHT_18}
          >
             {StringsOfLanguages.BANKING_PREFERNCE.SIGNATURE_DEBIT_CARD}
          </CustomText>
        </CustomText>
        <CustomText
          marginTop={5}
          fontFamily={FontFamily.Inter_REGULAR}
          fontSize={Font_Size.SIZE_12}
          lineHeight={Line_Height.HEIGHT_18}
        >
           {StringsOfLanguages.BANKING_PREFERNCE.AVG_MONTHLY}
          <CustomText
            fontFamily={FontFamily.Inter_SemiBold}
            fontSize={Font_Size.SIZE_12}
            lineHeight={Line_Height.HEIGHT_18}
          >
             {StringsOfLanguages.BANKING_PREFERNCE.AMOUT}
          </CustomText>
        </CustomText>
      </ProductCardRight>
    </View>
  );
};
export default ProductCard;

export const ProductCardContainer = styled.View`
  flex-direction: row;
`;
export const ProductCardImageContainer = styled.View`
  ${"" /* width: 100px; */}
`;
export const ProductCardRight = styled.View`
  justify-content: center;
  flex: 1;
  padding-left: 16px;
  magin-top:70px;
`;
export const CardHeading = styled.Text`
  font-size: 18px;
  color: #25243b;
  font-weight: bold;
`;
export const CardText = styled.Text`
  font-size: 14px;
  color: #25243b;
`;
export const BoldText = styled.Text`
  font-weight: bold;
`;
export const QRContainer = styled.View`
  flex-direction: row;
  padding: 20px;
`;
export const QRLeft = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
export const QRRight = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const ScanNowText = styled.Text`
  font-size: 16px;
  color: #50bfbf;
  font-weight: bold;
`;
