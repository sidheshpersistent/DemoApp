/* eslint-disable no-unused-vars */
/* eslint-disable  no-useless-escape  */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Alert,
  ToastAndroid,
  Keyboard
} from "react-native";
import { CustomText, CustomTextInput, CustomButton, Popup } from "../../Components";
import { mode_of_IP, campaign_code, met_customer_at, dateFormat, minDate, modeOfPayementCheque, modeOfPayementNeft, modeOfPayementGateway, bankNameIdfc, bank_name_list } from "./constants";
import { CommonConstant, TestIds } from "../../Utils/Constants";
import {
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  LetterSpacing,
  NavigationUrl
} from "../../Utils";
import { arrowBack, checked, unchecked, info } from "../../Assets/Images";
import { StringsOfLanguages } from "../../Localization";
import {
  Container,
  HeaderSubTextStyle,
  HeaderContainer,
  CloseAndSave,
  IconBack,
  HeaderTextStyle,
  CongratsTextContainer,
  NomineeSwitchContainer,
  SwitchContainer,
  FullLengthBox,
  AlignedContainer,
  CardMargin,
  UpdateButtonView,
  checkBoxStyle,
  CustomerSignatureView,
  EmplyeeDetailsView,
  employeeSectionSpacings,
  ScrollViewContainer
} from "./styled";
import { isValidField, isValidNameField, getValueIfNonEmpty } from "../../Utils/ValidationUtils";
import CustomSearchInputDropdown from "../../Components/CustomSearchInputDropdown/CustomSearchInputDropdown";
import { Endpoints, NetworkManager } from "../../API";
import ErrorPopup from "../../Components/ErrorPopup";
import { saveBankUseSection } from "./service";
import LoaderComponent from "../../Components/LoaderComponent";
import { decryptDataValue } from "../../Utils/CryptoHelper";
import { Account_Type } from "../../Utils/Constants";
import useSession from "../../App/useSession";
import { convertDateTo_dd_MM_YYYY } from "../../Utils/CommonFunction"
import CustomDropDown from "../../Components/CustomDropDown/CustomDropDown";
import CustomDateInput from "../../Components/CustomDateInput/CustomDateInput";
import CheckBox from "@react-native-community/checkbox";

