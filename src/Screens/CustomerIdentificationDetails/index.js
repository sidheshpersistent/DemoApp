/* eslint-disable  no-unused-vars  */
/* eslint-disable  no-useless-escape  */
import React, { useState, useEffect, useRef } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  InteractionManager,
  Keyboard,
  ToastAndroid,
} from "react-native";

// import { LineHeight } from "@idfc/ccl-commons/enums";
// import { IconButton } from "@idfc/ccl-mobile";
import {
  Container,
  CustomerDetailsBG,
  CardInnerContainer,
  FooterContainer,
  RightArrowButton,
  CardMargin,
  RightArrowImage,
  InfoIconContainer,
  infoIconStyle,
  BoldText,
  Bullet,
  RightArrowButtonActive,
  MarginBottom,
  AdharTooltip,
  touchableStyle,
  PasswordView,
  AdharTooltipHindden,
  selectStyle
} from "./styled";
import {
  Colors,
  Icon_Size,
  LetterSpacing,
  Font_Size,
  Line_Height,
  NavigationUrl,
  AsyncStorageUtils,
  FontFamily,
  ConsoleLogHelper
} from "../../Utils";

// import CustomTextInput from '../../Components/ntb_sa/Inputs/CustomTextInput';
// import AutoCompleteTextInput from '../../Components/AutoCompleteTextInput/AutoCompleteTextInput';

import { useRoute } from "@react-navigation/native";
import {
  isValidMobileNo,
  isValidEmailId,
  isValidPan,
  isValidAadhar,
  validation,
  isEmptyValue,
} from "../../Utils/ValidationUtils";
import styled from "styled-components/native";

import {
  CustomTextInput,
  Card,
  BackgroundImage,
  BackArrowHeader,
  Popup,
  PopupTextInput,
  PopUpExistingCustomer,
  CustomText,
  CustomSearchInputCompany,
  CustomSearchInput,
} from "../../Components";
import {
  HEADING,
  HEADING_PAN,
  PAN_INCOME_CHECK,
  POPUP_INFO,
  dropdownData,
  data_search,
  SUB_HEADING,
  data,
  existingAccountList,
  aadharNameList,
  EmailVerificationDetails,
  aadharBase64String
} from "./constants";
import { getAadharDetails } from './CommonServices'
import {
  rightArrow,
  alertIcon,
  help,
  info,
  rightArrowWhite,
  mobileDedupe,
} from "../../Assets/Images";
import {
  Account_Type,
  Customer_Type,
  TestIds, Milestone,
  Save_Status,
  CommonConstant,
  banking_Type,
  LocalDB,
  RadioButtonConstants,
  AdharPanMatch,
  PersonalDetailsConstants,
  Api_Error_Code
} from "../../Utils/Constants";
// import { Select } from "@idfc/ccl-mobile/lib/module/v2";
import { StringsOfLanguages } from "../../Localization";
// import { PasswordInput } from "@idfc/ccl-mobile/lib/module/v2";
import { Endpoints, NetworkManager } from "../../API";
import useSession from "../../App/useSession";
import {
  checkPanAdharMatch,
  isPanNumberValidApi,
  customerDedupe,
  checkMobileDedupe,
  checkEmailDedupe,
} from "../../Utils/CommonApi";

import LoaderComponent from "../../Components/LoaderComponent";
import { encryptedDataValue, decryptDataValue } from "../../Utils/CryptoHelper";
// import { customerProfileContextReset } from "../../Screens/Dashboard/constants";
// import { PopupEmpVerification } from "../../Components";
// import { PopupFailedOfficeMailVerification } from "../../Components";
// import ErrorPopup from "../../Components/ErrorPopup";
import CustomSearchInputDropdown from "../../Components/CustomSearchInputDropdown/CustomSearchInputDropdown";
import { getPrivateString } from "../../Utils/CommonFunction"

