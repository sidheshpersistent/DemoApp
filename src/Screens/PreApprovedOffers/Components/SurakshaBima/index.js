import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Card, CustomButton, CustomText } from "../../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,

  TestIds,
} from "../../../../Utils";

import {
  BoxContainer,
  CardImageStyle,
  ImageContainer,
  ImageTextContainer,
  TitleContainer,
  ButtonContainer,
  ButtonKM,
  ButtonKMText,
  CardContainer,
} from "./styled";


import { background4, icon_4 } from "../../../../Assets/Images";
import { StringsOfLanguages } from "../../../../Localization";

const SurakshaBima = () => {
  

  return (
    <Card style={CardContainer}>
      <ImageBackground borderRadius={12} source={background4}>
        <BoxContainer>
          <ImageTextContainer>
            <ImageContainer>
              <CardImageStyle source={icon_4} resizeMode="center" />
            </ImageContainer>
            <TitleContainer>
              <View>
                <CustomText
                  testID={TestIds.pa_title}
                  fontFamily={FontFamily.Inter_Light}
                  fontSize={Font_Size.SIZE_24}
                  lineHeight={32}
                  letterSpacing={-0.6}
                  color={Colors.BLACK}
                >
                  {StringsOfLanguages.PREAPPROVEDOFFERS.PRADHAN_MANTRI}
                  <CustomText
                    fontFamily={FontFamily.Inter_SemiBold}
                    fontSize={Font_Size.SIZE_24}
                    lineHeight={32}
                    letterSpacing={-0.6}
                    color={Colors.BLACK}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.Suraksha_Bima}{" "}
                  </CustomText>
                  <CustomText
                    fontFamily={FontFamily.Inter_Light}
                    fontSize={Font_Size.SIZE_24}
                    lineHeight={32}
                    letterSpacing={-0.6}
                    color={Colors.BLACK}
                  >
                    {StringsOfLanguages.PREAPPROVEDOFFERS.YOJANA}
                  </CustomText>
                </CustomText>
              </View>

              <ButtonContainer>
                <TouchableOpacity
                  testID={TestIds.pa_knowMore_button}
                  onPress={() => ""}
                  style={ButtonKM}
                >
                  <Text style={ButtonKMText}>{"Know More"}</Text>
                </TouchableOpacity>
                <CustomButton
                  testID={TestIds.pa_AvailOffer_button}
                  style={{ width: 105, height: 36 }}
                  buttonPress={() => ""}
                  fontSize={"12px"}
                  buttonType="primary"
                  noBorder
                  title={"Apply Now"}
                ></CustomButton>
              </ButtonContainer>
            </TitleContainer>
          </ImageTextContainer>
        </BoxContainer>
      </ImageBackground>
    </Card>
  );
};

export default SurakshaBima;
