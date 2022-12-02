import React, { useEffect, useRef, useState } from "react";
//no-unused-vars
import {
  View,
  Image,
  Text,
  FlatList,
  Switch,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import ProductCard from "../../Components/ProductCard";
import { Account_Type, CPD_CONSTANTS, TestIds, timeoutConst, CommonConstant } from "../../../../Utils/Constants";
import { Card, CustomSearchInputCompany, CustomText, Popup } from "../../../../Components";
import { Checkbox, RadioButton, Select } from "@idfc/ccl-mobile/lib/module/v2";
import { decryptURL } from "../../../../Utils/CryptoHelper";
import {
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  LetterSpacing,
} from "../../../../Utils";
import { benifitData } from "../constants";
import useSession from "../../../../App/useSession";
import { StringsOfLanguages } from "../../../../Localization";
import { debit_linear, info, mail_linear } from "../../../../Assets/Images";
import {
  benefitStyle,
  MarginBox,
  CardMargin,
  AlignedContainer,
  FullLengthBox,
  CardContainer,
  RadioRecommendBox,
  RecommendedBox,
  ProductCardContainer,
  ProductCardInfoBox,
  ProductCardTitle,
  BenefitContainer,
  ReimburseBox,
  CheckbookContainer,
  ListContainerStyle,
  debitImageStyle,
  CheckBookImageStyle,
  debitCheckboxStyle,
  benefitTextStyle,
} from "./styled";
import { Endpoints, NetworkManager } from "../../../../API";
import ErrorPopup from "../../../../Components/ErrorPopup";

const PersonalizedBanking = () => {

  const { session, setSession } = useSession();
  const [popupVisible, setPopupVisible] = useState(false);
  const [isUnkownError, setIsUnkownError] = useState(false);
  let urlEndPoint = "?pageNo=1&pageSize=10";

  const {
    checkbookOpted,
    debitOpted,
    productRadio,
    productSelected,
    branchSelectedValue,
    reimburseAccount,
    SAProductList,
    isBranchSelectedFromList,
    hideSearchResult,
    branchListData
  } = session.customerProfile.bankingPreference;
  const prevSession = session;


  const bankingPreferenceContext =
    prevSession.customerProfile.bankingPreference;

  const totalField = useRef(0);
  const [feature, setFeature] = useState([])
  useEffect(() => {
    if (isBranchSelectedFromList !== "") {
      bankingPreferenceContext.isBranchSelectedFromList = true;
      setSession({ ...session, prevSession });
    }
    getProductList()
    if(!branchSelectedValue){
      branchListApi("mumbai",true)
    }
    
  }, []);
  useEffect(()=>{
    prevSession.progressLoader=prevSession.progressLoader+1
    setSession({...session,prevSession})
  },[])
  
  function getProductList() {
    let header = {
      appName: session.accountType,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(Endpoints.getProduct, header, response => {
      if (response && response.status) {
        if (response.status != 200) {
          isUnkownError(true);
        }
      } else {
        const productData = response;
        const recomendedProdList = productData.assistedProductDetailList;

        if (session.accountType == Account_Type.ASSISTED_CS) {
          const newCSProductData = []
          for (let i in recomendedProdList) {

            let recomendedProd = {
              id: i + 1,
              title: recomendedProdList[i].productName,
              cardName: recomendedProdList[i].cardType,
              image: decryptURL(recomendedProdList[i].imgName),
              productCode: recomendedProdList[i].productCode,
              recommended: i == 0 ? true : false // TODO: recomended flag from server
            }
            newCSProductData.push(recomendedProd)
          }
          bankingPreferenceContext.productSelected = newCSProductData[0];
          bankingPreferenceContext.CSProductList = newCSProductData;
        } else {
          const newSAProductData = []
          for (let i in recomendedProdList) {
            let recomendedProd = {
              id: i + 1,
              displayText: recomendedProdList[i].productName,
              value: recomendedProdList[i].productCode
            }
            newSAProductData.push(recomendedProd)
          }
          bankingPreferenceContext.productSelected = bankingPreferenceContext.productSelected == "" ? newSAProductData && newSAProductData.find(obj => obj.displayText === CommonConstant.SAVING_REGULAR_25K) : bankingPreferenceContext.productSelected
          //bankingPreferenceContext.productSelected = bankingPreferenceContext.productSelected == "" ? newSAProductData[0] : bankingPreferenceContext.productSelected
          bankingPreferenceContext.SAProductList = newSAProductData
        }
        setSession({ ...session, prevSession });
        getBenifitData(productData.productFeature)
      }
    });


  }

  const getBenifitData = (feature) => {
    const newFeature = []
    for (var i in feature) {
      let obj = {
        id: benifitData[i]?.id ? benifitData[i].id : i,
        image: benifitData[i]?.image ? benifitData[i].image : benifitData[0].image,
        title: feature[i]
      }
      newFeature.push(obj)

    }
    setFeature(newFeature)


  }

  const productRadioHandler = (item, index) => {
    bankingPreferenceContext.productRadio = `Radio ${index}`;
    bankingPreferenceContext.productSelected = item;
    setSession({ ...session, prevSession });
  };


  const searchFilterFunction = (text) => {
    bankingPreferenceContext.branchSelectedValue = text;
    setSession({ ...session, prevSession });
    if (text.length == 0) {
      bankingPreferenceContext.branchListData = [];
      setSession({ ...session, prevSession });
    }

    if (text && text.length > 2) {
      branchListApi(text, false)
    } else {
      bankingPreferenceContext.hideSearchResult = false;
      bankingPreferenceContext.branchListData = [];
      setSession({ ...session, prevSession });
    }
  };

  function branchListApi(text, toSelectDefaultBranch) {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(
      `${Endpoints.getBranchList}${text}${urlEndPoint}`, header,
      (response) => {
        if (response && response.status) {
          if (response.status != 200) {
            isUnkownError(true);
          }
        } else {
          let data = response;
          bankingPreferenceContext.branchListData = data;
          if (toSelectDefaultBranch) {
            bankingPreferenceContext.branchSelected = data[0];
            bankingPreferenceContext.branchSelectedValue = data[0].displayText;
            setSession({ ...session, prevSession });
          } else {
            if (data && data.length > 0) {
              bankingPreferenceContext.hideSearchResult = true;
              setSession({ ...session, prevSession });
            } else {
              bankingPreferenceContext.hideSearchResult = false;
              setSession({ ...session, prevSession });
            }
          }

        }
      }
    );
  }

  const setIsCompanySelectedFromList = (val) => {
    bankingPreferenceContext.isBranchSelectedFromList = val;
    setSession({ ...session, prevSession });
  };

  const clickHandler = (branch) => {
    Keyboard.dismiss();
    bankingPreferenceContext.hideSearchResult = false;
    bankingPreferenceContext.branchSelected = branch;
    bankingPreferenceContext.branchSelectedValue = branch.displayText;
    setSession({ ...session, prevSession });
  };

  return (
    <View>
      <AlignedContainer >
        {session.accountType != Account_Type.ASSISTED_CS ? (
          <View>
            <CustomText
              testID={TestIds.ps_recommended_product}
              fontSize={Font_Size.SIZE_10}
              fontFamily={FontFamily.INTER_BOLD}
              style={{ color: Colors.NEW_GREY_100 }}
              lineHeight={Line_Height.HEIGHT_14}
              marginBottom={16}
              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
            >
              {StringsOfLanguages.PERSONALIZED_SECTION.RECOMMENDED_PRODUCT}
            </CustomText>
            <ProductCard

            />
          </View>
        ) : null}

        <CustomText
          testID={TestIds.ps_select_a_product}
          fontSize={Font_Size.SIZE_10}
          fontFamily={FontFamily.INTER_BOLD}
          style={{ color: Colors.NEW_GREY_100 }}
          lineHeight={Line_Height.HEIGHT_14}
          marginBottom={16}
          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
        >
          {StringsOfLanguages.PERSONALIZED_SECTION.PLEASE_SELECT}
        </CustomText>
        <CardMargin>
          {session.accountType != Account_Type.ASSISTED_CS ? (
            <Card style={{ elevation: 4 }}>
              {/* To use dropdown input below */}
              <Select
                style={{ height: 70 }}
                testID={TestIds.ps_select_product_dropdown}
                defaultSelectedItem={SAProductList && SAProductList.find(obj => obj.displayText === productSelected.displayText)}
                label={StringsOfLanguages.BANKING_PREFERNCE.SELECT_PRODUCT}
                options={SAProductList}
                onChange={(value) => {
                  bankingPreferenceContext.productSelected = value;
                  setSession({ ...session, prevSession });
                }}
                labelStyle={{ color: Colors.NEW_GREY_800.text }}
                iconColor={Colors.MAROON_DARK}
              />
            </Card>
          ) : (
            <View >
              <FlatList
                testID={TestIds.bp_test}
                data={bankingPreferenceContext.CSProductList}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {

                  return (
                    <CardContainer
                      onPress={() => productRadioHandler(item, index)}
                      style={{
                        backgroundColor: item.id == 1 ? Colors.TINT_VIOLET.code : Colors.TINT_PURPLE.code,
                      }}
                    >
                      <RadioRecommendBox>
                        <RadioButton
                          testID={TestIds.ps_product_radio}
                          style={{ paddingVertical: 0 }}
                          value={`Radio ${index}`}
                          name="radio-normal"
                          id="1"
                          checked={productRadio == `Radio ${index}`}
                          onChange={() => productRadioHandler(item, index)}
                        />
                        {item.recommended ? (
                          <RecommendedBox>
                            <CustomText
                              testID={TestIds.ps_recommended}
                              fontFamily={FontFamily.INTER_BOLD}
                              fontSize={Font_Size.SIZE_10}
                              letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
                            >
                              {
                                StringsOfLanguages.PERSONALIZED_SECTION
                                  .RECOMMENDED
                              }
                            </CustomText>
                          </RecommendedBox>
                        ) : null}
                      </RadioRecommendBox>
                      <ProductCardContainer>
                        <Image
                          testID={TestIds.ps_card_img_cs}
                          source={{ uri: item.image }}
                          style={{ width: 65, height: 55 }}
                        />
                        <ProductCardInfoBox>
                          <ProductCardTitle>
                            <CustomText
                              testID={TestIds.ps_card_title_cs}
                              fontSize={Font_Size.SIZE_16}
                              lineHeight={Line_Height.HEIGHT_24}
                              fontFamily={FontFamily.INTER_BOLD}
                            >
                              {item.title}
                            </CustomText>
                          </ProductCardTitle>
                          <CustomText
                            fontSize={Font_Size.SIZE_12}
                            lineHeight={Line_Height.HEIGHT_18}
                            fontFamily={FontFamily.Inter_REGULAR}
                            marginTop={5}
                          >
                            {
                              StringsOfLanguages.PERSONALIZED_SECTION
                                .SALARY_ACCOUNT
                            }
                          </CustomText>
                          <CustomText
                            testID={TestIds.ps_card_name_cs}
                            fontSize={Font_Size.SIZE_12}
                            lineHeight={Line_Height.HEIGHT_18}
                            fontFamily={FontFamily.INTER_BOLD}
                          >
                            {item.cardName}
                          </CustomText>
                        </ProductCardInfoBox>
                      </ProductCardContainer>
                    </CardContainer>
                  );
                }}
              />
            </View>
          )}
        </CardMargin>
        {session.accountType != Account_Type.ASSISTED_CS ? (
          <CardMargin>
            <Card style={{ elevation: 4, padding: 20, marginTop: 10 }}>
              <FlatList
                data={feature}
                keyExtractor={(item) => item.id}
                contentContainerStyle={ListContainerStyle}
                renderItem={({ item, index }) => {


                  return (
                    index < 3 ?

                      <BenefitContainer>
                        <Image source={item.image} style={benefitStyle} />
                        <CustomText
                          testID={TestIds.ps_benifit_title}
                          fontSize={Font_Size.SIZE_12}
                          lineHeight={Line_Height.HEIGHT_18}
                          FontFamily={FontFamily.Inter_REGULAR}
                          align={"center"}
                        >
                          {item.title}
                        </CustomText>
                      </BenefitContainer> : null
                  );
                }}
              />
              <TouchableOpacity style={{ alignSelf: "center" }}
                onPress={() => setPopupVisible(true)}
              >

                <Text
                  testID={TestIds.ps_view_all_benifit}
                  style={{ color: Colors.NEW_RED_200.code }}
                >
                  {StringsOfLanguages.PERSONALIZED_SECTION.VIEW_ALL}
                </Text>
              </TouchableOpacity>
            </Card>
          </CardMargin>
        ) : null}
      </AlignedContainer>
      {session.accountType == Account_Type.ASSISTED_CS ? (
        <FullLengthBox>
          <AlignedContainer>
            <MarginBox>
              <ReimburseBox
              >
                <View style={{ width: 220 }}>
                  <CustomText
                    testID={TestIds.ps_employee_reimbursement}
                    fontSize={Font_Size.SIZE_14}
                    fontFamily={FontFamily.Inter_SemiBold}
                    lineHeight={Line_Height.HEIGHT_20}
                  >
                    {StringsOfLanguages.PERSONALIZED_SECTION.OPT_FOR}
                  </CustomText>
                </View>
                <ReimburseBox
                >
                  <CustomText testID={TestIds.ps_employee_reimbursement_no}>
                    {StringsOfLanguages.PERSONALIZED_SECTION.NO}
                  </CustomText>

                  <Switch
                    testID={TestIds.ps_employee_reimbursement_switch}
                    trackColor={{ false: Colors.NEW_RED_200.code, true: Colors.NEW_GREEN_100.code }}
                    thumbColor={Colors.WHITE}
                    onValueChange={() => {
                      bankingPreferenceContext.reimburseAccount =
                        !bankingPreferenceContext.reimburseAccount;
                      setSession({ ...session, prevSession });

                    }}
                    value={reimburseAccount}
                  />
                  <CustomText testID={TestIds.ps_employee_reimbursement_yes}>
                    {StringsOfLanguages.PERSONALIZED_SECTION.YES}
                  </CustomText>
                </ReimburseBox>
              </ReimburseBox>
            </MarginBox>
          </AlignedContainer>
        </FullLengthBox>
      ) : null}

      <AlignedContainer>
        <View style={{ flex: 1, marginTop: 15 }}>
          <CustomText
            testID={TestIds.ps_Preferred_branch}
            fontSize={Font_Size.SIZE_10}
            fontFamily={FontFamily.INTER_BOLD}
            style={{ color: Colors.NEW_GREY_100 }}
            lineHeight={Line_Height.HEIGHT_14}
            marginBottom={16}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
          >
            {StringsOfLanguages.BANKING_PREFERNCE.PREFERRED_BANK_BRANCH}
          </CustomText>
        </View>

        <CardMargin style={{ zIndex: 1 }}>
          <CustomSearchInputCompany
            value={branchSelectedValue}
            testID={TestIds.ps_Preferred_branch_dropdown}
            placeholder={StringsOfLanguages.BANKING_PREFERNCE.PREFERED_BRANCH}
            getSerachResult={searchFilterFunction}
            searchList={branchListData}
            hideSearchResult={hideSearchResult}
            sethideSearchResult={(val) => {
              bankingPreferenceContext.hideSearchResult = val;
              bankingPreferenceContext.branchSelectedValue = "";
              setSession({ ...session, prevSession });
            }}
            isCompanySelectedFromList={isBranchSelectedFromList}
            setIsCompanySelectedFromList={(val) => setIsCompanySelectedFromList(val)}
            clickHandler={(company) => clickHandler(company)}
          />
        </CardMargin>

        <View style={{ flex: 1, zIndex: 0 }}>
          <CustomText
            testID={TestIds.ps_services_required}
            fontSize={Font_Size.SIZE_10}
            fontFamily={FontFamily.INTER_BOLD}
            style={{ color: Colors.NEW_GREY_100 }}
            lineHeight={Line_Height.HEIGHT_14}
            marginBottom={16}
            letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
          >
            {CPD_CONSTANTS.CPD_SERVICES_REQUIRED}
          </CustomText>
        </View>
        <CardMargin style={{ zIndex: 0 }}>
          <View style={{ flexDirection: "row" }}>
            <Card
              style={{
                flex: 0.5,
                padding: 8,
                margin: 8,
                borderWidth: 1,
                borderColor: checkbookOpted ? Colors.ERROR : Colors.gray,
              }}
            >
              <CheckbookContainer
              >
                <Image source={mail_linear} style={CheckBookImageStyle} />

                <Checkbox
                  testID={TestIds.ps_checkbook_checkbox}
                  style={{ width: 24, height: 24, marginRight: 10 }}
                  inputStyle={{
                    backgroundColor: checkbookOpted ? Colors.green : Colors.WHITE,
                    borderColor: Colors.green,
                  }}
                  checked={checkbookOpted}
                  onChange={() => {
                    bankingPreferenceContext.checkbookOpted =
                      !bankingPreferenceContext.checkbookOpted;
                    setSession({ ...session, prevSession });
                  }}
                />
              </CheckbookContainer>
              <CustomText
                testID={TestIds.ps_checkbook}
                fontSize={Font_Size.SIZE_12}
                fontFamily={FontFamily.Inter_SemiBold}
                style={{ padding: 10 }}
              >
                {StringsOfLanguages.BANKING_PREFERNCE.Checkbook}
              </CustomText>
            </Card>
            <Card
              style={{
                flex: 0.5,
                padding: 8,
                margin: 8,
                borderWidth: 1,
                borderColor: debitOpted ? Colors.ERROR : Colors.gray,
              }}
            >
              <CheckbookContainer
              >
                <Image
                  source={debit_linear}
                  style={debitImageStyle}
                />

                <Checkbox
                  testID={TestIds.ps_debitcard_checkbox}
                  style={debitCheckboxStyle}
                  inputStyle={{
                    backgroundColor: debitOpted ? Colors.green : Colors.WHITE,
                    borderColor: Colors.green,
                  }}
                  checked={debitOpted}
                  onChange={() => {
                    bankingPreferenceContext.debitOpted =
                      !bankingPreferenceContext.debitOpted;
                    setSession({ ...session, prevSession });

                  }}
                />
              </CheckbookContainer>
              <CustomText
                testID={TestIds.ps_debitcard}
                fontSize={Font_Size.SIZE_12}
                fontFamily={FontFamily.Inter_SemiBold}
                style={{ padding: 10 }}
              >
                {StringsOfLanguages.BANKING_PREFERNCE.Debit_Card}
              </CustomText>
            </Card>
          </View>
        </CardMargin>
      </AlignedContainer>
      {
        <Popup

          animationIn={StringsOfLanguages.BANKING_PREFERNCE.BOUNCE_IN}
          popupIcon={info}
          isVisible={popupVisible}
          Heading={StringsOfLanguages.BANKING_PREFERNCE.All_Benefits}
          ButtonText={StringsOfLanguages.BANKING_PREFERNCE.OK}
          buttonPress={() => {
            setPopupVisible(false);

          }}
          component={
            <View>

              {feature?.map((e) => <Text
                style={benefitTextStyle}
                key={e?.title}>•  {e?.title}</Text>)}

            </View>
          }

        />
      }
      {<ErrorPopup
        popUpshow={isUnkownError}
        message={StringsOfLanguages.COMMON.UNKOWN_ERROR}
        callBack={() => setIsUnkownError(!isUnkownError)}
        btnText={StringsOfLanguages.COMMON.SESSION_ALERT_OK}
      ></ErrorPopup>}
    </View>
  );
};

export default PersonalizedBanking;