const CustomerIdentificationDetails = (props) => {
  const [panVisible, setPanVisible] = useState(false);
  const [adharVisible, setAdharVisible] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [office_emailId, setOfficeEmailId] = useState("");
  const [personal_emailId, setPersonalEmailId] = useState("");
  const [panNo, setPanNo] = useState("");
  const [panAdharMatchStatus, setPanAdharMatchStatus] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [isErrorMobile, setIsErrorMobile] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorOfficeEmail, setIsErrorOfficeEmail] = useState(false);
  const [isErrorPersonalEmail, setIsErrorPersonalEmail] = useState(false);
  const [isErrorPan, setIsErrorPan] = useState(false);
  const [isErrorAadhar, setIsErrorAadhar] = useState(false);
  const [pan, setPan] = useState(false);
  const [panAdharInvalid, setPanAdharInvalid] = useState(false);
  const [isReEnterMobile, setisReEnterMobile] = useState(false);
  const [isReEnterEmail, setisReEnterEmail] = useState(false);
  const [number, setNumber] = useState("");
  const [showInvalidMsg, setShowInvalidMsg] = useState(false);
  const [toggleMask, setToggleMask] = useState(false);
  const [kvalue, setKvalue] = useState(-200);
  const [accountType, setAccountType] = useState(useRoute().params.accountType);
  const [companyDetails, setCompanyDetails] = useState("");
  const [displayData, setDisplayData] = useState("");

  const [CompanyRankList, setCompanyRankList] = useState("");
  const [selectedRank, setSelectedRank] = useState("");
  const { session, setSession } = useSession();
  const [isPrathamBankUser, setIsPrathamBankUser] = useState(false);
  const [isETBUser, setIsETBUser] = useState(false);
  const [isETBWithoutSaUser, setIsETBWithoutSaUser] = useState(false);
  const [isNTBUser, setIsNTBUser] = useState(false);
  const [isETBUserCorporateCS, setIsETBUserCorporateCS] = useState(false);
  const [isETBUserCorporateSA, setIsETBUserCorporateSA] = useState(false);
  const [customerData, setCustomerData] = useState({});
  const [isPanPopupShow, setIsPanPopupShow] = useState(false);
  const [isPanAdharMatchPopup, setIsPanAdharMatchPopup] = useState(false);
  const [mobileDedupeCallCount, setMobileDedupeCallCount] = useState(0);
  const [emailDedupeCallCount, setEmailDedupeCallCount] = useState(0);
  const panInputRef = useRef(null);
  const userValidationRef = useRef("");
  const getGenCustRespRef = useRef("");
  const checkGenDedupeRespRef = useRef("");
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const [isUnkownError, setIsUnkownError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hideSearchResult, sethideSearchResult] = useState(false);
  const [searchTimer, setSearchTimer] = useState(null);
  const [isCompanySelectedFromList, setIsCompanySelectedFromList] =
    useState(false);
  const [CompanyValue, setCompanyValue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showResumeJourneyPopUp, setShowResumeJourneyPopUp] = useState(false);
  const [showAccAlreadyExistPopUp, setshowAccAlreadyExistPopUp] =
    useState(false);
  const [resumeApiData, setResumeApiData] = useState("");
  const [isEmpVerificationPopup, setIsEmpVerificationPopup] = useState(false);
  const [empVerificationFailCount, setEmpVerificationFailCount] = useState(0);
  const [empDomainVerificationFailPopup, setempDomainVerificationFailPopup] = useState(false);
  const [isOfficeMailVerificationPopup, setIsOfficeMailVerificationPopup] = useState(false);
  //const [duplicateAccReason, setDuplicateAccReason] = useState("");
  let userValidationDetails = "";
  let getGenCustResp = "";
  let checkGenDedupeResp = "";

  let prevSessionData = session;
  let personalcontextData = prevSessionData.customerProfile.personalDetail;
  let bankingPreferenceData = prevSessionData.customerProfile.bankingPreference;
  let customerConsentData = prevSessionData.customerProfile.customerConsent;
  let cidContextData = prevSessionData.agentDetails;
  //let reasonForDuplicateAcc = prevSessionData.reasonForDuplicateAcc;
  let { adharDetails, panDetails, reasonForDuplicateAcc } = session;
  const route = useRoute();

  const resetCustomerProfileData = () => {
    const customerProfileReset = {
      personalDetail: {
        annualIncome: "",
        mothersName: "",
        countryOfBirth: PersonalDetailsConstants.INDIA,
        countryOfBirthObj: { id: 1, value: "IN", displayText: PersonalDetailsConstants.INDIA },
        nomineeVisible: true,
        communicationAddress: false,
        nomineeCommunicationAddress: false,
        guardianCommunicationAddress: false,
        form60Visible: false,
        panApplied: false,
        selValue: RadioButtonConstants.RADIO1,
        nomineeAddressRadio: RadioButtonConstants.RADIO1,
        guardianAddressRadio: RadioButtonConstants.RADIO1,
        customerOtherAddress: null,
        guardianOtherAddress: null,
        nomineeDob: "",
        isNomineeMinor: false,
        showCompanyName: false,
        occupationType: null,
        sourceOfIncome: null,
        sourceOfIncomeDetails: [],
        nomineeName: "",
        customerRelation: null,
        guardianName: "",
        customerPincode: "",
        customerAddress1: "",
        customerAddress2: "",
        customerAddress3: "",
        nomineeOtherAddress: null,
        nomineePincode: "",
        nomineeAddress1: "",
        nomineeAddress2: "",
        nomineeAddress3: "",
        guardianPincode: "",
        guardianAddress1: "",
        guardianAddress2: "",
        guardianAddress3: "",
        cityOfBirth: "",
        cityOfBirthObj: null,
        CompanyValue: "",
        CompanyValueObj: null,
        popupType: false,
        occupationDetails: "",
        companyDetails: "",
        cityDetails: "",
        countryDetails: "",
        panNumber: "",
        isPanPopupShow: false,
        panAdharInvalid: false,
        isPanAdharMatchPopup: false,
        isErrorPan: false,
        isNTBUser: false,
        customerData: "",
        isPrathamBankUser: false,
        isETBUser: false,
        popupTypeInfo: "",
        fathersName: "",
        acknowledgeNumb: "",
        applicationDob: "",
        hideSearchResult: false,
        hideCountrySearch: false,
        isCountrySelectedFromList: true,
        hideCitySearch: false,
        isCitySelectedFromList: false,
        isCompanySelectedFromList: false,
        companyName: null,
        nomineeRelationData: [],
        allCountryListData: []
      },
      bankingPreference: {
        inputAccountNumber: "",
        Success: false,
        verifyKitData: {
          data: {
            accountNumber: "",
            ucic: "",
            accountType: ""
          }
        },
        activeIndex: 0,
        istermsAggreed: true,
        boosterAccount: true,
        checkbookOpted: true,
        debitOpted: true,
        productRadio: RadioButtonConstants.RADIO0,
        productSelected: "",
        branchSelected: "",
        reimburseAccount: false,
        services: "",
        isEditBranch: false,
        SAProductList: [],
        branchSelectedValue: "",
        isBranchSelectedFromList: false,
        personalizedTerms: true,
        instaKitTerms: true
      },
      customerConsent: {
        isIndianCitizen: true,
        isEmploymentProofNeeded: true, // Todo : this response is come from api call
        isPanImageNeeded: true, // Todo : this response is come from api call
        country: "",
        foreignTin: "",
        tinCountry: "",
        isTermsAgreed: true,
        isConsentGiven: true,
        isPoliticalyExposed: false,
        signatureImage: "",
        panImage: "",
        employmentProofImage: "",
        isOpenImagePicker: false,
        isOpenImagePickerPan: false,
        isErrorForeignTIN: false
      }
    }
    prevSessionData.customerProfile = customerProfileReset;
    prevSessionData.accountType = accountType;
    prevSessionData.progressPercent = 0;
    prevSessionData.availedCardFlag = "";
    prevSessionData.panDetails = {
      panNumber: "",
      name: "",
      pnSts: "",
      panTitle: "",
      lastUpdatedDate: "",
      panAadharLinkSts: "",
      panAdharStatus: ""
    }
    setSession({ ...session, prevSessionData });
  };

  useEffect(() => {
    resetCustomerProfileData();
    if (accountType === Account_Type.ASSISTED_CS) {
      getCompanyListData();
    }
  }, []);

  const getCompanyDetailsFromLocalData = async () => {
    let company = await AsyncStorageUtils.getObjectItem(LocalDB.companyDetails);
    let companyDetails = decryptDataValue(company);
    if (companyDetails != null) {
      getRankDetails(companyDetails);
      setIsCompanySelectedFromList(true);
      setCompanyName(companyDetails.displayText);
      setCompanyValue(companyDetails);
    } else {
      setIsCompanySelectedFromList(false);
      setCompanyRankList("");
      setCompanyName("");
      setCompanyValue("");
    }

  };

  async function setCompanyData() {
    let data = CompanyValue;
    AsyncStorageUtils.storeObjectKeyItem(
      LocalDB.companyDetails,
      encryptedDataValue(JSON.stringify(data))
    );
  }

  const getRankDetailsFromLocalData = async () => {
    let rank = await AsyncStorageUtils.getObjectItem(LocalDB.rankDetails);
    let rankDetails = decryptDataValue(rank);
    setSelectedRank(rankDetails);
  };

  async function setRankData(rank) {
    let data = rank;
    AsyncStorageUtils.storeObjectKeyItem(
      LocalDB.rankDetails,
      encryptedDataValue(JSON.stringify(data))
    );
  }

  const getCIDDetailsRequest = () => {
    const request = {
      mobileNumber: mobileNumber,
      emailId: emailId,
      panNumber: panNo,
      aadharNumber: aadharNo,
    };
    return encryptedDataValue(JSON.stringify(request));
  };

  const saveAdharDetailsInContext = () => {
    let adharDetails = getAadharDetails(aadharNo, aadharNameList);
    prevSessionData.adharDetails = adharDetails;
    setSession({ ...session, prevSessionData });
    getPanVerificationDetails();
  }

  const getEncryptedAdharDetails = () => {
    return encryptedDataValue(JSON.stringify(prevSessionData.adharDetails));
  }
  const getEncryptedPanDetails = () => {
    return encryptedDataValue(JSON.stringify(prevSessionData.panDetails));
  }
  //submitCIDDetails is a function which actually creates user in backend and send back userID in response
  const submitCIDDetails = async () => {
    let cidDetailsWithReason = getCIDDetailsRequest();
    cidDetailsWithReason.reason = reasonForDuplicateAcc;
    let agentInfo = await AsyncStorageUtils.getObjectItem(LocalDB.agentInfo);
    let request = {
      milestone: Milestone.CID_AADHAR_DETAILS,
      agentId: agentInfo.email,
      cidDetails: cidDetailsWithReason,
      aadharDetails: getEncryptedAdharDetails(),
      panDetails: getEncryptedPanDetails(),
      appName: accountType,
      userValidationDetails: userValidationRef.current,
      getGenCustResp: getGenCustRespRef.current,
      checkGenDedupeResp: checkGenDedupeRespRef.current
    };
    let header = {
      appName: accountType,
      mobileNumber: encryptedDataValue(mobileNumber)
    }

    NetworkManager.IDFCNetworkPut(
      Endpoints.saveCustomerDetails,
      request,
      header,
      (response, message) => {
        if (response?.status == CommonConstant.SUCCESS) {
          cidContextData.userId = response.userId;
          setSession({ ...session, prevSessionData });
          //store response.userId
          props.navigation.navigate(NavigationUrl.CustomerProfileId);
        } else if (response == CommonConstant.INTERNALSERVERERROR) {
          setErrorMsg(message);
          setIsUnkownError(true);
        } else {
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
          setIsUnkownError(true);
        }
      }
    );
  };

  async function getCompanyListData() {
    setShowLoader(true);
    let header = {
      appName: accountType,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(
      Endpoints.getCompanyList + '%20',
      header,
      (response) => {
        let data = response;
        setShowLoader(false);
        if (isEmptyValue(data)) {
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
          setIsUnkownError(true);
          sethideSearchResult(false);
        } else {
          setCompanyDetails(data);
          sethideSearchResult(true);
          getCompanyDetailsFromLocalData();
        }
      }
    );
  };

  const getRankDetails = async (company, isfromClickhandler) => {
    let header = {
      appName: accountType,
      mobileNumber: ""
    }
    await NetworkManager.IDFCNetworkGet(
      Endpoints.getCompanyRank + company.displayText,
      header,
      (response) => {
        if (response && response !== null) {
          setCompanyRankList(response);
          if (isfromClickhandler) {
            setSelectedRank(response[0]);
          } else {
            getRankDetailsFromLocalData();
          }
        } else {
          Alert.alert(StringsOfLanguages.CID.RANK_ALERT);
        }
      }
    );
  };
  const clickHandler = async (company) => {
    Keyboard.dismiss();
    sethideSearchResult(false);
    setCompanyValue(company);
    setCompanyName(company?.displayText);
    setIsCompanySelectedFromList(true);
    if (company.rankApplicable) {
      //api call for rank
      getRankDetails(company, true);
    } else {
      setCompanyRankList("");
    }
  };

  const changeIsCompanySelectedFromList = (val) => {
    setIsCompanySelectedFromList(val);
  };

  const filterHandler = async (text) => {
    // await getCompanyListData(text);

    //setCompanyDetails([]);
  };

  const navigateToScreen = (screenName, milestone) => {
    navigation.navigate(screenName, { milestone: milestone });
  };

  const saveFetchedData = (fetchedData) => {
    // setEmailId(fetchedData.fetchedCIDDetails.emailId);
    // setPanNo(fetchedData.fetchedCIDDetails.panNumber);
    // setAadharNo(fetchedData.fetchedCIDDetails.aadharNumber);
    // alert(JSON.stringify(fetchedData.fetchedAadharDetails));

    //adhar details save
    prevSessionData.adharDetails = fetchedData.fetchedAadharDetails;
    prevSessionData.panDetails = fetchedData.fetchedPanDetails;

    //PERSONAL DETAILS SAVE DATA
    if (fetchedData.fetchedPersonalDetails) {
      personalcontextData.annualIncome =
        fetchedData.fetchedPersonalDetails.grossAnnualIncome;

      personalcontextData.occupationType = {
        displayText:
          fetchedData.fetchedPersonalDetails?.occupationType?.displayText,
        id: fetchedData.fetchedPersonalDetails?.occupationType?.id,
        value: fetchedData.fetchedPersonalDetails?.occupationType?.value,
        incomeSource: fetchedData.fetchedPersonalDetails?.occupationType?.incomeSource,
        cbsCode: fetchedData.fetchedPersonalDetails?.occupationType?.cbsCode,
        profitCenterCode: fetchedData.fetchedPersonalDetails?.occupationType?.profitCenterCode
      };

      if (
        fetchedData?.fetchedPersonalDetails?.occupationType?.displayText?.toUpperCase() ==
        "SALARIED"
      ) {
        personalcontextData.showCompanyName = true;
        personalcontextData.CompanyValue =
          fetchedData.fetchedPersonalDetails?.companyName?.displayText;
        personalcontextData.CompanyValueObj =
          fetchedData.fetchedPersonalDetails?.companyName
        if (fetchedData.fetchedPersonalDetails.companyName) {
          personalcontextData.isCompanySelectedFromList = true;
        }
      }
      personalcontextData.sourceOfIncome = {
        displayText:
          fetchedData.fetchedPersonalDetails?.sourceOfIncome?.displayText,
        id: fetchedData.fetchedPersonalDetails?.sourceOfIncome?.id,
        value: fetchedData.fetchedPersonalDetails?.sourceOfIncome?.value
      };
      personalcontextData.mothersName =
        fetchedData.fetchedPersonalDetails.mothersFullName;
      personalcontextData.countryOfBirthObj =
        fetchedData.fetchedPersonalDetails.countryOfBirth;
      personalcontextData.countryOfBirth =
        fetchedData.fetchedPersonalDetails.countryOfBirth?.displayText;
      personalcontextData.cityOfBirthObj =
        fetchedData.fetchedPersonalDetails.cityOfBirth;
      personalcontextData.cityOfBirth =
        fetchedData.fetchedPersonalDetails.cityOfBirth?.displayText;

      //form 60 details - pan details
      personalcontextData.fathersName =
        fetchedData.fetchedPersonalDetails?.Form60Details?.fathersName;
      personalcontextData.form60Visible =
        fetchedData.fetchedPersonalDetails?.isForm60Visible;
      personalcontextData.panApplied =
        fetchedData.fetchedPersonalDetails?.Form60Details?.isAppliedForPAN;
      personalcontextData.applicationDob =
        fetchedData.fetchedPersonalDetails?.Form60Details?.dateOfApplication;
      personalcontextData.acknowledgeNumb =
        fetchedData.fetchedPersonalDetails?.Form60Details?.acknowledgementNo;

      //communication address
      if (
        fetchedData.fetchedPersonalDetails?.communicationAddress?.isSameAsAadhar
      ) {
        personalcontextData.selValue = RadioButtonConstants.RADIO1; //todo:-take this from constant file
      }
      if (
        fetchedData.fetchedPersonalDetails?.communicationAddress?.isOthrAddress
      ) {
        personalcontextData.selValue = RadioButtonConstants.RADIO2;
      }

      if (
        fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress
      ) {
        personalcontextData.customerOtherAddress =
          fetchedData.fetchedPersonalDetails?.communicationAddress?.otherAddress;
        personalcontextData.customerPincode =
          fetchedData.fetchedPersonalDetails?.communicationAddress?.otherAddress?.pincode;
        personalcontextData.customerAddress1 =
          fetchedData.fetchedPersonalDetails?.communicationAddress?.otherAddress?.address1;
        personalcontextData.customerAddress2 =
          fetchedData.fetchedPersonalDetails?.communicationAddress?.otherAddress?.address2;
        personalcontextData.customerAddress3 =
          fetchedData.fetchedPersonalDetails?.communicationAddress?.otherAddress?.address3;
      }

      //nominee details
      personalcontextData.nomineeVisible =
        fetchedData.fetchedPersonalDetails?.isNomineeVisible;
      personalcontextData.nomineeName =
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.nomineeName;
      personalcontextData.customerRelation =
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.Relationship;
      personalcontextData.nomineeDob =
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.dateOfBirth;
      personalcontextData.isNomineeMinor =
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.isNomineeMinor;
      personalcontextData.guardianName =
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.guardianDetails?.guardianName;

      //nominee address
      if (
        fetchedData.fetchedPersonalDetails.nomineeDetails.address
          .isSameAsCustomerAadhar
      ) {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO1;
      } else if (
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.address?.isOthrAddress
      ) {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO2;
      } else {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO3;
      }
      if (
        fetchedData.fetchedPersonalDetails?.nomineeDetails?.address
          ?.otherAddress
      ) {
        personalcontextData.nomineeOtherAddress =
          fetchedData.fetchedPersonalDetails?.nomineeDetails?.address?.otherAddress;
        if (
          fetchedData.fetchedPersonalDetails?.nomineeDetails?.address?.otherAddress
            ?.pincode
        ) {
          personalcontextData.nomineePincode =
            fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress?.pincode;
        }
        personalcontextData.nomineeAddress1 =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress?.address1;
        personalcontextData.nomineeAddress2 =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress?.address2;
        personalcontextData.nomineeAddress3 =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress?.address3;
      }

      //guardian address
      if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails
          ?.address?.isSameAsCustomerAadhar
      ) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO1;
      } else if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails
          ?.address?.isOthrAddress
      ) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO2;
      } else if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails
          ?.address?.isSameAsCustomerCommunication &&
        fetchedData?.fetchedPersonalDetails?.nomineeDetails?.address?.isOthrAddress
      ) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO3;
      } else {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO4;
      }
      if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails
          ?.address?.otherAddress
      ) {
        personalcontextData.guardianOtherAddress =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.address?.otherAddress;
        personalcontextData.guardianPincode =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.address?.otherAddress?.pincode;
        personalcontextData.guardianAddress1 =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.address?.otherAddress?.address1;
        personalcontextData.guardianAddress2 =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.address?.otherAddress?.address2;
        personalcontextData.guardianAddress3 =
          fetchedData.fetchedPersonalDetails.nomineeDetails.guardianDetails?.address?.otherAddress?.address3;
      }
    }

    if (fetchedData.fetchedBankingDetails) {
      //BANKING PREFERENCES SAVE DATA fetchedBankingDetails
      if (
        fetchedData.fetchedBankingDetails.bankingType ==
        banking_Type.Personalized
      ) {
        bankingPreferenceData.activeIndex = 0;

        //product selected
        (bankingPreferenceData.productSelected =
          fetchedData.fetchedBankingDetails.productSelected),
          //branchSelected
          (bankingPreferenceData.branchSelected =
            fetchedData.fetchedBankingDetails.branchSelected);
        bankingPreferenceData.branchSelectedValue =
          fetchedData.fetchedBankingDetails.branchSelectedValue;
        if (fetchedData.fetchedBankingDetails.branchSelectedValue !== "") {
          bankingPreferenceData.isBranchSelectedFromList =
            fetchedData.fetchedBankingDetails.isBranchSelectedFromList;
        }

        //service required
        bankingPreferenceData.checkbookOpted =
          fetchedData.fetchedBankingDetails.servicesRequired.checkbookOpted;
        bankingPreferenceData.debitOpted =
          fetchedData.fetchedBankingDetails.servicesRequired.debitOpted;

        //CS product
        bankingPreferenceData.productRadio =
          fetchedData.fetchedBankingDetails.productRadio;

        //CS reimburseAccount
        bankingPreferenceData.reimburseAccount =
          fetchedData.fetchedBankingDetails.reimburseAccount;
        bankingPreferenceData.istermsAggreed =
          fetchedData.fetchedBankingDetails.istermsAggreed;
        bankingPreferenceData.personalizedTerms = fetchedData.fetchedBankingDetails.istermsAggreed;
      } else {
        bankingPreferenceData.activeIndex = 1;
        if (fetchedData.fetchedBankingDetails.inputAccountNumber !== "") {
          bankingPreferenceData.inputAccountNumber =
            fetchedData.fetchedBankingDetails.inputAccountNumber;
        }
        bankingPreferenceData.verifyKitData =
          fetchedData.fetchedBankingDetails.verifyKitData;
        bankingPreferenceData.istermsAggreed =
          fetchedData.fetchedBankingDetails.istermsAggreed;
        bankingPreferenceData.instaKitTerms = fetchedData.fetchedBankingDetails.istermsAggreed;
      }
    }

    if (fetchedData.fetchedCustConsentDetails) {
      customerConsentData.isIndianCitizen =
        fetchedData.fetchedCustConsentDetails.isIndianCitizen;
      customerConsentData.country =
        fetchedData.fetchedCustConsentDetails.country;
      customerConsentData.foreignTin =
        fetchedData.fetchedCustConsentDetails.foreignTin;
      customerConsentData.tinCountry =
        fetchedData.fetchedCustConsentDetails.tinCountry;
      customerConsentData.isTermsAgreed =
        fetchedData.fetchedCustConsentDetails.isTermsAgreed;
      customerConsentData.isConsentGiven =
        fetchedData.fetchedCustConsentDetails.isConsentGiven;
      customerConsentData.signatureImage =
        fetchedData.fetchedCustConsentDetails.signatureImage;
      customerConsentData.panImage =
        fetchedData.fetchedCustConsentDetails.panImage;
      customerConsentData.employmentProofImage = fetchedData.fetchedCustConsentDetails.employmentProofImage;
    }

    setSession({ ...session, prevSessionData });
    let _milestone = fetchedData.response.milestone;

    if (_milestone == Milestone.PERSONAL_DETAILS) {
      if (
        fetchedData?.fetchedPersonalDetails?.saveStatus == Save_Status.finish
      ) {
        navigateToScreen(
          NavigationUrl.CustomerProfileId,
          Milestone.BANKING_DETAILS
        );
      } else {
        navigateToScreen(
          NavigationUrl.CustomerProfileId,
          Milestone.PERSONAL_DETAILS
        );
      }
    }

    if (_milestone == Milestone.BANKING_DETAILS) {
      if (
        fetchedData?.fetchedBankingDetails?.saveStatus == Save_Status.finish
      ) {
        navigateToScreen(
          NavigationUrl.CustomerProfileId,
          Milestone.CUST_CONSENT_DETAILS
        );
      } else {
        navigateToScreen(
          NavigationUrl.CustomerProfileId,
          Milestone.BANKING_DETAILS
        );
      }
    }

    if (_milestone == Milestone.CUST_CONSENT_DETAILS) {
      if (
        fetchedData?.fetchedCustConsentDetails?.saveStatus == Save_Status.finish
      ) {
        navigateToScreen(NavigationUrl.SASuccessID, "");
      } else {
        navigateToScreen(
          NavigationUrl.CustomerProfileId,
          Milestone.CUST_CONSENT_DETAILS
        );
      }
    }

    if (_milestone == Milestone.CID_AADHAR_DETAILS) {
      navigateToScreen(
        NavigationUrl.CustomerProfileId,
        Milestone.PERSONAL_DETAILS
      );
    }
  };
  //TODO: branchlist needs to remove
  const resumeAPIcall = (number) => {
    setShowLoader(true);
    // let accType = accountType;
    let header = {
      appName: accountType,
      mobileNumber: encryptedDataValue(number)
    }
    NetworkManager.IDFCNetworkGet(
      Endpoints.getResumeJourneyCheck, header,
      (response, message) => {
        setShowLoader(false);
        if (response?.status == CommonConstant.SUCCESS) {
          const encryptedResponse = {
            personalDetails: response?.personalDetails,
            bankingDetails: response?.bankingDetails,
            custConsentDetails: response?.custConsentDetails,
            cidDetails: response?.cidDetails,
            aadharDetails: response?.aadharDetails,
            panDetails: response?.panDetails,
          };
          const fetchedPersonalDetails = decryptDataValue(
            encryptedResponse.personalDetails
          );
          const fetchedBankingDetails = decryptDataValue(
            encryptedResponse.bankingDetails
          );
          const fetchedCustConsentDetails = decryptDataValue(
            encryptedResponse.custConsentDetails
          );
          const fetchedCIDDetails = decryptDataValue(
            encryptedResponse.cidDetails
          );
          const fetchedAadharDetails = decryptDataValue(
            encryptedResponse.aadharDetails
          );
          const fetchedPanDetails = decryptDataValue(
            encryptedResponse.panDetails
          );


          const fetchedData = {
            fetchedCIDDetails,
            fetchedPersonalDetails,
            fetchedBankingDetails,
            fetchedCustConsentDetails,
            fetchedAadharDetails,
            fetchedPanDetails,
            response,
          };
          cidContextData.userId = response?.userId;
          setSession({ ...session, prevSessionData });
          if (fetchedData.cidDetails !== null) {
            let _milestone = fetchedData.response?.milestone;
            if (
              _milestone == Milestone.CUST_CONSENT_DETAILS &&
              fetchedData?.fetchedCustConsentDetails?.saveStatus ==
              Save_Status.finish
            ) {
              setshowAccAlreadyExistPopUp(true);
            } else {
              setisReEnterMobile(false);
              setShowResumeJourneyPopUp(true);
              setResumeApiData(fetchedData);
            }
          }
        }
      }
    );
  };
  // const getBranchList = () => {
  //   let header = {
  //     appName: Account_Type.ASSISTED_SA,
  //     mobileNumber: ""
  //   }
  //   let urlEndPoint = "?pageNo=1&pageSize=10";
  //   let initSearch = "mumbai";
  //   // TODO: initSearch is using now for showing default selected branch to user when this popup is opened.
  //   NetworkManager.IDFCNetworkGet(
  //     `${Endpoints.getBranchList}${initSearch}${urlEndPoint}`,header,
  //     (response) => {
  //       let data = response;
  //       if (data && data.length > 0) {
  //         bankingPreferenceData.branchSelected = data[0];
  //         bankingPreferenceData.branchSelectedValue = data[0].displayText;
  //         setSession({ ...session, prevSessionData });
  //       }
  //     }
  //   );
  // };

  const setMobileValidation = async (mobileNumber) => {
    setMobileNumber(mobileNumber);
    var ismobile = await isValidMobileNo(mobileNumber);
    if (ismobile && validation.mobile2.pattern.test(mobileNumber)) {
      resumeAPIcall(mobileNumber);
      setIsErrorMobile(false);
    } else {
      setIsErrorMobile("error");
    }
  };
  const setEmailValidation = async (emailId, emailIdType) => {
    var isemail = await isValidEmailId(emailId);
    if (isemail) {
      /* istanbul ignore next */
      if (emailIdType === "email_id") {
        setIsErrorEmail(false);
      } else if (emailIdType === "office_email_id") {
        setIsErrorOfficeEmail(false);
      } else {
        setIsErrorPersonalEmail(false);
      }
    } else {
      /* istanbul ignore next */
      if (emailIdType === "email_id") {
        setIsErrorEmail("error");
      } else if (emailIdType === "office_email_id") {
        setIsErrorOfficeEmail("error");
      } else {
        setIsErrorPersonalEmail("error");
      }
    }
  };
  const setPanValidation = async (panNo) => {
    var ispan = await isValidPan(panNo);
    if (ispan) {
      setIsErrorPan(false);
    } else {
      // setIsErrorPan(true);
      setIsErrorPan("error");
    }
  };
  const setAadharValidation = async (aadhar) => {
    var isAadhar = await isValidAadhar(aadhar);
    if (isAadhar) {
      setIsErrorAadhar(false);
    } else {
      // setIsErrorAadhar(true);
      setIsErrorAadhar("error");
    }
  };
  const SubmitButtonEnable = () => {
    if (accountType === Account_Type.ASSISTED_CS) {
      if (
        mobileNumber !== "" &&
        aadharNo !== "" &&
        companyName !== "" &&
        personal_emailId !== "" &&
        CompanyValue !== "" &&
        CompanyValue.rankApplicableselectedRank !== "" &&
        isValidMobileNo(mobileNumber) &&
        isValidAadhar(aadharNo) &&
        isValidEmailId(personal_emailId) &&
        isCompanySelectedFromList
      ) {
        /* istanbul ignore next */
        if (office_emailId !== "" && personal_emailId !== "" && panNo !== "") {
          /* istanbul ignore if */
          if (
            isValidEmailId(office_emailId) &&
            isValidEmailId(personal_emailId) &&
            isValidPan(panNo)
          ) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId !== "" &&
          personal_emailId == "" &&
          panNo === ""
        ) {
          /* istanbul ignore else */
          if (isValidEmailId(office_emailId)) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId == "" &&
          personal_emailId !== "" &&
          panNo === ""
        ) {
          if (isValidEmailId(personal_emailId)) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId === "" &&
          personal_emailId === "" &&
          panNo !== ""
        ) {
          if (isValidPan(panNo)) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId !== "" &&
          personal_emailId !== "" &&
          panNo === ""
        ) {
          if (
            isValidEmailId(office_emailId) &&
            isValidEmailId(personal_emailId)
          ) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId == "" &&
          personal_emailId !== "" &&
          panNo !== ""
        ) {
          if (isValidEmailId(personal_emailId) && isValidPan(panNo)) {
            return true;
          } else {
            return false;
          }
        } else if (
          office_emailId !== "" &&
          personal_emailId === "" &&
          panNo !== ""
        ) {
          if (isValidEmailId(office_emailId) && isValidPan(panNo)) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      /* istanbul ignore next */
      if (
        mobileNumber !== "" &&
        aadharNo !== "" &&
        isValidMobileNo(mobileNumber) &&
        isValidAadhar(aadharNo)
      ) {
        /* istanbul ignore if */
        if (emailId !== "" && panNo !== "") {
          if (isValidEmailId(emailId) && isValidPan(panNo)) {
            return true;
          } else {
            return false;
          }
        } else if (emailId !== "" && panNo === "") {
          if (isValidEmailId(emailId)) {
            return true;
          } else {
            return false;
          }
        } else if (emailId === "" && panNo !== "") {
          if (isValidPan(panNo)) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  };
  const buttonPress = () => {
    setPanVisible(false);
  };

  const keyboardBlurHandle = () => {
    setKvalue(-200);
  };
  const keyboardFocusHandle = () => {
    route.params.accountType === Account_Type.ASSISTED_CS
      ? setKvalue(-100)
      : setKvalue(-150);
  };

  const getCustomerDedupe = async () => {
    let userDetails = {
      cidDetails: getCIDDetailsRequest(),
      aadharDetails: getAadharDetails(aadharNo, aadharNameList),
    };
    let header = {
      appName: route.params.accountType,
      mobileNumber: ""
    }
    await customerDedupe(userDetails, header, (userType, data, msg, genericCustResp, posidexDedupeResp, userDetailsEncrypted) => {
      setShowLoader(false);
      setCustomerData(data);
      if (userDetailsEncrypted) {
        userValidationRef.current = userDetailsEncrypted;
      }
      if (genericCustResp) {
        getGenCustRespRef.current = genericCustResp;
      }
      if (posidexDedupeResp) {
        checkGenDedupeRespRef.current = posidexDedupeResp
      }

      /* istanbul ignore else */
      if (userType === Customer_Type.NTB_CUSTOMER) {
        setIsNTBUser(true);
        checkMobileDedupeApi();
      }
      else if (userType === Customer_Type.PRATHAMBANK_CUSTOMER) {
        setIsPrathamBankUser(true);
      } else if (userType === Customer_Type.ETB_WITH_SA_CUSTOMER) {
        setIsETBUser(true);
      } else if (userType === Customer_Type.ETB_WITHOUT_SA_CUSTOMER) {
        setIsETBUser(true);
        setIsETBWithoutSaUser(true);
      }
      else if (userType === Customer_Type.ETB_WITH_CS_CUSTOMER_CORPORATE) {
        setIsETBUser(true);
        setIsETBUserCorporateCS(true);
      }
      else if (userType === Customer_Type.ETB_WITH_SA_CUSTOMER_CORPORATE) {
        setIsETBUser(true);
        setIsETBUserCorporateSA(true);
      }
      else {
        setErrorMsg(msg);
        setIsUnkownError(true);
      }
    });
  };

  const getPanVerificationDetails = async () => {
    if (panNo) {
      setShowLoader(true);
      // if user has entered pan number
      await isPanNumberValidApi(panNo, (isPanValid, panDetails) => {

        if (isPanValid) {
          let middleName = isEmptyValue(panDetails?.middleName) ? "" : (panDetails.middleName + " ")
          prevSessionData.panDetails.panNumber = panDetails.panNumber;
          prevSessionData.panDetails.name = panDetails.firstName + " " + middleName + panDetails.lastName
          prevSessionData.panDetails.pnSts = panDetails.panStatus;
          prevSessionData.panDetails.panTitle = panDetails.panTitle;
          prevSessionData.panDetails.lastUpdatedDate = panDetails.lastUpdatedDate;
          prevSessionData.panDetails.panAadharLinkSts = panDetails.adharStaus;
          setSession({ ...session, prevSessionData });
          checkNamePanAdharMatch();
        } else {
          if (panDetails == "") {
            setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
            setIsUnkownError(true);
            setShowLoader(false);
          } else {
            setShowLoader(false);
            setIsPanPopupShow(true);
          }
        }
      });
    } else {
      setShowLoader(true);
      getCustomerDedupe();
    }
  };

  const onChangeTextOnPopupInput = (text) => {
    setPanNo(text.toUpperCase());
    setPanValidation(text);
  };

  const onChangeTextOnMobilePopupInput = (text) => {
    // if (validation.mobile2.pattern.test(text) || text === "") {
    //   setMobileNumber(text);
    // }

    setMobileValidation(text);
  };

  const onChangeTextOnEmailPopupInput = (text) => {
    setEmailId(text);
    setEmailValidation(text, "email_id");
  };
  const checkNamePanAdharMatch = () => {
    checkPanAdharMatch(prevSessionData.adharDetails.name, prevSessionData.panDetails.name, (res) => {

      setShowLoader(false);
      if (res == AdharPanMatch.COMPLETE_MATCHED) {
        prevSessionData.panDetails.panAdharStatus = res;
        setSession({ ...session, prevSessionData });
        getCustomerDedupe();
      } else if (res == AdharPanMatch.PARTIAL_MATCHED) {
        prevSessionData.panDetails.panAdharStatus = res;
        setSession({ ...session, prevSessionData });
        setIsPanAdharMatchPopup(true);
      } else {
        prevSessionData.panDetails.panAdharStatus = res;
        setSession({ ...session, prevSessionData });
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        setIsUnkownError(true);
      }
      setPanAdharMatchStatus(res);
    });
  };

  const panAdharMissMatchPopUpOkButtonPressed = () => {
    setIsPanAdharMatchPopup(false);
    getCustomerDedupe();
  };

  const existingPopupConfirmBtnPressed = () => {
    //setDuplicateAccReason(reason);
    setIsETBUser(false); //to close existing customer popup
    if (isETBWithoutSaUser) {
      // checkMobileDedupeApi();
      if (emailId) {
        checkEmailDedupeApi();
      } else {
        // submitCIDDetails();
        EmployeeVerificationApi();
      }
    } else {
      // submitCIDDetails();
      EmployeeVerificationApi();
    }
  };

  const checkMobileDedupeApi = () => {
    checkMobileDedupe(mobileNumber, (isNTBMobile_number, isErr) => {
      console.log("isErr", isErr)
      if (!isNTBMobile_number) { //if its false then its ETB user with existing mobile number.
        if (isErr) {
          setIsUnkownError(true)
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        }
        else {
          setisReEnterMobile(true);
          setMobileNumber("")
        }

      } else if (emailId) {
        setMobileDedupeCallCount(0);
        checkEmailDedupeApi();
      } else {
        // submitCIDDetails();
        EmployeeVerificationApi();
      }
    });
  };

  const mobileDedupeSubmitButton = () => {
    /* istanbul ignore else */
    if (mobileDedupeCallCount < 3) {
      setMobileDedupeCallCount(mobileDedupeCallCount + 1);
      setisReEnterMobile(false);
      checkMobileDedupeApi();
    } else {
      Alert.alert("You have tried the maximum limit");
      props.navigation.navigate(NavigationUrl.drawerId, {
        screen: NavigationUrl.dashboardId,
      });
    }
  };

  const checkEmailDedupeApi = () => {
    checkEmailDedupe(emailId, (response) => {
      if (response) {
        setisReEnterEmail(true);
      } else {
        // submitCIDDetails();
        EmployeeVerificationApi();
      }
    });
  };

  const emailDedupeSubmitButton = () => {
    if (emailDedupeCallCount < 3) {
      setEmailDedupeCallCount(emailDedupeCallCount + 1);
      setisReEnterEmail(false);
      checkEmailDedupeApi();
    } else {
      Alert.alert("You have tried the maximum limit");
      props.navigation.navigate(NavigationUrl.drawerId, {
        screen: NavigationUrl.dashboardId,
      });
    }
  };
  const submitEmpVerificationPopup = (res) => {
    setIsEmpVerificationPopup(false);
    if (res.optionValue == StringsOfLanguages.COMMON.YES) {
      setOfficeEmailId("");
    }
    else {
      setPersonalEmailId(res.personalEmailId);
    }
  }
  const submitOfficeVerifiactionPopup = (value) => {
    setIsOfficeMailVerificationPopup(false);
    setOfficeEmailId(value);
  }
  const getEncryptedEmpVerificationParam = () => {
    let params = {
      organizationName: CompanyValue.displayText,
      individualName: EmailVerificationDetails.INDIVIDUALNAME,
      email: office_emailId
    };
    ConsoleLogHelper.log("Emp vevification req :", params);
    return encryptedDataValue(JSON.stringify(params));
  }
  const EmployeeVerificationApi = async () => {
    if (accountType === Account_Type.ASSISTED_CS && office_emailId) {
      if (empVerificationFailCount >= 2) {
        prevSessionData.customerProfile.customerConsent.isEmploymentProofNeeded = true;
        setSession({ ...session, prevSessionData });
        setempDomainVerificationFailPopup(true);
      }
      else {
        setShowLoader(true);
        let EncryptedParams = { data: getEncryptedEmpVerificationParam() }
        let header = {
          appName: accountType,
          mobileNumber: ""
        }
        NetworkManager.IDFCNetworkPost(Endpoints.emailVerify, EncryptedParams, header, response => {
          ConsoleLogHelper.log("response karza :", response);
          setShowLoader(false);
          if (response) {
            if (response?.statusCode == Api_Error_Code.ERROR_402) {
              setIsOfficeMailVerificationPopup(true);
            }
            else {
              if (response?.isPersonalMail) {
                setIsEmpVerificationPopup(true);
              }
              else if (!response?.isPersonalMail && response?.isDomainMatched) {
                prevSessionData.customerProfile.customerConsent.isEmploymentProofNeeded = false;
                setSession({ ...session, prevSessionData });
                submitCIDDetails();
              }
              else if (!response.isPersonalMail && !response.isDomainMatched) {
                let count = empVerificationFailCount + 1;
                setEmpVerificationFailCount(count);
                setIsEmpVerificationPopup(true);
              }
            }
          }
          else {
            setIsOfficeMailVerificationPopup(true);
          }
        });
      }
    }
    else {
      submitCIDDetails();
    }
  };
  const EmpVerificationFailedPopupSubmit = () => {
    setempDomainVerificationFailPopup(false);
    submitCIDDetails();
  }
  return (
    <Container>
      <BackgroundImage>
        <LoaderComponent
          isVisible={showLoader}
          heading={StringsOfLanguages.LOADER.CID_HEADING}
          subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
        />
        <BackArrowHeader
          testID={TestIds.cid_header_back_arrow}
          onPressBack={() => {
            navigation.goBack(null);
          }}
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({
            ios: () => 0,
            android: () => kvalue,
          })()}
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled={true}
          >
            <CustomerDetailsBG>
              <CustomText
                testID={TestIds.cid_header}
                marginTop={50}
                marginBottom={20}
                fontSize={Font_Size.SIZE_28}
                lineHeight={Line_Height.HEIGHT_36}
                letterSpacing={LetterSpacing.MINUS_ONE}
                color={Colors.NEW_WHITE_100}
              >
                {StringsOfLanguages.CID.CID_FORM_HEADING1}
                <BoldText>{StringsOfLanguages.CID.CID_FORM_HEADING2} </BoldText>
                {StringsOfLanguages.CID.CID_FORM_HEADING3}
              </CustomText>
              <Card>
                <CardInnerContainer>
                  {accountType === Account_Type.ASSISTED_CS && (
                    <View style={{ zIndex: 1 }}>
                      <CardMargin>
                        <View>


                          <CustomSearchInputDropdown
                            value={companyName}
                            placeholder={
                              StringsOfLanguages.CID.CID_FIELD_COMPANY
                            }
                            searchList={companyDetails}
                            clickHandler={clickHandler}
                            onCrossPress={() => {
                              setCompanyRankList("");
                              setCompanyName("");
                              setCompanyValue("");
                              setIsCompanySelectedFromList(false);
                            }}
                            onChangeText={
                              (text) => {
                                if (text == "") {
                                  setCompanyRankList("");
                                  setCompanyName("");
                                  setCompanyValue("");
                                  setIsCompanySelectedFromList(false);
                                } else if (text != companyName) {
                                  setCompanyRankList("");
                                  setCompanyName("");
                                  setCompanyValue("");
                                  setIsCompanySelectedFromList(false);
                                }
                                // setIsErrorBankName("error")
                              }
                            }
                          />
                          {/* <CustomSearchInputCompany
                            testID={TestIds.cid_cs_company_name}
                            placeholder={
                              StringsOfLanguages.CID.CID_FIELD_COMPANY
                            }
                            value={CompanyValue.displayText} // one value of response
                            getSerachResult={getCompanyListData}  // api call function
                            searchList={companyDetails}  // api response
                            hideSearchResult={hideSearchResult} 
                            isCompanySelectedFromList={
                              isCompanySelectedFromList
                            }
                            setIsCompanySelectedFromList={(val) =>
                              changeIsCompanySelectedFromList(val)
                            }
                            sethideSearchResult={(val) =>
                              sethideSearchResult(val)
                            }
                            clickHandler={clickHandler}
                            isRankListAvailable={true}
                            resetRankList={() => {
                              setCompanyRankList("");
                              setCompanyName("");
                              setCompanyValue("");
                            }}
                          /> */}
                        </View>
                      </CardMargin>
                      {
                        companyDetails !== "" &&
                        CompanyValue !== "" &&
                        CompanyValue.rankApplicable &&
                        CompanyRankList !== "" &&
                        CompanyRankList.length > 0 && (
                          <CardMargin>
                            {/* <Select
                              style={selectStyle}
                              testID={TestIds.cid_cs_company_rank}
                              defaultSelectedItem={selectedRank}
                              label={StringsOfLanguages.CID.CID_FIELD_RANK}
                              options={CompanyRankList}
                              labelStyle={{ color: Colors.NEW_GREY_800.text }}
                              iconColor={Colors.MAROON_DARK}
                              onChange={(value) => setSelectedRank(value)}
                              key={selectedRank.id}
                            /> */}
                          </CardMargin>
                        )}
                    </View>
                  )}
                  <View style={{ zIndex: 0 }}>
                    <CustomText
                      testID={TestIds.cid_cust_details}
                      marginBottom={20}
                      fontSize={Font_Size.SIZE_16}
                      lineHeight={Line_Height.HEIGHT_22}
                      letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                      color={Colors.NEW_GREY_800.text}
                      fontFamily={FontFamily.Inter_SemiBold}
                    >
                      {StringsOfLanguages.CID.CID_LABEL_CUSTOMER_DETAILS}
                    </CustomText>

                    <CardMargin>
                      <CustomTextInput
                        testID={TestIds.cid_mobile_number}
                        label={StringsOfLanguages.CID.CID_FIELD_MOBILE}
                        keyboardType="numeric"
                        labelStyle={{
                          color:
                            isErrorMobile == "error" && mobileNumber != ""
                              ? Colors.ERROR
                              : Colors.GRAY,
                          opacity:
                            isErrorMobile == "error" && mobileNumber != ""
                              ? 1
                              : 0.32,
                        }}
                        inputBorderProps={{
                          style: {
                            borderBottomColor:
                              isErrorMobile == "error"
                                ? Colors.ERROR
                                : Colors.GRAY,
                            opacity:
                              isErrorMobile == "error" && mobileNumber != ""
                                ? 1
                                : 0.32,
                          },
                        }}
                        value={mobileNumber}
                        onChangeText={(text) => {
                          setMobileNumber(text);
                          setMobileValidation(text);
                        }}
                        textInputProps={{
                          style: {
                            color:
                              isErrorMobile == "error" && mobileNumber != ""
                                ? Colors.ERROR
                                : Colors.GRAY,
                          },
                          maxLength: 10,
                        }}
                        isError={isErrorMobile}
                        errorMessage={
                          mobileNumber
                            ? StringsOfLanguages.CID.CID_ERROR_MOBILE
                            : StringsOfLanguages.CID.CID_FIELD_MOBILE
                        }
                        errorColor={Colors.PRIMARY_COLOR}
                      />
                    </CardMargin>

                    {accountType == Account_Type.ASSISTED_SA ? (
                      <MarginBottom>
                        <CustomTextInput
                          testID={TestIds.cid_email}
                          label={StringsOfLanguages.CID.CID_FIELD_EMAIL}
                          keyboardType="email-address"
                          labelStyle={{
                            color:
                              isErrorEmail == "error" && emailId != ""
                                ? Colors.ERROR
                                : Colors.GRAY,
                            opacity:
                              isErrorEmail == "error" && emailId != ""
                                ? 1
                                : 0.32,
                          }}
                          inputBorderProps={{
                            style: {
                              borderBottomColor:
                                isErrorEmail == "error" && emailId != ""
                                  ? Colors.ERROR
                                  : Colors.GRAY,
                              opacity:
                                isErrorEmail == "error" && emailId != ""
                                  ? 1
                                  : 0.32,
                            },
                          }}
                          onChangeText={(text) => {
                            setEmailId(text);
                            setEmailValidation(text, "email_id");
                          }}
                          textInputProps={{
                            style: {
                              color:
                                isErrorEmail == "error" && emailId != ""
                                  ? Colors.ERROR
                                  : Colors.GRAY,
                            },
                          }}
                          value={emailId}
                          isError={isErrorEmail}
                          errorMessage={
                            emailId
                              ? StringsOfLanguages.CID.CID_ERROR_EMAIL
                              : StringsOfLanguages.CID.CID_FIELD_EMAIL
                          }
                          errorColor={Colors.PRIMARY_COLOR}
                        />
                      </MarginBottom>
                    ) : (
                      <View>
                        <MarginBottom>
                          <CustomTextInput
                            testID={TestIds.cid_office_email}
                            label={
                              StringsOfLanguages.CID.CID_FIELD_OFFICE_EMAIL
                            }
                            keyboardType="email-address"
                            labelStyle={{
                              color:
                                isErrorOfficeEmail == "error" &&
                                  office_emailId != ""
                                  ? Colors.ERROR
                                  : Colors.GRAY,
                              opacity:
                                isErrorOfficeEmail == "error" &&
                                  office_emailId != ""
                                  ? 1
                                  : 0.32,
                            }}
                            inputBorderProps={{
                              style: {
                                borderBottomColor:
                                  isErrorOfficeEmail == "error" &&
                                    office_emailId != ""
                                    ? Colors.ERROR
                                    : Colors.GRAY,
                                opacity:
                                  isErrorOfficeEmail == "error" &&
                                    office_emailId != ""
                                    ? 1
                                    : 0.32,
                              },
                            }}
                            onChangeText={(text) => {
                              setOfficeEmailId(text);
                              setEmailValidation(text, "office_email_id");
                            }}
                            textInputProps={{
                              style: {
                                color:
                                  isErrorOfficeEmail == "error" &&
                                    office_emailId != ""
                                    ? Colors.ERROR
                                    : Colors.GRAY,
                              },
                            }}
                            value={office_emailId}
                            isError={isErrorOfficeEmail}
                            errorMessage={
                              office_emailId
                                ? StringsOfLanguages.CID.CID_ERROR_EMAIL
                                : StringsOfLanguages.CID.CID_FIELD_OFFICE_EMAIL
                            }
                            errorColor={Colors.PRIMARY_COLOR}
                          />
                        </MarginBottom>
                        <MarginBottom>
                          <CustomTextInput
                            testID={TestIds.cid_personal_email}
                            label={
                              StringsOfLanguages.CID.CID_FIELD_PERSONAL_EMAIL
                            }
                            keyboardType="email-address"
                            labelStyle={{
                              color:
                                isErrorPersonalEmail == "error" &&
                                  personal_emailId != ""
                                  ? Colors.ERROR
                                  : Colors.GRAY,
                              opacity:
                                isErrorPersonalEmail == "error" &&
                                  personal_emailId != ""
                                  ? 1
                                  : 0.32,
                            }}
                            inputBorderProps={{
                              style: {
                                borderBottomColor:
                                  isErrorPersonalEmail == "error" &&
                                    personal_emailId != ""
                                    ? Colors.ERROR
                                    : Colors.GRAY,
                                opacity:
                                  isErrorPersonalEmail == "error" &&
                                    personal_emailId != ""
                                    ? 1
                                    : 0.32,
                              },
                            }}
                            onChangeText={(text) => {
                              setPersonalEmailId(text);
                              setEmailValidation(text, "personal_email_id");
                            }}
                            textInputProps={{
                              style: {
                                color:
                                  isErrorPersonalEmail == "error" &&
                                    personal_emailId != ""
                                    ? Colors.ERROR
                                    : Colors.GRAY,
                              },
                            }}
                            value={personal_emailId}
                            isError={isErrorPersonalEmail}
                            errorMessage={
                              personal_emailId
                                ? StringsOfLanguages.CID.CID_ERROR_EMAIL
                                : StringsOfLanguages.CID
                                  .CID_FIELD_PERSONAL_EMAIL
                            }
                            errorColor={Colors.PRIMARY_COLOR}
                          />
                        </MarginBottom>
                        <MarginBottom>
                          <CustomText
                            fontSize={Font_Size.SIZE_14}
                            lineHeight={Line_Height.HEIGHT_18}
                            letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
                            color={Colors.NEW_GREY_800.text}
                            fontFamily={FontFamily.Inter_SemiBold}
                          >
                            {StringsOfLanguages.CID.EMAIL_ID_NOTE}
                          </CustomText>
                        </MarginBottom>
                      </View>
                    )}

                    <MarginBottom style={{ marginBottom: 5 }}>
                      <CustomTextInput
                        reference={panInputRef}
                        autofocus={false}
                        testID={TestIds.cid_pan}
                        onBlur={() => keyboardBlurHandle()}
                        onFocus={() => keyboardFocusHandle()}
                        label={StringsOfLanguages.CID.CID_FIELD_PAN}
                        labelStyle={{
                          color:
                            isErrorPan == "error" && panNo != ""
                              ? Colors.ERROR
                              : Colors.GRAY,
                          opacity:
                            isErrorPan == "error" && panNo != "" ? 1 : 0.32,
                        }}
                        inputBorderProps={{
                          style: {
                            borderBottomColor:
                              isErrorPan == "error" && panNo != ""
                                ? Colors.ERROR
                                : Colors.GRAY,
                            opacity: isErrorPan == "error" ? 1 : 0.32,
                          },
                        }}
                        onChangeText={(text) => {
                          setPanNo(text.toUpperCase());
                          setPanValidation(text);
                        }}
                        textInputProps={{
                          style: {
                            color:
                              isErrorPan == "error" && panNo != ""
                                ? Colors.ERROR
                                : Colors.GRAY,
                          },
                          autoComplete: "off",
                          autoCapitalize: "characters",
                          maxLength: 10,
                        }}
                        value={panNo}
                        isError={isErrorPan}
                        errorMessage={
                          panNo
                            ? StringsOfLanguages.CID.CID_ERROR_PAN
                            : StringsOfLanguages.CID.CID_FIELD_PAN
                        }
                        errorColor={Colors.PRIMARY_COLOR}
                      />
                    </MarginBottom>
                  </View>
                  {/** popup */}
                  {/* <Popup
                  testID_submit={TestIds.cid_pan_check_submit}
                  animationIn="bounceIn"
                  popupIcon={info}
                  isVisible={panVisible}
                  Heading={HEADING.PAN}
                  ButtonText="Ok"
                  buttonPress={() => buttonPress()}
                  component={PAN_INCOME_CHECK.map((item) => (
                    <ComponentContainer key={item}>
                      <Bullet>•</Bullet>
                      <CustomText
                        paddingLeft={10}
                        marginBottom={20}
                        fontSize={Font_Size.SIZE_16}
                        lineHeight={Line_Height.HEIGHT_24}
                        color={Colors.NEW_GREY_800.text}
                      >
                        {item}
                      </CustomText>
                    </ComponentContainer>
                  ))}
                /> */}
                  <InfoIconContainer>
                    <CustomText
                      testID={TestIds.cid_mandatory_pan}
                      marginBottom={20}
                      fontSize={Font_Size.SIZE_16}
                      lineHeight={Line_Height.HEIGHT_22}
                      letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                      color={Colors.NEW_GREY_800.text}
                      fontFamily={FontFamily.Inter_SemiBold}
                    >
                      {StringsOfLanguages.CID.CID_LABEL_PAN_MANDATORY}
                    </CustomText>
                    <TouchableOpacity
                      testID={TestIds.cid_pan_tooltip}
                      onPress={() => setPanVisible(true)}
                    >
                      <Image style={infoIconStyle} source={help} />
                    </TouchableOpacity>
                  </InfoIconContainer>

                  <MarginBottom>
                    {/* <PasswordInput
                      value={aadharNo}
                      testID={TestIds.cid_aadhar}
                      onBlur={() => keyboardBlurHandle()}
                      onFocus={() => keyboardFocusHandle()}
                      // testID={TestIds.lg_password_input}
                      inputBorderProps={{
                        style:
                          isErrorAadhar == "error" && aadharNo != ""
                            ? { borderBottomColor: Colors.ERROR }
                            : { borderBottomColor: Colors.GRAY },
                      }}
                      fontSize={20}
                      onChangeText={(text) => {
                        setAadharNo(text);
                        setAadharValidation(text);
                      }}
                      label={
                        aadharNo && aadharNo.length < 12
                          ? StringsOfLanguages.CID.CID_ERROR_ADHAR
                          : (isErrorAadhar == "error" && aadharNo)
                            ? StringsOfLanguages.CID.CID_ERROR_VID
                            : StringsOfLanguages.CID.CID_FIELD_AADHAAR
                      }
                      labelStyle={
                        isErrorAadhar == "error" && aadharNo != ""
                          ? { color: Colors.ERROR }
                          : { color: Colors.GRAY }
                      }
                      showPassword={toggleMask}
                      passwordInputProps={{
                        style:
                          isErrorAadhar == "error" && aadharNo != ""
                            ? { color: Colors.ERROR }
                            : { color: Colors.GRAY },
                        selectionColor: "black",
                        maxLength: 16,
                      }}
                      suffix={
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                        // Icon button to be replace
                           <IconButton
                            primaryColor={Colors.MAROON_DARK}
                            iconColor={"maroon"}
                            iconType={toggleMask ? "Eye2Off" : "Eye2"}
                            buttonSize={24}
                            transparent
                            iconSize={Icon_Size.NORMAL}
                            onPress={() => {
                              setToggleMask(!toggleMask);
                            }}
                          />
                          <AdharTooltipHindden
                            onPress={() => setAdharVisible(true)}
                          >
                            <Image style={infoIconStyle} source={help} />
                          </AdharTooltipHindden>
                        </View>
                      }
                    /> */}
                  </MarginBottom>

                  <FooterContainer>
                    <CustomText
                      fontSize={Font_Size.SIZE_12}
                      lineHeight={Line_Height.HEIGHT_16}
                      letterSpacing={LetterSpacing.MINUS_ZERO_POINT_THREE}
                      color={Colors.NEW_GREY_600.text}
                      flex={1}
                    >
                      {StringsOfLanguages.CID.CID_LABEL_FOOTER}
                    </CustomText>
                    {SubmitButtonEnable() ? (
                      <TouchableOpacity
                        testID={TestIds.cid_submit_button}
                        style={touchableStyle}
                        onPress={() => {
                          // let isFromResumeJourney=false
                          // resetCustomerProfileData(isFromResumeJourney);
                          if (accountType === Account_Type.ASSISTED_CS) {
                            setCompanyData();
                            setRankData(selectedRank);
                          }
                          saveAdharDetailsInContext();
                        }}
                      >
                        <RightArrowButtonActive>
                          <Image
                            source={rightArrowWhite}
                            style={RightArrowImage}
                          />
                        </RightArrowButtonActive>
                      </TouchableOpacity>
                    ) : (
                      <RightArrowButton>
                        <Image source={rightArrow} style={RightArrowImage} />
                      </RightArrowButton>
                    )}
                  </FooterContainer>
                </CardInnerContainer>
              </Card>
            </CustomerDetailsBG>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Popup for showing error message on pan validation */}
        {/* {
          <ErrorPopup
            popUpshow={isPanPopupShow}
            message={StringsOfLanguages.CID.CID_DESCR_INVALID_PAN}
            callBack={() => setIsPanPopupShow(!isPanPopupShow)}
            btnText={StringsOfLanguages.CID.CID_LABLE_RE_ENTER_PAN}
          >
          </ErrorPopup>
        } */}
        {/* {
          <ErrorPopup
            popUpshow={isUnkownError}
            message={errorMsg}
            callBack={() => setIsUnkownError(false)}
            btnText={StringsOfLanguages.COMMON.SESSION_ALERT_OK}
          >
          </ErrorPopup>
        } */}
        {/* show PAN popup dialog  here */}
        {/* {
          <Popup
            testID_submit={TestIds.cid_adhar_pop_up_submit}
            testID_cancel={TestIds.cid_adhar_pop_up_cancel}
            animationIn="bounceIn"
            popupIcon={info}
            isVisible={adharVisible}
            Heading={HEADING.ADHAR}
            ButtonText="Ok, Got it"
            buttonPress={() => setAdharVisible(!adharVisible)}
            component={
              <ComponentContainer>
                <CustomText
                  marginBottom={20}
                  fontSize={Font_Size.SIZE_16}
                  lineHeight={Line_Height.HEIGHT_24}
                  color={Colors.NEW_GREY_800.text}
                >
                  {SUB_HEADING.ADHAR_INFO}
                </CustomText>
              </ComponentContainer>
            }
          />
        } */}
        {/* {
          <Popup
            testID_submit={TestIds.cid_adhar_pop_up_submit1}
            testID_cancel={TestIds.cid_adhar_pop_up_cancel1}
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isPrathamBankUser}
            Heading={HEADING.PRATHAM_BANK_USER}
            ButtonText="Okay"
            buttonPress={() => {
              setIsPrathamBankUser(!isPrathamBankUser);
              props.navigation.navigate(NavigationUrl.drawerId, {
                screen: NavigationUrl.dashboardId,
              });
            }}
            component={
              <ComponentContainer>
                <CustomText
                  marginBottom={20}
                  fontSize={Font_Size.SIZE_16}
                  lineHeight={Line_Height.HEIGHT_24} //[0]?.accountNumber
                  color={Colors.NEW_GREY_800.text}
                >
                  {SUB_HEADING.PRATHAM_BANK_INFO +
                    " " +
                    (customerData &&
                      customerData.prathamBankData &&
                      getPrivateString(customerData.prathamBankData[0].acNo)) +
                    " under Customer ID " +
                    getPrivateString(customerData?.ucic)}.
                </CustomText>
              </ComponentContainer>
            }
          />
        } */}
        {/* ETB customer popup */}
        {/* {
          <PopUpExistingCustomer
            testID_submit={TestIds.cid_adhar_pop_up_submit2}
            testID_cancel={TestIds.cid_adhar_pop_up_cancel2}
            animationIn="bounceIn"
            popupIcon={info}
            isVisible={isETBUser}
            isETBWithoutSaUser={isETBWithoutSaUser}
            Heading={HEADING.ETB_USER}
            ButtonText="Confirm"
            data={customerData && customerData.cbsProducts}
            dropdownData={
              customerData && customerData.offerList
            }
            buttonPress={existingPopupConfirmBtnPressed}
            subText={SUB_HEADING.ETB_USER_INFO}
            responseData={customerData}
            isETBUserCorporateCS={isETBUserCorporateCS}
            isETBUserCorporateSA={isETBUserCorporateSA}
            cancelBtnPressed={() => {
              setIsETBUser(false);
              setIsETBUserCorporateCS(false);
              setIsETBUserCorporateSA(false);
              setIsETBWithoutSaUser(false);
              // props.navigation.navigate(NavigationUrl.drawerId, {
              //   screen: NavigationUrl.dashboardId,
              // });
            }
            }
          />
        } */}

        {/* re enter pan */}
        {/* {
          <PopupTextInput
            testID_submit={TestIds.cid_pan_pop_up_submit}
            testID_cancel={TestIds.cid_pan_pop_up_cancel}
            popupType="pan"
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={pan}
            Heading={HEADING_PAN.PAN_CHECK} // Heading is assumed to be taken from constants
            popupInfo={POPUP_INFO.PAN_CHECK_INFO}
            TextInputPlaceholder={StringsOfLanguages.CID.CID_FIELD_PAN}
            ButtonText="Submit"
            TextInputvalue={number}
            onchangeText={onChangeTextOnPopupInput}
            buttonPress={() => {
              setPan(false);
              getPanVerificationDetails(panNo);
              // props.navigation.navigate('CustomerProfile');
            }}
            cancelButtonPress={() => setPan(false)}
            isError={isErrorPan}
          />
        } */}

        {/* show PAN Adhar Name Mismatch popup dialog  here */}
        {/* {
          <Popup
            testID_submit={TestIds.cid_pan_adhar_match_pop_up_submit}
            testID_cancel={TestIds.cid_pan_adhar_match_pop_up_cancel}
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isPanAdharMatchPopup}
            Heading={StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_HEADING}
            ButtonText="Okay"
            buttonPress={panAdharMissMatchPopUpOkButtonPressed}
            cancelButtonPress={() => setIsPanAdharMatchPopup(false)}
            component={
              <ComponentContainer>
                <View>
                  <CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT1}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text} fontFamily={FontFamily.Inter_SemiBold}>{isEmptyValue(panDetails?.name) ? "" : panDetails?.name}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT2}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text} fontFamily={FontFamily.Inter_SemiBold}>{isEmptyValue(adharDetails?.name) ? "" : adharDetails?.name}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT3}</CustomText>
                  </CustomText>
                  <CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT4}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text} fontFamily={FontFamily.Inter_SemiBold}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT5}</CustomText>
                    <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT6}</CustomText>
                  </CustomText>
                </View>
              </ComponentContainer>
            }
          />
        } */}

        {/* re enter mobile */}
        {/* {
          <PopupTextInput
            testID_submit={TestIds.cid_pan_pop_up_submit1}
            testID_cancel={TestIds.cid_pan_pop_up_cancel1}
            popupType="mobile"
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isReEnterMobile}
            Heading={HEADING_PAN.MOBILE_CHECK} // Heading is assumed to be taken from constants
            popupInfo={POPUP_INFO.MOBILE_CHECK_INFO}
            TextInputPlaceholder={StringsOfLanguages.CID.CID_RE_ENTER_MOBILE}
            ButtonText="Submit"
            maxLength={10}
            TextInputvalue={mobileNumber}
            onchangeText={onChangeTextOnMobilePopupInput}
            buttonPress={mobileDedupeSubmitButton}
            cancelButtonPress={() => setisReEnterMobile(false)}
            isError={isErrorMobile}
            errorMessage={
              mobileNumber
                ? StringsOfLanguages.CID.CID_ERROR_MOBILE
                : StringsOfLanguages.CID.CID_FIELD_MOBILE
            }
            disabled={isErrorMobile ? true : false}
          />
        } */}

        {/* re enter email */}
        {/* {
          <PopupTextInput
            testID_submit={TestIds.cid_pan_pop_up_submit2}
            testID_cancel={TestIds.cid_pan_pop_up_cancel2}
            popupType="email"
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isReEnterEmail}
            Heading={HEADING_PAN.EMAIL_CHECK} // Heading is assumed to be taken from constants
            popupInfo={POPUP_INFO.EMAIL_CHECK_INFO}
            TextInputPlaceholder={StringsOfLanguages.CID.CID_RE_ENTER_EMAIL}
            ButtonText="Submit"
            // TextInputvalue={number}
            onchangeText={onChangeTextOnEmailPopupInput}
            buttonPress={emailDedupeSubmitButton}
            cancelButtonPress={() => setisReEnterEmail(false)}
            isError={isErrorEmail}
          />
        } */}

        {/* re mismatch adhar pan */}
        {/* {
          <Popup
            testID_submit={TestIds.cid_re_enter_pan_validate}
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={panAdharInvalid}
            Heading={StringsOfLanguages.CID.CID_LABLE_SORRY}
            ButtonText={StringsOfLanguages.CID.CID_LABLE_MISMATCH_PAN}
            buttonPress={() => {
              setPanAdharInvalid(!panAdharInvalid);
              //props.navigation.navigate(NavigationUrl.drawerId, { screen: NavigationUrl.dashboardId});
            }}
            component={
              <ComponentContainer>
                <CustomText
                  marginBottom={20}
                  fontSize={Font_Size.SIZE_16}
                  lineHeight={Line_Height.HEIGHT_24}
                  color={Colors.NEW_GREY_800.text}
                >
                  {StringsOfLanguages.CID.CID_DESCR_MISMATCH_PAN}
                </CustomText>
              </ComponentContainer>
            }
          />
        } */}

        {/* {
          <Popup
            testID_submit={TestIds.cid_resume_journey_pop_up_submit}
            testID_cancel={TestIds.cid_resume_journey_pop_up_cancel}
            animationIn="bounceIn"
            popupIcon={info}
            isVisible={showResumeJourneyPopUp}
            Heading={HEADING.RESUME_JOURNEY_TEXT}
            ButtonText={StringsOfLanguages.SAS.SAS_PROCEED}
            buttonPress={() => {
              // let isFromResumeJourney=true
              // resetCustomerProfileData(isFromResumeJourney)
              saveFetchedData(resumeApiData);
              setShowResumeJourneyPopUp(!showResumeJourneyPopUp);
            }}
            cancelButtonPress={() => {
              setShowResumeJourneyPopUp(!showResumeJourneyPopUp);
              setMobileNumber("");
            }}
            component={
              <ComponentContainer>
                <CustomText
                  marginBottom={20}
                  fontSize={Font_Size.SIZE_16}
                  lineHeight={Line_Height.HEIGHT_24}
                  color={Colors.NEW_GREY_800.text}
                >
                  {SUB_HEADING.RESUME_JOURNEY_INFO}
                </CustomText>
              </ComponentContainer>
            }
          />
        } */}

        {/* {
          <Popup
            testID_submit={TestIds.cid_acc_already_exist_submit}
            animationIn="bounceIn"
            popupIcon={info}
            isVisible={showAccAlreadyExistPopUp}
            Heading={HEADING.ACC_ALREADY_OPENED}
            ButtonText="Okay"
            buttonPress={() => {
              setshowAccAlreadyExistPopUp(!showAccAlreadyExistPopUp);
              setMobileNumber("");
            }}
            component={
              <ComponentContainer>
                <CustomText
                  marginBottom={20}
                  fontSize={Font_Size.SIZE_16}
                  lineHeight={Line_Height.HEIGHT_24}
                  color={Colors.NEW_GREY_800.text}
                >
                  {SUB_HEADING.ACC_EXISTS}
                </CustomText>
              </ComponentContainer>
            }
          />
        } */}
        {/* {isEmpVerificationPopup ?
          <PopupEmpVerification
            testID_submit={TestIds.cid_emp_pop_up_submit}
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isEmpVerificationPopup}
            officeEmail={office_emailId}
            personalEmail={personal_emailId}
            buttonPress={(res) => submitEmpVerificationPopup(res)}
          />
          : null
        } */}
        {/* {isOfficeMailVerificationPopup ?
          <PopupFailedOfficeMailVerification
            testID_submit={TestIds.cid_office_verification_pop_up_submit}
            animationIn="bounceIn"
            popupIcon={alertIcon}
            isVisible={isOfficeMailVerificationPopup}
            officeEmail={office_emailId}
            buttonPress={(value) => submitOfficeVerifiactionPopup(value)}
          />
          : null
        } */}
        {/* show popup when Employee domain verification failed*/}
        {/* {
          <Popup
            animationIn="bounceIn"
            testID_submit={TestIds.cid_popup_verification}
            popupIcon={info}
            isVisible={empDomainVerificationFailPopup}
            Heading={StringsOfLanguages.CID.EMP_VERIFICATION_FAILED_POPUP_HEADING}
            ButtonText={StringsOfLanguages.CUSTOMERCONSENT.CC_OKAY}
            buttonPress={() => EmpVerificationFailedPopupSubmit()}
            component={
              <ComponentContainer>
                <View>
                  <CustomText
                    marginBottom={20}
                    fontSize={Font_Size.SIZE_16}
                    lineHeight={Line_Height.HEIGHT_24}
                    color={Colors.NEW_GREY_800.text}
                  >
                    {StringsOfLanguages.CID.EMP_VERIFICATION_FAILED_POPUP_TEXT1}
                  </CustomText>
                  <CustomText
                    marginBottom={20}
                    fontSize={Font_Size.SIZE_16}
                    lineHeight={Line_Height.HEIGHT_24}
                    color={Colors.NEW_GREY_800.text}
                  >
                    {StringsOfLanguages.CID.EMP_VERIFICATION_FAILED_POPUP_TEXT2}
                  </CustomText>
                </View>
              </ComponentContainer>
            }
          />
        } */}
      </BackgroundImage>
    </Container>
  );
};

const ComponentContainer = styled.View`
  flex-direction: row;
`;

export default CustomerIdentificationDetails;
