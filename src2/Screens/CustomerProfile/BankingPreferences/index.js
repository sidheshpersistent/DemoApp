import React, { useEffect, useRef , useState} from "react";

import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,

} from "react-native";
import styled from "styled-components/native";

import PersonalizedButton from "../Components/PersonalizedButton";
import PersonalizedBanking from "./PersonalizedBanking";
import InstantBanking from "./InstantBanking";
import {
  arrowBack,
  rightArrow,
  rightArrowWhite,
  edit,
  location,
  verify_card,
} from "../../../Assets/Images";

import { Checkbox } from "@idfc/ccl-mobile/lib/module/v2";
import { CustomText, PopupEditBranch } from "../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  TestIds,
  ConsoleLogHelper,
  NavigationUrl,
  AsyncStorageUtils,
} from "../../../Utils";
import useSession from "../../../App/useSession";
import { Branch_Location } from "../../ApplyNowForm/constants";
import { StringsOfLanguages } from "../../../Localization";
import { Endpoints, NetworkManager } from "../../../API";
import { encryptedDataValue } from "../../../Utils/CryptoHelper";
import {
  Save_Status,
  banking_Type,
  Milestone,
  Account_Type,
  CommonConstant,
  timeoutConst,
  LocalDB,
  customerProfileReset,
} from "../../../Utils/Constants";
import {
  ReimburseAccountContainer,
  SuccessAccountType,
  SuccessBackgroundImage,
  SuccessBranchContainer,
  SuccessContainer,
} from "./styled";
import ErrorPopup from "../../../Components/ErrorPopup";

