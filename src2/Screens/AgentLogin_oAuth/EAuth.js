import React, {useEffect} from 'react';
import {authorize} from 'react-native-app-auth';
import {Endpoints, NetworkManager} from '../../API/index';
import useSession from '../../App/useSession';
import {CustomActivityIndicator} from '../../Components/index';
import {AsyncStorageUtils} from '../../Utils/index';
import { LocalDB , oAuth } from '../../Utils/Constants';
import { Alert } from 'react-native';
import { StringsOfLanguages } from '../../Localization';

const config = {
  clientId: oAuth.clientId,
  redirectUrl: oAuth.redirectUrl,
  additionalParameters: {},
  scopes: [],
  skipCodeExchange: true,
  usePKCE: true,
  serviceConfiguration: {
    authorizationEndpoint: Endpoints.authorizationEndpoint,
    tokenEndpoint: Endpoints.accessToken,
  },
};

const EAuth = () => {
  const {session, setSession} = useSession();

  const navigateToLandingPage = () =>{
    setSession({ ...session, loginFlag: true })
    setSession({ ...session, loginFlag: false })
  }

  useEffect(async () => {
    try {
      const result = await authorize(config);
      let accessTokenObj = {
        code: result?.authorizationCode,
        redirect_uri: oAuth.redirectUrl,
        client_id: oAuth.clientId,  
        code_verifier: result?.codeVerifier,
      };
      getTheAccessToken(accessTokenObj);
    } catch (e) {
      Alert.alert(
        StringsOfLanguages.COMMON.SOMETHING_WENT_WRONG,
        JSON.stringify(e),
        [
      
          { text:  StringsOfLanguages.COMMON.OK, onPress:()=>navigateToLandingPage()}
        ],
        { cancelable: false }
        );
    }
  }, []);


  const getTheAccessToken = tokenObj => {
    NetworkManager.IDFCNetworkPostWithoutHeader(Endpoints.accessToken, tokenObj, response => {
      try{  
        let currentTime = Math.floor(Date.now());
      let data = {'token':`Bearer ${response?.access_token}`,'expires_in':response?.expires_in,tokenSaveTime:currentTime,'clientId':'ujRnrrhVtBNE2BwWTXNU6qBRkFtUfJ4kKxKRFU+PPOY=',agentId:'1234'}
          AsyncStorageUtils.storeItemKey(
            LocalDB.headerInfo,
            JSON.stringify(data),
          );
        getUserInfo(response);  
      }catch(e){
        Alert.alert(
          StringsOfLanguages.COMMON.SOMETHING_WENT_WRONG,
          JSON.stringify(e),
          [
        
            { text:  StringsOfLanguages.COMMON.OK, onPress:()=>navigateToLandingPage()}
          ],
          { cancelable: false }
          );
      }
    });
  };

  const getUserInfo =()=>{
    NetworkManager.IDFCNetworkPost(Endpoints.userInfo, {}, response => {
      setLogInDetails(response);
    });
  }

  const setLogInDetails = async (userInfo)  => {
    try {
      await AsyncStorageUtils.storeItemKey(
        LocalDB.agentInfo,
        JSON.stringify(userInfo),
      );
      setSession({ ...session, loginFlag: true })
    } catch (e){
      Alert.alert(
        StringsOfLanguages.COMMON.SOMETHING_WENT_WRONG,
        JSON.stringify(e),
        [
          { text:  StringsOfLanguages.COMMON.OK, onPress:()=>navigateToLandingPage()}
        ],
        { cancelable: false }
        );
    }
  };

  return <CustomActivityIndicator indicatorFlag={true} />;
};

export default EAuth;
