import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  CenteredView,
  HeaderContainer,
  CloseAndSave,
  IconClose,
  SaveAndExit,
  MarginBox,
  CongratsTextStyle,
  WebViewContainer,
  webViewStyle,
} from "./styled";
import { StringsOfLanguages } from "../../Localization";
import CustomText from "../CustomText/CustomText";
import { Font_Size, Line_Height, FontFamily, TestIds } from "../../Utils";
import CustomButton from "../CustomButton/CustomButton";
import WebView from "react-native-webview";
import LoaderComponent from "../LoaderComponent";
import useSession from "../../App/useSession";


const CustomWebPage = (props) => {
  const [showLoader, setShowLoader] = useState(false);
  const [showBottomContainer, setShowBottomContainer] = useState(false);
  const navigation = useNavigation();
  const {
    isVisibleHeader = props.route.params.isVisibleHeader,
    title = props.route.params.title,
    subTitle = props.route.params.subTitle,
    isVisibleDone = props.route.params.isVisibleDone,
    webViewUrl = props.route.params.webViewUrl,
    buttonText = props.route.params.buttonText,
    isForTermsAndCondition = props.route.params.isForTermsAndCondition,
  } = props;
  const { session, setSession } = useSession();
  const prevSessionData = session;
  const consentContextData = prevSessionData.customerProfile.customerConsent;
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 10;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  return (
    <CenteredView>
      {isVisibleHeader && (
        <HeaderContainer>
          <CloseAndSave>
            <IconClose />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SaveAndExit>{StringsOfLanguages.COMMON.EXIT}</SaveAndExit>
            </TouchableOpacity>
          </CloseAndSave>

          <MarginBox>
            <CustomText
              lineHeight={Line_Height.HEIGHT_20}
              fontSize={Font_Size.SIZE_20}
              fontFamily={FontFamily.Inter_SemiBold}
              style={CongratsTextStyle}
            >
              {title}
            </CustomText>
            {subTitle ? (
              <CustomText
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                fontFamily={FontFamily.Inter_REGULAR}
              >
                {subTitle}
              </CustomText>
            ) : null}
          </MarginBox>
        </HeaderContainer>
      )}

      <WebViewContainer>
        <WebView
          testID={TestIds.custom_web_page}
          style={webViewStyle}
          originWhitelist={["*"]}
          source={{ uri: webViewUrl }}
          onNavigationStateChange={(navState) => navState.canGoBack}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          cacheEnabled
          setSupportMultipleWindows={false}
          allowsFullscreenVideo={true}
          startInLoadingState={true}
          scalesPageToFit={false}
          onLoadStart={() => setShowLoader(true)}
          onLoad={() => setShowLoader(false)}
          onScroll={({ nativeEvent }) => {
            if (isForTermsAndCondition) {
              if (isCloseToBottom(nativeEvent)) {
                setShowBottomContainer(true);//this function will trigger when user reached to bottom in case of 
              }
              else {
                setShowBottomContainer(false);
              }
            }
          }}
        />
      </WebViewContainer>
      {
        showBottomContainer &&
        <View style={{ marginTop: 20 }}>
          <CustomButton
            testID={TestIds.lg_login_button}
            buttonType="primary"
            width="50%"
            title={StringsOfLanguages.COMMON.I_AGREE_WEBVIEW_BTN_TEXT}
            buttonPress={() => {
              consentContextData.isTermsAgreed = true;
              setSession({ ...session, prevSessionData });
              navigation.goBack()
            }}
          />
        </View>
      }
      {isVisibleDone && (
        <CustomButton
          buttonPress={() => navigation.goBack()}
          style={{ bottom: -10, height: 56, width: 260 }}
          title={buttonText ? buttonText : StringsOfLanguages.PREAPPROVEDOFFERS.DONE}
        />
      )}
      <LoaderComponent
        isVisible={showLoader}
        heading={StringsOfLanguages.LOADER.DASH_HEADING}
        subHeading={StringsOfLanguages.LOADER.DASH_SUBHEADING}
      />
    </CenteredView>
  );
};

export default CustomWebPage;