const BankingPreferences = (props) => {
  const { next, prev, navigation, childFunc, loading,resetFunc } = props;
  const { session, setSession } = useSession();
  const [isUnkownError,setIsUnkownError] = useState(false);
  const [errorMsg,setErrorMsg] = useState("");
  const {
    Success,
    verifyKitData,
    activeIndex,
    istermsAggreed,
    branchSelected,
    branchSelectedValue,
    isBranchSelectedFromList,
    branchSelectedInstant,
    inputAccountNumber,
    isEditBranch,
    reimburseAccount,
    boosterAccount,
    productSelected,
    checkbookOpted,
    debitOpted,
    productRadio,
    SAProductList,
    personalizedTerms,
    instaKitTerms,
  } = session.customerProfile.bankingPreference;
  const prevSession = session;
  const bankingPreferenceContext =
    prevSession.customerProfile.bankingPreference;

  const totalField = useRef(0);
  useEffect(() => {
    childFunc.current = callSubmitApi;
    resetFunc.current=resetfunction
  }, []);

  useEffect(() => {
    if (activeIndex == 0) {
      totalFieldToFill();
    } else {
      totalFieldToFillInstant();
    }
  }, [
    activeIndex,
    branchSelectedValue,
    productSelected,
    Success,
    branchSelected,
  ]);
  useEffect(() => {
    let timeOut = "";
    if (activeIndex == 0) {
      timeOut = setTimeout(() => {
        totalFieldToFill();
      }, timeoutConst.VALUE_8000);
    } else {
      totalFieldToFillInstant();
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  useEffect(()=>{
    prevSession.progressLoader=prevSession.progressLoader+1
    setSession({...session,prevSession})
  },[])
  
  const resetfunction=()=>{
    
    prevSession.customerProfile=customerProfileReset
    setSession({...session,prevSession})
  }
  const totalFieldToFillInstant = () => {
    totalField.current = 2;
    calcPercentValue();
  };

  const totalFieldToFill = () => {
    totalField.current = 2;
    calcPercentValue();
  };

  const calcPercentValue = () => {
    if (activeIndex == 0) {
      const eachFieldValue = 33 / totalField.current;
      let total = 33;
      if (SAProductList) {
        total = total + eachFieldValue;
      }
      if (branchSelectedValue || isBranchSelectedFromList) {
        total = total + eachFieldValue;
      }
      // if (istermsAggreed) {
      //   total = total + eachFieldValue;
      // }

      calculateProgressValue(Math.trunc(total));
    } else {
      const eachFieldValue = 33 / totalField.current;
      let total = 33;
      // if (istermsAggreed) {
      //   total = total + eachFieldValue;
      // }
      if (inputAccountNumber) {
        total = total + eachFieldValue;
      }
      if (Success) {
        total = total + eachFieldValue;
      }

      calculateProgressValue(Math.trunc(total));
    }
  };
  const calculateProgressValue = (value) => {
    setSession({ ...session, progressPercent: value });
  };

  useEffect(() => {
    termsConditionsCheck();
  }, [activeIndex, personalizedTerms, instaKitTerms]);

  const termsConditionsCheck = () => {
    if (activeIndex == 0) {
      bankingPreferenceContext.istermsAggreed = personalizedTerms;
    } else {
      bankingPreferenceContext.istermsAggreed = instaKitTerms;
    }

    setSession({ ...session, prevSession });
  };

  function callSubmitApi() {
    submitBankingPreferences(false);
  }

  const getPersonalizedBankingRequest = (isNext) => {
    const request = {
      bankingType: banking_Type.Personalized,
      productSelected: productSelected,
      branchSelected: branchSelected,
      branchSelectedValue: branchSelectedValue,
      isBranchSelectedFromList: isBranchSelectedFromList,
      servicesRequired: {
        checkbookOpted: checkbookOpted,
        debitOpted: debitOpted,
      },
      productRadio: productRadio,
      reimburseAccount: reimburseAccount,
      saveStatus: isNext ? Save_Status.finish : Save_Status.save,
      istermsAggreed: istermsAggreed,
    };
    ConsoleLogHelper.log("banking details req : ", JSON.stringify(request));
    return encryptedDataValue(JSON.stringify(request));
  };
  const getInstantBankingRequest = (isNext) => {
    const request = {
      bankingType: banking_Type.Instant,
      Success: Success,
      inputAccountNumber: inputAccountNumber,
      verifyKitData: verifyKitData,
      branchSelected: branchSelectedInstant,
      saveStatus: isNext ? Save_Status.finish : Save_Status.save,
      istermsAggreed: istermsAggreed,
      boosterAccount: boosterAccount,
    };
    ConsoleLogHelper.log(
      "banking details req insta : ",
      JSON.stringify(request)
    );
    return encryptedDataValue(JSON.stringify(request));
  };
  const submitBankingPreferences = async (isNext, isPrev) => {
    loading(true);
    let agentInfo = await AsyncStorageUtils.getObjectItem(LocalDB.agentInfo);
    let request = {
      userId: prevSession.agentDetails.userId,
      milestone: Milestone.BANKING_DETAILS,
      agentId: agentInfo?.email,
      journeyPercentage: session.progressPercent,
      bankingDetails:
        activeIndex == 0
          ? getPersonalizedBankingRequest(isNext)
          : getInstantBankingRequest(isNext),
    };
    let header={
      appName: session.accountType,
      mobileNumber:""
    }
    ConsoleLogHelper.log("final request banking: ", JSON.stringify(request));
    NetworkManager.IDFCNetworkPut(
      Endpoints.saveCustomerDetails,
      request,
      header,
      (response,message) => {
        loading(false);
        ConsoleLogHelper.log("save api response banking :", response);
        if (response?.status == CommonConstant.SUCCESS) {
          if (isNext) {
            next();
          } else if (isPrev) {
            prev();
          } else {
            navigation.navigate(NavigationUrl.drawerId, {
              screen: NavigationUrl.dashboardId,
            });
          }
        } else if (response == CommonConstant.INTERNALSERVERERROR) {
          setErrorMsg(message);
         setIsUnkownError(true);
        }else{
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
          setIsUnkownError(true);
        }
      }
    );
  };
  const forwardArrowPress = () => {
    if (activeIndex == 0) {
      submitBankingPreferences(true);
    } else {
      if (Success) {
        submitBankingPreferences(true);
      } else {
        bankingPreferenceContext.Success = true;
        bankingPreferenceContext.verifyKitData.status = true;
        bankingPreferenceContext.verifyKitData.data.accountNumber =
          inputAccountNumber;
        setSession({ ...session, prevSession });
      }
    }
  };
  const backArrowPress = () => {
    if (Success) {
      bankingPreferenceContext.Success = false;
      bankingPreferenceContext.verifyKitData.status = false;
      bankingPreferenceContext.verifyKitData.data.accountNumber = "";
      bankingPreferenceContext.inputAccountNumber = "";
      setSession({ ...session, prevSession });
    } else {
      submitBankingPreferences(false, true);
    }
  };
  const buttonActive = () => {
    if (activeIndex == 1) {
      if (Success) {
       
       
          return true;
       
      } else {
        if (inputAccountNumber != "" && inputAccountNumber.length > 10) {
          
            return true;
          
        } else {
          return false;
        }
      }
    } else {
      if (
        branchSelectedValue != "" &&
        isBranchSelectedFromList &&
        productSelected != ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <View>
      {Success ? null : (
        <AlignedContainer>
          <PersonalizedButton
            testID={TestIds.bp_personalized_button}
            selectedButtonIndex={(index) => {
              bankingPreferenceContext.activeIndex = index;
              setSession({ ...session, prevSession });
            }}
          />
        </AlignedContainer>
      )}

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        {Success ? (
          <AlignedContainer>
            <SuccessContainer>
              <CustomText
                testID={TestIds.bp_verify_account_details}
                fontSize={Font_Size.SIZE_14}
                fontFamily={FontFamily.Inter_REGULAR}
                marginBottom={16}
              >
                {StringsOfLanguages.BANKING_PREFERNCE.PLEASE_VERIFY}
              </CustomText>

              <SuccessBackgroundImage
                imageStyle={{ borderRadius: 10 }}
                source={verify_card}
              >
                <View style={{ width: "100%" }}>
                  <SuccessAccountType>
                    <View style={{ width: "40%" }}>
                      <CustomText
                        testID={TestIds.bp_account_type_heading}
                        fontSize={Font_Size.SIZE_10}
                        fontFamily={FontFamily.INTER_BOLD}
                        marginBottom={5}
                        style={{ color: Colors.NEW_GREY_100.code }}
                        letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.ACCOUNT_TYPE}
                      </CustomText>
                      <CustomText
                        testID={TestIds.bp_account_type}
                        fontSize={Font_Size.SIZE_16}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_22}
                        color={Colors.WHITE}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.INSTA_SAVING}
                      </CustomText>
                    </View>
                    <View style={{ width: "50%" }}>
                      <CustomText
                        testID={TestIds.bp_account_number_heading}
                        fontSize={Font_Size.SIZE_10}
                        fontFamily={FontFamily.INTER_BOLD}
                        marginBottom={5}
                        style={{ color: Colors.NEW_GREY_100.code }}
                        letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.ACCOUNT_NUMBER}
                      </CustomText>
                      <CustomText
                        testID={TestIds.bp_account_number}
                        fontSize={Font_Size.SIZE_16}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_22}
                        color={Colors.WHITE}
                      >
                        {verifyKitData.data.accountNumber}
                      </CustomText>
                    </View>
                  </SuccessAccountType>

                  <SuccessBranchContainer>
                    <View style={{ width: "40%" }}>
                      <CustomText
                        testID={TestIds.bp_ucic_heading}
                        fontSize={Font_Size.SIZE_10}
                        fontFamily={FontFamily.INTER_BOLD}
                        marginBottom={5}
                        style={{ color: Colors.NEW_GREY_100.code }}
                        letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.UCIC}
                      </CustomText>
                      <CustomText
                        testID={TestIds.bp_ucic}
                        fontSize={Font_Size.SIZE_16}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_22}
                        color={Colors.WHITE}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.UCIC_NUMBER}
                      </CustomText>
                    </View>
                    <View style={{ width: "50%" }}>
                      <View style={{ flexDirection: "row" }}>
                        <CustomText
                          testID={TestIds.bp_fetched_branch_heading}
                          fontSize={Font_Size.SIZE_10}
                          fontFamily={FontFamily.INTER_BOLD}
                          marginBottom={5}
                          style={{ color: Colors.NEW_GREY_100.code }}
                          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                        >
                          {StringsOfLanguages.BANKING_PREFERNCE.FETCHED_BRANCH}
                        </CustomText>
                        <TouchableOpacity
                          testID={TestIds.bp_is_edit_branch}
                          onPress={() => {
                            bankingPreferenceContext.isEditBranch = true;
                            setSession({ ...session, prevSession });
                          }}
                        >
                          <Image
                            source={edit}
                            style={{
                              width: 20,
                              height: 20,
                              marginLeft: 5,
                              marginTop: -4,
                            }}
                          />
                        </TouchableOpacity>
                      </View>

                      <CustomText
                        testID={TestIds.bp_branch_selected}
                        fontSize={Font_Size.SIZE_16}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_22}
                        color={Colors.WHITE}
                      >
                        {branchSelectedInstant.displayText}
                      </CustomText>
                    </View>
                  </SuccessBranchContainer>
                </View>
              </SuccessBackgroundImage>
            </SuccessContainer>
          </AlignedContainer>
        ) : activeIndex === 0 ? (
          <PersonalizedBanking />
        ) : (
          <AlignedContainer>
            <InstantBanking navigation={navigation} />
          </AlignedContainer>
        )}
        {session.accountType == Account_Type.ASSISTED_CS &&
        activeIndex == 1 &&
        Success ? (
          <FullLengthBox>
            <AlignedContainer>
              <MarginBox>
                <ReimburseAccountContainer>
                  <View style={{ width: 220 }}>
                    <CustomText
                      testID={TestIds.bp_opt_for}
                      fontSize={Font_Size.SIZE_14}
                      fontFamily={FontFamily.INTER_BOLD}
                      lineHeight={Line_Height.HEIGHT_20}
                    >
                      {StringsOfLanguages.BANKING_PREFERNCE.OPT_FOR}
                    </CustomText>
                  </View>
                  <ReimburseAccountContainer>
                    <CustomText testID={TestIds.bp_yes}>
                      {StringsOfLanguages.BANKING_PREFERNCE.YES}
                    </CustomText>
                    <Switch
                      testID={TestIds.bp_opt_for_switch}
                      trackColor={{
                        false: Colors.NEW_RED_200.code,
                        true: Colors.NEW_GREEN_100.code,
                      }}
                      thumbColor={Colors.WHITE}
                      onValueChange={() => {
                        bankingPreferenceContext.reimburseAccount =
                          !bankingPreferenceContext.reimburseAccount;
                        setSession({ ...session, prevSession });
                      }}
                      value={reimburseAccount}
                    />
                    <CustomText testID={TestIds.bp_no}>
                      {StringsOfLanguages.BANKING_PREFERNCE.NO}
                    </CustomText>
                  </ReimburseAccountContainer>
                </ReimburseAccountContainer>
              </MarginBox>
            </AlignedContainer>
          </FullLengthBox>
        ) : null}
        <FullLengthBox>
          <AlignedContainer>
            <MarginBox>
              <Checkbox
                testID={TestIds.bp_terms_aggreed_checkbox}
                style={{
                  width: "85%",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                labelStyle={{ marginLeft: 10 }}
                checked={istermsAggreed}
                onChange={() => {
                  if (activeIndex == 0) {
                    bankingPreferenceContext.personalizedTerms =
                      !bankingPreferenceContext.personalizedTerms;
                  } else {
                    bankingPreferenceContext.instaKitTerms =
                      !bankingPreferenceContext.instaKitTerms;
                  }

                  setSession({ ...session, prevSession });
                }}
              >
                <CustomText
                  testID={TestIds.bp_i_agree}
                  fontFamily={FontFamily.Inter_REGULAR}
                  lineHeight={Line_Height.HEIGHT_20}
                >
                  {StringsOfLanguages.BANKING_PREFERNCE.I_AGGREE}{" "}
                  {session.accountType == Account_Type.ASSISTED_CS ? (
                    activeIndex == 0 ? (
                      <CustomText
                        testID={TestIds.bp_inactive_forex}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_26}
                      >
                        {
                          StringsOfLanguages.BANKING_PREFERNCE
                            .IDFC_WILL_INACTIVE
                        }
                      </CustomText>
                    ) : (
                      <CustomText
                        testID={TestIds.bp_active_forex}
                        fontFamily={FontFamily.Inter_SemiBold}
                        lineHeight={Line_Height.HEIGHT_26}
                      >
                        {StringsOfLanguages.BANKING_PREFERNCE.IDFC_WILL_ACTIVE}
                      </CustomText>
                    )
                  ) : (
                    <CustomText
                      testID={TestIds.bp_active_debit_card}
                      fontFamily={FontFamily.Inter_SemiBold}
                      lineHeight={Line_Height.HEIGHT_26}
                    >
                      {StringsOfLanguages.BANKING_PREFERNCE.IDFC_WILL_DEBIT}
                    </CustomText>
                  )}
                </CustomText>
              </Checkbox>
            </MarginBox>
          </AlignedContainer>
        </FullLengthBox>
        {session.accountType == Account_Type.ASSISTED_CS && activeIndex == 1 ? (
          <FullLengthBox style={{ marginTop: -10 }}>
            <AlignedContainer>
              <MarginBox>
                <Checkbox
                  testID={TestIds.bp_booster_account_checkbox}
                  style={{
                    width: "85%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  labelStyle={{ marginLeft: 10 }}
                  checked={boosterAccount}
                  onChange={() => {
                    bankingPreferenceContext.boosterAccount =
                      !bankingPreferenceContext.boosterAccount;
                    setSession({ ...session, prevSession });
                  }}
                >
                  <CustomText
                    fontFamily={FontFamily.Inter_REGULAR}
                    lineHeight={Line_Height.HEIGHT_20}
                  >
                    {StringsOfLanguages.BANKING_PREFERNCE.I_AGGREE_TO}{" "}
                    <CustomText
                      fontFamily={FontFamily.Inter_SemiBold}
                      lineHeight={Line_Height.HEIGHT_26}
                    >
                      {StringsOfLanguages.BANKING_PREFERNCE.SALARY_BOOSTER}
                    </CustomText>
                  </CustomText>
                </Checkbox>
              </MarginBox>
            </AlignedContainer>
          </FullLengthBox>
        ) : null}

        <AlignedContainer
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 38,
            flexDirection: "row",
            flex: 0.5,
          }}
        >
          <BackArrowButton
            testID={TestIds.bp_back_arrow}
            onPress={() => backArrowPress()}
          >
            <Image source={arrowBack} style={RightArrowImage} />
          </BackArrowButton>
          {buttonActive() ? (
            <RightArrowButtonActive
              testID={TestIds.bp_right_arrow}
              onPress={() => forwardArrowPress()}
            >
              <Image source={rightArrowWhite} style={RightArrowImage} />
            </RightArrowButtonActive>
          ) : (
            <RightArrowButton>
              <Image source={rightArrow} style={RightArrowImage} />
            </RightArrowButton>
          )}
        </AlignedContainer>
      </ScrollView>

      {
        <PopupEditBranch
          testID_submit={TestIds.bp_popup_submit}
          testID_cancel={TestIds.bp_popup_cancel}
          animationIn="bounceIn"
          isVisible={isEditBranch}
          popupIcon={location}
          Heading="Edit fetched branch"
          popupInfo={"Please select preferred branch from the options below"}
          cancelButtonPress={() => {
            bankingPreferenceContext.isEditBranch = false;
            setSession({ ...session, prevSession });
          }}
          ButtonText="Confirm"
          defaultSelectedItem={branchSelectedInstant}
          options={Branch_Location}
          buttonPress={(e) => {
            bankingPreferenceContext.branchSelectedInstant = e.branch;
            bankingPreferenceContext.isEditBranch = false;
            setSession({ ...session, prevSession });
          }}
        />
      }
                        {<ErrorPopup
      popUpshow={isUnkownError} 
      message={errorMsg}
      callBack={()=>setIsUnkownError(false)}
      btnText={StringsOfLanguages.COMMON.SESSION_ALERT_OK}
      ></ErrorPopup>}
    </View>
  );
};
const FullLengthBox = styled.View`
  width: 100%;
  background-color: white;
  margin-bottom: 32px;
`;

const RightArrowImage = {
  width: 40,
  height: 40,
};
const BackArrowButton = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
const RightArrowButtonActive = styled.TouchableOpacity`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #9b1e26;
  align-items: center;
  justify-content: center;
`;
const RightArrowButton = styled.View`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  background-color: #e9e9e9;
  align-items: center;
  justify-content: center;
`;

const AlignedContainer = styled.View`
  width: 70%;
  align-self: center;
`;

const MarginBox = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default BankingPreferences;
