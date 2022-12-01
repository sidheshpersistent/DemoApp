
import { Checkbox, Select } from "@idfc/ccl-mobile/lib/module/v2";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import useSession from "../../../App/useSession";
import {
  arrowBack,
  rightArrow,
  rightArrowWhite,
  upload,
  info,
  recapture_image,
} from "../../../Assets/Images";
import { Card, CustomText, CustomTextInput, Popup } from "../../../Components";
import {
  Colors,
  FontFamily,
  Font_Size,
  LetterSpacing,
  Line_Height,
  NavigationUrl,
  TestIds,
  ConsoleLogHelper,
  AsyncStorageUtils,
} from "../../../Utils";
import { cc_dropDown_Data } from "../../ApplyNowForm/constants";
import { isValidTIN } from "../../../Utils/ValidationUtils";
import { StringsOfLanguages } from "../../../Localization";
import { Milestone, Save_Status, CommonConstant, Account_Type, InputStyleError, WebViewURL, ImageCaptureType, timeoutConst, AdharPanMatch, LocalDB, customerProfileReset } from "../../../Utils/Constants";
import { encryptedDataValue,decryptDataValue } from "../../../Utils/CryptoHelper";
import { Endpoints, NetworkManager } from "../../../API";
import {
  AlignedContainer,
  BackArrowButton,
  BackForwardContainer,
  CardMargin,
  cardView,
  CheckboxView,
  ClickableTextStyle,
  ComponentContainer,
  emptyCardView,
  flexView,
  FullLengthBox,
  imageSize,
  recaptureIconStyle,
  RightArrowButton,
  RightArrowButtonActive,
  RightArrowImage,
  rowCard,
  rowView,
  uploadIconStyle,
  uploadImageCard,
  uploadSignatureText,
} from "./styled";
import ErrorPopup from "../../../Components/ErrorPopup";


