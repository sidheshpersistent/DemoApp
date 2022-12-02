import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, CustomText } from "../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  TestIds,
} from "../../../Utils";
import {
  BoxContainer,
  CardImageStyle,
  ImageTextContainer,
  TitleContainer,
  CardContainer,
  DateContainer,
  Container1Below,
  Container2Below,
  Container3Below,
  Red_Button,
} from "./styled";

import { DeleteIcon, rightArrowWhite } from "../../../Assets/Images";
import CustomProgressBar from "../../../Components/CustomProgressBar/CustomProgressBar";


const Item = ({ item, index, onDelete, onNext }) => {
  return (
    <Card style={CardContainer}>
      <BoxContainer>
        <ImageTextContainer>
          <TitleContainer>
            <CustomText
              testID={TestIds.pa_title}
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_16}
              lineHeight={Line_Height.HEIGHT_32}
              letterSpacing={-0.4}
              color={Colors.NEW_GREY_800.text}
              style={capitalizeText}
            >
              {item?.customerName}
            </CustomText>
          </TitleContainer>
          <DateContainer>
            <CustomText
              testID={TestIds.pa_title}
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_12}
              lineHeight={18}
              letterSpacing={-0.38}
              align={"right"}
              color={Colors.NEW_GREY_800.text}
            >
              {item?.journeyUpdatedDate ? item.journeyUpdatedDate : null}
            </CustomText>
          </DateContainer>
        </ImageTextContainer>
      </BoxContainer>

      {/* underline */}
      <View
        style={{
          borderBottomColor: Colors.NEW_GREY_800.code,
          borderBottomWidth: 0.6,
          marginHorizontal: 24,
          opacity: 0.1,
          backgroundColor: Colors.NEW_GREY_800.code,
          height: 2
        }}
      ></View>

      <BoxContainer>
        <ImageTextContainer>
          {/* progressbar here */}
          <Container1Below>
            <CustomProgressBar
              progressValue={
                item.journeyPercentage != null
                  ? item.journeyPercentage.toString()
                  : "0"
              }
            />
          </Container1Below>

          <Container2Below>
            <TouchableOpacity testID="test1" onPress={() => onDelete(item, index)}>
              <CardImageStyle source={DeleteIcon} resizeMode="center" />
            </TouchableOpacity>
          </Container2Below>

          <Container3Below>
            <TouchableOpacity testID="test2" onPress={() => onNext(item)}>
              <Red_Button>
                <CardImageStyle source={rightArrowWhite} resizeMode="center" />
              </Red_Button>
            </TouchableOpacity>
          </Container3Below>
        </ImageTextContainer>
      </BoxContainer>
    </Card>
  );
};

export default Item;
const capitalizeText = {
  textTransform: 'capitalize'
};
