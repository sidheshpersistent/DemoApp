
import 'react-native-gesture-handler';
import React, { useEffect, useState ,useRef} from 'react';

import AppContainer from './src/App/AppContainer';
import AppProvider from './src/App/AppContext';
import { base } from '@idfc/ccl-mobile/lib/module/themes';
import { ThemeProvider } from 'styled-components/native';
import { StringsOfLanguages } from './src/Localization';
import { AsyncStorageUtils, ConsoleLogHelper } from './src/Utils';
import SplashScreen from 'react-native-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';
import UserInactivity from 'react-native-user-inactivity';
import {Endpoints, NetworkManager} from './src/API'
import {LocalDB} from './src/Utils/Constants';
import { Alert } from 'react-native';


const App = () => {
  const [language, setLanguage] = useState('en');
  const [, forceRender] = useState({});
  const childFunc = useRef(null);

  useEffect(() => {
    ConsoleLogHelper.log('--------------splash')
    SplashScreen.hide();
    _retrieveData()
  }, [])

  useEffect(() => {
    set = async () => {
      StringsOfLanguages.setLanguage(language);
    }
    set()
  }, [language])

  const _retrieveData = async () => {
    const value = await AsyncStorageUtils.getItem('language');
    setLanguage(value)
    StringsOfLanguages.setLanguage(value)
    forceRender()
  };

  const [active, setActive] = useState(true);
  const [timer, ] = useState(5000);

  const navigateToLandingPage = () =>{
    AsyncStorageUtils.clearAll();
    childFunc.current();
  }

  const callKeepAliveToken = () =>{
    NetworkManager.IDFCNetworkPost(Endpoints.keepAlive,{},response=>{
        if(response != ""){
          Alert.alert(
            StringsOfLanguages.COMMON.SESSION_ALERT_TITLE,
            StringsOfLanguages.COMMON.SESSION_ALERT_SUBTITLE,
            [
          
              { text:  StringsOfLanguages.COMMON.OK, onPress:()=>navigateToLandingPage()}
            ],
            { cancelable: false }
            );
        }
    })
  }

  
  const userInteractionCalled = async (isActive) =>{
    if(!isActive){
      // await AsyncStorageUtils.storeItemKey(LocalDB.userInteraction, Math.floor(Date.now()))
      try{
        let headerInfo =  await AsyncStorageUtils.getItem(LocalDB.headerInfo);
        console.log("headerinfo",headerInfo);
        if(headerInfo != null){
          callKeepAliveToken();
        }
        }catch(e){
          console.log("headerinfo:",e)
        }
    }
     setActive(isActive); 
  }
  return (
    <AppProvider>
      <MenuProvider>
        <ThemeProvider theme={base}>
        <UserInactivity
        isActive={active}
        timeForInactivity={timer}
        // onAction={(isActive)=>userInteractionCalled(isActive)}// TODO: for oauth
        onAction={(isActive)=>{ ConsoleLogHelper.log("session called",isActive)}}
        style={{ flex: 1 }}
      >
          <AppContainer childFunc={childFunc}/>
          </UserInactivity>
        </ThemeProvider>
      </MenuProvider>
    </AppProvider>

  );

};

export default App;


