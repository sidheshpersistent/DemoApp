import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, ImageBackground, Text, Linking} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import {OutlineButton} from '../../Components/index';
import { LocalDB } from '../../Utils/Constants';
import {NavigationUrl, Colors, AsyncStorageUtils} from '../../Utils/index';
import useSession from '../../App/useSession';
// import {useOrientation} from '../../Utils/useOrientation';
import styles from './style';


const LoginScreen = ()=> {
  const navigation = useNavigation();
  const { session, setSession } = useSession();
  const isPortraitOrientation = true; //useOrientation();
  // useEffect(() => {
  //   NetworkManager.get(Endpoints.accessTokenValidation, response => {
  //     if (response?.status === 200) {
  //       navigation.navigate(NavigationUrl.drawerId, { screen: NavigationUrl.dashboardId});
  //     }
  //   });
  // }, []);

  const callStaffLogin = async () => {
    // navigation.navigate(NavigationUrl.EAuthId);
    setLogInDetails();
  };

  
  const setLogInDetails = async ()  => {
    let agentData = {
      "email": "sagar.bhat_tho@idfcbankqatest.com",
      "firstName": "Sagar",
      "groups": "CN=prime-auth-admin,OU=Groups,OU=IDFCBanktest,DC=IDFCbanktest,DC=com",
      "lastName": "Bhat",
      "loginMode": "PASSWORD",
      "userId": "sagar.bhat_tho@IDFCbankqatest.com",
      "userTypes": ["OPS"]
    }
    let headerData = {'authorization':'Bearer token','agentId':agentData?.email,'appName':'','mobileNumber':''}
    // AsyncStorageUtils.clearAll();
    try {
      await AsyncStorageUtils .storeItemKey(
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

  return (
    <ImageBackground
      source={require('../../Assets/Images/LoginScreen/login_background.png')}
      resizeMode="cover"
      style={styles.containerImage}
    >
      <>
        <View style={styles.container}>
          <Image
            resizeMode={'contain'}
            source={require('../../Assets/Images/LoginScreen/logo.png')}
            style={styles.logoImage}
          />
          <View style={styles.menuHowtoView}>
            <OutlineButton
              testID={'how_to'}
              width={170}
              name={'How to?'}
              style={styles.howtoButton}
              textColor={Colors.WHITE}
              onPress={() =>
                Linking.openURL('https://my.idfcfirstbank.com/login')
              }
            />
            <Image
              resizeMode={'contain'}
              source={require('../../Assets/Images/LoginScreen/menu.png')}
              style={styles.menuImage}
            />
          </View>
        </View>
        <View
          style={
            isPortraitOrientation
              ? styles.innerContainer
              : styles.innerContainer_p
          }
        >
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              source={require('../../Assets/Images/LoginScreen/smiley.png')}
              style={styles.smileyLogo}
            />
            <Text style={styles.letsText}>Lets get started!</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <OutlineButton
              testID={'staff_login'}
              width={350}
              name={'Login with IDFC'}
              onPress={callStaffLogin}
              style={{backgroundColor: Colors.WHITE}}
              textColor={"#9B1E26"}
            />
            <Text style={styles.versionText}>
              Version: {DeviceInfo?.getVersion()}
            </Text>
          </View>
        </View>
      </>
    </ImageBackground>
  );
};

export default LoginScreen;
