/* eslint-disable  no-unused-vars  */
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Switch,
  Text,
  Image,
  TouchableOpacity,
  InteractionManager,
  Keyboard,
  ToastAndroid,
  Alert,
} from "react-native";
import CustomTextInput from "../../../Components/CustomTextInput/CustomTextInput";
import {
  NEWCOMMUNICATIONADDRESS,
  TestIds,
  Save_Status,
  Milestone,
  Account_Type,
  CommonConstant,
  RadioButtonConstants,
  PersonalDetailsConstants,
  getDOBMinDate,
  timeoutConst,
  AdharPanMatch,
  LocalDB,
  customerProfileReset,
} from "../../../Utils/Constants";
import PopupCommunicationAddress from "../../../Components/Popup/PopupCommunicationAddress";
import {
  Card,
  CustomText,
  Popup,
  RadioButton,
  // PopUpExistingCustomer,
  // PopupTextInput,
  // CustomSearchInputCompany,
} from "../../../Components";
// import { DateInput, RadioButton, Select } from "@idfc/ccl-mobile/lib/module/v2";
import {
  alertIcon,
  chevronDown,
  info,
  location,
  rightArrow,
  rightArrowWhite,
} from "../../../Assets/Images";
// import { ColorType, FontSize } from "@idfc/ccl-commons/enums";
import {
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  LetterSpacing,
  ConsoleLogHelper,
  NavigationUrl,
  AsyncStorageUtils,
} from "../../../Utils";

import {
  RightArrowImage,
  RightArrowButtonActive,
  RightArrowButton,
  ToogleRadioText,
  Label,
  AlignedContainer,
  FullLengthBox,
  CardMargin,
  CommunicationAddressContainer,
  AdharAddressContainer,
  NewAddressView,
  NewAddressSubView,
  NomineeSwitchContainer,
  SwitchContainer,
  ComponentContainer,
  PanAppliedContainer,
  PanAppliedSubContainer,
  dropdownTextStyle,
} from "./styled";
import { StringsOfLanguages } from "../../../Localization";
import { Endpoints, NetworkManager } from "../../../API";
import {
  checkPanAdharMatch,
  customerDedupe,
  isPanNumberValidApi,
} from "../../../Utils/CommonApi";
import {
  isValidPan,
  removeNumberFromString,
  isEmptyValue
} from "../../../Utils/ValidationUtils";
import {
  HEADING,
  SUB_HEADING,
} from "../../CustomerIdentificationDetails/constants";
import {
  getOccupationDetailsService,
} from "./services";
import useSession from "../../../App/useSession";
import {
  decryptDataValue,
  encryptedDataValue,
} from "../../../Utils/CryptoHelper";
import { customerProfileContextReset } from "../../Dashboard/constants";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  allowOnlyNum,
  avoidNumNChar,
  cityList,
  countryList,
  dateFormat,
  minDate,
} from "./constants";
import CustomSearchInputDropdown from "../../../Components/CustomSearchInputDropdown/CustomSearchInputDropdown";
import ErrorPopup from "../../../Components/ErrorPopup";
import SelectDropdown from "react-native-select-dropdown";

