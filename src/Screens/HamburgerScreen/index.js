import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View, Alert } from "react-native";
import {
  AsyncStorageUtils,
  Colors,
  FontFamily,
  Font_Size,
  Line_Height,
  TestIds,
} from "../../Utils";
import styled from "styled-components/native";
import { edit_peper, fund, iconClose, logout, money, rupee, transfer } from "../../Assets/Images";
import { CustomText } from "../../Components";
import NavigationUrl from "../../Utils/NavigationUrl"
import { StringsOfLanguages } from "../../Localization";
import useSession from '../../App/useSession';
import { Endpoints, NetworkManager } from "../../API";

import { NavigationStrings, HamburgerName } from "../../Utils/Constants"
const HamburgerScreen = (props) => {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };
  const logOut = async () => {
    AsyncStorageUtils.clearAll();
    setSession({ ...session, loginFlag: false })
    return;
    NetworkManager.IDFCNetworkPost(Endpoints.logOut, {}, response => {
      if (response != "") {
        AsyncStorageUtils.clearAll();
        setSession({ ...session, loginFlag: false })
      } else {
        AsyncStorageUtils.clearAll();
        setSession({ ...session, loginFlag: false })
      }

    })


  }
  const navigationToPage = (nav) => {

    switch (nav) {
      case NavigationStrings.SA:
        navigation.navigate(NavigationUrl.customerId, {
          accountType: NavigationStrings.SA,
        });
        closeDrawer();
        break;
      case NavigationStrings.CS:
        navigation.navigate(NavigationUrl.customerId, {
          accountType: NavigationStrings.CS,
        });
        closeDrawer();
        break;
      case NavigationStrings.BUS:
        navigation.navigate(NavigationUrl.BankUseSectionList);
        closeDrawer();
        break;
      case NavigationStrings.RJ:
        navigation.navigate(NavigationUrl.ResumeApplication);
        break;
      case NavigationStrings.TR:
        navigation.navigate(NavigationUrl.Transactions);
        break;
      case NavigationStrings.LOGOUT:
        Alert.alert(
          StringsOfLanguages.COMMON.LOGOUT,
          '',
          [

            { text: StringsOfLanguages.COMMON.YES, onPress: () => { logOut() } }
          ],
          { cancelable: true }
        );
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <TouchableOpacity
        testID={TestIds.hm_close_drawer}
        style={{ marginBottom: 30 }}
        onPress={closeDrawer}
      >
        <Image resizeMode="center" style={{ width: 24, height: 24 }} source={iconClose} />
      </TouchableOpacity>
      <BoxContainer>
        <TouchableOpacity
          testID={TestIds.hm_open_hh_acc}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigationToPage(NavigationStrings.SA)}
        >
          <Image resizeMode="center" style={{ width: 24, height: 24 }} source={fund} />
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            marginLeft={10}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
          >
            {HamburgerName.OPEN_SAVINGS_ACCOUNT}
          </CustomText>
        </TouchableOpacity>
      </BoxContainer>
      <BoxContainer>
        <TouchableOpacity
          testID={TestIds.hm_open_cs_acc}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigationToPage(NavigationStrings.CS)}
        >
          <Image resizeMode="center" style={{ width: 24, height: 24 }} source={money} />
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            marginLeft={10}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
          >
            {HamburgerName.OPEN_CORPORATE_SALARY_ACCOUNT}
          </CustomText>
        </TouchableOpacity>
      </BoxContainer>
      <BoxContainer>
        <TouchableOpacity
          testID={TestIds.hm_bank_use_section}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigationToPage(NavigationStrings.BUS)}
        >
          <Image resizeMode="center" style={{ width: 24, height: 24 }} source={rupee} />
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            marginLeft={10}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
          >
            {HamburgerName.BANK_USE_SECTION}
          </CustomText>
        </TouchableOpacity>
      </BoxContainer>
      <BoxContainer>
        <TouchableOpacity
          testID={TestIds.hm_resume_journey}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigationToPage(NavigationStrings.RJ)}
        >
          <Image resizeMode="center" style={{ width: 24, height: 24 }} source={edit_peper} />
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            marginLeft={10}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
          >
            {HamburgerName.RESUME_APPLICATION}
          </CustomText>
        </TouchableOpacity>
      </BoxContainer>
      {/* <BoxContainer>
        <View

          style={{ flexDirection: "row" }}

        >
          <Image resizeMode="contain" style={{ width: 24, height: 24 }} source={transfer} />
          <View style={{ marginLeft: 10 }}>
            <CustomText
              fontFamily={FontFamily.Inter_REGULAR}
              fontSize={Font_Size.SIZE_20}
              lineHeight={Line_Height.HEIGHT_26}
              color={Colors.BLACK}
            >
              {HamburgerName.TRANSACTIONS}
            </CustomText>
            <TouchableOpacity
              testID={TestIds.hm_transaction}
              onPress={() => navigationToPage(NavigationStrings.TR)}
            >
              <CustomText
                fontFamily={FontFamily.Inter_Light}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_26}
                color={Colors.BLACK}
              >
                • {HamburgerName.AADHAAR_SEEDING}
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              testID={TestIds.hm_aadhar_linking}
              onPress={() => navigationToPage(NavigationStrings.TR)}
            >
              <CustomText
                fontFamily={FontFamily.Inter_Light}
                fontSize={Font_Size.SIZE_16}
                lineHeight={Line_Height.HEIGHT_26}
                color={Colors.BLACK}
              >
                • {HamburgerName.AADHAAR_LINKING}
              </CustomText>
            </TouchableOpacity>


          </View>
        </View>
      </BoxContainer> */}
      <BoxContainer>
        <TouchableOpacity
          testID={TestIds.hm_logout}
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigationToPage(NavigationStrings.LOGOUT)}
        >
          <Image resizeMode="center" style={{ width: 24, height: 24 }} source={logout} />
          <CustomText
            fontFamily={FontFamily.Inter_REGULAR}
            fontSize={Font_Size.SIZE_16}
            marginLeft={10}
            lineHeight={Line_Height.HEIGHT_26}
            color={Colors.BLACK}
          >
            {HamburgerName.LOGOUT}
          </CustomText>
        </TouchableOpacity>
      </BoxContainer>
    </Container>
  );
};

export default HamburgerScreen;

export const Container = styled.View`
  padding: 15px 22px;
  width: 100%;
  align-self: center;
`;
export const BoxContainer = styled.View`
  padding: 26px;
  border-bottom-width: 1;
  border-color: lightgrey;
`;
