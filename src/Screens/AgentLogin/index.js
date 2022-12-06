import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
//
import {
  LoginContainer,
  LoginTitle,
  LoginBox,
  LoginBoxContainer,
  LoginButtonView,
} from './styled';
import {
  BackgroundImage,
  CustomText,
  CustomButton,
} from '../../Components';
import {
  Colors,
  FontFamily,
  AsyncStorageUtils,
} from '../../Utils';
import RNRestart from 'react-native-restart';
import useSession from '../../App/useSession';
import { TestIds, LocalDB } from '../../Utils/Constants';


import { IconButton } from '@idfc/ccl-mobile';
import { StringsOfLanguages } from '../../Localization';
import LoaderComponent from '../../Components/LoaderComponent';


const LoginScreen = () => {

  useEffect(() => {
    agentInfo();
  }, []);

  async function agentInfo() {
    try {

      await AsyncStorageUtils.getObjectItem(LocalDB.agentInfo)
        .then(res => setUserName(res.agentID))

    } catch {
      console.log('error');
    }
  };

  const { session, setSession } = useSession();


  const [userName, setUserName] = useState('999999');
  const [password,] = useState('password');

  const [language, setLanguage] = useState('en');
  const [showLoader,] = useState(false);


  useEffect(() => {
    _retrieveData()
  }, [])

  const _retrieveData = async () => {
    const value = await AsyncStorageUtils.getItem('language');
    console.log('***** retrive value lang *****', value);
    setLanguage(value)
    StringsOfLanguages.setLanguage(value)
    // forceRender()
  };


  const setLogInDetails = async () => {

    let agentData = {
      "email": "sagar.bhat_tho@idfcbankqatest.com",
      "firstName": "Sagar",
      "groups": "CN=prime-auth-admin,OU=Groups,OU=IDFCBanktest,DC=IDFCbanktest,DC=com",
      "lastName": "Bhat",
      "loginMode": "PASSWORD",
      "userId": "sagar.bhat_tho@IDFCbankqatest.com",
      "userTypes": ["OPS"]
    }
    let headerData = { 'authorization': 'Bearer token', 'agentId': agentData?.email, 'appName': '', 'mobileNumber': '' }
    // AsyncStorageUtils.clearAll();
    try {
      await AsyncStorageUtils.storeItemKey(
        LocalDB.headerInfo,
        JSON.stringify(headerData),
      );
      await AsyncStorageUtils.storeItemKey(
        LocalDB.agentInfo,
        JSON.stringify(agentData),
      );
      setSession({ ...session, loginFlag: true })
    } catch {
      // console.log('error');
    }
  };



  const changeLanguage = async () => {
    if (language === 'hi') {
      setLanguage('en');
      await AsyncStorageUtils.storeItemKey('language', 'en');
      RNRestart.Restart();
    } else if (language === 'en') {
      setLanguage('hi');
      await AsyncStorageUtils.storeItemKey('language', 'hi');
      RNRestart.Restart();
    } else if (language === null) {
      setLanguage('hi');
      await AsyncStorageUtils.storeItemKey('language', 'hi');
      RNRestart.Restart();

    }

  }

  return (
    <BackgroundImage>
      <LoaderComponent
        isVisible={showLoader}
        heading={StringsOfLanguages.LOADER.LOGIN_HEADING}
        subHeading={StringsOfLanguages.LOADER.LOGIN_SUBHEADING}
      />


      <TouchableOpacity
        testID='gear'
        style={{ zIndex: 1 }}
        onPress={changeLanguage}>
        <IconButton
          // testID = {TestIds.db_hamburg_icon}
          iconType={'Settings'}
          style={{ width: 50, position: 'absolute', top: 8, right: 8 }}
          iconColor={'white'}
          transparent
        // iconSize={IconSize.NORMAL}
        />
      </TouchableOpacity>

      <LoginContainer>
        <LoginBoxContainer>
          <LoginTitle testID={TestIds.lg_title}>
            <CustomText
              fontFamily={FontFamily.INTER_BOLD}
              color={Colors.WHITE}
              lineHeight={32}
              letterSpacing={-1}
              fontSize={28}>
              {StringsOfLanguages.LOGIN.LOGIN}
            </CustomText>
            <CustomText
              value={StringsOfLanguages.LOGIN.TO_YOUR_ACCOUNT}
              color={Colors.WHITE}
              lineHeight={32}
              letterSpacing={-1}
              fontSize={28}>
              {StringsOfLanguages.LOGIN.TO_YOUR_ACCOUNT}
            </CustomText>
          </LoginTitle>
        </LoginBoxContainer>

        <LoginBoxContainer>
          <LoginBox>

            <LoginButtonView>
              <CustomButton
                testID={TestIds.lg_login_button}
                disabled={userName == '' || password == '' ? true : false}
                buttonType="primary"
                width="90%"
                title={StringsOfLanguages.LOGIN.LOGIN}
                buttonPress={setLogInDetails}
              />
              {/* <TouchableOpacity testID={'signin'} onPress={loginAPiCall} style={{ backgroundColor: '#9b1e26', height: 56, marginHorizontal: 20,marginBottom:20, borderRadius: 27, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 17, color: 'white' }}>{'Login'}</Text></TouchableOpacity> */}
            </LoginButtonView>
          </LoginBox>
        </LoginBoxContainer>
      </LoginContainer>

    </BackgroundImage>
  );
};

export default LoginScreen;
