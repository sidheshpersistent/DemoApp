import React,  { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import Modal from "react-native-modal";

import {
  CenteredView,
  ModalView,
  SubTextContainer,
  TopIconView,
  AccountDetailsCardContainer,
  AccountDetailsColumn,
  AccountListView,
  ChooseReasonView,
  CancelBtn,
} from "../PopupStyle";
import CustomBlurView from "../CustomBlurView";
import {
  Colors,
  FontFamily,
  FontWeight,
  Font_Size,
  LetterSpacing,
  Line_Height,
} from "../../../Utils";
import CustomText from "../../CustomText/CustomText";
import CustomTextInput from "../../CustomTextInput/CustomTextInput"
import CustomButton from "../../CustomButton/CustomButton";
import { Select, RadioButton } from "@idfc/ccl-mobile/lib/module/v2";
import { TestIds } from "../../../Utils/Constants";
import { getPrivateString } from "../../../Utils/CommonFunction"
import { radioGroupStyle, } from "./styled"
// import AutoCompleteTextInput from '../../components/AutoCompleteTextInput/AutoCompleteTextInput';
import { StringsOfLanguages } from "../../../Localization";
import useSession from "../../../App/useSession";
const PopUpExistingCustomer = (props) => {
  const {
    isVisible,
    Heading,
    subText,
    data,
    ButtonText,
    buttonPress,
    cancelBtnPressed,
    animationIn,
    popupIcon,
    dropdownData,
    responseData,
    testID_submit,
    testID_cancel,
    isETBWithoutSaUser,
    isETBUserCorporateSA,
    isETBUserCorporateCS
  } = props;

  const [reason,setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [isShowOtherReason, setIsShowOtherReason] = useState(false);
  const [isNewCSAccSelected, setIsNewCSAccSelected] = useState(false);
  const [isConvertCSAcc, setIsConvertCSAcc] = useState(false);

  const { session, setSession } = useSession();
  let prevSessionData = session;
 
  const onChangeRadioValue = (val) => {
    if (val == "newAcc") {
      setIsNewCSAccSelected(true);
      setIsConvertCSAcc(false);
    } else {
      setIsConvertCSAcc(true);
      setIsNewCSAccSelected(false);
    }
  };
  
  return (
    <CenteredView>
      <Modal
        animationIn={animationIn}
        isVisible={isVisible}
        customBackdrop={<CustomBlurView />}
      >
        <CenteredView>
          <ModalView>
            <TopIconView>
              <Image
                testID={TestIds.pec_popup_icon}
                source={popupIcon}
                style={{ width: 64, height: 64 }}
              />
            </TopIconView>
            <View style={{ paddingLeft: 24, paddingRight: 24 }}>
              <CustomText
                testID={TestIds.pec_heading}
                fontFamily={FontFamily.INTER_BOLD}
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_26}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                color={Colors.NEW_GREY_800.text}
              >
                {Heading}
              </CustomText>
              <SubTextContainer>
                <CustomText testID={TestIds.pec_sub_text}>{subText +  getPrivateString(responseData.ucic)}</CustomText>
              </SubTextContainer>
              <AccountListView>
                <FlatList
                  testID={TestIds.pec_flatlist}
                  data={data}
                  renderItem={({ item, index }) => (
                    <AccountDetailsCard index={index} key={item.accountType} account={item} getPrivateString ={getPrivateString}/>
                  )}
                />
              </AccountListView>
              <ChooseReasonView>
                <CustomText
                  testID={TestIds.pec_customer_mobile}
                  color={Colors.NEW_WHITE_100}
                >
                   {StringsOfLanguages.CID.CID_REG_MOB_NUM}
                  <CustomText
                    testID={TestIds.pec_customer_mobile_number}
                    lineHeight={Line_Height.HEIGHT_18}
                    fontFamily={FontFamily.INTER_BOLD}
                    color={Colors.NEW_WHITE_100}
                    fontWeight={FontWeight.WEIGHT_700}
                    letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
                  >
                    {responseData 
                    && responseData.existingMobiles 
                    && responseData.existingMobiles.length > 0 ? " +91 "+responseData.existingMobiles[0] : null}
                  </CustomText>
                </CustomText>

                <CustomText
                  testID={TestIds.pec_use_for_account_opening}
                  lineHeight={Line_Height.HEIGHT_18}
                  letterSpacing={LetterSpacing.MINUS_ZERO_POINT_TWO}
                  color={Colors.NEW_WHITE_100}
                >{StringsOfLanguages.CID.CID_ACC_OPENING}</CustomText>
              </ChooseReasonView>
              {!isETBUserCorporateCS && !isETBUserCorporateSA && !isETBWithoutSaUser   ? 
              <CustomText
                testID={TestIds.pec_select_reason}
                color={Colors.NEW_GREY_800.text}
                paddingVertical={20}
                fontSize={Font_Size.SIZE_14}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
              >{StringsOfLanguages.CID.CID_SELECT_REASON}</CustomText>:null}
              {!isETBUserCorporateCS && !isETBUserCorporateSA && !isETBWithoutSaUser ? 
              <View>
                <Select
                  testID={TestIds.pec_select_dropdown}
                  label="Reason*"
                  defaultSelectedItem={dropdownData && dropdownData[0]}
                  options={dropdownData}
                  onChange={value => {
                    setReason(value.displayText);
                    if(value.id=="6"){
                      setIsShowOtherReason(true);
                    }
                    else{
                      setIsShowOtherReason(false);
                      setOtherReason("")
                    }
                  }}
                />
                {/* <AutoCompleteTextInput
                  testID={'12345'}
                  name={`Reason`}
                  invalid={false}
                  maxLength={40}
                  isRightImage={true}
                  rightImage={require('../../assets/icons_24_chevron_down.png')}
                  // errorMessage={errors?.cityBal?.message}
                  // data={businessCities}
                  value={''}
                  onChangeText={text => {
                    //   onChange(text);
                  }}
                  placeholder={`Reason`}
                  // onSelectListItem={item => onSelectCity(item, onChange)}
                /> */}
                {
                  isShowOtherReason && 
                  <View style={{paddingTop:20}}>
                  <CustomTextInput
                  value={otherReason}
                  testID={testID_submit}
                  label={StringsOfLanguages.CID.CID_OTHER_REASON}
                
                  onChangeText={(text) => {
                    setOtherReason(text)
                  }}
           
                ></CustomTextInput>
                </View>
                }
                
               
              </View>:null}

              {
                isETBUserCorporateCS ? 
                <CustomText
                testID={TestIds.pec_select_reason}
                color={Colors.NEW_GREY_800.text}
                paddingVertical={20}
                fontSize={Font_Size.SIZE_20}
                lineHeight={Line_Height.HEIGHT_22}
                letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
                fontFamily={FontFamily.INTER_BOLD}
              >{StringsOfLanguages.CID.CID_EXISTING_CORP_SAL_ACC}
              </CustomText>:null}
              
              {
                isETBUserCorporateSA?
                <View style={radioGroupStyle}>
                   <RadioButton
                  value="No"
                  name="radio-normal"
                  id="1"
                  checked={isNewCSAccSelected}
                  onChange={() => onChangeRadioValue("newAcc")}
                >
                  {StringsOfLanguages.CID.CID_OPEN_NEW_ACC}
                </RadioButton>

                <RadioButton
                  value="Yes"
                  name="radio-normal"
                  id="1"
                  checked={isConvertCSAcc}
                  onChange={() => onChangeRadioValue("updateAcc")}
                >
                   {StringsOfLanguages.CID.CID_UPDATE_ACC}
                </RadioButton>

               
              </View>
               :null
              }
            </View>
            {/** TODO: this button may required to delete after getting ccl library */}
            <CustomButton
              testID={testID_submit}
              style={{
                height: 56,
                marginTop: 20,
                marginBottom: 20,
              }}
              buttonType="primary"
              width="200"
              title={ButtonText}
              disabled={ isETBUserCorporateSA && !isNewCSAccSelected && !isConvertCSAcc ? true : false}
              buttonPress={() =>{
                prevSessionData.reasonForDuplicateAcc = isShowOtherReason ? otherReason: reason;
                setSession({ ...session, prevSessionData });
                buttonPress();
                setIsShowOtherReason(false);
              }}
            />
            <CancelBtn
              testID={testID_cancel}
              onPress={() =>{
                setIsShowOtherReason(false);
                setOtherReason("");
                setReason("");
                setIsNewCSAccSelected(false);
                setIsConvertCSAcc(false);
                cancelBtnPressed();
              } }
            >
              <CustomText
                color={Colors.NEW_MAROON_100}
                variant="B2"
              >{`Cancel`}</CustomText>
            </CancelBtn>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

const AccountDetailsCard = ({index,account,getPrivateString}) => {
  
  return (
    <AccountDetailsCardContainer>
      <AccountDetailsColumn>
        <CustomText
        fontFamily={FontFamily.INTER_BOLD}
          color={Colors.NEW_GREY_600.text}
          fontSize={Font_Size.SIZE_10}
          lineHeight={Line_Height.HEIGHT_14}
          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
        >{`ACCOUNT`}</CustomText>
        <CustomText
          fontFamily={FontFamily.Inter_SemiBold}
          color={Colors.BLACK}
          fontSize={Font_Size.SIZE_14}
          lineHeight={Line_Height.HEIGHT_20}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
        >
          {account.productDesc}
        </CustomText>
      </AccountDetailsColumn>

      <AccountDetailsColumn>
        <CustomText
          fontFamily={FontFamily.INTER_BOLD}
          color={Colors.NEW_GREY_600.text}
          fontSize={Font_Size.SIZE_10}
          lineHeight={Line_Height.HEIGHT_14}
          letterSpacing={LetterSpacing.ZERO_POINT_FIVE}
        >{`ACCOUNT NUMBER ${index+1}`}</CustomText>
        <CustomText
        fontFamily={FontFamily.Inter_SemiBold}
          color={Colors.BLACK}
          fontSize={Font_Size.SIZE_14}
          lineHeight={Line_Height.HEIGHT_20}
          letterSpacing={LetterSpacing.MINUS_ZERO_POINT_FIVE}
        >
          {getPrivateString(account.acNo)}
        </CustomText>
      </AccountDetailsColumn>
    </AccountDetailsCardContainer>
  );
};

export default PopUpExistingCustomer;
