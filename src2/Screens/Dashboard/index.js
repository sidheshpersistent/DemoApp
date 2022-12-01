import React, { useEffect, useState } from "react";
import { useNavigation ,useFocusEffect} from "@react-navigation/native";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  BackHandler,
  Alert,
} from "react-native";

import {
  AgentGreetWrapper,
  header,
  image,
  LowerBoxContainer,
  CardDetailsView,
  StatusView,
} from "./styles";
import {
  ProfileHeaderContainer,
  BackgroundImage,
  UpperBoxContainer,
  CustomText,
} from "../../Components";
import {
  FontFamily,
  FontWeight,
  LetterSpacing,
  Colors,
  Font_Size,
  Line_Height,
  AsyncStorageUtils,
} from "../../Utils/";
import MonthlyHighlights from "./Components/MonthlyHighlights";
import {
  bankUseBg,
  redArrowForward,
  resumeApplicationBg,
  salaryAccountBg,
  savingAccountBg,
} from "../../Assets/Images";
import {  DATA, lowerCardWidth, MonthlyHighlightData } from "./constants";

import { TestIds, LocalDB, Account_Type,CommonConstant } from "../../Utils/Constants";
import { IconButton } from "@idfc/ccl-mobile";
import { IconSize } from "@idfc/ccl-commons/enums";
import { StringsOfLanguages } from "../../Localization";
import useSession from "../../App/useSession";
import LoaderComponent from "../../Components/LoaderComponent";
import NavigationUrl from "../..//Utils/NavigationUrl";
import ErrorPopup from "../../Components/ErrorPopup";
import {getDasboardDetailsDataService} from './service';
const Dashboard = (props) => {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const [monthlyHighlights, setMonthlyHighlights] = useState(
    MonthlyHighlightData()
  );
  const [inCompleteCount, setinCompleteCount] = useState(0);
  const [inProgessCount, setinProgessCount] = useState(0);
  const [agentDetails, setAgentDetails] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const [isErrorPopup,setIsErrorPopup] = useState(false);
  const [errorMsg,setErrorMsg] = useState("");

  useEffect(() => {
    getAgentDetails();
    _retrieveData();
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      // Anything in here is fired on component unmount.
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getDasboardDetailsData();
    }, [])
  );


  async function _retrieveData  () {
    const value = await AsyncStorageUtils.getItem("language");
    console.log("***** retrive value lang *****", value);
    StringsOfLanguages.setLanguage(value);
  }

  const handleBackPress = () => {
    /* istanbul ignore else */
    if (props.navigation.isFocused()) {
      Alert.alert(
        StringsOfLanguages.DASHBOARD.EXIT_APP_TITLE,
        StringsOfLanguages.DASHBOARD.EXIT_APP_SUBTITLE,
        [
          {
            text: StringsOfLanguages.DASHBOARD.EXIT_APP_NO,
            // onPress: () => console.log("Cancel Pressed"),
          },
          {
            text: StringsOfLanguages.DASHBOARD.EXIT_APP_YES,
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.goBack(null);
    }
    return true;
  };

  async function getAgentDetails (){
    try {
      let data = await AsyncStorageUtils.getItem(LocalDB.agentInfo);

      let kk = JSON.parse(data);

      setAgentDetails(kk);
    } catch {
      console.error();
    }
  }

  async function getDasboardDetailsData ()  {
    setShowLoader(true);
    getDasboardDetailsDataService((status,responseData,monthlyHighlights)=>{
      if(status == CommonConstant.SUCCESS){
        setinCompleteCount(responseData?.incomplete);
        setinProgessCount(responseData?.resumeAppl);
        setMonthlyHighlights(monthlyHighlights);
      }else if (status == CommonConstant.NODATA){
        console.log(status)
        setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR)
        setIsErrorPopup(true);
      }else if (status == CommonConstant.INTERNALSERVERERROR){
        setErrorMsg(responseData)
        setIsErrorPopup(true);
      }else {
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR)
        setIsErrorPopup(true);
      }
      setShowLoader(false);
    });

  }

  const onCardPress = (index) => {
    if (index === 0 || index === 1) {
       
      let accountType = index === 0 ? Account_Type.ASSISTED_SA : Account_Type.ASSISTED_CS;
      setSession({...session,accountType:accountType})
      navigation.navigate(NavigationUrl.customerId, {
        accountType: accountType,
      });
      
    }
    if (index === 3) {
      navigation.navigate(NavigationUrl.ResumeApplication);
    }
    if (index === 2) {
      navigation.navigate(NavigationUrl.BankUseSectionList)
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        testID={
          index == 0
            ? TestIds.db_saving_acc_click
            : index == 1
              ? TestIds.db_salary_acc_click
              : index == 2
                ? TestIds.db_bank_use_click
                : TestIds.db_resume_click
        }
        onPress={() => onCardPress(index)}
      >
        <ImageBackground
          key={item.key}
          style={{
            width: lowerCardWidth,
            height: lowerCardWidth,
            margin: 15,
          }}
          source={
            index == 0
              ? savingAccountBg
              : index == 1
                ? salaryAccountBg
                : index == 2
                  ? bankUseBg
                  : resumeApplicationBg
          }
        >
          <CardDetailsView
            testID={
              index == 0
                ? TestIds.db_savings_acc
                : index == 1
                  ? TestIds.db_salary_acc
                  : index == 2
                    ? TestIds.db_bank_use
                    : TestIds.db_resume_app
            }
          >
            <View>
              <CustomText
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_26}
                color={Colors.NEW_GREY_800.text}
              >
                {item.title}
              </CustomText>
              <CustomText
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_26}
                color={Colors.NEW_GREY_800.text}
              >
                {item.subtitle}
              </CustomText>
              {item.status ? (
                <StatusView>
                  <CustomText
                    fontFamily={FontFamily.INTER_BOLD}
                    fontSize={Font_Size.SIZE_10}
                    lineHeight={Line_Height.HEIGHT_14}
                    color={Colors.NEW_GREY_800.text}
                  >
                    {item.status == "INCOMPLETE"
                      ? inCompleteCount + " " + item.status
                      : inProgessCount + " " + item.status}
                  </CustomText>
                </StatusView>
              ) : null}
            </View>
            <View>
              <Image
                style={{ height: 36, width: 36 }}
                source={redArrowForward}
              />
            </View>
          </CardDetailsView>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <BackgroundImage>
      <UpperBoxContainer>
        <IconButton
          testID={TestIds.db_hamburg_icon}
          iconType={"Bars"}
          style={{
            width: 36,
            position: "absolute",
            marginTop: 8,
            marginLeft: 16,
          }}
          iconColor={"maroon"}
          transparent
          iconSize={IconSize.MEDIUM}
          onPress={() => {
            navigation.openDrawer()
          }}
        />
        <ProfileHeaderContainer
          style={header}
          leftView={
            <View testID={TestIds.db_avtar}>
              <Image
                style={image}
                source={{
                  uri: agentDetails?.agentAvator,
                }}
              />
            </View>
          }
          rightView={
            <AgentGreetWrapper>
              <CustomText
                testID={TestIds.db_welcome_text}
                fontWeight={FontWeight.WEIGHT_400}
                fontSize={Font_Size.SIZE_28}
                lineHeight={Line_Height.HEIGHT_36}
                letterSpacing={LetterSpacing.MINUS_ONE}
                color={Colors.NEW_GREY_800.text}
              >
                {StringsOfLanguages.DASHBOARD.DROP_JOURNY_MODAL_TITLE}
              </CustomText>
              <CustomText
                testID={TestIds.db_user_name}
                fontFamily={FontFamily.INTER_BOLD}
                lineHeight={Line_Height.HEIGHT_36}
                fontSize={Font_Size.SIZE_28}
                letterSpacing={LetterSpacing.MINUS_ONE}
                color={Colors.NEW_GREY_800.text}
              >
                {agentDetails?.firstName} {agentDetails?.lastName}{` !`}
              </CustomText>
            </AgentGreetWrapper>
          }
        />
        <CustomText
          testID={TestIds.db_month_highlight_text}
          lineHeight={Line_Height.HEIGHT_14}
          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
          marginTop={Font_Size.SIZE_10}
          fontSize={Font_Size.SIZE_10}
          fontFamily={FontFamily.INTER_BOLD}
          color={Colors.NEW_GREY_600.text}
        >
          {StringsOfLanguages.DASHBOARD.HIGHLIGHTS}
        </CustomText>

        <MonthlyHighlights monthlyHighlights={monthlyHighlights} />
      </UpperBoxContainer>

      <LowerBoxContainer>
        <CustomText
          testID={TestIds.db_main_header}
          fontSize={Font_Size.SIZE_16}
          lineHeight={Line_Height.HEIGHT_22}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
          color={Colors.NEW_WHITE_100}
          paddingLeft={10}
        >
          {StringsOfLanguages.DASHBOARD.MAIN_MENU_HEADER}
        </CustomText>

        <FlatList
          data={DATA()}
          keyExtractor={(item) => item.key}
          renderItem={(item, index) => renderItem(item, index)}
          numColumns={2}
        />
      </LowerBoxContainer>

      <LoaderComponent
        isVisible={showLoader}
        heading={StringsOfLanguages.LOADER.DASH_HEADING}
        subHeading={StringsOfLanguages.LOADER.DASH_SUBHEADING}
      />
      {<ErrorPopup
      popUpshow={isErrorPopup} 
      message={errorMsg}
      callBack={()=>setIsErrorPopup(false)}
      btnText={StringsOfLanguages.COMMON.SESSION_ALERT_OK}
      ></ErrorPopup>}
    </BackgroundImage>
  );
};

export default Dashboard;
