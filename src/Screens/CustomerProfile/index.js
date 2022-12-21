import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, BackHandler, ImageBackground } from "react-native";

import TimeLineView from "../../Components/TimeLineView/TimeLineView";
import PersonalDetailsEnabled from "../../Components/TimeLineView/images/personalDetailsEnabled.png";
import BankingPreferenceEnabled from "../../Components/TimeLineView/images/bankingPreferenceEnabled.png";
import BankingPreferenceDisabled from "../../Components/TimeLineView/images/bankingPreferenceDisabled.png";
import CustomerConsentEnabled from "../../Components/TimeLineView/images/customerConsentEnabled.png";
import CustomerConsentDisabled from "../../Components/TimeLineView/images/customerConsentDisabled.png";
import PersonalDetail from "./personalDetail";
import CustomerConsent from "./CustomerConsent";
import BankingPreferences from "./BankingPreferences";
import BGImage from '../../Assets/Images/bg2.png';

import {
  CustomText,
  Popup,
} from "../../Components";
import { alertIcon, iconClose } from "../../Assets/Images";
import {
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  NavigationUrl,
} from "../../Utils";
import {
  AlignedContainer,
  IconClose,
  HeaderContainer,
  CloseAndSave,
  SaveAndExit,
  LowerConatainer,
  PleaseEnter,
  TimeLineContainer,
  ScrollViewContainer,
} from "./styled";

import { ComponentContainer } from "./personalDetail/styled";
import { useNavigation } from "@react-navigation/native";
import LoaderComponent from "../../Components/LoaderComponent";
import { StringsOfLanguages } from "../../Localization";
import { Customer_Profile, Milestone, CustomerProfileData, CustomerProfileStepper } from "../../Utils/Constants";
import UserContainer from "./userDetails";