const CustomerConsent = (props) => {
  const { next, prev, loading, childFunc,resetFunc } = props;
  const { session, setSession } = useSession();
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    isIndianCitizen,
    isEmploymentProofNeeded,
    country,
    foreignTin,
    tinCountry,
    isTermsAgreed,
    isConsentGiven,
    isPoliticalyExposed,
    signatureImage,
    panImage,
    employmentProofImage, // this param will have employment proof image data
    isErrorForeignTIN,
  } = session.customerProfile.customerConsent;
  const {panDetails} = session;
  const prevSessionData = session;
  const consentContextData = prevSessionData.customerProfile.customerConsent;
  const totalField = useRef(0);
  const [isPanImageNeeded, setIsPanImageNeeded] = useState(false);

  useEffect(() => {
    childFunc.current = callSubmitApi;
    resetFunc.current=resetfunction
    if(panDetails?.panAdharStatus !== "" && panDetails?.panAdharStatus){
      if(panDetails?.panAdharStatus == AdharPanMatch.COMPLETE_MATCHED){
        setIsPanImageNeeded(false);
      }else{
        setIsPanImageNeeded(true);
      }
    }else{
      setIsPanImageNeeded(true);
    }
  }, []);

  useEffect(() => {
    session.accountType == Account_Type.ASSISTED_SA?
      totalFieldToFill():totalFieldToFill_CS()
  }, [
    isTermsAgreed,
    isIndianCitizen,
    isConsentGiven,
    panImage,
    signatureImage,
    country,
    tinCountry,
    foreignTin,
    employmentProofImage
  ]);


  useEffect(()=>{
    const timeOut=setTimeout(() => {
      session.accountType == Account_Type.ASSISTED_SA?
      totalFieldToFill():totalFieldToFill_CS()
    }, timeoutConst.VALUE_8000);
    return ()=>{
      clearTimeout(timeOut)
    }
  },[])

  useEffect(()=>{
    prevSessionData.progressLoader=prevSessionData.progressLoader+1
    setSession({...session,prevSessionData})
  },[])

  function callSubmitApi() {
    submitCustomerConcents(false);
  }
  const resetfunction=()=>{
    prevSessionData.customerProfile=customerProfileReset
    setSession({...session,prevSessionData})
  }
  function totalFieldToFill_CS(){
    totalField.current = 3;
    if (!isIndianCitizen) {
      totalField.current = totalField.current + 3;
    }
    if (isEmploymentProofNeeded) {
      totalField.current = totalField.current + 1;
    }
    if(isPanImageNeeded){
      totalField.current = totalField.current + 1;
    }
    calcPercentValue_CS();
  }
  function calcPercentValue_CS(){
    
    const eachFieldValue = 34 / totalField.current;
    let total = 66;
    if (panImage) {
      total = total + eachFieldValue;
      
    }
    if (employmentProofImage) {
      total = total + eachFieldValue;
      
    }
    if (signatureImage) {
      //TODO: this addtion is coming 86.39999999999....
      //79.6(total) + 6.8(eachFieldValue);
      total =total + eachFieldValue;
     
      
    }
    if (!isIndianCitizen) {
      if (foreignTin) {
        total = total + eachFieldValue;
      }
      if (tinCountry) {
        total = total + eachFieldValue;
      }
      if (country) {
        total = total + eachFieldValue;
      }
    }

    if (isTermsAgreed) {
      total = total + eachFieldValue;
    }
    if (isConsentGiven) {
      total = total + eachFieldValue;

    }
    total>99.0?
    calculateProgressValue(Math.trunc(100)):calculateProgressValue(Math.trunc(total))
  }

  function totalFieldToFill() {
    totalField.current = 3;
    if (!isIndianCitizen) {
      totalField.current = totalField.current + 3;
    }
    if(isPanImageNeeded){
      totalField.current = totalField.current + 1;
    }
    calcPercentValue();
  };
  
  function calcPercentValue (){
    const eachFieldValue = 34 / totalField.current;
    let total = 66;
    if (panImage) {
      total = total + eachFieldValue;
    }
    if (signatureImage) {
      total = total + eachFieldValue;
    }
    if (!isIndianCitizen) {
      if (foreignTin) {
        total = total + eachFieldValue;
      }
      if (tinCountry) {
        total = total + eachFieldValue;
      }
      if (country) {
        total = total + eachFieldValue;
      }
    }

    if (isTermsAgreed) {
      total = total + eachFieldValue;
    }
    if (isConsentGiven) {
      total = total + eachFieldValue;
    }
    total>99.0?
    calculateProgressValue(Math.trunc(100)):calculateProgressValue(Math.trunc(total))
  };
  function calculateProgressValue  (value) {
    setSession({ ...session, progressPercent: value });
  };

  const getConsentRequest = (isNext) => {
    const request = {
      isIndianCitizen: isIndianCitizen,
      country: country,
      foreignTin: foreignTin,
      tinCountry: tinCountry,
      saveStatus: isNext ? Save_Status.finish : Save_Status.save,
      isTermsAgreed: isTermsAgreed,
      isConsentGiven: isConsentGiven,
      signatureImage: signatureImage,
      panImage: panImage,
      employmentProofImage: employmentProofImage
    };
    ConsoleLogHelper.log("consent details req : ", JSON.stringify(request));
    return encryptedDataValue(JSON.stringify(request));
  };

  const callAccOpening = ()=>{
    loading(true);
    let request = {
      userId: prevSessionData.agentDetails.userId,
      // appName: session.accountType
    };
    let header = {
      appName: session.accountType,
      mobileNumber:""
    }
    console.log("ayush id",request.userId)
  NetworkManager.IDFCNetworkPost(Endpoints.accountOpening, request, header,response => {
    console.log("accOpening res : ",response);
    console.log("accOpening res lead id : ",decryptDataValue(response.assistedAccountDetails));
    loading(false);
    return next() // TODO: to remove this line later 
    if(response && response.status==CommonConstant.SUCCESS){
      next();
    }
   else if(response==null) {
    setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR);
    setErrorPopup(true);
   }
   else{
    if(session.accountType == Account_Type.ASSISTED_CS && response == ""){
      next();
    }
    setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR); 
    setErrorPopup(true);
   }
  });
}
  const submitCustomerConcents = async (isNext, isPrev) => {
    loading(true);
    let agentInfo = await AsyncStorageUtils.getObjectItem(LocalDB.agentInfo);
    let request = {
      userId: prevSessionData.agentDetails.userId,
      milestone: Milestone.CUST_CONSENT_DETAILS,
      agentId: agentInfo?.email,
      journeyPercentage: session.progressPercent,
      custConsentDetails: getConsentRequest(isNext),
    };
    let header={
      appName: session.accountType,
      mobileNumber:""
    }
    ConsoleLogHelper.log("final request consent: ", JSON.stringify(request));
    NetworkManager.IDFCNetworkPut(
      Endpoints.saveCustomerDetails,
      request,
      header,
      (response,message) => {
        loading(false);
        ConsoleLogHelper.log("save api response consent :", response);
        if (response?.status === CommonConstant.SUCCESS) {
          if (isNext) {
            callAccOpening();
            //next();
          } else if (isPrev) {
            prev();
          } else {
            props.navigation.navigate(NavigationUrl.drawerId, {
              screen: NavigationUrl.dashboardId,
            });
          }
        } else if (response == CommonConstant.INTERNALSERVERERROR) {
          setErrorMsg(message);
          setErrorPopup(true);
          
        }else{
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
          setErrorPopup(true);
          
        }
      }
    );
  };
  const backArrowPress = () => {
    submitCustomerConcents(false, true);
  };
  const checkPanImageValidation = () => {
    if (!isPanImageNeeded) {
      return true;
    } else if (isPanImageNeeded && panImage !== "") {
      return true;
    } else {
      return false;
    }
  }
  const checkEmpProofValidation = () =>{
    if(session.accountType == Account_Type.ASSISTED_SA || !isEmploymentProofNeeded){
       return true;
    }
    else if(isEmploymentProofNeeded && employmentProofImage!==""){
      return true;
    } else {
      return false;
    }
  };

  const buttonActive = () => {
    if (
      isTermsAgreed &&
      isConsentGiven &&
      signatureImage !== "" &&
      checkPanImageValidation() &&
      checkEmpProofValidation()
    ) {
      if (isIndianCitizen) {
        return true;
      } else {
        if (
          isErrorForeignTIN !== InputStyleError &&
          country != "" &&
          foreignTin != "" &&
          tinCountry != ""
        ) {
          return true;
        } else false;
      }
    } else {
      return false;
    }
  };

  const captureCamera = (ImageType) => {
    ImagePicker.openCamera({
      cropping: true,
      freeStyleCropEnabled: true,
      cropperRotateButtonsHidden: false,
      enableRotationGesture: true,
      includeBase64: true,
      compressImageQuality: 0.5,
      compressImageMaxHeight:1000,
      compressImageMaxWidth: 1000
    })
      .then((response) => {
        ConsoleLogHelper.log("captureCamera ", response);
        if (!response.name || response.filename) {
          response.filename = response.path.split("/").pop();
        }
        if (!response.type) {
          response.type = "image/jpeg";
        }

        if (!response.uri) {
          response.uri = response.path;
        }
        if(ImageType==ImageCaptureType.SIGNATURE){
          consentContextData.signatureImage = response;
        }
        else if(ImageType==ImageCaptureType.PAN){
          consentContextData.panImage = response;
        }
        else if(ImageType==ImageCaptureType.EMPLOYEEMENTPROOF){
          consentContextData.employmentProofImage = response;
        }
        setSession({ ...session, prevSessionData });
      })
      .catch((err) => {
        ConsoleLogHelper.log("err ", err);
      });
  };

  const setForienTINvalidations = async (TIN) => {
    var isTIN = await isValidTIN(TIN);
    if (isTIN) {
      consentContextData.isErrorForeignTIN = false;
      setSession({ ...session, prevSessionData });
    } else {
      consentContextData.isErrorForeignTIN = InputStyleError;
      setSession({ ...session, prevSessionData });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AlignedContainer>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomText
            testID={TestIds.cc_customer_signature}
            fontSize={Font_Size.SIZE_10}
            fontFamily={FontFamily.INTER_BOLD}
            style={{ color: Colors.NEW_GREY_600.code }}
            lineHeight={Line_Height.HEIGHT_14}
            marginBottom={16}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
          >
            {StringsOfLanguages.CUSTOMERCONSENT.CC_CUSTOMER_SIGNATURE}
          </CustomText>
          {signatureImage !== "" ? (
            <TouchableOpacity
              testID={TestIds.cc_recapture_signature}
              onPress={() => {
                captureCamera(ImageCaptureType.SIGNATURE);
              }}
            >
              <CustomText
                fontSize={Font_Size.SIZE_14}
                fontFamily={FontFamily.Inter_SemiBold}
                style={{ color: Colors.MAROON }}
                lineHeight={Line_Height.HEIGHT_14}
                marginBottom={16}
                letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
              >
                <Image
                  resizeMethod="scale"
                  source={recapture_image}
                  style={recaptureIconStyle}
                />{" "}
                {StringsOfLanguages.CUSTOMERCONSENT.CC_RECAPTURE}
              </CustomText>
            </TouchableOpacity>
          ) : null}
        </View>

        <CardMargin>
          {signatureImage == "" ? (
            <TouchableOpacity
              testID={TestIds.cc_signature_container}
              onPress={() => {
                captureCamera(ImageCaptureType.SIGNATURE);
              }}
            >
              <Card style={cardView}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={upload} style={uploadIconStyle} />
                  <Text style={uploadSignatureText}>
                    {
                      StringsOfLanguages.CUSTOMERCONSENT
                        .CC_UPLOAD_SIGNATURE_IMAGE
                    }
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          ) : (
            <Card style={emptyCardView}>
              <Image
                resizeMode="stretch"
                source={{
                  uri: `data:${signatureImage.mime};base64,${signatureImage.data}`,
                }}
                style={{ height: 93, width: 384 }}
              />
            </Card>
          )}
        </CardMargin>
      </AlignedContainer>

      {isPanImageNeeded ? (
        <AlignedContainer>
          <View style={flexView}>
            <CustomText
              testID={TestIds.cc_customer_pan_card}
              fontSize={Font_Size.SIZE_10}
              fontFamily={FontFamily.INTER_BOLD}
              style={{ color: Colors.NEW_GREY_600.code }}
              lineHeight={Line_Height.HEIGHT_14}
              marginBottom={16}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_CUSTOMER_PAN_CARD}
            </CustomText>
            {panImage !== "" ? (
              <TouchableOpacity
                testID={TestIds.cc_recapture_pan}
                onPress={() => {
                  captureCamera(ImageCaptureType.PAN);
                }}
              >
                <CustomText
                  fontSize={Font_Size.SIZE_14}
                  fontFamily={FontFamily.Inter_SemiBold}
                  style={{ color: Colors.MAROON }}
                  lineHeight={Line_Height.HEIGHT_14}
                  marginBottom={16}
                  letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                >
                  <Image
                    resizeMethod="scale"
                    source={recapture_image}
                    style={recaptureIconStyle}
                  />{" "}
                  {StringsOfLanguages.CUSTOMERCONSENT.CC_RECAPTURE}
                </CustomText>
              </TouchableOpacity>
            ) : null}
          </View>

          <CardMargin>
            {panImage == "" ? (
              <TouchableOpacity
                 testID="Test1"
                onPress={() => {
                  captureCamera(ImageCaptureType.PAN);
                }}
              >
                <Card style={cardView}>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={upload} style={uploadIconStyle} />
                    <Text style={uploadSignatureText}>
                      {
                        StringsOfLanguages.CUSTOMERCONSENT
                          .CC_UPLOAD_ORIGINAL_PAN_IMAGE
                      }
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ) : (
              <Card style={emptyCardView}>
                <Image
                  resizeMode="stretch"
                  source={{
                    uri: `data:${panImage.mime};base64,${panImage.data}`,
                  }}
                  style={{ height: 93, width: 384 }}
                />
              </Card>
            )}
          </CardMargin>
        </AlignedContainer>
      ) : null}

      {/* employment proof image capture */}
      {session.accountType == Account_Type.ASSISTED_CS && isEmploymentProofNeeded ? (
        <AlignedContainer>
          <View style={rowView}>
            <CustomText
              testID={TestIds.cc_customer_emp_proof}
              fontSize={Font_Size.SIZE_10}
              fontFamily={FontFamily.INTER_BOLD}
              style={{ color: Colors.NEW_GREY_600.code }}
              lineHeight={Line_Height.HEIGHT_14}
              marginBottom={16}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_CUSTOMER_EMPLOYMENT_PROOF}
            </CustomText>
            {employmentProofImage ? (
              <TouchableOpacity
                testID={TestIds.cc_recapture_emp_proof}
                onPress={() => { captureCamera(ImageCaptureType.EMPLOYEEMENTPROOF) }}
              >
                <CustomText
                  fontSize={Font_Size.SIZE_14}
                  fontFamily={FontFamily.Inter_SemiBold}
                  style={{ color: Colors.MAROON }}
                  lineHeight={Line_Height.HEIGHT_14}
                  marginBottom={16}
                  letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                >
                  <Image
                    resizeMethod="scale"
                    source={recapture_image}
                    style={recaptureIconStyle}
                  />{" "}
                  {StringsOfLanguages.CUSTOMERCONSENT.CC_RECAPTURE}
                </CustomText>
              </TouchableOpacity>
            ) : null}
          </View>

          <CardMargin>
            {!employmentProofImage ? (
              <TouchableOpacity
                testID={TestIds.cc_emp_proof_container}
                onPress={() => { captureCamera(ImageCaptureType.EMPLOYEEMENTPROOF) }}
              >
                <Card style={uploadImageCard}>
                  <View style={rowCard}>
                    <Image source={upload} style={uploadIconStyle} />
                    <Text style={uploadSignatureText}>
                      {
                        StringsOfLanguages.CUSTOMERCONSENT
                          .CC_UPLOAD_ORIGINAL_EMPLOYMENT_IMAGE
                      }
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            ) : (
              <Card style={emptyCardView}>
                <Image
                  resizeMode="stretch"
                  source={{uri: `data:${employmentProofImage.mime};base64,${employmentProofImage.data}`}}
                  style={imageSize}
                />
              </Card>
            )}
          </CardMargin>
        </AlignedContainer>
      ) : null}

      <FullLengthBox>
        <AlignedContainer>
          <CheckboxView>
            <Checkbox
              testID={TestIds.cc_indian_citizen_checkbox}
              labelStyle={{ marginLeft: 12 }}
              checked={isIndianCitizen}
              onChange={() => {
                consentContextData.isIndianCitizen = !isIndianCitizen;
                setSession({ ...session, prevSessionData });
              }}
            ></Checkbox>
            <CustomText
              testID={TestIds.cc_indian_citizen_text}
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_AM_AN_INDIAN_CITIZEN}{" "}
              <CustomText
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_SemiBold}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_AM_AN_INDIAN_CITIZEN_BOLD}
            </CustomText>
            </CustomText>
          </CheckboxView>
        </AlignedContainer>
      </FullLengthBox>
      {!isIndianCitizen ? (
        <AlignedContainer>
          <CardMargin>
            <Select
              testID={TestIds.cc_tax_country_select}
              defaultSelectedItem={country}
              label={
                StringsOfLanguages.CUSTOMERCONSENT.CC_COUNTRY_OF_TAX_RESIDENT
              }
              value={country}
              options={cc_dropDown_Data}
              onChange={(value) => {
                consentContextData.country = value;
                setSession({ ...session, prevSessionData });
                consentContextData.tinCountry = value.displayText;
                setSession({ ...session, prevSessionData });
              }}
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.cc_foreign_TIN}
              label={StringsOfLanguages.CUSTOMERCONSENT.CC_FOREIGN_TIN}
              value={foreignTin}
              keyboardType="numeric"
              onChangeText={(text) => {
                consentContextData.foreignTin = text;
                setSession({ ...session, prevSessionData });

                setForienTINvalidations(text);
              }}
              labelStyle={
                isErrorForeignTIN == InputStyleError && foreignTin != ""
                  ? { color: Colors.LABEL_ERROR }
                  : { color: Colors.BLACK }
              }
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    isErrorForeignTIN == InputStyleError
                      ? Colors.ERROR
                      : Colors.GRAY,
                  opacity:
                    isErrorForeignTIN == InputStyleError && foreignTin != ""
                      ? 1
                      : 0.32,
                },
              }}
              textInputProps={{
                style: {
                  color:
                    isErrorForeignTIN == InputStyleError && foreignTin != ""
                      ? Colors.ERROR
                      : Colors.GRAY,
                },
                maxLength: 9,
              }}
              isError={isErrorForeignTIN}
              errorMessage={
                foreignTin
                  ? StringsOfLanguages.CUSTOMERCONSENT.CC_ERROR_TIN
                  : StringsOfLanguages.CUSTOMERCONSENT.CC_FIELD_TIN
              }
              errorColor={Colors.PRIMARY_COLOR}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              disabled={true}
              testID={TestIds.cc_TIN_issuing_country}
              label={StringsOfLanguages.CUSTOMERCONSENT.CC_TIN_ISSUING_COUNTRY}
              value={tinCountry}
            />
          </CardMargin>
        </AlignedContainer>
      ) : null}
      <AlignedContainer></AlignedContainer>
      <FullLengthBox>
        <AlignedContainer>
          <CheckboxView>
            <Checkbox
              testID={TestIds.cc_politically_exposed_checbox}
              checked={!isPoliticalyExposed}
              labelStyle={{ marginLeft: 12 }}
              onChange={() => {
                consentContextData.isPoliticalyExposed = !isPoliticalyExposed;
                setSession({ ...session, prevSessionData });
              }}
            ></Checkbox>
            <CustomText
              testID={TestIds.cc_politically_exposed_text}
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={20}
              letterSpacing={-0.5}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_AM_NOT_POLITICALLY}{" "}
              <CustomText
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_SemiBold}
              lineHeight={20}
              letterSpacing={-0.5}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_AM_NOT_POLITICALLY_BOLD}
            </CustomText>
            </CustomText>
          </CheckboxView>
        </AlignedContainer>
      </FullLengthBox>

      <FullLengthBox>
        <AlignedContainer>
          <CheckboxView>
            <Checkbox
              testID={TestIds.cc_terms_and_conditions_checkbox}
              labelStyle={{ marginLeft: 12 }}
              checked={isTermsAgreed}
              onChange={() => {
                consentContextData.isTermsAgreed = !isTermsAgreed;
                setSession({ ...session, prevSessionData });
              }}
            ></Checkbox>
            <CustomText
              testID={TestIds.cc_i_agree_text}
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_20}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_AGREE_TO_ALL}{" "}
              <Text
                testID={TestIds.cc_terms_and_conditions_text}
                style={ClickableTextStyle}
                onPress={() => {
                  props.navigation.navigate(NavigationUrl.CustomWebPage, {
                    isVisibleHeader: true,
                    title: "",
                    subTitle: "",
                    isVisibleDone: false,
                    isForTermsAndCondition:true,
                    webViewUrl: WebViewURL.TERMSANDCONDITIONS,
                  });
                }}
              >
                {StringsOfLanguages.CUSTOMERCONSENT.CC_TERMS_CONDITIONS}{" "}
              </Text>
              {StringsOfLanguages.CUSTOMERCONSENT.CC_OF_IDFC_FIRST_BANK}{" "}
              <Text
                testID={TestIds.cc_CIBIL_text}
                onPress={() => {
                  props.navigation.navigate(NavigationUrl.CustomWebPage, {
                    isVisibleHeader: true,
                    title: "",
                    subTitle: "",
                    isVisibleDone: false,
                    webViewUrl: WebViewURL.TRANSUNIONCIVIL,
                  });
                }}
                style={ClickableTextStyle}
              >
                {StringsOfLanguages.CUSTOMERCONSENT.CC_TRANSUNION_CIBIL}{" "}
              </Text>
              {StringsOfLanguages.CUSTOMERCONSENT.CC_AND_AUTHORIZE_IDFC}
            </CustomText>
          </CheckboxView>
        </AlignedContainer>
      </FullLengthBox>

      <FullLengthBox>
        <AlignedContainer>
          <CheckboxView>
            <Checkbox
              testID={TestIds.cc_consent_checkbox}
              labelStyle={{ marginLeft: 12 }}
              checked={isConsentGiven}
              onChange={() => {
                consentContextData.isConsentGiven = !isConsentGiven;
                setSession({ ...session, prevSessionData });
              }}
            ></Checkbox>
            <CustomText
              testID={TestIds.cc_consent_text}
              fontSize={Font_Size.SIZE_14}
              fontFamily={FontFamily.Inter_REGULAR}
              lineHeight={Line_Height.HEIGHT_20}
            >
              {StringsOfLanguages.CUSTOMERCONSENT.CC_I_GIVE_CONSENT_FOR}
            </CustomText>
          </CheckboxView>
        </AlignedContainer>
      </FullLengthBox>

      <AlignedContainer
        style={BackForwardContainer}
      >
        <BackArrowButton
          testID={TestIds.cc_back_button}
          onPress={() => backArrowPress()}
        >
          <Image source={arrowBack} style={RightArrowImage} />
        </BackArrowButton>
        {buttonActive() ? (
          <RightArrowButtonActive
            testID={TestIds.cc_active_button}
            onPress={() => submitCustomerConcents(true)}
          >
            <Image source={rightArrowWhite} style={RightArrowImage} />
          </RightArrowButtonActive>
        ) : (
          <RightArrowButton testID={TestIds.cc_inactive_button}>
            <Image source={rightArrow} style={RightArrowImage} />
          </RightArrowButton>
        )}
      </AlignedContainer>
    
      {
        <Popup
          testID_submit={TestIds.pop_up_politically_exposed_person}
          testID_cancel={"TestCancel1"}
          animationIn="bounceIn"
          popupIcon={info}
          isVisible={isPoliticalyExposed}
          Heading={StringsOfLanguages.CUSTOMERCONSENT.CC_POLITICALY_HEADER}
          ButtonText={StringsOfLanguages.CUSTOMERCONSENT.CC_OKAY}
          buttonPress={() => {
            consentContextData.isPoliticalyExposed = false;
            setSession({ ...session, prevSessionData });
            submitCustomerConcents(false);
          }}
          cancelButtonPress={() => {
            consentContextData.isPoliticalyExposed = false;
            setSession({ ...session, prevSessionData });
          }}
          component={
            <ComponentContainer>
              <CustomText
                testID={TestIds.pop_up_politically_exposed_person_text}
                marginBottom={20}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                color={Colors.NEW_GREY_800.text}
              >
                {
                  StringsOfLanguages.CUSTOMERCONSENT
                    .CC_SINCE_YOU_ARE_POLITICALLY
                }
              </CustomText>
            </ComponentContainer>
          }
        />
      }

{
        <ErrorPopup
          popUpshow={errorPopup}
          message={errorMsg}
          callBack={() => {
            setErrorPopup(false);
          }}
        ></ErrorPopup>
      }
    </View>
  );
};

export default CustomerConsent;
