import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import {
  BackgroundImage,
  Popup,
  CustomButton,
  CustomText,
} from "../../../Components";
import {
  headerbackgroundSuccess,
  success,
  alertIcon,
} from "../../../Assets/Images";
import {
  Button,
  CloseAndSave,
  SaveAndExit,
  AlignedContainer,
  CongratsTextStyle,
  NameStyle,
  successStyle,
  successTextStyle,
  IconClose,
  BGImgStyle,
  ImgStyle,
  TopImgStyle,
} from "./styled";
import { StringsOfLanguages } from "../../../Localization";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
} from "../../../Utils";
import { useNavigation } from "@react-navigation/native";
import { MarginTopBox } from "../styled";

const AadhaarSuccess = (props) => {
  const navigation = useNavigation();
  const [userName] = useState("Astha Patil"); //TODO: get it from props
  const [popupVisible, setPopupVisible] = useState(false);
  let textData = '3ft56gfet643fv6hfth8gfrc7785';
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  useEffect(() => {});
  const handleBackPress = () => {
    if (props.navigation.isFocused()) {
      setPopupVisible(true);
    } else {
      navigation.goBack(null);
    }
    return true;
  };
  return (
    <View style={{ flex: 1 }}>
      <BackgroundImage
        imageStyle={BGImgStyle}
        style={ImgStyle}
        imageSource={headerbackgroundSuccess}
      >
        <CloseAndSave>
          <IconClose />
          <TouchableOpacity onPress={() => setPopupVisible(true)}>
            <SaveAndExit>{StringsOfLanguages.COMMON.EXIT}</SaveAndExit>
          </TouchableOpacity>
        </CloseAndSave>

        <View style={TopImgStyle}>
          <Image source={success} style={successStyle} />

          <Text style={CongratsTextStyle}>
            {StringsOfLanguages.AADHAARSUCCESS.AS_CONGRATULATIONS}
          </Text>
          <Text style={NameStyle}>{userName + "!"}</Text>
          {props?.route?.params?.type == "linking" ? (
            <Text style={successTextStyle}>
              {StringsOfLanguages.AADHAARSUCCESS.AL_UCCESS_MESSAGE}
            </Text>
          ) : (
            <Text style={successTextStyle}>
              {StringsOfLanguages.AADHAARSUCCESS.AS_SUCCESS_MESSAGE}
            </Text>
          )}
        </View>
      </BackgroundImage>
{/*TODO: Aligned container style to move*/}
      <ScrollView style={{ marginTop: -15 }}>
        <AlignedContainer
          style={{
            backgroundColor: 'transparent',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <MarginTopBox>
            <CustomText
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_16}
              marginTop={20}
              lineHeight={Line_Height.HEIGHT_22}
              letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
              color={Colors.BLACK}
              align={"center"}
            >
              {StringsOfLanguages.AADHAARSUCCESS.SAS_REF_ID}
            </CustomText>
          </MarginTopBox>

          <MarginTopBox style={{ marginBottom: 15, marginTop: 10 }}>
            <CustomText
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_16}
              lineHeight={Line_Height.HEIGHT_22}
              letterSpacing={LetterSpacing.ZERO_POINT_ONE}
              color={Colors.BLACK}
              align={"center"}
            >
              {textData}
            </CustomText>
          </MarginTopBox>
        </AlignedContainer>
      </ScrollView>

      <CustomButton
        style={Button}
        buttonType="primary"
        fontSize={20}
        title={StringsOfLanguages.AADHAARSUCCESS.SAS_PROCEED}
        buttonPress={() => {
          navigation.navigate(NavigationUrl.Transactions);
        }}
      />

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
    </View>
  );
};

export default AadhaarSuccess;
