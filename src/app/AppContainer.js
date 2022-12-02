import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

import useSession from "./useSession";

import LoginScreen from '../Screens/AgentLogin_oAuth';

const Stack = createNativeStackNavigator();

const AppContainer = ({ childFunc }) => {
  const { session, setSession } = useSession();


  // useEffect(() => {
  //   childFunc.current = navigateToLogin;
  // }, []);
  // const navigateToLogin = () => {
  //   setSession({ ...session, loginFlag: true })
  //   setSession({ ...session, loginFlag: false })
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"LoginScreen"}>
        <Stack.Screen
          name={"LoginScreen"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppContainer;
