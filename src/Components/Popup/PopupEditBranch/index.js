import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  View
} from 'react-native';
import { TestIds, Font_Size, Line_Height, Account_Type } from '../../../Utils/Constants';
import Popup from '../Popup';
import { BodyContainer } from '../PopupStyle';
import { CustomText } from '../../../Components';
import { Colors } from '../../../Utils';
import { CustomSearchInputCompany } from "../../../Components";
import useSession from "../../../App/useSession";
import { StringsOfLanguages } from '../../../Localization';
import { Endpoints, NetworkManager } from '../../../API';
import { CardMargin } from './styled';

const PopupEditBranch = props => {
  const { session, setSession } = useSession();
  // const [branch, setBranch] = useState(defaultSelectedItem);
  const [hideSearchResult, sethideSearchResult] = useState(false);
  const [prevBranch, setPrevBranch] = useState();
  const {
    branchSelectedInstant,
    branchSelectedValueInstant,
    branchListData,
    isBranchSelectedFromList
  } = session.customerProfile.bankingPreference;
  const prevSession = session;
  const bankingPreferenceContext = prevSession.customerProfile.bankingPreference;
  let urlEndPoint = "?pageNo=1&pageSize=10";
  let initSearch = "mumbai";
  // TODO: initSearch is using now for showing default selected branch to user when this popup is opened.

  const {
    isVisible,
    Heading,
    popupInfo,
    ButtonText,
    buttonPress,
    CancelButtonText,
    cancelButtonPress,
    animationIn,
    popupIcon,
    // defaultSelectedItem,
    testID_submit,
    testID_cancel
  } = props;

  useEffect(() => {
    getBranchList();
  }, []);

  function getBranchList() {
    let header = {
      appName: Account_Type.ASSISTED_SA,
      mobileNumber: ""
    }
    NetworkManager.IDFCNetworkGet(
      `${Endpoints.getBranchList}${initSearch}${urlEndPoint}`, header,
      (response) => {
        let data = response;
        if (data && data.length > 0) {
          bankingPreferenceContext.branchSelectedInstant = data[0];
          bankingPreferenceContext.branchSelectedValueInstant = data[0].displayText;
          setPrevBranch(data[0]);
          setSession({ ...session, prevSession });
          sethideSearchResult(false);
          // setBranch(data[0]);
        }
      }
    );
  }

  const onPressButton = () => {
    let data = {
      branch: branchSelectedInstant,
    };
    buttonPress(data);
    setPrevBranch(branchSelectedInstant);
  };

  const onPressCancel = () => {
    sethideSearchResult(false);
    bankingPreferenceContext.isBranchSelectedFromList = true;
    bankingPreferenceContext.branchSelectedInstant = prevBranch;
    bankingPreferenceContext.branchSelectedValueInstant = prevBranch.displayText;
    setSession({ ...session, prevSession });
    cancelButtonPress();
  }

  const searchFilterFunction = (text) => {
    setSession({ ...session, prevSession });
    if (text.length == 0) {
      bankingPreferenceContext.branchListData = [];
      setSession({ ...session, prevSession });
    }

    if (text && text.length > 2) {
      let header = {
        appName: Account_Type.ASSISTED_SA,
        mobileNumber: ""
      }
      NetworkManager.IDFCNetworkGet(
        `${Endpoints.getBranchList}${text}${urlEndPoint}`, header,
        (response) => {
          if (response === "timeOut") {
            setSession({ ...session, loginFlag: false });
          } else {
            let data = response;
            bankingPreferenceContext.branchListData = data;
            if (data && data.length > 0) {
              bankingPreferenceContext.hideSearchResult = true;
              sethideSearchResult(true);
              setSession({ ...session, prevSession });
            } else {
              bankingPreferenceContext.hideSearchResult = false;
              sethideSearchResult(false);
              setSession({ ...session, prevSession });
            }
          }
        }
      );
    } else {
      bankingPreferenceContext.hideSearchResult = false;
      sethideSearchResult(false);
      bankingPreferenceContext.branchListData = [];
      setSession({ ...session, prevSession });
    }
  };

  const setIsCompanySelectedFromList = (val) => {
    bankingPreferenceContext.isBranchSelectedFromList = val;
    setSession({ ...session, prevSession });
  };

  const clickHandler = (branch) => {
    Keyboard.dismiss();
    bankingPreferenceContext.hideSearchResult = false;
    bankingPreferenceContext.branchSelectedInstant = branch;
    bankingPreferenceContext.branchSelectedValueInstant = branch.displayText;
    setSession({ ...session, prevSession });
    sethideSearchResult(false);
    // setBranch(branch);
  };

  return (
    <Popup
      testID_submit={testID_submit}
      testID_cancel={testID_cancel}
      // style={{ backgroundColor: '#f6f6f6', width: '70%' }}
      animationIn={animationIn}
      popupIcon={popupIcon}
      popupIconStyle={{}}
      isVisible={isVisible}
      Heading={Heading}
      component={
        <BodyContainer>
          <View style={{ marginBottom: 34 }}>
            <CustomText
              testID={TestIds.peb_popup_info}
              fontSize={Font_Size.SIZE_16}


              lineHeight={Line_Height.HEIGHT_24}
              color={Colors.NEW_GREY_800.text}
            >{popupInfo}</CustomText>
          </View>

          <CardMargin style={{ zIndex: 1 }}>
            <CustomSearchInputCompany
              value={branchSelectedValueInstant}
              testID={TestIds.ps_Preferred_branch_dropdown}
              placeholder={StringsOfLanguages.BANKING_PREFERNCE.PREFERED_BRANCH}
              getSerachResult={searchFilterFunction}
              searchList={branchListData}
              hideSearchResult={hideSearchResult}
              sethideSearchResult={(val) => {
                bankingPreferenceContext.hideSearchResult = val;
                setSession({ ...session, prevSession });
              }}
              isCompanySelectedFromList={isBranchSelectedFromList}
              setIsCompanySelectedFromList={(val) => setIsCompanySelectedFromList(val)}
              clickHandler={(company) => clickHandler(company)}
            />
          </CardMargin>

        </BodyContainer>
      }
      disabled={isBranchSelectedFromList ? false : true}
      ButtonText={ButtonText}
      buttonPress={() => onPressButton()}
      CancelButtonText={CancelButtonText}
      cancelButtonPress={() => onPressCancel()}
    />
  );
};

export default PopupEditBranch;

