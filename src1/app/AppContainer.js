import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../LogIn/LoginScreen';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
