import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import useSession from "../../App/useSession";
import { arrowBack, alertIcon, chevronDown } from "../../Assets/Images";
import { StringsOfLanguages } from "../../Localization";
import { AsyncStorageUtils, Colors, Icon_Size, NavigationUrl } from "../../Utils";
import Item from "./ResumeApplicationItem";

import {
  HeaderContainer,
  CloseAndSave,
  IconBack,
  HeaderTextStyle,
  Container,
  CongratsTextContainer,
  ComponentContainer,
  dropdownTextStyle,
  emptyListTextStyle,
  emptyListViewStyle,
  searchBoxStyle,
  lableErrorStyle,
  lableStyle,
  inputBorderErrorStyle,
  inputBorderStyle,
  textInputPropsStyle,
  iconButtonStyle,
  radioGroupStyle,
  selectBoxStyle,
  selectTextStyle,
  emptyBox,
} from "./styled";
import { CustomTextInput, Popup, RadioButton } from "../../Components";
// import { RadioButton, Select } from "@idfc/ccl-mobile/lib/module/v2";
// import { IconButton } from "@idfc/ccl-mobile";
import { Endpoints } from "../../API";
import {
  deleteResumeApplicationDataComm,
  getResumeApplicationDataComm,
  getResumeApplicationsListComm,
} from "./service";
import {
  Account_Type,
  banking_Type,
  CommonConstant,
  FontFamily,
  Milestone,
  RadioButtonConstants,
  Save_Status,
  TestIds,
} from "../../Utils/Constants";
// import { validation } from "../../Utils/ValidationUtils";
import LoaderComponent from "../../Components/LoaderComponent";
import ErrorPopup from "../../Components/ErrorPopup";
import CustomDropDown from "../../Components/CustomDropDown/CustomDropDown";