const BankUseSectionForm = (props) => {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const [isInitialFunding, setIsInitialFunding] = useState(true);
  const [name, setName] = useState(props.route.params.option.custName);
  const [acc_number, setAcc_number] = useState(
    props.route.params.option.acNumber
  );
  const [initial_payment, setInitial_payment] = useState("");
  const [modeOfPayement, setModeOfPayement] = useState("");
  const [chequeDate, setChequeDate] = useState("");
  const [details, setDetails] = useState("");
  const [bankName, setBankName] = useState("");
  const [allBankList, setAllBankList] = useState("");
  const [allCompaignCode, setAllCompaignCodes] = useState([]);
  const [branchName, setBranchName] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [leadGeneratorCode, setLeadGeneratorCode] = useState(
    props.route.params.option.lead_gen_code
  );
  const [leadWarmerCode, setLeadWarmerCode] = useState(
    props.route.params.option.lead_gen_code
  );
  const [leadConverterCode, setLeadConverterCode] = useState(
    props.route.params.option.lead_gen_code
  );
  const [campaignCode, setCampaignCode] = useState("");

  const [metCustomerAt, setmetCustomerAt] = useState("");
  const [isCustomerSigned, toggleCustmerSign] = useState(true);
  const [empName, setEmpName] = useState(
    props.route.params.option.employee_name
  );
  const [empId, setEmpId] = useState(props.route.params.option.employee_id);
  const [certificationDate, setCertificationDate] = useState(
    props.route.params.option.certification_date
  );

  const [isErrorIP, setIsErrorIP] = useState(false);
  const [isErrorBranchName, setIsErrorBranchName] = useState(false);
  const [isErrorBankName, setIsErrorBankName] = useState(false);
  const [isErrorLeadGenCode, setIsErrorLeadGenCode] = useState(false);
  const [isErrorLeadWarmerCode, setIsErrorLeadWarmerCode] = useState(false);
  const [isErrorLeadConverterCode, setIsErrorLeadConverterCode] =
    useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [modeOfPaymentList, setModeOfPaymentList] = useState([]);

  useEffect(() => {
    getAllBankList();
    getAllCompaignCode();
    getApplicationDetails();
  }, []);
  useEffect(() => {
    if (initial_payment == "") {
      setIsErrorIP(false);
    }
    if (bankName == "") {
      setIsErrorBankName(false);
    }
    if (branchName == "") {
      setIsErrorBranchName(false);
    }
  }, [initial_payment, bankName, branchName]);

  const setIPValidation = async (IP) => {
    var isIP = await isValidField(IP);
    /* istanbul ignore else */
    if (isIP) {
      setIsErrorIP(false);
    } else {
      setIsErrorIP("error");
    }
  };

  // const setBranchValidation = async (branch) => {
  //   var isBranchName = await isValidNameField(branch);
  //   if (isBranchName) {
  //     setIsErrorBranchName(false);
  //   } else {
  //     setIsErrorBranchName("error");
  //   }
  // };

  // const setBankValidation = async (bank) => {
  //   var isBankName = await isValidNameField(bank);
  //   if (isBankName) {
  //     setIsErrorBankName(false);
  //   } else {
  //     setIsErrorBankName("error");
  //   }
  // };

  const setLeadGenCodeValidation = async (LGC) => {
    var isLGC = await isValidField(LGC);
    if (isLGC) {
      setIsErrorLeadGenCode(false);
    } else {
      setIsErrorLeadGenCode("error");
    }
  };

  const setLeadWarmerCodeValidation = async (LWC) => {
    var isLWC = await isValidField(LWC);
    if (isLWC) {
      setIsErrorLeadWarmerCode(false);
    } else {
      setIsErrorLeadWarmerCode("error");
    }
  };

  const setLeadConverterCodeValidation = async (LCC) => {
    var isLCC = await isValidField(LCC);
    if (isLCC) {
      setIsErrorLeadConverterCode(false);
    } else {
      setIsErrorLeadConverterCode("error");
    }
  };

  const buttonActive = () => {
    if (isInitialFunding) {
      /* istanbul ignore next */
      if (modeOfPayement !== "") {
        if (
          modeOfPayement?.displayText === modeOfPayementCheque &&
          initial_payment !== "" &&
          chequeDate !== "" &&
          details !== "" &&
          bankName !== "" &&
          branchName !== "" &&
          leadGeneratorCode !== "" &&
          leadWarmerCode !== "" &&
          leadConverterCode !== "" &&
          metCustomerAt !== "" &&
          //campaignCode !== "" &&
          isCustomerSigned
        ) {
          return true;
        } else if (
          modeOfPayement?.displayText === modeOfPayementNeft &&
          initial_payment !== "" &&
          chequeDate !== "" &&
          leadGeneratorCode !== "" &&
          leadWarmerCode !== "" &&
          leadConverterCode !== "" &&
          metCustomerAt !== "" &&
          //campaignCode !== "" &&
          isCustomerSigned
        ) {
          return true;
        } else if (
          modeOfPayement?.displayText === modeOfPayementGateway &&
          initial_payment !== "" &&
          chequeDate !== "" &&
          details !== "" &&
          leadGeneratorCode !== "" &&
          leadWarmerCode !== "" &&
          leadConverterCode !== "" &&
          metCustomerAt !== "" &&
          //campaignCode !== "" &&
          isCustomerSigned
        ) {
          return true;
        } else {
          return false;
        }
      }
    } else if (
      leadGeneratorCode !== "" &&
      leadWarmerCode !== "" &&
      leadConverterCode !== "" &&
      metCustomerAt !== ""
      //&& campaignCode !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  function getAllBankList() {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getBankList, header, (response) => {
      if (response && response.data) {
        let data = response.data;
        let customBankDetails = [];
        if (data) {
          for (let i = 0; i < data.length; i++) {
            customBankDetails.push({
              id: data[i].id,
              displayText: data[i].displayText,
              value: data[i].displayText,
            });
          }
        }
        setAllBankList(customBankDetails)
      } else if (response == null || response?.length == 0) {
        setErrorPopup(true);
        setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR);
      }
      else {
        setErrorPopup(true);
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
      }
    });
  }
  const getModeOfPayment = () => {
    let modeOfPaymentArray = [];
    mode_of_IP.map((item) => {
      modeOfPaymentArray.push(item);
    });
    setModeOfPaymentList(modeOfPaymentArray);
  }

  function getAllCompaignCode() {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getCampaignCodeList, header, (response) => {
      if (response.length > 0) {
        let data = response;
        const customeCampaign_code = [];
        for (let i in data) {
          let campaignCode = {
            id: data[i].id,
            displayText: data[i].displayText,
            value: data[i].campaignCode,
          }
          customeCampaign_code.push(campaignCode);
        }
        setCampaignCode(customeCampaign_code[0]);
        setAllCompaignCodes(customeCampaign_code);
      } else if (response == null || response?.length == 0) {
        setErrorPopup(true);
        setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR);
      }
      else {
        setErrorPopup(true);
        setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
      }
    })
  }

  const bankSearchListHandler = (bank) => {
    setBankName(bank.displayText);
    setIsErrorBankName(false);
  };

  useEffect(() => {
    Keyboard.dismiss();
  }, [bankName]);

  function getApplicationDetails() {
    // setShowLoader(true);
    let selectedUserId = props.route.params.option.userId;
    let header = {
      appName: session.accountType,
      mobileNumber: ""
    }

    NetworkManager.IDFCNetworkGet(Endpoints.getPaymentDetails, header, (response) => {
      if (response.status === CommonConstant.SUCCESS) {
        if (response.assistedBankUseSectionResp) {
          // let bankDetailsResponse = decryptDataValue(response.assistedBankUseSectionResp);

          let bankDetailsResponse = response.assistedBankUseSectionResp;
          console.log('test--------------bankDetailsResponse', bankDetailsResponse);
          if (bankDetailsResponse.assistedCreateBankUseSection) {
            let decryptedResponse = bankDetailsResponse.assistedCreateBankUseSection;
            setIsInitialFunding(decryptedResponse.isInitialFunding);
            setInitial_payment(getValueIfNonEmpty(decryptedResponse.amount));
            let selectedModeofPayment = mode_of_IP.find((obj) => obj.displayText === decryptedResponse.modeOfPayment);
            setModeOfPayement(selectedModeofPayment);
            getModeOfPayment();
            setChequeDate(getValueIfNonEmpty(decryptedResponse.chequeTs));
            setDetails(getValueIfNonEmpty(decryptedResponse.paymentdetails));
            setBankName(getValueIfNonEmpty(decryptedResponse.bankName));
            setBranchName(getValueIfNonEmpty(decryptedResponse.branchName));
            setLeadGeneratorCode(getValueIfNonEmpty(decryptedResponse.leadGenCode));
            setLeadWarmerCode(getValueIfNonEmpty(decryptedResponse.leadWarmerCode));
            setLeadConverterCode(getValueIfNonEmpty(decryptedResponse.leadConverterCode));
            // let selectedCampaignCode = campaign_code.find((obj) => obj.displayText === decryptedResponse.compaignCode);
            // setCampaignCode(getValueIfNonEmpty(selectedCampaignCode));
            let selectedMetCustomerAt = met_customer_at.find((obj) => obj.displayText === decryptedResponse.metCustAt);
            setmetCustomerAt(getValueIfNonEmpty(selectedMetCustomerAt));
          }
        }
      } else if (response.status === CommonConstant.ERROR) {
        getModeOfPayment();
        Alert.alert(response.message);
      }
      else {
        getModeOfPayment();
      }
      // setShowLoader(false);
    });
  }
  const getBankUseSectionRequest = () => {
    if (isInitialFunding) {
      return {
        userId: props.route.params.option.userId,
        isInitialFunding: isInitialFunding,
        amount: parseFloat(initial_payment),
        modeOfPayment: modeOfPayement?.displayText,
        chequeDt: convertDateTo_dd_MM_YYYY(chequeDate),
        paymentdetails: details,
        bankName: bankName,
        branchName: branchName,
        leadGenCode: leadGeneratorCode,
        leadWarmerCode: leadWarmerCode,
        leadConverterCode: leadConverterCode,
        compaignCode: campaignCode.value,
        metCustAt: metCustomerAt.displayText,
        isCustSignInPresense: true,
        isBUCompleted: true
      }
    }
    else {
      return {
        userId: props.route.params.option.userId,
        isInitialFunding: isInitialFunding,
        leadGenCode: leadGeneratorCode,
        leadWarmerCode: leadWarmerCode,
        leadConverterCode: leadConverterCode,
        compaignCode: campaignCode.value,
        metCustAt: metCustomerAt.displayText,
        isCustSignInPresense: true,
        isBUCompleted: true
      }
    }
  }
  const saveBankUserSectionForm = () => {
    setIsFormSubmitted(true);
    return;
    setShowLoader(true);
    let finalRequest = getBankUseSectionRequest();
    let header = {
      appName: session.accountType,
      mobileNumber: ""
    }
    saveBankUseSection(finalRequest, header, (response) => {
      setShowLoader(false);
      if (response?.status == CommonConstant.SUCCESS) {
        setIsFormSubmitted(true);
      } else {
        setErrorMsg(response.message);
        setErrorPopup(true);
      }
    })
  }
  return (
    <Container>
      <LoaderComponent
        isVisible={showLoader}
        heading={StringsOfLanguages.LOADER.CID_HEADING}
        subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
      />
      <HeaderContainer>
        <CloseAndSave testID={TestIds.bus_close_and_save} onPress={() => navigation.goBack()}>
          <IconBack source={arrowBack} />
        </CloseAndSave>
        <CongratsTextContainer>
          <Text style={HeaderTextStyle}>{name}</Text>
          <Text style={HeaderSubTextStyle}>{acc_number}</Text>
        </CongratsTextContainer>
      </HeaderContainer>
      <ScrollViewContainer
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      >
        <FullLengthBox>
          <AlignedContainer>
            <NomineeSwitchContainer>
              <CustomText
                fontFamily={FontFamily.Inter_SemiBold}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                color={Colors.BLACK}
              >
                {StringsOfLanguages.BANKUSESECTIONFORM.INTIAL_FUNDING_TXT}
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
                  testID={TestIds.bus_initial_funding}
                  trackColor={{ false: "#da3442", true: "#008568" }}
                  thumbColor={isInitialFunding ? Colors.WHITE : Colors.WHITE}
                  onValueChange={() => setIsInitialFunding(!isInitialFunding)}
                  value={isInitialFunding}
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
        {isInitialFunding ? (
          <AlignedContainer>
            <CustomText
              fontFamily={FontFamily.INTER_BOLD}
              fontSize={Font_Size.SIZE_10}
              lineHeight={Line_Height.HEIGHT_14}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
              style={{ color: Colors.gray }}
              marginBottom={16}
            >
              {StringsOfLanguages.BANKUSESECTIONFORM.IP_DETAILS}
            </CustomText>

            <CardMargin>
              <CustomTextInput
                testID={TestIds.bus_ip_amount}
                value={initial_payment}
                label={StringsOfLanguages.BANKUSESECTIONFORM.IP_AMT}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setInitial_payment(text);
                  setIPValidation(text);
                }}
                labelStyle={
                  isErrorIP == "error" && initial_payment != ""
                    ? { color: Colors.LABEL_ERROR }
                    : { color: Colors.BLACK }
                }
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isErrorIP == "error" ? Colors.ERROR : Colors.GRAY,
                    opacity:
                      isErrorIP == "error" && initial_payment != "" ? 1 : 0.32,
                  },
                }}
                textInputProps={{
                  style: {
                    color:
                      isErrorIP == "error" && initial_payment != ""
                        ? Colors.ERROR
                        : Colors.GRAY,
                  },
                }}
                isError={isErrorIP}
                errorMessage={
                  initial_payment
                    ? StringsOfLanguages.BANKUSESECTIONFORM.BUS_ERROR_INCOME
                    : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_INCOME
                }
                errorColor={Colors.PRIMARY_COLOR}
              />
            </CardMargin>

            <CardMargin>
              <CustomDropDown
                testID={TestIds.bus_mode_of_payment}
                defaultSelectedItem={modeOfPaymentList && modeOfPaymentList.find(obj => obj.displayText === modeOfPayement?.displayText)}
                label={StringsOfLanguages.BANKUSESECTIONFORM.MODE_IP}
                options={modeOfPaymentList}
                onChange={(value) => setModeOfPayement(value)}
                labelStyle={{ color: Colors.NEW_GREY_800.code }}
                iconColor={Colors.MAROON_DARK}
              />
            </CardMargin>
            <CardMargin>
              <CustomDateInput
                dateFormat={dateFormat}
                minDate={minDate}
                maxDate={new Date(new Date().getTime()).setDate(
                  new Date().getDate() - 1
                )}
                disabledDates={[new Date(new Date().getTime()).setDate(new Date().getDate())]}
                label={
                  modeOfPayement && modeOfPayement?.displayText === modeOfPayementCheque
                    ? `${StringsOfLanguages.BANKUSESECTIONFORM.CHEQUE_DATE}`
                    : StringsOfLanguages.BANKUSESECTIONFORM.TRANSACTION_DATE
                }
                selectedDate={chequeDate}
                onSetDatePress={(e) => setChequeDate(e)}
              />
            </CardMargin>

            <CardMargin>
              <CustomTextInput
                testID={TestIds.bus_cheque_details}
                value={details}
                label={
                  (modeOfPayement && modeOfPayement?.displayText === modeOfPayementCheque) ||
                    modeOfPayement?.displayText === modeOfPayementGateway
                    ? `${StringsOfLanguages.BANKUSESECTIONFORM.CHEQUE_DETAILS}`
                    : StringsOfLanguages.BANKUSESECTIONFORM.CHEQUE_DETAILS
                }
                keyboardType="default"
                errorMessage=""
                maxLength={10}
                onChangeText={(text) => {
                  setDetails(text);
                }}
                textInputProps={{
                  style: {
                    color: Colors.BLACK,
                  },
                }}
                inputBorderProps={{
                  style: {
                    borderBottomColor: Colors.GRAY,
                    opacity: 0.32,
                  },
                }}
              />
            </CardMargin>

            <CardMargin>
              {/* <CustomTextInput
                value={bankName}
                label={
                  modeOfPayement && modeOfPayement.displayText === modeOfPayementCheque
                    ? `${StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BANK_NAME}*`
                    : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BANK_NAME
                }
                keyboardType="default"
                maxLength={10}
                style={{
                  // backgroundColor:
                  //   bankName.toUpperCase() === bankNameIdfc
                  //     ? Colors.NEW_GREY_300.code
                  //     : Colors.WHITE,
                }}
                onChangeText={(text) => {
                  setBankName(text);
                  setBankValidation(text);
                }}
                labelStyle={
                  isErrorBankName == "error" && bankName != ""
                    ? { color: Colors.LABEL_ERROR }
                    : { color: Colors.BLACK }
                }
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isErrorBankName == "error" ? Colors.ERROR : Colors.GRAY,
                    opacity:
                      isErrorBankName == "error" && bankName != "" ? 1 : 0.32,
                  },
                }}
                textInputProps={{
                  style: {
                    color:
                      isErrorBankName == "error" && bankName != ""
                        ? Colors.ERROR
                        : Colors.GRAY,
                  },
                }}
                isError={isErrorBankName}
                errorMessage={
                  bankName
                    ? StringsOfLanguages.BANKUSESECTIONFORM.BUS_ERROR_BANK_NAME
                    : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BANK_NAME
                }
                errorColor={Colors.PRIMARY_COLOR}
              /> */}
              <CustomSearchInputDropdown
                testID={TestIds.bus_bank_name}
                value={bankName}
                placeholder={
                  modeOfPayement && modeOfPayement?.displayText === modeOfPayementCheque
                    ? `${StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BANK_NAME}*`
                    : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BANK_NAME
                }
                searchList={allBankList}
                clickHandler={(bank) => {
                  bankSearchListHandler(bank);
                }}
                onCrossPress={() => {
                  setBankName("");
                }}
                onChangeText={
                  () => {
                    setIsErrorBankName("error")
                  }
                }
              />

            </CardMargin>

            <CardMargin>
              <CustomTextInput
                testID={TestIds.bus_branch_name}
                value={branchName}
                label={
                  modeOfPayement && modeOfPayement?.displayText === modeOfPayementCheque
                    ? `${StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BRANCH_NAME}*`
                    : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_BRANCH_NAME
                }
                keyboardType="default"
                maxLength={10}
                onChangeText={(text) => {
                  setBranchName(text);
                }}
                labelStyle={
                  isErrorBranchName == "error" && branchName != ""
                    ? { color: Colors.LABEL_ERROR }
                    : { color: Colors.BLACK }
                }
                inputBorderProps={{
                  style: {
                    borderBottomColor:
                      isErrorBranchName == "error" ? Colors.ERROR : Colors.GRAY,
                    opacity:
                      isErrorBranchName == "error" && branchName != ""
                        ? 1
                        : 0.32,
                  },
                }}
                textInputProps={{
                  style: {
                    color:
                      isErrorBranchName == "error" && branchName != ""
                        ? Colors.ERROR
                        : Colors.GRAY,
                  },
                }}
                isError={isErrorBranchName}
                errorMessage={
                  branchName
                    ? StringsOfLanguages.BANKUSESECTIONFORM
                      .BUS_ERROR_BRANCH_NAME
                    : StringsOfLanguages.BANKUSESECTIONFORM
                      .BUS_FIELD_BRANCH_NAME
                }
                errorColor={Colors.PRIMARY_COLOR}
              />
            </CardMargin>
          </AlignedContainer>
        ) : null}

        {/* Additional Details */}

        <AlignedContainer>
          <CustomText
            fontFamily={FontFamily.INTER_BOLD}
            fontSize={Font_Size.SIZE_10}
            lineHeight={Line_Height.HEIGHT_14}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            style={{ color: Colors.gray }}
            marginBottom={16}
          >
            {StringsOfLanguages.BANKUSESECTIONFORM.ADDITIONAL_DETAILS}
          </CustomText>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.bus_lead_code}
              onBlur={() => setLeadConverterCode(leadGeneratorCode)}
              value={leadGeneratorCode}
              label={StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LGC}
              keyboardType="numeric"
              //maxLength={6}
              onChangeText={(text) => {
                setLeadGeneratorCode(text);
                setLeadGenCodeValidation(text);
              }}
              labelStyle={
                isErrorLeadGenCode == "error" && leadGeneratorCode != ""
                  ? { color: Colors.LABEL_ERROR }
                  : { color: Colors.BLACK }
              }
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    isErrorLeadGenCode == "error" ? Colors.ERROR : Colors.GRAY,
                  opacity:
                    isErrorLeadGenCode == "error" && leadGeneratorCode != ""
                      ? 1
                      : 0.32,
                },
              }}
              textInputProps={{
                style: {
                  color:
                    isErrorLeadGenCode == "error" && leadGeneratorCode != ""
                      ? Colors.ERROR
                      : Colors.GRAY,
                },
                maxLength: 6,
              }}
              isError={isErrorLeadGenCode}
              errorMessage={
                leadGeneratorCode
                  ? StringsOfLanguages.BANKUSESECTIONFORM.BUS_ERROR_LGC
                  : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LGC
              }
              errorColor={Colors.PRIMARY_COLOR}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.bus_lead_warmer_code}
              value={leadWarmerCode}
              label={StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LWC}
              keyboardType="numeric"
              // maxLength={10}
              onChangeText={(text) => {
                setLeadWarmerCode(text);
                setLeadWarmerCodeValidation(text);
              }}
              labelStyle={
                isErrorLeadWarmerCode == "error" && leadWarmerCode != ""
                  ? { color: Colors.LABEL_ERROR }
                  : { color: Colors.BLACK }
              }
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    isErrorLeadWarmerCode == "error"
                      ? Colors.ERROR
                      : Colors.GRAY,
                  opacity:
                    isErrorLeadWarmerCode == "error" && leadWarmerCode != ""
                      ? 1
                      : 0.32,
                },
              }}
              textInputProps={{
                style: {
                  color:
                    isErrorLeadWarmerCode == "error" && leadWarmerCode != ""
                      ? Colors.ERROR
                      : Colors.GRAY,
                },
                maxLength: 6,
              }}
              isError={isErrorLeadWarmerCode}
              errorMessage={
                leadWarmerCode
                  ? StringsOfLanguages.BANKUSESECTIONFORM.BUS_ERROR_LWC
                  : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LWC
              }
              errorColor={Colors.PRIMARY_COLOR}
            />
          </CardMargin>

          <CardMargin>
            <CustomTextInput
              testID={TestIds.bus_lead_converter_code}
              disabled={true}
              value={leadConverterCode}
              label={StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LCC}
              keyboardType="numeric"
              onChangeText={(text) => {
                setLeadConverterCode(text);
                setLeadConverterCodeValidation(text);
              }}
              labelStyle={
                isErrorLeadConverterCode == "error" && leadConverterCode != ""
                  ? { color: Colors.LABEL_ERROR }
                  : { color: Colors.BLACK }
              }
              inputBorderProps={{
                style: {
                  borderBottomColor:
                    isErrorLeadConverterCode == "error"
                      ? Colors.ERROR
                      : Colors.GRAY,
                  opacity:
                    isErrorLeadConverterCode == "error" &&
                      leadConverterCode != ""
                      ? 1
                      : 0.32,
                },
              }}
              textInputProps={{
                style: {
                  color:
                    isErrorLeadConverterCode == "error" &&
                      leadConverterCode != ""
                      ? Colors.ERROR
                      : Colors.GRAY,
                },
                maxLength: 6,
              }}
              isError={isErrorLeadConverterCode}
              errorMessage={
                leadConverterCode
                  ? StringsOfLanguages.BANKUSESECTIONFORM.BUS_ERROR_LCC
                  : StringsOfLanguages.BANKUSESECTIONFORM.BUS_FIELD_LCC
              }
              errorColor={Colors.PRIMARY_COLOR}
            />
          </CardMargin>

          <CardMargin>
            <CustomDropDown
              testID={TestIds.bus_campaign_code}
              defaultSelectedItem={allCompaignCode && allCompaignCode.find(obj => obj.displayText === campaignCode.displayText)}
              label={StringsOfLanguages.BANKUSESECTIONFORM.CAMPAIGN_CODE}
              options={allCompaignCode}
              onChange={(value) =>
                setCampaignCode(value)}
              labelStyle={{ color: Colors.NEW_GREY_800.code }}
              iconColor={Colors.MAROON_DARK}
            />
          </CardMargin>
        </AlignedContainer>

        {/* Banker Certification */}

        <AlignedContainer>
          <CustomText
            fontFamily={FontFamily.INTER_BOLD}
            fontSize={Font_Size.SIZE_10}
            lineHeight={Line_Height.HEIGHT_14}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            style={{ color: Colors.gray }}
            marginBottom={16}
          >
            {StringsOfLanguages.BANKUSESECTIONFORM.BANKER_CERTIFICATION}
          </CustomText>

          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_14}
            lineHeight={Line_Height.HEIGHT_20}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            style={{ color: Colors.GRAY }}
            marginBottom={16}
          >
            {StringsOfLanguages.BANKUSESECTIONFORM.CUSTOMER_MEET_TXT}
          </CustomText>

          <CardMargin>
            <CustomDropDown
              testID={TestIds.bus_met_customer_at}
              defaultSelectedItem={metCustomerAt}
              label={StringsOfLanguages.BANKUSESECTIONFORM.MET_AT}
              options={met_customer_at}
              onChange={(value) => setmetCustomerAt(value)}
              labelStyle={{ color: Colors.NEW_GREY_800.code }}
              iconColor={Colors.MAROON_DARK}
            />
          </CardMargin>
        </AlignedContainer>
        <FullLengthBox>
          <AlignedContainer>
            <CustomerSignatureView>
              <CheckBox
                testID={TestIds.bus_is_customer_sign}
                style={{ width: 24, height: 24, marginRight: 10 }}
                value={isCustomerSigned}
                tintColors={{ true: '#50bfbf' }}
                onValueChange={() => {
                  toggleCustmerSign(!isCustomerSigned)
                }}
              />
              <CustomText
                fontFamily={FontFamily.Inter_REGULAR}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_20}
                letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                style={{ color: Colors.GRAY }}
              >
                {StringsOfLanguages.BANKUSESECTIONFORM.CUSTOMER_SIGNATURE}
              </CustomText>
            </CustomerSignatureView>

            <View></View>
          </AlignedContainer>
        </FullLengthBox>

        <UpdateButtonView>
          <CustomButton
            testID={TestIds.bus_save_button}
            disabled={false}
            buttonType="primary"
            width="50%"
            title={StringsOfLanguages.BANKUSESECTIONFORM.UPDATE}
            buttonPress={() => saveBankUserSectionForm()}
            style={{ height: 56, width: 260 }}
          />
        </UpdateButtonView>
        {
          <ErrorPopup
            testID={TestIds.bus_error_popup}
            popUpshow={errorPopup}
            message={errorMsg}
            callBack={() => {
              setErrorPopup(false);
            }}
          ></ErrorPopup>
        }
        <Popup
          testID_submit={TestIds.bus_success_message_popup}
          animationIn="bounceIn"
          popupIcon={info}
          isVisible={isFormSubmitted}
          Heading={StringsOfLanguages.BANKUSESECTIONFORM.UPDATE_SUCCESS_MESSAGE}
          ButtonText="Okay"
          buttonPress={() => {
            setIsFormSubmitted(false);
            navigation.goBack();
          }}
        />
      </ScrollViewContainer>
    </Container>
  );
};

export default BankUseSectionForm;
