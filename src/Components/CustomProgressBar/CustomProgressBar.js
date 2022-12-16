/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import CustomText from "../CustomText/CustomText";
import { FontFamily, Font_Size, Line_Height } from "../../Utils";
import { StringsOfLanguages } from "../../Localization";
import { ProgressBarContainer, TextPercentContainer } from "./styled";
import { ActivityIndicator } from "react-native";
import useSession from "../../App/useSession";
import { timeoutConst } from "../../Utils/Constants";

const CustomProgressBar = (props) => {
  const { progressValue, testID, progressLoader } = props;


  return (
    <ProgressBarContainer>
      <TextPercentContainer>
        {
          progressLoader ? <ActivityIndicator
            size="small"

          /> : <CustomText
            fontSize={Font_Size.SIZE_20}
            fontFamily={FontFamily.Inter_REGULAR}
            lineHeight={Line_Height.HEIGHT_22}
          >
            {progressValue}%{" "}
          </CustomText>
        }


        <CustomText
          fontSize={Font_Size.SIZE_10}
          lineHeight={Line_Height.HEIGHT_14}
          fontFamily={FontFamily.Inter_REGULAR}
          marginTop={5}
        >
          {StringsOfLanguages.PROGRESS_BAR.PB_APPLICATION_SUBMITTED}
        </CustomText>
      </TextPercentContainer>
      <ProgressBar
        testID={testID}
        styleAttr="Horizontal"
        progress={progressValue / 100}
        indeterminate={false}
        animating={true}
      />
    </ProgressBarContainer>
  );
};

export default CustomProgressBar;
