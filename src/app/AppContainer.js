import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationUrl from '../Utils/NavigationUrl';
import useSession from './useSession';

// import Splash from '../Screens/Splash/index';
import LoginScreen from '../Screens/AgentLogin_oAuth';

import Dashboard from '../Screens/Dashboard';
import CustomerIdentificationDetails from '../Screens/CustomerIdentificationDetails';
// import CustomerProfile from "../Screens/CustomerProfile";
// import ENachMandate from "../Screens/ENachMandate";
// import PreApprovedOffers from "../Screens/PreApprovedOffers";
// import AccountOnHold from "../Screens/AccountOnHold";
// import SASuccess from "../Screens/SASuccess";

// import KnowMore from "../Screens/KnowMore";

// import HamburgerScreen from "../Screens/HamburgerScreen";
// import BankUseSectionForm from "../Screens/BankUseSectionForm";
// import ResumeApplication from "../Screens/ResumeApplication";
// import EAuth from '../Screens/AgentLogin_oAuth/EAuth';
// import BankUseSectionList from "../Screens/BankUseSectionList";
// import ScanScreen from "../Screens/CustomerProfile/BankingPreferences/Scanner";
// import WebViewComponent from "../Components/WebviewComponent/WebViewComponent";
// import CustomWebPage from "../Components/CustomWebPage";
// import Transactions from "../Screens/Transactions";
// import DeclarationLinking from "../Screens/Transactions/DeclarationLInking";
// import DeclarationSeeding from "../Screens/Transactions/DeclarationSeeding";
// import ApplyNowForm from "../Screens/ApplyNowForm";
// import AadhaarSuccess from "../Screens/Transactions/AadhaarSuccess";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// drawerContent={props => <DrawerContainer {...props} />}

// const DrawerStack = () => (
//   <>
//     <Drawer.Navigator
//       drawerContent={props => <HamburgerScreen {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {width: Dimensions.get('window').width / 1.4},
//       }}>
//       <Drawer.Screen name={NavigationUrl.dashboardId} component={Dashboard} />
//     </Drawer.Navigator>
//   </>
// );
const AppContainer = ({childFunc}) => {
  const {session, setSession} = useSession();

  // useEffect(() => {
  //   childFunc.current = navigateToLogin;
  // }, []);

  // const navigateToLogin = () => {
  //   setSession({...session, loginFlag: true});
  //   setSession({...session, loginFlag: false});
  // };

  return (
    <NavigationContainer>
      {session.loginFlag != true ? (
        <Stack.Navigator initialRouteName={NavigationUrl.loginId}>
          {/* <Stack.Screen
            name={NavigationUrl.Splash}
            component={Splash}
            options={{headerShown: false}}
          /> */}

          <Stack.Screen
            name={NavigationUrl.loginId}
            component={LoginScreen}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen
            name={NavigationUrl.EAuthId}
            component={EAuth}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={NavigationUrl.dashboardId}>
          <Stack.Screen
            name={NavigationUrl.dashboardId}
            component={Dashboard}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name={NavigationUrl.drawerId}
            component={DrawerStack}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.Scanner}
            component={ScanScreen}
            options={{headerShown: false}}
          /> */}

          <Stack.Screen
            name={NavigationUrl.customerId}
            component={CustomerIdentificationDetails}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen
            name={NavigationUrl.CustomerProfileId}
            component={CustomerProfile}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.ENachMandateId}
            component={ENachMandate}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.ResumeApplication}
            component={ResumeApplication}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.PreApprovedOffersId}
            component={PreApprovedOffers}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.AccountOnHoldId}
            component={AccountOnHold}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.SASuccessID}
            component={SASuccess}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.KnowMoreID}
            component={KnowMore}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.CustomWebPage}
            component={CustomWebPage}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.ApplyNowForm}
            component={ApplyNowForm}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.BankUseSectionList}
            component={BankUseSectionList}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.BankUseSectionForm}
            component={BankUseSectionForm}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.WebViewComponent}
            component={WebViewComponent}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.Transactions}
            component={Transactions}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.DeclarationLinking}
            component={DeclarationLinking}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.DeclarationSeeding}
            component={DeclarationSeeding}
            options={{headerShown: false}}
          /> */}

          {/* <Stack.Screen
            name={NavigationUrl.AadhaarSuccess}
            component={AadhaarSuccess}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppContainer;