const PersonalDetail = (props) => {
  const {
    data,
    next,
    userData,
    childFunc,
    resetFunc,
    loading,
    progressValueFunc,
  } = props;
  const { session, setSession } = useSession();

  const {
    annualIncome,
    mothersName,
    countryOfBirth,
    countryOfBirthObj,
    nomineeVisible,
    communicationAddress,
    nomineeCommunicationAddress,
    guardianCommunicationAddress,
    form60Visible,
    panApplied,
    selValue,
    nomineeAddressRadio,
    guardianAddressRadio,
    customerOtherAddress,
    guardianOtherAddress,
    nomineeDob = new Date(),
    isNomineeMinor,
    showCompanyName,
    occupationType,
    sourceOfIncome,
    sourceOfIncomeDetails,
    nomineeName,
    customerRelation,
    guardianName,
    customerPincode,
    customerAddress1,
    customerAddress2,
    customerAddress3,
    nomineeOtherAddress,
    nomineePincode,
    nomineeAddress1,
    nomineeAddress2,
    nomineeAddress3,
    guardianPincode,
    guardianAddress1,
    guardianAddress2,
    guardianAddress3,
    cityOfBirth,
    cityOfBirthObj,
    CompanyValue,
    CompanyValueObj,
    occupationDetails,
    companyDetails,
    countryDetails,
    cityDetails,
    panNumber,
    isPanPopupShow,
    panAdharInvalid,
    isPanAdharMatchPopup,
    isErrorPan,
    isNTBUser,
    customerData,
    isPrathamBankUser,
    isETBUser,
    popupTypeInfo,
    fathersName,
    acknowledgeNumb,
    applicationDob = new Date(),
    hideSearchResult,
    hideCountrySearch,
    isCountrySelectedFromList,
    isCompanySelectedFromList,
    hideCitySearch,
    isCitySelectedFromList,
    companyName,
    nomineeRelationData,
    allCountryListData,
    countryNamesList,
    cityNamesList,
    countryValue,
    cityValue
  } = session.customerProfile.personalDetail;
  let prevSessionData = session;
  let personalcontextData = prevSessionData.customerProfile.personalDetail;
  const [annualIncomeLocal, setAnnualIncomeLocal] = useState(annualIncome);
  const [nomineePopupVisible, setNomineePopupVisible] = useState(false);
  // const [countryValue, setCountryValue] = useState("");
  const navigation = useNavigation();
  const totalField = useRef(0);
  const nomineeDate = useRef(0);
  const section1Api = useRef(false);
  const [popupType, setPopupType] = useState(false);
  const [isUnkownError, setIsUnkownError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    getNomineeListData();
    // if (session.accountType === Account_Type.ASSISTED_SA) {
    getOccupationDetails();
    getCompanyListData();
    getAllCountryList();
    // }


  }, []);


  useEffect(() => {
    if (session.accountType == Account_Type.ASSISTED_SA) {
      personalcontextData.countryValue = countryOfBirthObj?.displayText
      personalcontextData.cityValue = cityOfBirthObj?.displayText
      setSession({ ...session, prevSessionData })
      if (countryOfBirthObj?.displayText != PersonalDetailsConstants.INDIA) {
        getAllCityList(countryOfBirthObj?.value)
      }
    }



    childFunc.current = callSubmitApi;
    resetFunc.current = resetfunction
  }, []);
  useEffect(() => {
    session.accountType == Account_Type.ASSISTED_SA ?
      totalFieldToFill() : totalFieldToFill_CS()
  }, [
    nomineeVisible,
    nomineeName,
    isNomineeMinor,
    occupationType,
    sourceOfIncome,
    CompanyValue,
    countryOfBirth,
    customerRelation,
    applicationDob,
    nomineeDob,
    annualIncomeLocal,
    mothersName,
    cityOfBirth,
    fathersName,
    acknowledgeNumb,
    guardianName,
    selValue,
    panApplied,
  ]);
  useEffect(() => {

    const timeOut = setTimeout(() => {
      session.accountType == Account_Type.ASSISTED_SA ?
        totalFieldToFill() : totalFieldToFill_CS()
    }, timeoutConst.VALUE_5000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [countryNamesList, cityNamesList])


  useEffect(() => {
    const timeOut = setTimeout(() => {
      session.accountType == Account_Type.ASSISTED_SA ?
        totalFieldToFill() : totalFieldToFill_CS()
    }, 3000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [countryOfBirth, cityOfBirth, countryValue, cityValue])

  useEffect(() => {
    nomineeDate.current == 1 ? section3ProgressApi() : null;
  }, [nomineeDob]);
  useEffect(() => {
    section1Api.current == true ? section1ProgressApi() : null;
  }, [occupationType, sourceOfIncome]);

  useEffect(() => {

    const timeOut = setTimeout(() => {

      session.accountType == Account_Type.ASSISTED_SA ?
        totalFieldToFill() : totalFieldToFill_CS()
    }, timeoutConst.VALUE_8000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    prevSessionData.progressLoader = prevSessionData.progressLoader + 1

    setSession({ ...session, prevSessionData })
  }, [])

  const resetfunction = () => {

    prevSessionData.customerProfile = customerProfileReset
    setSession({ ...session, prevSessionData })
  }
  const section3ProgressApi = () => {
    if (nomineeDob) {
      setTimeout(() => {
        session.accountType == Account_Type.ASSISTED_SA ?
          totalFieldToFill() : totalFieldToFill_CS()
      }, timeoutConst.VALUE_8000);
    }

    if (nomineeVisibleValid()) {
      submitPersonalDetails(false, true);
      nomineeDate.current == 0;
    }
  };

  const section1ProgressApi = () => {
    if (
      annualIncome &&
      occupationType &&
      sourceOfIncome &&
      mothersName &&
      countryOfBirth
    ) {
      if (occupationType?.id == 1) {
        if (CompanyValue) {
          if (countryOfBirth == PersonalDetailsConstants.INDIA) {
            if (form60valid()) {

              submitPersonalDetails(false, true);
              section1Api.current = false;
            }
          } else {
            if (cityOfBirth) {
              if (form60valid()) {
                submitPersonalDetails(false, true);
                section1Api.current = false;
              }
            }
          }
        }
      } else {
        if (countryOfBirth == PersonalDetailsConstants.INDIA) {
          if (form60valid()) {
            submitPersonalDetails(false, true);
            section1Api.current = false;
          }
        } else {
          if (cityOfBirth) {
            if (form60valid()) {
              submitPersonalDetails(false, true);
              section1Api.current = false;
            }
          }
        }
      }
    }
  };

  function totalFieldToFill_CS() {
    totalField.current = 7;


    if (form60Visible) {
      totalField.current = totalField.current + 1;
      if (panApplied) {
        totalField.current = totalField.current + 2;
      }
    }
    if (!nomineeVisible) {
      totalField.current = totalField.current - 4;
    } else {
      if (isNomineeMinor) {
        totalField.current = totalField.current + 2;
      }
    }
    calcPercentValue_CS();
  };
  function calcPercentValue_CS() {

    const eachFieldValue = 33 / totalField.current;

    let total = 0;
    if (annualIncome) {
      total = total + eachFieldValue;
    }

    if (mothersName) {
      total = total + eachFieldValue;
    }
    if (fathersName) {
      total = total + eachFieldValue;
    }
    if (applicationDob) {
      total = total + eachFieldValue;
    }
    if (acknowledgeNumb) {
      total = total + eachFieldValue;
    }
    if (selValue) {
      total = total + eachFieldValue;
    }
    if (nomineeName) {
      total = total + eachFieldValue;
    }
    if (customerRelation) {
      total = total + eachFieldValue;
    }
    if (nomineeDob) {
      total = total + eachFieldValue;
    }
    if (nomineeVisible) {
      if (nomineeAddressRadio) {
        total = total + eachFieldValue;
      }
    }
    if (isNomineeMinor) {
      if (guardianName) {
        total = total + eachFieldValue;
      }
      if (guardianAddressRadio) {
        total = total + eachFieldValue;
      }
    }

    calculateProgressValue(Math.trunc(total));
  };








  function totalFieldToFill() {
    totalField.current = 10;
    if (showCompanyName) {
      totalField.current = totalField.current + 1;
    }
    if (countryOfBirth != PersonalDetailsConstants.INDIA) {

      totalField.current = totalField.current + 1;
    }
    if (form60Visible) {
      totalField.current = totalField.current + 1;
      if (panApplied) {
        totalField.current = totalField.current + 2;
      }
    }
    if (!nomineeVisible) {
      totalField.current = totalField.current - 4;
    } else {
      if (isNomineeMinor) {
        totalField.current = totalField.current + 2;
      }
    }
    calcPercentValue();
  };

  function calcPercentValue() {
    const eachFieldValue = 33 / totalField.current;
    let total = 0;
    if (annualIncome) {
      total = total + eachFieldValue;
    }
    if (occupationType?.displayText) {
      total = total + eachFieldValue;
    }
    if (sourceOfIncome?.displayText) {
      total = total + eachFieldValue;
    }

    if (CompanyValue) {
      total = total + eachFieldValue;
    }

    if (mothersName) {
      total = total + eachFieldValue;
    }
    if (countryOfBirth) {

      if (countryNamesList && countryNamesList?.includes(countryValue)) {

        total = total + eachFieldValue;
      }
    }
    if (cityOfBirth) {

      if (cityNamesList && cityNamesList?.includes(cityValue)) {

        total = total + eachFieldValue;
      }
    }
    if (fathersName) {
      total = total + eachFieldValue;
    }
    if (applicationDob) {
      total = total + eachFieldValue;
    }
    if (acknowledgeNumb) {
      total = total + eachFieldValue;
    }
    if (selValue) {
      total = total + eachFieldValue;
    }
    if (nomineeName) {
      total = total + eachFieldValue;
    }
    if (customerRelation) {
      total = total + eachFieldValue;
    }
    if (nomineeDob) {
      total = total + eachFieldValue;
    }
    if (nomineeVisible) {
      if (nomineeAddressRadio) {
        total = total + eachFieldValue;
      }
    }
    if (isNomineeMinor) {
      if (guardianName) {
        total = total + eachFieldValue;
      }
      if (guardianAddressRadio) {
        total = total + eachFieldValue;

      }
    }
    total > 32.0 ?
      calculateProgressValue(Math.trunc(33)) : calculateProgressValue(Math.trunc(total))


  };

  // function for increasing or decreasing progress bar
  function calculateProgressValue(value) {
    setSession({ ...session, progressPercent: value });
  };

  function callSubmitApi() {
    loading(true)
    submitPersonalDetails(false, false);
  }
  function getNomineeListData() {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getNomineeRelation, header, (response) => {
      // if (response?.status == CommonConstant.SUCCESS) {
      // const decrptedData = decryptDataValue(response?.data);
      const decrptedData = response;
      let nomineeRelationlist = [];
      for (let i in decrptedData) {
        let obj = {
          id: decrptedData[i]?.id,
          displayText: decrptedData[i]?.relation,
          value: decrptedData[i]?.relation,
        };
        nomineeRelationlist.push(obj);
      }
      personalcontextData.nomineeRelationData = nomineeRelationlist;
      setSession({ ...session, prevSessionData });
      // } else {
      //   setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
      //   setIsUnkownError(true);
      // }
    });
  }
  function getAllCityList(city) {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getCityList + city, header, (response) => {
      if (response && response.data) {
        let data = response.data;
        personalcontextData.cityDetails = data;

        const cityNames = data.map((item) => item.displayText)
        personalcontextData.cityNamesList = cityNames

        setSession({ ...session, prevSessionData })
      } else {
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        setIsUnkownError(true);
      }
    });
    totalFieldToFill()
  }

  function getAllCountryList() {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getCountryList, header, (response) => {
      if (response && response.data) {
        let data = response.data;

        let customCountryDetails = [];
        if (data) {
          for (let i = 0; i < data.length; i++) {
            customCountryDetails.push({
              id: data[i].id,
              displayText: data[i].countryValue,
              value: data[i].country,
            });
          }
        }

        personalcontextData.allCountryListData = customCountryDetails;
        const countryNames = customCountryDetails.map((item) => item.displayText)
        personalcontextData.countryNamesList = countryNames
        setSession({ ...session, prevSessionData });
        totalFieldToFill();
      } else {
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        setIsUnkownError(true);
      }

    });
  }

  async function getCompanyListData(text) {
    personalcontextData.companyName = text;
    setSession({ ...session, prevSessionData });
    if (text.length == 0) {
      personalcontextData.companyDetails = [];
      setSession({ ...session, prevSessionData });
    }
    if (text.length >= 3) {
      let header = {
        appName: session.accountType,
        mobileNumber: ""
      }
      NetworkManager.IDFCNetworkGet(
        Endpoints.getCompanyList + text + `?pageNo=1&pageSize=10`,
        header,
        (response) => {
          if (response?.status == 400) {
            isUnkownError(true);
          } else {
            let data = response;
            personalcontextData.companyDetails = data;
            setSession({ ...session, prevSessionData });
            if (data && data.length > 0) {
              personalcontextData.hideSearchResult = true;
              setSession({ ...session, prevSessionData });
            } else {
              personalcontextData.hideSearchResult = false;
              setSession({ ...session, prevSessionData });
            }
          }
        }
      );
    } else {
      personalcontextData.companyDetails = [];
      setSession({ ...session, prevSessionData });
    }
  }
  const clickHandler = (company) => {
    Keyboard.dismiss();
    personalcontextData.hideSearchResult = false;
    personalcontextData.CompanyValue = company.displayText;
    personalcontextData.CompanyValueObj = company
    setSession({ ...session, prevSessionData });
    section1ProgressApi();
  };
  const countrySearchListHandler = (country) => {
    Keyboard.dismiss();
    personalcontextData.countryOfBirth = country.displayText;
    personalcontextData.countryOfBirthObj = country
    personalcontextData.countryValue = country.displayText
    personalcontextData.cityOfBirth = ""
    personalcontextData.cityValue = ""
    setSession({ ...session, prevSessionData });
    section1ProgressApi()

    // setCountryValue(company.displayText)
    getAllCityList(country.value)
  };
  const citySearchListHandler = (city) => {
    Keyboard.dismiss();
    personalcontextData.cityOfBirth = city.displayText;
    personalcontextData.cityOfBirthObj = city
    personalcontextData.cityValue = city.displayText
    setSession({ ...session, prevSessionData });
    section1ProgressApi()
      // setCityValue(city.displayText)
      ;

  };

  const setIsCompanySelectedFromList = (val) => {
    personalcontextData.isCompanySelectedFromList = val;
    setSession({ ...session, prevSessionData });
  };
  const setIsCountrySelectedFromList = (val) => {
    personalcontextData.isCountrySelectedFromList = val;
    setSession({ ...session, prevSessionData });
  };
  const setIsCitySelectedFromList = (val) => {
    personalcontextData.isCitySelectedFromList = val;
    setSession({ ...session, prevSessionData });
  };

  function getOccupationDetails() {
    //move this api call to common API
    getOccupationDetailsService((res) => {

      let data = res;

      let customOccupationDetails = [];
      if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
          customOccupationDetails.push({
            id: data[i].occupationId,
            displayText: data[i].type,
            value: data[i].occupationId,
            sourceOfIncome: data[i].sourceOfIncome,
            incomeSource: data[i].incomeSource,
            cbsCode: data[i].cbsCode,
            profitCenterCode: data[i].profitCenterCode
          });
        }
      }
      personalcontextData.occupationDetails = customOccupationDetails;

      if (sourceOfIncome) {
        let selectedIndex = customOccupationDetails.findIndex(function (item, i) {
          return item.displayText === occupationType?.displayText
        });
        let customSourceOfIncome = [];
        if (customOccupationDetails[selectedIndex].sourceOfIncome && selectedIndex != -1) {
          for (let i = 0; i < customOccupationDetails[selectedIndex].sourceOfIncome.length; i++) {
            customSourceOfIncome.push({
              id: customOccupationDetails[selectedIndex].sourceOfIncome[i].id,
              displayText: customOccupationDetails[selectedIndex].sourceOfIncome[i].source,
              value: customOccupationDetails[selectedIndex].sourceOfIncome[i].id,
            });
          }
        }
        personalcontextData.sourceOfIncomeDetails = customSourceOfIncome;

      }
      setSession({ ...session, prevSessionData });
    });
  }

  useEffect(() => {
    const getAge = (nomineeDob) =>
      Math.floor((new Date() - new Date(nomineeDob).getTime()) / 3.15576e10);
    const nomineeAge = getAge(nomineeDob);
    if (nomineeAge < 18) {
      personalcontextData.isNomineeMinor = true;
      setSession({ ...session, prevSessionData });
    } else {
      personalcontextData.isNomineeMinor = false;
      setSession({ ...session, prevSessionData });
    }
  }, [nomineeDob]);

  useEffect(() => {
    if (selValue == RadioButtonConstants.RADIO1) {
      if (nomineeAddressRadio == RadioButtonConstants.RADIO3) {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO1;
        setSession({ ...session, prevSessionData });
      }
      if (guardianAddressRadio == RadioButtonConstants.RADIO3) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO1;
        setSession({ ...session, prevSessionData });
      }
    }
    if (nomineeAddressRadio == RadioButtonConstants.RADIO1) {
      if (guardianAddressRadio == RadioButtonConstants.RADIO4) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO1;
        setSession({ ...session, prevSessionData });
      }
    }
    if (nomineeAddressRadio == RadioButtonConstants.RADIO3) {
      if (guardianAddressRadio == RadioButtonConstants.RADIO4) {
        personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO1;
        setSession({ ...session, prevSessionData });
      }
    }
  }, [nomineeAddressRadio, guardianAddressRadio, selValue]);

  const handleChange = (v) => {
    personalcontextData.selValue = v;
    setSession({ ...session, prevSessionData });

    if (
      v == RadioButtonConstants.RADIO2 &&
      customerAddress1 == "" &&
      customerPincode == ""
    ) {
      personalcontextData.communicationAddress = true;
      setSession({ ...session, prevSessionData });
    } else {
      personalcontextData.communicationAddress = false;
      setSession({ ...session, prevSessionData });
    }
  };
  const handleChange2 = (v) => {
    personalcontextData.nomineeAddressRadio = v;
    setSession({ ...session, prevSessionData });
    if (guardianAddressRadio)
      if (
        v == RadioButtonConstants.RADIO2 &&
        nomineeAddress1 == "" &&
        nomineePincode == ""
      ) {
        personalcontextData.nomineeCommunicationAddress = true;
        setSession({ ...session, prevSessionData });
      } else {
        personalcontextData.nomineeCommunicationAddress = false;
        setSession({ ...session, prevSessionData });
      }
  };
  const handleChange3 = (v) => {
    personalcontextData.guardianAddressRadio = v;
    setSession({ ...session, prevSessionData });
    if (
      v == RadioButtonConstants.RADIO2 &&
      guardianAddress1 == "" &&
      guardianPincode == ""
    ) {
      personalcontextData.guardianCommunicationAddress = true;
      setSession({ ...session, prevSessionData });
    } else {
      personalcontextData.guardianCommunicationAddress = false;
      setSession({ ...session, prevSessionData });
    }
  };

  const closeCommAddrModal = () => {
    personalcontextData.communicationAddress = false;
    personalcontextData.nomineeCommunicationAddress = false;
    personalcontextData.guardianCommunicationAddress = false;
    setSession({ ...session, prevSessionData });
  };

  const form60valid = () => {
    if (form60Visible) {
      if (fathersName != "") {
        if (panApplied) {
          if (applicationDob != "" && acknowledgeNumb != "") {
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
      return true;
    }
  };
  const nomineeVisibleValid = () => {
    if (nomineeVisible) {
      if (nomineeName != "" && customerRelation != "" && nomineeDob != "") {
        if (isNomineeMinor) {
          if (guardianName != "") {
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
      return true;
    }
  };
  const countryCityValid = () => {
    if (countryOfBirth == PersonalDetailsConstants.INDIA) {
      if (countryNamesList?.includes(countryValue)) {

        if (form60valid()) {
          if (nomineeVisibleValid()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {

        return false;
      }

    } else {
      if (countryNamesList?.includes(countryValue)) {

        if (cityOfBirth) {
          if (cityNamesList?.includes(cityValue)) {
            if (form60valid()) {
              if (nomineeVisibleValid()) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {

            return false
          }


        } else {

          return false;
        }
      } else {

        return false
      }

    }
  };
  const SubmitButtonEnable = () => {
    if (occupationType?.id == 1) {
      if (!isCompanySelectedFromList && CompanyValue) {
        return false;
      } else {
        if (countryCityValid()) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (countryCityValid()) {
        return true;
      } else {
        return false;
      }
    }
  };
  const submitButtonEnable_HHandCS = () => {
    return true; //temporary added
    if (session.accountType === Account_Type.ASSISTED_SA) {
      if (
        annualIncome &&
        occupationType?.displayText &&
        sourceOfIncome?.displayText &&
        mothersName &&
        countryOfBirth
      ) {
        return SubmitButtonEnable();
      } else {
        return false;
      }
    } else {
      if (annualIncome && mothersName && countryOfBirth) {
        if (form60valid()) {
          if (nomineeVisibleValid()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };
  // console.log("countryOfBirthObj",countryOfBirthObj)
  // console.log("cityOfBirthObj",cityOfBirthObj)
  const getPersonalDetailsRequest = (isNext) => {
    let occupationTypeNew = {
      id: occupationType?.id,
      displayText: occupationType?.displayText,
      value: occupationType?.value,
      incomeSource: occupationType?.incomeSource,
      cbsCode: occupationType?.cbsCode,
      profitCenterCode: occupationType?.profitCenterCode
    };
    let communication_otherAddress =
      selValue === RadioButtonConstants.RADIO2 && customerOtherAddress
        ? customerOtherAddress
        : null
    let nominee_otherAddress =
      nomineeAddressRadio === RadioButtonConstants.RADIO2 && nomineeOtherAddress
        ? nomineeOtherAddress
        : null
    let guardian_otherAddress =
      guardianAddressRadio === RadioButtonConstants.RADIO2 &&
        guardianOtherAddress
        ? guardianOtherAddress
        : null
    const request = {
      grossAnnualIncome: annualIncomeLocal,
      occupationType: occupationTypeNew,
      companyName: CompanyValueObj,
      sourceOfIncome: sourceOfIncome,
      mothersFullName: mothersName,
      countryOfBirth: countryOfBirthObj,
      cityOfBirth: cityOfBirthObj,
      panNumber: panNumber,
      isForm60Visible: form60Visible,
      Form60Details: {
        fathersName: fathersName,
        isAppliedForPAN: panApplied,
        dateOfApplication: applicationDob,
        acknowledgementNo: acknowledgeNumb,
      },
      communicationAddress: {
        isSameAsAadhar: selValue === RadioButtonConstants.RADIO1,
        isOthrAddress: selValue === RadioButtonConstants.RADIO2,
        otherAddress: communication_otherAddress,
      },
      isNomineeVisible: nomineeVisible,
      nomineeDetails: {
        nomineeName: nomineeName,
        Relationship: customerRelation,
        dateOfBirth: nomineeDob,
        address: {
          isSameAsCustomerCommunication:
            selValue === RadioButtonConstants.RADIO2 &&
            nomineeAddressRadio === RadioButtonConstants.RADIO3,
          isSameAsCustomerAadhar:
            nomineeAddressRadio === RadioButtonConstants.RADIO1,
          isOthrAddress: nomineeAddressRadio === RadioButtonConstants.RADIO2,
          otherAddress: nominee_otherAddress,
        },
        isNomineeMinor: isNomineeMinor,
        guardianDetails: {
          guardianName: guardianName,
          address: {
            isSameAsCustomerCommunication:
              selValue === RadioButtonConstants.RADIO2 &&
              guardianAddressRadio === RadioButtonConstants.RADIO3,
            isSameAsNomineeCommunication:
              nomineeAddressRadio === RadioButtonConstants.RADIO2 &&
              guardianAddressRadio === RadioButtonConstants.RADIO4,
            isSameAsCustomerAadhar:
              guardianAddressRadio === RadioButtonConstants.RADIO1,
            isOthrAddress:
              guardianAddressRadio === RadioButtonConstants.RADIO2,
            otherAddress: guardian_otherAddress,
          },
        },
      },
      saveStatus: isNext ? Save_Status.finish : Save_Status.save,
    };


    ConsoleLogHelper.log("personal details req : ", JSON.stringify(request));
    return encryptedDataValue(JSON.stringify(request));
  };

  const submitPersonalDetails = async (isNext, isSaveSection) => {
    next(); //temporary added
    // getPersonalDetailsRequest()

    // let agentInfo = await AsyncStorageUtils.getObjectItem(LocalDB.agentInfo);
    // let request = {
    //   userId: prevSessionData.agentDetails.userId,
    //   milestone: Milestone.PERSONAL_DETAILS,
    //   agentId: agentInfo?.email,
    //   journeyPercentage: session.progressPercent,
    //   personalDetails: getPersonalDetailsRequest(isNext),
    // };
    // let header = {
    //   appName: session.accountType,
    //   mobileNumber: ""
    // }
    // ConsoleLogHelper.log("final request : ", JSON.stringify(request));
    // NetworkManager.IDFCNetworkPut(
    //   Endpoints.saveCustomerDetails,
    //   request,
    //   header,
    //   (response, message) => {
    //     loading(false);

    //     ConsoleLogHelper.log("save api response  :", response);
    //     if (response?.status === CommonConstant.SUCCESS) {
    //       if (isNext) {
    //         next();
    //       } else {
    //         if (!isSaveSection) {
    //           navigation.navigate(NavigationUrl.drawerId, {
    //             screen: NavigationUrl.dashboardId,
    //           });
    //         }
    //       }
    //     } else if (response == CommonConstant.INTERNALSERVERERROR) {
    //       setErrorMsg(message);
    //       isUnkownError(true);
    //     } else {
    //       setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
    //       isUnkownError(true);
    //     }
    //   }
    // );
  };
  const incomeHandler = (e) => {
    e.id === 1
      ? (personalcontextData.showCompanyName = true)
      : (personalcontextData.showCompanyName = false);
    setSession({ ...session, prevSessionData });
  };

  const cancelCustomerPopup = () => {
    if (customerAddress1 == "" && customerPincode == "") {
      personalcontextData.selValue = RadioButtonConstants.RADIO1;
      setSession({ ...session, prevSessionData });
    }

    closeCommAddrModal();
  };

  const confirmCustomerPopup = (data) => {
    closeCommAddrModal();
    personalcontextData.customerOtherAddress = data;
    personalcontextData.customerPincode = data.pincode;
    personalcontextData.customerAddress1 = data.address1;
    personalcontextData.customerAddress2 = data.address2;
    personalcontextData.customerAddress3 = data.address3;
    setSession({ ...session, prevSessionData });
  };
  const confirmNomineePopup = (data) => {
    closeCommAddrModal();
    personalcontextData.nomineeOtherAddress = data;
    personalcontextData.nomineePincode = data.pincode;
    personalcontextData.nomineeAddress1 = data.address1;
    personalcontextData.nomineeAddress2 = data.address2;
    personalcontextData.nomineeAddress3 = data.address3;
    setSession({ ...session, prevSessionData });
  };
  const cancelNomineePopup = () => {
    if (nomineeAddress1 == "" && nomineePincode == "") {
      personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO1;
      setSession({ ...session, prevSessionData });
    }

    closeCommAddrModal();
  };
  const confirmGuardianPopup = (data) => {
    closeCommAddrModal();
    personalcontextData.guardianOtherAddress = data;
    personalcontextData.guardianPincode = data.pincode;
    personalcontextData.guardianAddress1 = data.address1;
    personalcontextData.guardianAddress2 = data.address2;
    personalcontextData.guardianAddress3 = data.address3;
    setSession({ ...session, prevSessionData });
  };
  const cancelGuardianPopup = () => {
    if (guardianAddress1 == "" && guardianPincode == "") {
      personalcontextData.guardianAddressRadio = RadioButtonConstants.RADIO1;
      setSession({ ...session, prevSessionData });
    }

    closeCommAddrModal();
  };

  const popupCheck = (type) => {
    personalcontextData.form60Visible = false;
    setPopupType(true);
    setSession({ ...session, prevSessionData });
    if (type == PersonalDetailsConstants.POPUP1) {
      personalcontextData.popupTypeInfo =
        StringsOfLanguages.PERSONAL_DETAIL.PAN_SUB_HEADING1;
      setSession({ ...session, prevSessionData });
    } else {
      if (type == PersonalDetailsConstants.POPUP2) {
        personalcontextData.popupTypeInfo =
          StringsOfLanguages.PERSONAL_DETAIL.PAN_SUB_HEADING2;
        setSession({ ...session, prevSessionData });
      } else {
        if (type == PersonalDetailsConstants.POPUP1) {
          personalcontextData.popupTypeInfo =
            StringsOfLanguages.PERSONAL_DETAIL.PAN_SUB_HEADING3;
          setSession({ ...session, prevSessionData });
        }
      }
    }
  };

  const form60Check = () => {

    let a = prevSessionData.adharDetails?.age;
    if (isEmptyValue(prevSessionData?.panDetails?.panNumber)) {
      if (a < 60 && annualIncomeLocal > 25 * 10 ** 4) {
        popupCheck(PersonalDetailsConstants.POPUP1);
      } else {
        if (a >= 60 && a <= 79 && annualIncomeLocal > 3 * 10 ** 5) {
          popupCheck(PersonalDetailsConstants.POPUP2);
        } else {
          if (a >= 80 && annualIncomeLocal > 5 * 10 ** 5) {
            popupCheck(PersonalDetailsConstants.POPUP3);
          } else {
            personalcontextData.form60Visible = true;
            setSession({ ...session, prevSessionData });
          }
        }
      }
    }

    section1ProgressApi();
  };

  const panInputHandler = (e) => {
    personalcontextData.panNumber = e.toUpperCase();
    setSession({ ...session, prevSessionData });
    setPanValidation(e);
  };
  const setPanValidation = async (panNo) => {
    var ispan = isValidPan(panNo);
    if (ispan) {
      personalcontextData.isErrorPan = false;
      setSession({ ...session, prevSessionData });
    } else {

      personalcontextData.isErrorPan = "error";
      setSession({ ...session, prevSessionData });


    }
  };
  const panSubmitButton = () => {
    setPopupType(false);
    setSession({ ...session, prevSessionData });
    getPanVerificationDetails();
  };
  const getPanVerificationDetails = async () => {
    if (panNumber) {
      // if user has entered pan number
      // alert(panNumber);
      await isPanNumberValidApi(panNumber, (isPanValid, panDetails) => {

        let middleName = isEmptyValue(panDetails?.middleName) ? "" : (panDetails.middleName + " ")
        prevSessionData.panDetails.panNumber = panDetails.panNumber;
        prevSessionData.panDetails.name = panDetails.firstName + " " + middleName + panDetails.lastName
        prevSessionData.panDetails.pnSts = panDetails.panStatus;
        prevSessionData.panDetails.panTitle = panDetails.panTitle;
        prevSessionData.panDetails.lastUpdatedDate = panDetails.lastUpdatedDate;
        prevSessionData.panDetails.panAadharLinkSts = panDetails.adharStaus;
        setSession({ ...session, prevSessionData });

        if (isPanValid) {
          checkNamePanAdharMatch();
        } else {
          personalcontextData.isPanPopupShow = true;
          setSession({ ...session, prevSessionData });
        }
      });
    } else {
      // To do:
    }
  };


  const checkNamePanAdharMatch = () => {

    checkPanAdharMatch(
      session.adharDetails.name, session.panDetails.name,
      (res) => {
        console.log("subratResponse", res);
        if (res == AdharPanMatch.COMPLETE_MATCHED) {
          prevSessionData.panDetails.panAdharStatus = res;
          setSession({ ...session, prevSessionData });
          getCustomerDedupe();
        } else if (res == AdharPanMatch.PARTIAL_MATCHED) {
          personalcontextData.panAdharInvalid = true;
          personalcontextData.isPanAdharMatchPopup = true;
          prevSessionData.panDetails.panAdharStatus = res;
          setSession({ ...session, prevSessionData });
        } else {
          personalcontextData.panAdharInvalid = true;
          personalcontextData.isPanAdharMatchPopup = true;
          prevSessionData.panDetails.panAdharStatus = res;
          setSession({ ...session, prevSessionData });
        }

      }
    );
  };
  const getCustomerDedupe = () => {
    let userDetails = {
      aadharNumber: prevSessionData.adharDetails?.adharNumber,
      mobileNumber: prevSessionData.adharDetails?.mobileNumber,
      panNumber: prevSessionData.panDetails?.panNumber,
      emailId: prevSessionData.adharDetails?.emailID,
    };
    customerDedupe(userDetails, (userType, data) => {
      if (userType === PersonalDetailsConstants.NTB_CUSTOMER) {
        personalcontextData.isNTBUser = true;
        setSession({ ...session, prevSessionData });
      } else {
        if (data.offerList) {
          let customOfferlist = [];
          let offerlist = data.offerList;
          for (
            var offerValue = 0;
            offerValue < offerlist.length;
            offerValue++
          ) {
            customOfferlist.push({
              id: offerlist[offerValue].ID,
              displayText: offerlist[offerValue].reason,
              value: offerlist[offerValue].ID,
            });
          }
          data.offerList = customOfferlist;
        }
        personalcontextData.customerData = data;
        personalcontextData.isETBUser = true;
        setSession({ ...session, prevSessionData });
      }
    });
  };

  const existingPopupConfirmBtnPressed = () => {
    personalcontextData.isETBUser = !personalcontextData.isETBUser;
    setSession({ ...session, prevSessionData });
  };

  const panAdharMissMatchPopUpOkButtonPressed = () => {
    personalcontextData.isPanAdharMatchPopup = false;
    setSession({ ...session, prevSessionData });

    getCustomerDedupe();
  };
  const nomineeTogglePress = () => {
    if (nomineeVisible) {
      setNomineePopupVisible(true);
    } else {
      personalcontextData.nomineeVisible = !personalcontextData.nomineeVisible;
      setSession({ ...session, prevSessionData });
      clearNomineeDetails();
      clearGuardianName();
    }
  };
  const clearGuardianName = () => {
    personalcontextData.guardianName = "";
    setSession({ ...session, prevSessionData });
  };
  const clearNomineeDetails = () => {
    personalcontextData.nomineeName = "";
    setSession({ ...session, prevSessionData });
    personalcontextData.customerRelation = "";
    setSession({ ...session, prevSessionData });
    personalcontextData.nomineeDob = "";
    setSession({ ...session, prevSessionData });
  };
  const renderAddressText = (e) => {
    return (
      <CustomText>
        {e.address1 ? e.address1 + ", " : null}
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.address2 ? e.address2 + ", " : null}
        </CustomText>
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.address3 ? e.address3 + ", " : null}
        </CustomText>
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.city ? e.city + ", " : null}
        </CustomText>
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.state ? e.state + ", " : null}
        </CustomText>
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.country ? e.country + "- " : null}
        </CustomText>
        <CustomText lineHeight={Line_Height.HEIGHT_20}>
          {e.pincode ? e.pincode + "" : null}
        </CustomText>
      </CustomText>
    );
  };
  const calcValue = () => {
    var x = annualIncomeLocal;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return "₹" + res;
  };

  const annualIncomeHandler = (text) => {
    setAnnualIncomeLocal(text.replace(/([^0-9])/g, ""));
    personalcontextData.annualIncome = text.replace(/([^0-9])/g, "");
    setSession({ ...session, prevSessionData });
  };

  const setNomineeYes = () => {
    personalcontextData.nomineeVisible = !personalcontextData.nomineeVisible;
    setSession({ ...session, prevSessionData });
    clearNomineeDetails();
    clearGuardianName();
    setNomineePopupVisible(false);
  };

  const setNomineeNo = () => {
    clearNomineeDetails();
    clearGuardianName();
    setNomineePopupVisible(false);
  };

  return (
    <View>
      <AlignedContainer>
        <CardMargin>
          <CustomTextInput
            testID={TestIds.cp_gross_annual_income}
            value={annualIncomeLocal.length > 0 ? calcValue() : ""}
            label={StringsOfLanguages.PERSONAL_DETAIL.GROSS_ANNUAL_INCOME}
            keyboardType="numeric"
            errorMessage=""
            maxLength={10}
            onBlur={() => form60Check()}
            textInputProps={{
              onChangeText: (text) => {
                text.charAt(0) != 0 || text.charAt(0) == ""
                  ? annualIncomeHandler(text)
                  : null;
              },
              value: annualIncomeLocal.length > 0 ? calcValue() : "",
            }}
            onChangeText={(text) => {
              text.charAt(0) != 0 || text.charAt(0) == ""
                ? annualIncomeHandler(text)
                : null;
            }}
          />
        </CardMargin>
      </AlignedContainer>

      <AlignedContainer>
        {session.accountType === Account_Type.ASSISTED_SA ? (
          <View>
            <CardMargin>
              {/* <Select
                testID={TestIds.cp_occupation_type}
                label={StringsOfLanguages.PERSONAL_DETAIL.OCCUPATION_TYPE}
                defaultSelectedItem={
                  occupationDetails &&
                  occupationDetails.find(
                    (obj) => obj.displayText === occupationType?.displayText
                  )
                }
                options={occupationDetails ? occupationDetails : []}
                value={occupationType}
                labelStyle={{ color: Colors.NEW_GREY_800.text }}
                iconColor={Colors.MAROON_DARK}
                onChange={(value) => {
                  let customSourceOfIncome = [];
                  let defaultSourceOfIncome={};
                  if (value.sourceOfIncome) {
                    for (let i = 0; i < value.sourceOfIncome.length; i++) {
                      customSourceOfIncome.push({
                        id: value.sourceOfIncome[i].id,
                        displayText: value.sourceOfIncome[i].source,
                        value: value.sourceOfIncome[i].id,
                      });
                    }
                  }
                  personalcontextData.occupationType = value;
                  personalcontextData.sourceOfIncomeDetails =
                    customSourceOfIncome;
                  defaultSourceOfIncome = customSourceOfIncome.find((obj) => obj.displayText.toUpperCase() == value.incomeSource.toUpperCase())
                  personalcontextData.sourceOfIncome = defaultSourceOfIncome?defaultSourceOfIncome:null
                  personalcontextData.CompanyValue = "";
                  incomeHandler(value);
                  setSession({ ...session, prevSessionData });
                  section1Api.current = false;
                }}
              /> */}
              <SelectDropdown
                testID={TestIds.cp_occupation_type}
                data={occupationDetails}
                defaultButtonText={StringsOfLanguages.PERSONAL_DETAIL.OCCUPATION_TYPE}
                onSelect={(value) => {
                  let customSourceOfIncome = [];
                  let defaultSourceOfIncome = {};
                  if (value.sourceOfIncome) {
                    for (let i = 0; i < value.sourceOfIncome.length; i++) {
                      customSourceOfIncome.push({
                        id: value.sourceOfIncome[i].id,
                        displayText: value.sourceOfIncome[i].source,
                        value: value.sourceOfIncome[i].id,
                      });
                    }
                  }
                  personalcontextData.occupationType = value;
                  personalcontextData.sourceOfIncomeDetails =
                    customSourceOfIncome;
                  defaultSourceOfIncome = customSourceOfIncome.find((obj) => obj.displayText.toUpperCase() == value.incomeSource.toUpperCase())
                  personalcontextData.sourceOfIncome = defaultSourceOfIncome ? defaultSourceOfIncome : null
                  personalcontextData.CompanyValue = "";
                  incomeHandler(value);
                  setSession({ ...session, prevSessionData });
                  section1Api.current = false;
                }}
                dropdownIconPosition={"right"}
                buttonStyle={{ width: '100%' }}
                buttonTextStyle={{
                  fontSize: 14,
                  fontFamily: FontFamily.Inter_SemiBold,
                  lineHeight: 14,
                  color: Colors.GRAY,
                }}
                rowTextStyle={dropdownTextStyle}
                renderDropdownIcon={() => {
                  return <Image
                    source={chevronDown}
                    style={{
                      padding: 10,
                      margin: 5,
                      height: 25,
                      width: 25,
                      resizeMode: 'stretch',
                    }}
                  />
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.displayText
                }}
                rowTextForSelection={(item, index) => {
                  return item.displayText
                }}
              />
            </CardMargin>
            <CardMargin>
              {/* <Select
                defaultSelectedItem={
                  sourceOfIncomeDetails &&
                  sourceOfIncomeDetails.find(
                    (obj) => obj.displayText === sourceOfIncome.displayText
                  )
                }
                testID={TestIds.cp_source_of_income}
                label={StringsOfLanguages.PERSONAL_DETAIL.SOURCE_OF_INCOME}
                options={sourceOfIncomeDetails}
                value={sourceOfIncome}
                onChange={(value) => {
                  personalcontextData.sourceOfIncome = value;
                  setSession({ ...session, prevSessionData });
                  section1Api.current = true;
                }}
                labelStyle={{ color: Colors.NEW_GREY_800.text }}
                iconColor={Colors.MAROON_DARK}
              /> */}
              <SelectDropdown
                testID={TestIds.cp_source_of_income}
                data={sourceOfIncomeDetails}
                defaultButtonText={StringsOfLanguages.PERSONAL_DETAIL.SOURCE_OF_INCOME}
                onSelect={(value) => {
                  personalcontextData.sourceOfIncome = value;
                  setSession({ ...session, prevSessionData });
                  section1Api.current = true;
                }}
                dropdownIconPosition={"right"}
                buttonStyle={{ width: '100%' }}
                buttonTextStyle={{
                  fontSize: 14,
                  fontFamily: FontFamily.Inter_SemiBold,
                  lineHeight: 14,
                  color: Colors.GRAY,
                }}
                rowTextStyle={dropdownTextStyle}
                renderDropdownIcon={() => {
                  return <Image
                    source={chevronDown}
                    style={{
                      padding: 10,
                      margin: 5,
                      height: 25,
                      width: 25,
                      resizeMode: 'stretch',
                    }}
                  />
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.displayText
                }}
                rowTextForSelection={(item, index) => {
                  return item.displayText
                }}
              />
            </CardMargin>
            {showCompanyName ? (
              <CardMargin style={{ zIndex: 1 }}>
                {/* <CustomSearchInputCompany
                  value={CompanyValue}
                  testID={TestIds.cp_search_company}
                  placeholder={StringsOfLanguages.CID.CID_FIELD_COMPANY}
                  getSerachResult={getCompanyListData}
                  searchList={companyDetails}
                  hideSearchResult={hideSearchResult}
                  isCompanySelectedFromList={isCompanySelectedFromList}
                  setIsCompanySelectedFromList={(val) => {
                    setIsCompanySelectedFromList(val);
                  }}
                  sethideSearchResult={(val) => {
                    personalcontextData.hideSearchResult = val;
                    setSession({ ...session, prevSessionData });
                  }}
                  clickHandler={(company) => {
                    clickHandler(company);
                  }}
                  resetRankList={() => {
                    personalcontextData.companyName = null
                    setSession({ ...session, prevSessionData });
                  }}
                /> */}
              </CardMargin>
            ) : null}
          </View>
        ) : null}
        <CardMargin style={{ zIndex: 0 }}>
          <CustomTextInput
            testID={TestIds.cp_mothers_full_name}
            label={StringsOfLanguages.PERSONAL_DETAIL.MOTHERS_FULL_NAME}
            errorMessage=""
            isError={false}
            errorColor="red"
            textColor="black"
            value={mothersName}
            textInputProps={{
              value: mothersName,

              onChangeText: (e) => {
                personalcontextData.mothersName = removeNumberFromString(e);
                setSession({ ...session, prevSessionData });
              },
            }}
            onBlur={() => section1ProgressApi()}
            onChangeText={(e) => {
              personalcontextData.mothersName = removeNumberFromString(e);
              setSession({ ...session, prevSessionData });
            }}
          />
        </CardMargin>
        {session.accountType === Account_Type.ASSISTED_SA ? (
          <View>
            <CardMargin>
              <CustomSearchInputDropdown
                testID={TestIds.cp_country_of_birth}
                value={countryOfBirth}
                placeholder={StringsOfLanguages.PERSONAL_DETAIL.COUNTRY_OF_BIRTH}
                searchList={allCountryListData}
                clickHandler={(country) => {
                  countrySearchListHandler(country);
                }}
                onChangeText={(text) => {
                  if (text != "") {
                    personalcontextData.countryValue = text
                    setSession({ ...session, prevSessionData })
                    //setCountryValue(text)
                  } else {
                    personalcontextData.countryOfBirth = "";
                    personalcontextData.cityOfBirth = "";

                    setSession({ ...session, prevSessionData });
                  }


                }}
                onCrossPress={() => {

                  personalcontextData.countryOfBirth = "";
                  personalcontextData.cityOfBirth = "";
                  personalcontextData.countryValue = ""
                  setSession({ ...session, prevSessionData });
                }}
              />
            </CardMargin>

            {countryOfBirth != PersonalDetailsConstants.INDIA && countryOfBirth != "" && countryValue != "" ? (
              <CardMargin>
                <CustomSearchInputDropdown
                  value={cityOfBirth}
                  testID={TestIds.cp_city_of_birth}
                  placeholder={StringsOfLanguages.PERSONAL_DETAIL.CITY_OF_BIRTH}
                  searchList={cityDetails}
                  clickHandler={(city) => {
                    citySearchListHandler(city);
                  }}
                  onChangeText={(text) => {
                    personalcontextData.cityValue = text
                    setSession({ ...session, prevSessionData })
                    //setCityValue(text)

                  }}
                  onCrossPress={() => {
                    personalcontextData.cityOfBirth = "";
                    personalcontextData.cityValue = ""
                    // setCityValue("")
                    setSession({ ...session, prevSessionData });
                  }}
                />
              </CardMargin>
            ) : null}
          </View>
        ) : null}
      </AlignedContainer>
      {form60Visible ? (
        <View>
          <AlignedContainer>
            <View>
              <Label>
                {StringsOfLanguages.PERSONAL_DETAIL.FORM_60_DETAILS}
              </Label>

              <CardMargin>
                <CustomTextInput
                  testID={TestIds.cp_fathers_name}
                  isActive={false}
                  isValue={false}
                  label={StringsOfLanguages.PERSONAL_DETAIL.FATHERS_NAME}
                  errorMessage=""
                  isError={false}
                  errorColor="red"
                  textColor="black"
                  value={fathersName}
                  textInputProps={{
                    value: fathersName,
                    onChangeText: (e) => {
                      personalcontextData.fathersName = e.replace(
                        avoidNumNChar,
                        ""
                      );
                      setSession({ ...session, prevSessionData });
                    },
                  }}
                  onBlur={() => section1ProgressApi()}
                  onChangeText={(e) => {
                    personalcontextData.fathersName = e.replace(
                      avoidNumNChar,
                      ""
                    );
                    setSession({ ...session, prevSessionData });
                  }}
                />
              </CardMargin>
            </View>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer>
              <PanAppliedContainer>
                <ToogleRadioText>
                  {StringsOfLanguages.PERSONAL_DETAIL.HAVE_YOU_APPLIED_PAN}
                </ToogleRadioText>
                <PanAppliedSubContainer>
                  <ToogleRadioText>
                    {StringsOfLanguages.PERSONAL_DETAIL.NO}
                  </ToogleRadioText>

                  <Switch
                    testID={TestIds.cp_have_you_applied_pan}
                    trackColor={{
                      false: Colors.NEW_RED_200.code,
                      true: Colors.NEW_GREEN_100.code,
                    }}
                    thumbColor={Colors.WHITE}
                    onValueChange={() => {
                      personalcontextData.panApplied =
                        !personalcontextData.panApplied;
                      setSession({ ...session, prevSessionData });
                      personalcontextData.applicationDob = "";
                      setSession({ ...session, prevSessionData });
                      personalcontextData.acknowledgeNumb = "";
                      setSession({ ...session, prevSessionData });
                    }}
                    value={panApplied}
                  />

                  <ToogleRadioText>
                    {StringsOfLanguages.PERSONAL_DETAIL.YES}
                  </ToogleRadioText>
                </PanAppliedSubContainer>
              </PanAppliedContainer>
            </AlignedContainer>
          </FullLengthBox>
          {panApplied ? (
            <AlignedContainer>
              <CardMargin>
                <Card style={{ elevation: 4, borderRadius: 5 }}></Card>
              </CardMargin>
              <CardMargin>
                {/* <DateInput
                  testID={TestIds.cp_date_of_application}
                  label={StringsOfLanguages.PERSONAL_DETAIL.DATE_OF_APPLICATION}
                  dateFormat={dateFormat}
                  minDate={minDate}
                  maxDate={new Date(new Date().getTime()).setDate(
                    new Date().getDate() - 1
                  )}
                  disabledDates={[
                    new Date(new Date().getTime()).setDate(
                      new Date().getDate()
                    ),
                  ]}
                  selectedDate={applicationDob}
                  datePickerProps={{
                    onSetDatePress: (e) => {
                      personalcontextData.applicationDob = e;
                      setSession({ ...session, prevSessionData });
                      section1Api.current = true;
                    },
                  }}
                /> */}
              </CardMargin>

              <CardMargin>
                <CustomTextInput
                  testID={TestIds.cp_acknowledgement_no}
                  isActive={false}
                  isValue={false}
                  label={StringsOfLanguages.PERSONAL_DETAIL.ACKNOWLEDGEMENT_NO}
                  keyboardType="numeric"
                  errorMessage=""
                  isError={false}
                  errorColor={Colors.red}
                  textColor={Colors.BLACK}
                  value={acknowledgeNumb}
                  textInputProps={{
                    onChangeText: (text) => {
                      personalcontextData.acknowledgeNumb = text.replace(
                        allowOnlyNum,
                        ""
                      );
                      setSession({ ...session, prevSessionData });
                    },
                    value: acknowledgeNumb,
                  }}
                  onBlur={() => section1ProgressApi()}
                  onChangeText={(text) => {
                    personalcontextData.acknowledgeNumb = text.replace(
                      allowOnlyNum,
                      ""
                    );
                    setSession({ ...session, prevSessionData });
                  }}
                />
              </CardMargin>
            </AlignedContainer>
          ) : null}
        </View>
      ) : null}
      <AlignedContainer>
        <CustomText
          testID={TestIds.cp_communication_address}
          fontFamily={FontFamily.INTER_BOLD}
          fontSize={Font_Size.SIZE_10}
          lineHeight={Line_Height.HEIGHT_14}
          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
          style={{ color: Colors.NEW_GREY_100 }}
          marginBottom={16}
        >
          {StringsOfLanguages.PERSONAL_DETAIL.COMMUNICATION_ADDRESS}
        </CustomText>
      </AlignedContainer>
      <FullLengthBox>
        <AlignedContainer>
          <CommunicationAddressContainer>
            {/* <RadioButton
              testID={TestIds.cp_cutomer_address_radio1}
              value={RadioButtonConstants.RADIO1}
              name="radio-normal"
              id="1"
              checked={selValue === RadioButtonConstants.RADIO1}
              onChange={() => handleChange(RadioButtonConstants.RADIO1)}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_ADAHAR}
            </RadioButton> */}
            <RadioButton
              testID={TestIds.cp_cutomer_address_radio1}
              value={RadioButtonConstants.RADIO1}
              name="radio-normal"
              id="1"
              checked={selValue === RadioButtonConstants.RADIO1}
              onChange={() => handleChange(RadioButtonConstants.RADIO1)}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_ADAHAR}
            </RadioButton>
            {selValue === RadioButtonConstants.RADIO1 ? (
              <AdharAddressContainer>
                <Text
                  fontFamily={FontFamily.Inter_REGULAR}
                  fontSize={Font_Size.SIZE_12}
                  lineHeight={Line_Height.HEIGHT_18}
                >
                  {prevSessionData.adharDetails.addressLn1}
                </Text>
              </AdharAddressContainer>
            ) : null}

            {/* <RadioButton
              value={RadioButtonConstants.RADIO2}
              testID={TestIds.cp_cutomer_address_radio2}
              name="radio-normal"
              id="1"
              checked={selValue === RadioButtonConstants.RADIO2}
              onChange={() => handleChange(RadioButtonConstants.RADIO2)}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
            </RadioButton> */}
            <RadioButton
              testID={TestIds.cp_cutomer_address_radio2}
              value={RadioButtonConstants.RADIO2}
              name="radio-normal"
              id="1"
              checked={selValue === RadioButtonConstants.RADIO2}
              onChange={() => handleChange(RadioButtonConstants.RADIO2)}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
            </RadioButton>

            {selValue === RadioButtonConstants.RADIO2 &&
              customerOtherAddress ? (
              <NewAddressView>
                <CustomText
                  testID={TestIds.cp_new_address_label}
                  fontFamily={FontFamily.INTER_BOLD}
                  fontSize={Font_Size.SIZE_10}
                  lineHeight={Line_Height.HEIGHT_14}
                  letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                  style={{ color: Colors.NEW_GREY_100 }}
                  marginBottom={5}
                >
                  {StringsOfLanguages.PERSONAL_DETAIL.NEW_ADDRESS}
                </CustomText>
                <NewAddressSubView>
                  <CustomText
                    testID={TestIds.cp_full_address_label}
                    style={{ width: "80%" }}
                    color={Colors.BLACK}
                    fontFamily={FontFamily.Inter_REGULAR}
                    fontSize={Font_Size.SIZE_14}
                    lineHeight={Line_Height.HEIGHT_20}
                  >
                    {renderAddressText(customerOtherAddress)}
                  </CustomText>
                  <TouchableOpacity
                    testID={TestIds.cp_edit_other_address}
                    onPress={() => {
                      personalcontextData.communicationAddress = true;
                      setSession({ ...session.prevSessionData });
                    }}
                  >
                    <CustomText
                      fontFamily={FontFamily.Inter_SemiBold}
                      fontSize={Font_Size.SIZE_14}
                      color={Colors.MAROON}
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.EDIT}
                    </CustomText>
                  </TouchableOpacity>
                </NewAddressSubView>
              </NewAddressView>
            ) : null}
          </CommunicationAddressContainer>
        </AlignedContainer>
      </FullLengthBox>
      <FullLengthBox>
        <AlignedContainer>
          <NomineeSwitchContainer>
            <CustomText
              fontFamily={FontFamily.Inter_SemiBold}
              fontSize={Font_Size.SIZE_14}
              lineHeight={Line_Height.HEIGHT_20}
              color={Colors.BLACK}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.DO_YOU}
            </CustomText>
            <SwitchContainer>
              <CustomText
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                color={Colors.BLACK}
              >
                {StringsOfLanguages.PERSONAL_DETAIL.NO}
              </CustomText>

              <Switch
                testID={TestIds.cp_toogle_nominee}
                trackColor={{
                  false: Colors.NEW_RED_200.code,
                  true: Colors.NEW_GREEN_100.code,
                }}
                thumbColor={Colors.WHITE}
                onValueChange={() => nomineeTogglePress()}
                value={nomineeVisible}
              />

              <CustomText
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                color={Colors.BLACK}
              >
                {StringsOfLanguages.PERSONAL_DETAIL.YES}
              </CustomText>
            </SwitchContainer>
          </NomineeSwitchContainer>
        </AlignedContainer>
      </FullLengthBox>
      {nomineeVisible ? (
        <View>
          <AlignedContainer>
            <CustomText
              testID={TestIds.cp_nominee_details_label}
              fontFamily={FontFamily.INTER_BOLD}
              fontSize={Font_Size.SIZE_10}
              lineHeight={Line_Height.HEIGHT_14}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
              style={{ color: Colors.NEW_GREY_100 }}
              marginBottom={16}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.NOMINEE_DETAILS}
            </CustomText>

            <CardMargin>
              <CustomTextInput
                testID={TestIds.cp_nominee_name}
                label={StringsOfLanguages.PERSONAL_DETAIL.NOMINEE_NAME}
                keyboardType="default"
                errorMessage=""
                isError={false}
                errorColor={Colors.red}
                textColor={Colors.BLACK}
                value={nomineeName}
                textInputProps={{
                  value: nomineeName,
                  onChangeText: (e) => {
                    personalcontextData.nomineeName = e.replace(
                      avoidNumNChar,
                      ""
                    );
                    setSession({ ...session, prevSessionData });
                    //setNomineeName(e.replace(/[^A-Za-z ]+/g, "")),
                  },
                }}
                onBlur={() => section3ProgressApi()}
                onChangeText={(e) => {
                  personalcontextData.nomineeName = e.replace(
                    avoidNumNChar,
                    ""
                  );
                  setSession({ ...session, prevSessionData });
                  //setNomineeName(e.replace(/[^A-Za-z ]+/g, "")),
                }}
              />
            </CardMargin>
            {/* <Select
              defaultSelectedItem={customerRelation}
              testID={TestIds.cp_relationship_with_customer}
              value={customerRelation}
              label={
                StringsOfLanguages.PERSONAL_DETAIL.RELATIONSHIP_WITH_CUSTOMER
              }
              options={nomineeRelationData}
              onChange={(value) => {
                personalcontextData.customerRelation = value;
                setSession({ ...session, prevSessionData });
                section3ProgressApi();
                //setCostumerRelation(value)
              }}
              labelStyle={{ color: Colors.NEW_GREY_800.text }}
              iconColor={Colors.MAROON_DARK}
            /> */}
            <SelectDropdown
              testID={TestIds.cp_relationship_with_customer}
              data={nomineeRelationData}
              defaultButtonText={StringsOfLanguages.PERSONAL_DETAIL.RELATIONSHIP_WITH_CUSTOMER}
              onSelect={(value) => {
                personalcontextData.customerRelation = value;
                setSession({ ...session, prevSessionData });
                section3ProgressApi();
                //setCostumerRelation(value)
              }}
              dropdownIconPosition={"right"}
              buttonStyle={{ width: '100%' }}
              buttonTextStyle={{
                fontSize: 14,
                fontFamily: FontFamily.Inter_SemiBold,
                lineHeight: 14,
                color: Colors.GRAY,
              }}
              rowTextStyle={dropdownTextStyle}
              renderDropdownIcon={() => {
                return <Image
                  source={chevronDown}
                  style={{
                    padding: 10,
                    margin: 5,
                    height: 25,
                    width: 25,
                    resizeMode: 'stretch',
                  }}
                />
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.displayText
              }}
              rowTextForSelection={(item, index) => {
                return item.displayText
              }}
            />
            <CardMargin></CardMargin>
            <CardMargin>
              {/* <DateInput
                testID={TestIds.cp_nominees_dob}
                label={StringsOfLanguages.PERSONAL_DETAIL.NOMINEE_DOB}
                dateFormat={dateFormat}
                minDate={getDOBMinDate()}
                maxDate={new Date(new Date().getTime()).setDate(
                  new Date().getDate() - 1
                )}
                disabledDates={[
                  new Date(new Date().getTime()).setDate(new Date().getDate()),
                ]}
                selectedDate={nomineeDob}
                datePickerProps={{
                  onSetDatePress: (e) => {
                    personalcontextData.nomineeDob = e;
                    setSession({ ...session, prevSessionData });
                    nomineeDate.current = 1;
                  },
                }}
              /> */}
            </CardMargin>
          </AlignedContainer>
          <AlignedContainer>
            <CustomText
              testID={TestIds.cp_nominees_address}
              fontFamily={FontFamily.INTER_BOLD}
              fontSize={Font_Size.SIZE_10}
              lineHeight={Line_Height.HEIGHT_14}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
              style={{ color: Colors.NEW_GREY_100 }}
              marginBottom={16}
            >
              {StringsOfLanguages.PERSONAL_DETAIL.NOMINEE_ADDRESS}
            </CustomText>
          </AlignedContainer>
          <FullLengthBox>
            <AlignedContainer>
              <CommunicationAddressContainer>
                {selValue === RadioButtonConstants.RADIO2 ? (
                  <>
                    {/* <RadioButton
                      testID={TestIds.cp_communication_address_radio3}
                      value={RadioButtonConstants.RADIO3}
                      name="radio-normal"
                      id="1"
                      checked={
                        nomineeAddressRadio === RadioButtonConstants.RADIO3
                      }
                      onChange={() =>
                        handleChange2(RadioButtonConstants.RADIO3)
                      }
                    >
                      {
                        StringsOfLanguages.PERSONAL_DETAIL
                          .SAME_AS_CUST_COMMUNICATION
                      }
                    </RadioButton> */}
                    <RadioButton
                      testID={TestIds.cp_communication_address_radio3}
                      value={RadioButtonConstants.RADIO3}
                      name="radio-normal"
                      id="1"
                      checked={selValue === RadioButtonConstants.RADIO3}
                      onChange={() => handleChange(RadioButtonConstants.RADIO3)}
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_COMMUNICATION}
                    </RadioButton>
                  </>
                ) : null}

                {/* <RadioButton
                testID={TestIds.cp_communication_address_radio4}
                  value={RadioButtonConstants.RADIO1}
                  name="radio-normal"
                  id="1"
                  checked={nomineeAddressRadio === RadioButtonConstants.RADIO1}
                  onChange={() => handleChange2(RadioButtonConstants.RADIO1)}
                >
                  {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_ADAHR}
                  </RadioButton>*/}
                <RadioButton
                  testID={TestIds.cp_communication_address_radio4}
                  value={RadioButtonConstants.RADIO1}
                  name="radio-normal"
                  id="1"
                  checked={selValue === RadioButtonConstants.RADIO1}
                  onChange={() => handleChange(RadioButtonConstants.RADIO1)}
                >
                  {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_ADAHR}
                </RadioButton>

                {/* <RadioButton
                testID={TestIds.cp_communication_address_radio5}
                  value={RadioButtonConstants.RADIO2}
                  name="radio-normal"
                  id="1"
                  checked={nomineeAddressRadio === RadioButtonConstants.RADIO2}
                  onChange={() => handleChange2(RadioButtonConstants.RADIO2)}
                >
                  {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
                </RadioButton> */}
                <RadioButton
                  testID={TestIds.cp_communication_address_radio5}
                  value={RadioButtonConstants.RADIO2}
                  name="radio-normal"
                  id="1"
                  checked={selValue === RadioButtonConstants.RADIO2}
                  onChange={() => handleChange(RadioButtonConstants.RADIO2)}
                >
                  {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
                </RadioButton>

                {nomineeAddressRadio === RadioButtonConstants.RADIO2 &&
                  nomineeOtherAddress ? (
                  <NewAddressView>
                    <CustomText
                      fontFamily={FontFamily.INTER_BOLD}
                      fontSize={Font_Size.SIZE_10}
                      lineHeight={Line_Height.HEIGHT_14}
                      letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                      style={{ color: Colors.NEW_GREY_100 }}
                      marginBottom={5}
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.NEW_ADDRESS}
                    </CustomText>
                    <NewAddressSubView>
                      <CustomText
                        style={{ width: 309 }}
                        color={Colors.BLACK}
                        fontFamily={FontFamily.Inter_REGULAR}
                        fontSize={Font_Size.SIZE_14}
                        lineHeight={Line_Height.HEIGHT_20}
                      >
                        {renderAddressText(nomineeOtherAddress)}
                      </CustomText>
                      <TouchableOpacity
                        testID={TestIds.cp_edit_communication2}
                        onPress={() => {
                          personalcontextData.nomineeCommunicationAddress = true;
                          setSession({ ...session, prevSessionData });
                        }}
                      >
                        <CustomText
                          fontSize={Font_Size.SIZE_14}
                          fontFamily={FontFamily.Inter_SemiBold}
                          color={Colors.MAROON}
                        >
                          {StringsOfLanguages.PERSONAL_DETAIL.EDIT}
                        </CustomText>
                      </TouchableOpacity>
                    </NewAddressSubView>
                  </NewAddressView>
                ) : null}
              </CommunicationAddressContainer>
            </AlignedContainer>
          </FullLengthBox>

          {isNomineeMinor ? (
            <>
              <AlignedContainer>
                <CardMargin>
                  <CustomText
                    testID={TestIds.cp_since_nominee}
                    fontSize={Font_Size.SIZE_14}
                    fontFamily={FontFamily.Inter_SemiBold}
                    lineHeight={Line_Height.HEIGHT_20}
                    color={Colors.BLACK}
                    style={{ width: 309 }}
                  >
                    {StringsOfLanguages.PERSONAL_DETAIL.SINCE_NOMINEE}
                  </CustomText>
                </CardMargin>
                <CardMargin>
                  <CustomTextInput
                    testID={TestIds.cp_guardian_name}
                    value={guardianName}
                    textInputProps={{
                      value: guardianName,

                      onChangeText: (e) => {
                        personalcontextData.guardianName = e.replace(
                          avoidNumNChar,
                          ""
                        );
                        setSession({ ...session, prevSessionData });
                      },
                    }}
                    label={StringsOfLanguages.PERSONAL_DETAIL.GUARDIAN_NAME}
                    onBlur={() => section3ProgressApi()}
                    onChangeText={(e) => {
                      personalcontextData.guardianName = e.replace(
                        avoidNumNChar,
                        ""
                      );
                      setSession({ ...session, prevSessionData });
                    }}
                  />
                </CardMargin>
                <CardMargin>
                  <CustomText
                    testID={TestIds.cp_guardian_address}
                    fontFamily={FontFamily.INTER_BOLD}
                    fontSize={Font_Size.SIZE_10}
                    lineHeight={Line_Height.HEIGHT_14}
                    letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                    style={{ color: Colors.NEW_GREY_100 }}
                  >
                    {StringsOfLanguages.PERSONAL_DETAIL.GUARDIAN_ADDRESS}
                  </CustomText>
                </CardMargin>
              </AlignedContainer>

              <FullLengthBox>
                <AlignedContainer>
                  <CommunicationAddressContainer>
                    {selValue === RadioButtonConstants.RADIO2 ? (
                      <>
                        <View style={{ flex: 1, alignItem: "center" }}>
                          {/* <RadioButton
                            testID={TestIds.cp_communication_address_radio6}
                            value={RadioButtonConstants.RADIO3}
                            name="radio-normal"
                            id="1"
                            checked={
                              guardianAddressRadio ===
                              RadioButtonConstants.RADIO3
                            }
                            onChange={() =>
                              handleChange3(RadioButtonConstants.RADIO3)
                            }
                          >
                            {
                              StringsOfLanguages.PERSONAL_DETAIL
                                .SAME_AS_CUST_COMMUNICATION
                            }
                          </RadioButton> */}
                          <RadioButton
                            testID={TestIds.cp_communication_address_radio6}
                            value={RadioButtonConstants.RADIO3}
                            name="radio-normal"
                            id="1"
                            checked={selValue === RadioButtonConstants.RADIO3}
                            onChange={() => handleChange(RadioButtonConstants.RADIO3)}
                          >
                            {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_COMMUNICATION}
                          </RadioButton>
                        </View>
                      </>
                    ) : null}

                    {nomineeAddressRadio === RadioButtonConstants.RADIO2 ? (
                      <>
                        {/* <RadioButton
                        testID={TestIds.cp_communication_address_radio7}
                          value={RadioButtonConstants.RADIO4}
                          name="radio-normal"
                          id="1"
                          checked={
                            guardianAddressRadio === RadioButtonConstants.RADIO4
                          }
                          onChange={() =>
                            handleChange3(RadioButtonConstants.RADIO4)
                          }
                        >
                          {
                            StringsOfLanguages.PERSONAL_DETAIL
                              .SAME_AS_NOMINEE_ADDRESS
                          }
                        </RadioButton> */}
                        <RadioButton
                          testID={TestIds.cp_communication_address_radio7}
                          value={RadioButtonConstants.RADIO4}
                          name="radio-normal"
                          id="1"
                          checked={selValue === RadioButtonConstants.RADIO4}
                          onChange={() => handleChange(RadioButtonConstants.RADIO4)}
                        >
                          {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_NOMINEE_ADDRESS}
                        </RadioButton>
                      </>
                    ) : null}

                    {/* <RadioButton
                     testID={TestIds.cp_communication_address_radio8}
                      value={RadioButtonConstants.RADIO1}
                      name="radio-normal"
                      id="1"
                      checked={
                        guardianAddressRadio === RadioButtonConstants.RADIO1
                      }
                      onChange={() =>
                        handleChange3(RadioButtonConstants.RADIO1)
                      }
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_ADAHR}
                    </RadioButton> */}
                    <RadioButton
                      testID={TestIds.cp_communication_address_radio8}
                      value={RadioButtonConstants.RADIO1}
                      name="radio-normal"
                      id="1"
                      checked={selValue === RadioButtonConstants.RADIO1}
                      onChange={() => handleChange(RadioButtonConstants.RADIO1)}
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.SAME_AS_CUST_ADAHR}
                    </RadioButton>

                    {/* <RadioButton
                     testID={TestIds.cp_communication_address_radio9}
                      value={RadioButtonConstants.RADIO2}
                      name="radio-normal"
                      id="1"
                      checked={
                        guardianAddressRadio === RadioButtonConstants.RADIO2
                      }
                      onChange={() =>
                        handleChange3(RadioButtonConstants.RADIO2)
                      }
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
                    </RadioButton> */}
                    <RadioButton
                      testID={TestIds.cp_communication_address_radio9}
                      value={RadioButtonConstants.RADIO2}
                      name="radio-normal"
                      id="1"
                      checked={selValue === RadioButtonConstants.RADIO2}
                      onChange={() => handleChange(RadioButtonConstants.RADIO2)}
                    >
                      {StringsOfLanguages.PERSONAL_DETAIL.OTHER_ADDRESS}
                    </RadioButton>

                    {guardianAddressRadio === RadioButtonConstants.RADIO2 &&
                      guardianOtherAddress ? (
                      <NewAddressView>
                        <CustomText
                          fontFamily={FontFamily.INTER_BOLD}
                          fontSize={Font_Size.SIZE_10}
                          lineHeight={Line_Height.HEIGHT_14}
                          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                          style={{ color: Colors.NEW_GREY_100 }}
                          marginBottom={5}
                        >
                          {StringsOfLanguages.PERSONAL_DETAIL.NEW_ADDRESS}
                        </CustomText>
                        <NewAddressSubView>
                          <CustomText
                            style={{ width: 309 }}
                            color={Colors.BLACK}
                            fontFamily={FontFamily.Inter_REGULAR}
                            fontSize={Font_Size.SIZE_14}
                            lineHeight={Line_Height.HEIGHT_20}
                          >
                            {renderAddressText(guardianOtherAddress)}
                          </CustomText>
                          <TouchableOpacity
                            testID={TestIds.cp_button_guardian_comm_address}
                            onPress={() => {
                              personalcontextData.guardianCommunicationAddress = true;
                              setSession({ ...session, prevSessionData });
                            }}
                          >
                            <CustomText
                              fontSize={Font_Size.SIZE_14}
                              fontFamily={FontFamily.Inter_SemiBold}
                              color={Colors.MAROON}
                            >
                              {StringsOfLanguages.PERSONAL_DETAIL.EDIT}
                            </CustomText>
                          </TouchableOpacity>
                        </NewAddressSubView>
                      </NewAddressView>
                    ) : null}
                  </CommunicationAddressContainer>
                </AlignedContainer>
              </FullLengthBox>
            </>
          ) : null}
        </View>
      ) : null}

      <AlignedContainer
        style={{
          alignItems: "center",
          height: 0,
        }}
      >
        {submitButtonEnable_HHandCS() ? (
          <RightArrowButtonActive testID={TestIds.cp_submit_button} onPress={() => {
            // loading(true); 
            submitPersonalDetails(true);
          }}>
            <Image source={rightArrowWhite} style={RightArrowImage} />
          </RightArrowButtonActive>
        ) : (
          <RightArrowButton>
            <Image source={rightArrow} style={RightArrowImage} />
          </RightArrowButton>
        )}
      </AlignedContainer>
      {
        // <PopUpExistingCustomer
        // testID_cancel={"testCancel1"}
        // testID_submit={"testSubmit1"}
        //   animationIn="bounceIn"
        //   popupIcon={info}
        //   isVisible={isETBUser}
        //   Heading={HEADING.ETB_USER}
        //   ButtonText={StringsOfLanguages.PERSONAL_DETAIL.CONFIRM}
        //   data={customerData && customerData.accountList}
        //   dropdownData={
        //     customerData && customerData.offerList && customerData.offerList
        //   }
        //   buttonPress={existingPopupConfirmBtnPressed}
        //   subText={SUB_HEADING.ETB_USER_INFO + customerData.customerID}
        //   responseData={customerData}
        //   cancelBtnPressed={() => {
        //     personalcontextData.isETBUser = !personalcontextData.isETBUser;
        //     setSession({ ...session, prevSessionData });
        //   }}
        // />
      }
      <Popup
        isVisible={nomineePopupVisible}
        popupIcon={alertIcon}
        testID_cancel={"testCancel2"}
        testID_submit={"testSubmit2"}
        Heading={StringsOfLanguages.PERSONALIZED_SECTION.POPUP_HEADER}
        component={
          <View style={{ marginBottom: 16 }}>
            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              fontSize={Font_Size.SIZE_16}
              lineHeight={Line_Height.HEIGHT_24}
            >
              {StringsOfLanguages.PERSONALIZED_SECTION.POPUP_SUBHEADER}
            </CustomText>
          </View>
        }
        ButtonText={StringsOfLanguages.PERSONALIZED_SECTION.POPUP_PROCEED}
        buttonWidth={"320"}
        buttonPress={() => setNomineeYes()}
        cancelButtonText={StringsOfLanguages.PERSONALIZED_SECTION.POPUP_DECLINE}
        cancelButtonPress={() => setNomineeNo()}
        animationIn={"bounce"}
      />

      {
        <Popup
          animationIn="bounceIn"
          testID_submit={"testSubmit3"}
          popupIcon={alertIcon}
          isVisible={isPrathamBankUser}
          Heading={HEADING.PRATHAM_BANK_USER}
          ButtonText={StringsOfLanguages.CUSTOMERCONSENT.CC_OKAY}
          buttonPress={() => {
            personalcontextData.isPrathamBankUser =
              !personalcontextData.isPrathamBankUser;
            setSession({ ...session, prevSessionData });
          }}
          component={
            <ComponentContainer>
              <CustomText
                marginBottom={20}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                color={Colors.NEW_GREY_800.text}
              >
                {SUB_HEADING.PRATHAM_BANK_INFO +
                  " " +
                  (customerData &&
                    customerData.accountList &&
                    customerData.accountList[0].accountNumber) +
                  " under Customer ID " +
                  customerData.customerID}
              </CustomText>
            </ComponentContainer>
          }
        />
      }
      {
        <Popup
          testID_submit={TestIds.cid_pan_adhar_match_pop_up_submit}
          testID_cancel={TestIds.cid_pan_adhar_match_pop_up_cancel}
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={isPanAdharMatchPopup}
          Heading={StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_HEADING}
          ButtonText="Okay"
          buttonPress={panAdharMissMatchPopUpOkButtonPressed}
          component={
            <ComponentContainer>
              <View>
                <CustomText>
                  <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT1}</CustomText>
                  <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text} fontFamily={FontFamily.Inter_SemiBold}>{isEmptyValue(session.panDetails?.name) ? "" : session.panDetails?.name}</CustomText>
                  <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text}>{StringsOfLanguages.CID.CID_PAN_ADHAR_MATCH_TEXT2}</CustomText>
                  <CustomText marginBottom={20} fontSize={Font_Size.SIZE_16} lineHeight={Line_Height.HEIGHT_24} color={Colors.NEW_GREY_800.text} fontFamily={FontFamily.Inter_SemiBold}>{isEmptyValue(session.adharDetails?.name) ? "" : session.adharDetails?.name}</CustomText>
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
      }
      {/*future reference*/}
      {/* {
        <Popup
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={panAdharInvalid}
          Heading={StringsOfLanguages.CID.CID_LABLE_SORRY}
          ButtonText={StringsOfLanguages.CID.CID_LABLE_MISMATCH_PAN}
          buttonPress={() => {
            personalcontextData.panAdharInvalid =
              !personalcontextData.panAdharInvalid;
            setSession({ ...session, prevSessionData });
          }}
          component={
            <ComponentContainer>
              <CustomText
                marginBottom={20}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                color={Colors.NEW_GREY_800}
              >
                {StringsOfLanguages.CID.CID_DESCR_MISMATCH_PAN}
              </CustomText>
            </ComponentContainer>
          }
        />
      } */}
      {
        <Popup
          animationIn="bounceIn"
          testID_submit={"testSubmit4"}
          popupIcon={alertIcon}
          isVisible={isPanPopupShow}
          Heading={StringsOfLanguages.CID.CID_LABLE_SORRY}
          ButtonText={StringsOfLanguages.CID.CID_LABLE_RE_ENTER_PAN}
          buttonPress={() => {
            personalcontextData.isPanPopupShow =
              !personalcontextData.isPanPopupShow;
            setPopupType(true);
            setSession({ ...session, prevSessionData });
          }}
          component={
            <ComponentContainer>
              <CustomText
                marginBottom={20}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_24}
                color={Colors.NEW_GREY_800.text}
              >
                {StringsOfLanguages.CID.CID_DESCR_INVALID_PAN}
              </CustomText>
            </ComponentContainer>
          }
        />
      }
      {
        // <PopupTextInput
        // testID_cancel={"testCancel5"}
        // testID_submit={"testSubmit5"}
        // TextInputvalue={panNumber}
        //   popupType={PersonalDetailsConstants.POPUPTYPE.PAN}
        //   animationIn="bounceIn"
        //   popupIcon={alertIcon}
        //   isVisible={popupType}
        //   Heading={StringsOfLanguages.PERSONAL_DETAIL.PAN_HEADING} 
        //   popupInfo={popupTypeInfo}
        //   TextInputPlaceholder={StringsOfLanguages.CID.CID_FIELD_PAN}
        //   ButtonText={StringsOfLanguages.PERSONAL_DETAIL.SUBMIT}
        //   buttonPress={() => {
        //     panSubmitButton();
        //   }}
        //   onchangeText={(e) => panInputHandler(e)}
        //   isError={panNumber?!isValidPan(panNumber)?isErrorPan:false:false}
        //   disabled={!isValidPan(panNumber)}
        //   cancelButtonPress ={()=>{
        //     setPopupType(false)
        //     if(panNumber){
        //       personalcontextData.panNumber="",
        //       prevSessionData.panDetails.panNumber=""
        //       setSession({ ...session, prevSessionData });
        //     }
        //   }}
        //   errorMessage={
        //     panNumber&&!isValidPan(panNumber)
        //       ? StringsOfLanguages.CID.CID_ERROR_PAN
        //       : StringsOfLanguages.CID.CID_FIELD_PAN
        //   }
        // />
      }

      {communicationAddress ? (
        <PopupCommunicationAddress
          testID_cancel={"testCancel6"}
          testID_submit={"testSubmit6"}
          popupType={PersonalDetailsConstants.POPUPTYPE.COMMUNICATION_ADDRESS}
          animationIn="bounceIn"
          popupIcon={location}
          isVisible={communicationAddress}
          Heading={NEWCOMMUNICATIONADDRESS.NCA_FORM_HEADING.Customer} // Heading is assumed to be taken from constants
          popupInfo={NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING.Customer}
          isActive={false}
          isValue={false}
          checkPincode={customerPincode}
          checkAddress1={customerAddress1}
          checkAddress2={customerAddress2}
          checkAddress3={customerAddress3}
          TextInputPlaceholder=""
          textColor={Colors.BLACK}
          ButtonText={StringsOfLanguages.PERSONAL_DETAIL.CONFIRM}
          buttonPress={(data) => {
            confirmCustomerPopup(data);
          }}
          CancelButtonText={StringsOfLanguages.PERSONAL_DETAIL.CANCEL}
          cancelButtonPress={() => cancelCustomerPopup()}
          isError={false}
          error_text={StringsOfLanguages.PERSONAL_DETAIL.VALIDATION_FAILED}
        />
      ) : null}
      {nomineeCommunicationAddress ? (
        <PopupCommunicationAddress
          testID_cancel={"testCancel7"}
          testID_submit={"testSubmit7"}
          popupType={PersonalDetailsConstants.POPUPTYPE.COMMUNICATION_ADDRESS}
          animationIn="bounceIn"
          popupIcon={location}
          isVisible={nomineeCommunicationAddress}
          Heading={NEWCOMMUNICATIONADDRESS.NCA_FORM_HEADING.Nominee} // Heading is assumed to be taken from constants
          popupInfo={NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING.Nominee}
          isActive={false}
          isValue={false}
          TextInputPlaceholder=""
          textColor={Colors.BLACK}
          ButtonText={StringsOfLanguages.PERSONAL_DETAIL.CONFIRM}
          checkPincode={nomineePincode}
          checkAddress1={nomineeAddress1}
          checkAddress2={nomineeAddress2}
          checkAddress3={nomineeAddress3}
          buttonPress={(data) => {
            confirmNomineePopup(data);
          }}
          CancelButtonText={StringsOfLanguages.PERSONAL_DETAIL.CANCEL}
          cancelButtonPress={() => cancelNomineePopup()}
          isError={false}
          error_text={StringsOfLanguages.PERSONAL_DETAIL.VALIDATION_FAILED}
        />
      ) : null}
      {guardianCommunicationAddress ? (
        <PopupCommunicationAddress
          testID_cancel={"testCancel8"}
          testID_submit={"testSubmit8"}
          popupType={PersonalDetailsConstants.POPUPTYPE.COMMUNICATION_ADDRESS}
          animationIn="bounceIn"
          popupIcon={location}
          isVisible={guardianCommunicationAddress}
          Heading={NEWCOMMUNICATIONADDRESS.NCA_FORM_HEADING.Guardian} // Heading is assumed to be taken from constants
          popupInfo={NEWCOMMUNICATIONADDRESS.NCA_SUB_HEADING.Guardian}
          isActive={false}
          isValue={false}
          TextInputPlaceholder=""
          textColor={Colors.BLACK}
          ButtonText={StringsOfLanguages.PERSONAL_DETAIL.CONFIRM}
          checkPincode={guardianPincode}
          checkAddress1={guardianAddress1}
          checkAddress2={guardianAddress2}
          checkAddress3={guardianAddress3}
          buttonPress={(data) => {
            confirmGuardianPopup(data);
          }}
          CancelButtonText={StringsOfLanguages.PERSONAL_DETAIL.CANCEL}
          cancelButtonPress={() => cancelGuardianPopup()}
          isError={false}
          error_text={StringsOfLanguages.PERSONAL_DETAIL.VALIDATION_FAILED}
        />
      ) : null}
      {<ErrorPopup
        popUpshow={isUnkownError}
        message={errorMsg}
        callBack={() => setIsUnkownError(false)}
        btnText={StringsOfLanguages.COMMON.SESSION_ALERT_OK}
      ></ErrorPopup>}
    </View>
  );
};

export default PersonalDetail;
