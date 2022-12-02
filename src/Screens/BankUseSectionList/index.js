/* eslint-disable no-unused-vars */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { NetworkManager } from "../../API";

import { arrowBack } from "../../Assets/Images";
import { StringsOfLanguages } from "../../Localization";
import Item from "./Components/BankUseSectionListItem";

import {
  HeaderContainer,
  CloseAndSave,
  IconBack,
  HeaderTextStyle,
  Container,
  CongratsTextContainer,
} from "./styled";
import { Endpoints } from "../../API";
import { Account_Type, CommonConstant, LocalDB, TestIds } from "../../Utils/Constants";
import { decryptDataValue } from "../../Utils/CryptoHelper";
import LoaderComponent from "../../Components/LoaderComponent";
import { AsyncStorageUtils } from "../../Utils";
import ErrorPopup from "../../Components/ErrorPopup";
import { useIsFocused } from "@react-navigation/native";

const BankUseSectionList = (props) => {
  const navigation = useNavigation();
  const [bankUseSectionList, setBankUseSectionList] = useState([]);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const isFocused=useIsFocused();
  useEffect(() => {
    if(isFocused){
    getBankUseSectionList();
  }
  }, [props,isFocused]);

  async function getBankUseSectionList () {

    setShowLoader(true);
    let header ={
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(
      Endpoints.getBankUseSectionList,header,
      (response) => {
        setShowLoader(false);
        if (response?.status == CommonConstant.SUCCESS) {
          let bankUseSectionList = decryptDataValue(
            response?.assistedBankUseSectionResp
          );
          setBankUseSectionList(bankUseSectionList);
          if (bankUseSectionList?.length == 0) {
            setErrorPopup(true);
            setErrorMsg(StringsOfLanguages.COMMON.NO_DATA_ERROR);
          }
        } else {
          setBankUseSectionList([]);
          setErrorPopup(true);
          setErrorMsg(StringsOfLanguages.COMMON.UNKOWN_ERROR);
        }
      }
    );
  };

  const renderItem = ({ item, index }) => (
    <View>
      <Item item={item} index={index} />
    </View>
  );

  return (
    <Container>
      {showLoader ? (
        <LoaderComponent
          isVisible={showLoader}
          heading={StringsOfLanguages.LOADER.CID_HEADING}
          subHeading={StringsOfLanguages.LOADER.CID_SUBHEADING}
        />
      ) : null}
      <HeaderContainer>
        <CloseAndSave TestIds={TestIds.bsl_save_and_close} onPress={() => navigation.goBack()}>
          <IconBack source={arrowBack} />
        </CloseAndSave>
        <CongratsTextContainer>
          <Text style={HeaderTextStyle}>
            {StringsOfLanguages.BANKUSESECTIONLIST.BANKUSESECTIONLISTHEADER}
          </Text>
        </CongratsTextContainer>
      </HeaderContainer>
      <ScrollView>
        <View>
          <FlatList
            data={bankUseSectionList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      {
        <ErrorPopup
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

export default BankUseSectionList;
