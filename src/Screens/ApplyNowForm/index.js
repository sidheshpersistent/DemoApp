import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StringsOfLanguages } from "../../Localization";
import { applyNow_api_Data } from "./constants";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderContainer,
  CloseAndSave,
  IconClose,
  SaveAndExit,
  warningBoxStyle,
  TitleContainer,

} from "./styled";
import Form from "./Components/Forms";
import { CustomText } from "../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  TestIds,
} from "../../Utils";
import { View } from "react-native";

// import { Icon } from "@idfc/ccl-mobile";
import LinearGradient from "react-native-linear-gradient";

const ApplyNowForm = (props) => { //props) => {
  const navigation = useNavigation();
  const [response, setResponse] = useState("");
  const cardID = props.route.params.cardID;

  useEffect(() => {
    apihandler();
  }, []);

  function apihandler() {
    // api call must be here with cardId to fetch the data or this data should be passed from pre-approved
    const res = applyNow_api_Data.filter((item) => item.CardId == cardID);
    setResponse(res[0]); // will save the response of particular card from api
  };

  return (
    <>
      <HeaderContainer>
        <CloseAndSave>
          <IconClose />
          <TouchableOpacity testID={TestIds.anf_back} onPress={() => navigation.goBack()}>
            <SaveAndExit>{StringsOfLanguages.COMMON.EXIT}</SaveAndExit>
          </TouchableOpacity>

        </CloseAndSave>
        <TitleContainer>
          <CustomText
            marginBottom={2}
            fontSize={Font_Size.SIZE_20}
            fontFamily={FontFamily.Inter_SemiBold}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
            marginTop={12}
          >
            {response.title}
          </CustomText>
          {response.subTitle ? (
            <View style={{ width: "90%" }}>
              <CustomText
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                fontFamily={FontFamily.Inter_REGULAR}
                marginTop={5}
              >
                {response.subTitle}
              </CustomText>
            </View>
          ) : null}

          {response.warning ? (
            <LinearGradient
              style={warningBoxStyle}
              colors={[Colors.NEW_MAROON_300.code, Colors.NEW_RED_100.code]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
              {/* <Icon name="WarningFilled" primaryColor={"white"}/> */}
              <View style={{ marginLeft: 20, width: "90%" }}>
                <CustomText
                  color={Colors.WHITE}
                  fontSize={Font_Size.SIZE_14}
                  fontFamily={FontFamily.Inter_SemiBold}
                  lineHeight={Line_Height.HEIGHT_20}
                  letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                >{response.warning}</CustomText>
              </View>

            </LinearGradient>
          ) : null}
        </TitleContainer>
      </HeaderContainer>
      <Form response={response} />
    </>
  );
};

export default ApplyNowForm;