const CustomerProfile = (props) => {
  const data = [
    {
      ID: 1,
      type: CustomerProfileData.PERSONALDETAIL,
      img: CustomerProfileData.SOURCE,
      text: CustomerProfileData.PERSONALDETAILS,
      isSelected: true,//props?.route?.params?.milestone == Milestone.PERSONAL_DETAILS ? true :false,
      iconEnabled: PersonalDetailsEnabled,
      iconDisabled: PersonalDetailsEnabled,
    },
    {
      ID: 2,
      img: CustomerProfileData.SOURCE,
      type: CustomerProfileData.BANKING,
      text: CustomerProfileData.BANKINGPREFERENCE,
      isSelected: props?.route?.params?.milestone == Milestone.CUST_CONSENT_DETAILS || props?.route?.params?.milestone == Milestone.BANKING_DETAILS ? true : false,
      iconEnabled: BankingPreferenceEnabled,
      iconDisabled: BankingPreferenceDisabled,
    },
    {
      ID: 3,
      img: CustomerProfileData.SOURCE,
      type: CustomerProfileData.CONSENT,
      text: CustomerProfileData.CUSTOMERCONSENT,
      isSelected: props?.route?.params?.milestone == Milestone.CUST_CONSENT_DETAILS ? true : false,
      iconEnabled: CustomerConsentEnabled,
      iconDisabled: CustomerConsentDisabled,
    },
  ];
  const navigation = useNavigation();
  const [screen, setScreen] = useState(data);
  const [activeIndex, setActiveIndex] = useState(props?.route?.params?.milestone == Milestone.CUST_CONSENT_DETAILS ? CustomerProfileStepper.CUSTOMERCONSENT : CustomerProfileStepper.PERSONALDETAILS);
  const [userData] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [crossPopup, setCrossPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);


  const childFunc = useRef(null);
  const resetFunc = useRef(null);
  // const { session, setSession } = useSession();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);


  const handleBackPress = () => {
    if (props.navigation.isFocused()) {
      setPopupVisible(true);
    } else {
      navigation.goBack(null);
    }
    return true;
  };
  const nextPage = (type) => {
    let newScreen = screen.map((element) =>
      element.type == type ? { ...element, isSelected: true } : element
    );

    setScreen(newScreen);
  };
  const prevPage = (type) => {
    let newScreen = screen.map((element) =>
      element.type == type ? { ...element, isSelected: false } : element
    );
    setScreen(newScreen);
  };
  const SelectPage = () => {
    let selectedIndex = screen.reduce((acc, curr, index) => {
      if (curr.isSelected) {
        acc = index;
        return acc;
      } else {
        return acc;
      }
    });

    switch (selectedIndex) {
      case 0:
        setActiveIndex(0);
        return (
          <PersonalDetail
            userData={userData}
            next={() => nextPage(Customer_Profile.banking)}
            childFunc={childFunc}
            resetFunc={resetFunc}
            loading={(flag) => setShowLoader(flag)}
          />
        );
      case 1:
        setActiveIndex(1);
        return (
          <BankingPreferences
            navigation={props.navigation}
            next={() => nextPage(Customer_Profile.consent)}
            prev={() => prevPage(Customer_Profile.banking)}
            childFunc={childFunc}
            resetFunc={resetFunc}
            loading={(flag) => setShowLoader(flag)}
          />
        );
      case 2:
        setActiveIndex(2);
        return (
          <CustomerConsent
            // next={() => props.navigation.navigate('SASuccess')}
            next={() => props.navigation.navigate(NavigationUrl.SASuccessID)}
            prev={() => prevPage(Customer_Profile.consent)}
            navigation={props.navigation}
            childFunc={childFunc}
            resetFunc={resetFunc}
            loading={(flag) => setShowLoader(flag)}
          />
        );
      default:
        setActiveIndex(0);
        return (
          <PersonalDetail
            userData={userData}
            next={() => nextPage(Customer_Profile.banking)}
            childFunc={childFunc}
            resetFunc={resetFunc}
            loading={(flag) => setShowLoader(flag)}
          />
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BGImage}>
        {
          showLoader ? <LoaderComponent
            isVisible={false}
            heading={StringsOfLanguages.LOADER.CID_HEADING}
            subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
          /> : null
        }
        <HeaderContainer>
          <CloseAndSave>
            <TouchableOpacity onPress={() => setCrossPopup(true)}>
              <IconClose source={iconClose} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBackPress}>
              <SaveAndExit>Save & Exit</SaveAndExit>
            </TouchableOpacity>
          </CloseAndSave>
          <UserContainer ></UserContainer>
        </HeaderContainer>
        {activeIndex == CustomerProfileStepper.PERSONALDETAILS ? (
          <PleaseEnter>
            <Text style={{ fontWeight: "normal" }}>{StringsOfLanguages.CUSTOMERCONSENT.CC_PLEASE_ENTER} </Text>
            {StringsOfLanguages.CUSTOMERCONSENT.CC_PERSONAL_DETAILS}
          </PleaseEnter>
        ) : activeIndex == CustomerProfileStepper.BANKINGPREFERENCES ? (
          <CustomText
            align="center"
            color={Colors.WHITE}
            marginBottom={40}
            fontSize={Font_Size.SIZE_20}
            lineHeight={Line_Height.HEIGHT_26}
            fontFamily={FontFamily.Inter_Light}
          >
            {StringsOfLanguages.CUSTOMERCONSENT.CC_SELECT}
            <CustomText
              align="center"
              color={Colors.WHITE}
              fontSize={Font_Size.SIZE_20}
              lineHeight={Line_Height.HEIGHT_26}
              fontFamily={FontFamily.INTER_BOLD}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_PREFERED_PRO}
            </CustomText>
            {StringsOfLanguages.CUSTOMERCONSENT.CC_FOR_THE_CUST}
          </CustomText>
        ) : (
          <CustomText
            align="center"
            color={Colors.WHITE}
            marginBottom={40}
            fontSize={Font_Size.SIZE_20}
            lineHeight={Line_Height.HEIGHT_26}
            fontFamily={FontFamily.Inter_Light}
          >
            {StringsOfLanguages.CUSTOMERCONSENT.CC_COMPLETE_THE_JOURNEY}
            <CustomText
              align="center"
              color={Colors.WHITE}
              fontSize={Font_Size.SIZE_20}
              lineHeight={Line_Height.HEIGHT_26}
              fontFamily={FontFamily.INTER_BOLD}
            >{StringsOfLanguages.CUSTOMERCONSENT.CC_CUST_CONCENT}
            </CustomText>
          </CustomText>
        )}
      </ImageBackground>
      <LowerConatainer>
        <AlignedContainer>
          <TimeLineContainer>
            <TimeLineView
              data={screen}
              activeIndex={activeIndex}
            ></TimeLineView>
          </TimeLineContainer>
        </AlignedContainer>
        <ScrollViewContainer
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
        >
          <SelectPage />
          {
            <Popup
              cancelButtonPress={() => setPopupVisible(false)}
              animationIn="bounceIn"
              popupIcon={alertIcon}
              isVisible={popupVisible}
              Heading={StringsOfLanguages.TRANSACTIONS.TRA_ALERT}
              ButtonText={StringsOfLanguages.CUSTOMER_PROFILE.SAVE_EXIT}
              buttonPress={() => {
                setPopupVisible(false);
                //resetFunc.current();
                childFunc.current();

              }}
              component={
                <ComponentContainer>
                  <CustomText
                    marginBottom={20}
                    fontSize={Font_Size.SIZE_16}
                    lineHeight={Line_Height.HEIGHT_24}
                    color={Colors.NEW_GREY_800.text}
                    fontFamily={FontFamily.Inter_REGULAR}
                  >
                    {StringsOfLanguages.CUSTOMER_PROFILE.CP_KINDLY_USE}
                    <CustomText
                      marginBottom={20}
                      fontSize={Font_Size.SIZE_16}
                      lineHeight={Line_Height.HEIGHT_24}
                      color={Colors.NEW_GREY_800.text}
                      fontFamily={FontFamily.Inter_SemiBold}
                    >
                      {" "}
                      {StringsOfLanguages.CUSTOMER_PROFILE.RESUME}{" "}
                    </CustomText>
                    {StringsOfLanguages.CUSTOMER_PROFILE.APPLICATION_SECTION}
                  </CustomText>
                </ComponentContainer>
              }
            />
          }
          {
            <Popup
              cancelButtonPress={() => setCrossPopup(false)}
              animationIn="bounceIn"
              popupIcon={alertIcon}
              isVisible={crossPopup}
              Heading={StringsOfLanguages.TRANSACTIONS.TRA_WITHOUT_SAVING}
              ButtonText={"Yes"}
              buttonPress={() => {
                setCrossPopup(false);
                resetFunc.current();
                props.navigation.navigate(NavigationUrl.drawerId, {
                  screen: NavigationUrl.dashboardId,
                });
              }}
              component={
                <ComponentContainer>
                  <CustomText
                    marginBottom={20}
                    fontSize={Font_Size.SIZE_16}
                    lineHeight={Line_Height.HEIGHT_24}
                    color={Colors.NEW_GREY_800.text}
                    fontFamily={FontFamily.Inter_REGULAR}
                  >
                    {StringsOfLanguages.CUSTOMER_PROFILE.ANY_CURRENT}{" "}
                    <CustomText
                      marginBottom={20}
                      fontSize={Font_Size.SIZE_16}
                      lineHeight={Line_Height.HEIGHT_24}
                      color={Colors.NEW_GREY_800.text}
                      fontFamily={FontFamily.Inter_SemiBold}
                    >
                      {StringsOfLanguages.CUSTOMER_PROFILE.CANCEL}
                    </CustomText>{" "}
                    {StringsOfLanguages.CUSTOMER_PROFILE.TO_CONTINUE}
                  </CustomText>
                </ComponentContainer>
              }
            />
          }
        </ScrollViewContainer>
      </LowerConatainer>
    </View>
  );
};

export default CustomerProfile;