const ResumeApplication = (props) => {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const [filterData, setFilterData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [isErrorSearch, setIsErrorSearch] = useState(false);
  const [isDeletePopupShow, setIsDeletePopupShow] = useState(false);
  const [isShowDrop, setIsShowDrop] = useState(false);
  const [radioValue, setRadioValue] = useState("No");
  const [reason, setReason] = useState("");
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);
  const [deleteItem, setDeleteItem] = useState("");
  const [deleteIndex, setDeleteIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [searchLable, setSearchLable] = useState(
    StringsOfLanguages.RESUMEAPPLIST.RAL_SEARCH_BY
  );
  const [pageNo, setPageNo] = useState(1);
  const [, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [resumeList, setResumeList] = useState([]);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  let prevSessionData = session;
  let personalcontextData = prevSessionData.customerProfile.personalDetail;
  let bankingPreferenceData = prevSessionData.customerProfile.bankingPreference;
  let customerConsentData = prevSessionData.customerProfile.customerConsent;
  let cidContextData = prevSessionData.agentDetails;

  const reasonData = [
    {
      displayText: "Customer not interested in account opening",
      value: "Customer not interested in account opening",
      id: 0,
    },
    {
      displayText: "Account opened through another application",
      value: "Account opened through another application",
      id: 1,
    },
  ];

  useEffect(async () => {
    getResumeApplicationsList();
  }, []);



  const searchFilterFunction = (text) => {
    const newData = resumeList.filter((item) => item?.customerName.toUpperCase().includes(text.toUpperCase()))
    setFilterData(newData)
  };

  const onDelete = (item, index) => {
    setDeleteItem(item);
    setDeleteIndex(index);
    setIsDeletePopupShow(!isDeletePopupShow);
  };

  const onNext = (item) => {
    getResumeApplicationData(item.userId);
  };

  const onSubmit = () => {
    if (radioValue === "Yes" && reason) {
      setIsDeletePopupShow(!isDeletePopupShow);
      setIsShowDrop(false);

      deleteApiCall();
    } else {
      setIsDeletePopupShow(!isDeletePopupShow);
      setIsShowDrop(false);
      setRadioValue("No");
      setReason("");
      setSelectedItem("");
      setIsVisibleSubmit(false);
    }
  };

  const onChangeReason = (value) => {
    if (value) {
      setReason(value.displayText);
      setSelectedItem(reasonData[value.id]);
      setIsVisibleSubmit(false);
    } else {
      setReason("");
      setSelectedItem("");
      setIsVisibleSubmit(true);
    }
  };

  const onChangeRadioValue = (val) => {
    if (val == "Yes") {
      setRadioValue("Yes");
      if (selectedItem) {
        setIsVisibleSubmit(false);
      }
      else {
        setIsVisibleSubmit(true);
      }
      setIsShowDrop(true);
    } else {
      setRadioValue("No");
      setReason("");
      setIsVisibleSubmit(false);
      setSelectedItem("");
      setIsShowDrop(false);
    }
  };

  const onClickDelete = (item, index) => {
    removeItemOnce(filterData, index);
  };

  const removeItemOnce = (arr, index) => {
    arr.splice(index, 1);
    setFilterData(arr);
    setDeleteItem("");
    setDeleteIndex("");
  };

  const cancleSearch = () => {
    setSearchValue("");
    setFilterData(resumeList);
  };

  async function getResumeApplicationsList() {
    setIsLoading(true);
    setShowLoader(true);
    await getResumeApplicationsListComm((status, response) => {
      setIsLoading(false);
      setShowLoader(false);
      if (status && response && response?.length > 0) {
        setFilterData(response);
        setResumeList(response)
        setPageNo(pageNo + 1);
      } else if (status == false && response == "") {
        setFilterData("");
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        setErrorPopup(true);
      } else {
        setFilterData("");
        setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR);
        setErrorPopup(true);
      }
    }
    );

  };


  const getResumeApplicationData = async (userId) => {

    await getResumeApplicationDataComm(
      Endpoints.saveCustomerDetails,
      (status, response) => {
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
        // if (status && response) {

        //   const encryptedResponse = {
        //     personalDetails: response?.personalDetails,
        //     bankingDetails: response?.bankingDetails,
        //     custConsentDetails: response?.custConsentDetails,
        //     cidDetails: response?.cidDetails,
        //     aadharDetails: response?.aadharDetails,
        //     panDetails: response?.panDetails,
        //   };

        //   const fetchedPersonalDetails =
        //     encryptedResponse.personalDetails

        //   const fetchedBankingDetails =
        //     encryptedResponse.bankingDetails

        //   const fetchedCustConsentDetails =
        //     encryptedResponse.custConsentDetails

        //   const fetchedCIDDetails =
        //     encryptedResponse.cidDetails

        //   const fetchedAadharDetails =
        //     encryptedResponse.aadharDetails

        //   const fetchedPanDetails =
        //     encryptedResponse.panDetails

        //   const fetchedData = {
        //     fetchedCIDDetails,
        //     fetchedPersonalDetails,
        //     fetchedBankingDetails,
        //     fetchedCustConsentDetails,
        //     response,
        //     fetchedAadharDetails,
        //     fetchedPanDetails,
        //   };
        //   cidContextData.userId = response.userId;
        //   prevSessionData.accountType = response.appName == Account_Type.ASSISTED_CS ? Account_Type.ASSISTED_CS : Account_Type.ASSISTED_SA
        //   setSession({ ...session, prevSessionData });
        //   if (fetchedData.cidDetails !== null) {
        //     saveFetchedData(fetchedData);
        //   }
        // } else {
        //   setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        //   setErrorPopup(true);
        // }
      }
    );
  };

  const saveFetchedData = (fetchedData) => {
    prevSessionData.adharDetails = fetchedData.fetchedAadharDetails;
    prevSessionData.panDetails = fetchedData.fetchedPanDetails;
    //PERSONAL DETAILS SAVE DATA
    if (fetchedData.fetchedPersonalDetails) {
      personalcontextData.annualIncome =
        fetchedData.fetchedPersonalDetails.grossAnnualIncome;

      personalcontextData.occupationType = {
        displayText:
          fetchedData.fetchedPersonalDetails.occupationType?.displayText,
        sourceOfIncome:
          fetchedData.fetchedPersonalDetails.occupationType?.sourceOfIncome,
        id: 1,
        value: 1,
      };

      if (
        fetchedData?.fetchedPersonalDetails?.occupationType?.displayText?.toUpperCase() ==
        "SALARIED"
      ) {
        personalcontextData.showCompanyName = true;
        personalcontextData.CompanyValue =
          fetchedData.fetchedPersonalDetails.companyName?.displayText;
        personalcontextData.CompanyValueObj =
          fetchedData.fetchedPersonalDetails.companyName
        if (fetchedData.fetchedPersonalDetails.companyName) {
          personalcontextData.isCompanySelectedFromList = true;
        }
      }
      personalcontextData.sourceOfIncome = {
        displayText:
          fetchedData.fetchedPersonalDetails.sourceOfIncome?.displayText,
        id: 1,
        value: 1,
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
        fetchedData.fetchedPersonalDetails.Form60Details?.fathersName;
      personalcontextData.form60Visible =
        fetchedData.fetchedPersonalDetails.isForm60Visible;
      personalcontextData.panApplied =
        fetchedData.fetchedPersonalDetails.Form60Details?.isAppliedForPAN;
      personalcontextData.applicationDob =
        fetchedData.fetchedPersonalDetails.Form60Details?.dateOfApplication;
      personalcontextData.acknowledgeNumb =
        fetchedData.fetchedPersonalDetails.Form60Details?.acknowledgementNo;

      //communication address
      if (
        fetchedData.fetchedPersonalDetails.communicationAddress.isSameAsAadhar
      ) {
        personalcontextData.selValue = RadioButtonConstants.RADIO1; //todo:-take this from constant file
      }
      if (
        fetchedData.fetchedPersonalDetails.communicationAddress.isOthrAddress
      ) {
        personalcontextData.selValue = RadioButtonConstants.RADIO2;
      }

      if (
        fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress
      ) {
        personalcontextData.customerOtherAddress =
          fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress;
        personalcontextData.customerPincode =
          fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress?.pincode;
        personalcontextData.customerAddress1 =
          fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress?.address1;
        personalcontextData.customerAddress2 =
          fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress?.address2;
        personalcontextData.customerAddress3 =
          fetchedData.fetchedPersonalDetails.communicationAddress.otherAddress?.address3;
      }

      //nominee details
      personalcontextData.nomineeVisible =
        fetchedData.fetchedPersonalDetails.isNomineeVisible;
      personalcontextData.nomineeName =
        fetchedData.fetchedPersonalDetails.nomineeDetails?.nomineeName;
      personalcontextData.customerRelation =
        fetchedData.fetchedPersonalDetails.nomineeDetails?.Relationship;
      personalcontextData.nomineeDob =
        fetchedData.fetchedPersonalDetails.nomineeDetails?.dateOfBirth;
      personalcontextData.isNomineeMinor =
        fetchedData.fetchedPersonalDetails.nomineeDetails?.isNomineeMinor;
      personalcontextData.guardianName =
        fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.guardianName;

      //nominee address
      if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.address
          ?.isSameAsCustomerAadhar
      ) {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO1;
      } else if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.isOthrAddress
      ) {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO2;
      } else {
        personalcontextData.nomineeAddressRadio = RadioButtonConstants.RADIO3;
      }
      if (
        fetchedData.fetchedPersonalDetails.nomineeDetails?.address
          ?.otherAddress
      ) {
        personalcontextData.nomineeOtherAddress =
          fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress;
        if (
          fetchedData.fetchedPersonalDetails.nomineeDetails?.address?.otherAddress
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
          fetchedData.fetchedPersonalDetails.nomineeDetails?.guardianDetails?.address?.otherAddress?.address3;
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
      customerConsentData.employmentProofImage =
        fetchedData.fetchedCustConsentDetails.employmentProofImage;
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

  const navigateToScreen = (screenName, milestone) => {
    navigation.navigate(screenName, { milestone: milestone });
  };

  const renderItem = ({ item, index }) => (
    <Item item={item} index={index} onDelete={onDelete} onNext={onNext} />
  );

  const renderEmptyListItem = () => (
    <View style={emptyListViewStyle}>
      <Text style={emptyListTextStyle}>
        {StringsOfLanguages.RESUMEAPPLIST.RAL_NO_RESULTS}
      </Text>
    </View>
  );

  //TODO: below function is to delete customerName which are null
  // const deleteNullCumstomerName=()=>{
  //   resumeList.map(async(item)=>{
  //     if(item.customerName==null){
  //       await deleteResumeApplicationDataComm(
  //         Endpoints.deleteResumeApplicationsData + `${item.userId}&reason=${"Customer not interested in account opening"}`,
  //         (response) => {
  //           if (response.status == CommonConstant.SUCCESS) {
  //             setRadioValue("No");
  //             setReason("");
  //             setSelectedItem("");
  //             setIsVisibleSubmit(false);
  //             onClickDelete(deleteItem, deleteIndex);
  //           }else {
  //               setIsDeletePopupShow(!isDeletePopupShow);
  //               setIsShowDrop(false);
  //               setRadioValue("No");
  //               setReason("");
  //               setSelectedItem("");
  //               setIsVisibleSubmit(false);
  //             }
  //         }
  //       );

  //     }

  //   })
  // }

  const deleteApiCall = async () => {
    setRadioValue("No");
    setReason("");
    setSelectedItem("");
    setIsVisibleSubmit(false);
    onClickDelete(deleteItem, deleteIndex);
  };

  // return(
  //   <View style={{flex:1,backgroundColor:'red'}}></View>
  // );

  return (
    <Container>
      <LoaderComponent
        isVisible={false}
        heading={StringsOfLanguages.LOADER.CID_HEADING}
        subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
      />
      <HeaderContainer>
        <CloseAndSave>
          <TouchableOpacity testID={TestIds.rap_back_arrow_button} onPress={() => navigation.goBack()}>
            <IconBack source={arrowBack} />
          </TouchableOpacity>
        </CloseAndSave>

        <CongratsTextContainer>
          <Text style={HeaderTextStyle}>
            {StringsOfLanguages.RESUMEAPPLIST.RAL_HEADER}
          </Text>
        </CongratsTextContainer>
      </HeaderContainer>

      <View style={searchBoxStyle}>
        <CustomTextInput
          testID={TestIds.rap_search_by}
          label={searchLable}
          labelStyle={isErrorSearch ? lableErrorStyle : lableStyle}
          inputBorderProps={{
            style: isErrorSearch ? inputBorderErrorStyle : inputBorderStyle,
          }}
          value={searchValue}
          onChangeText={(text) => {
            searchFilterFunction(text)
            setSearchValue(text);
            if (/^[a-zA-Z0-9]*$/g.test(text)) {
              setIsErrorSearch(false);
              setSearchLable(StringsOfLanguages.RESUMEAPPLIST.RAL_SEARCH_BY);
            } else {
              setIsErrorSearch("error");
              setSearchLable(StringsOfLanguages.RESUMEAPPLIST.RAL_ERR_SEARCH);
            }
          }}
          textInputProps={{ style: textInputPropsStyle }}
          suffix={
            <View style={iconButtonStyle}>
              {/* <IconButton
                iconColor={Colors.MAROON_DARK}
                iconType={searchValue ? "Cross" : "Search"}
                transparent
                iconSize={searchValue ? Icon_Size.SMALL : Icon_Size.NORMAL}
                onPress={() => {
                  searchValue ? cancleSearch() : null;
                }}
              /> */}
            </View>
          }
        />
      </View>

      <FlatList
        testID={TestIds.rap_all_application_list}
        data={filterData}
        extraData={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={filterData == "" && renderEmptyListItem}
      />

      {/* show delete application popup dialog  here */}
      {
        <Popup
          testID_submit={TestIds.rap_delete_popup}
          animationIn="bounceIn"
          popupIcon={alertIcon}
          isVisible={isDeletePopupShow}
          Heading={StringsOfLanguages.RESUMEAPPLIST.RAL_MODAL_HEADER}
          ButtonText="Submit"
          buttonPress={() => {
            onSubmit();
          }}
          disabled={isVisibleSubmit}
          component={
            <View>
              <ComponentContainer>
                <View style={radioGroupStyle}>

                  <RadioButton
                    testID={TestIds.rap_delete_yes}
                    value="Yes"
                    name="radio-normal"
                    id="1"
                    checked={radioValue === "Yes"}
                    onChange={() => onChangeRadioValue("Yes")}
                  >
                    {StringsOfLanguages.RESUMEAPPLIST.RAL_YES}
                  </RadioButton>

                  <RadioButton
                    testID={TestIds.rap_delete_no}
                    value="No"
                    name="radio-normal"
                    id="1"
                    checked={radioValue === "No"}
                    onChange={() => onChangeRadioValue("No")}
                  >
                    {StringsOfLanguages.RESUMEAPPLIST.RAL_NO}
                  </RadioButton>
                </View>

                <View style={emptyBox}></View>
              </ComponentContainer>

              <ComponentContainer>
                {isShowDrop && (
                  <View style={selectBoxStyle}>
                    <CustomDropDown
                      testID={TestIds.rap_selsect_resason}
                      value={reason}
                      label={StringsOfLanguages.RESUMEAPPLIST.RAL_REASON}
                      options={reasonData}
                      onChange={onChangeReason}
                      defaultSelectedItem={selectedItem}
                      renderItemAs={(item) => (
                        <View style={selectTextStyle}>
                          <Text style={dropdownTextStyle}>
                            {item.displayText}
                          </Text>
                        </View>
                      )}
                    />

                  </View>
                )}
              </ComponentContainer>
            </View>
          }
        />
      }
      {
        <ErrorPopup
          testID={TestIds.rap_error_popup}
          popUpshow={errorPopup}
          message={errorMsg}
          callBack={() => {
            setErrorPopup(false);
            navigation.goBack();
          }}
        ></ErrorPopup>
      }
    </Container>
  );
};

export default ResumeApplication;
