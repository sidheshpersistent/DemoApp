import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../Screens/Dashboard/Dashboard';
import ModelTestScreen from '../Screens/ModalTestScreen.js/ModalTestScreen';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       
       screenOptions={{ headerShown: false}} >
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        <Stack.Screen name={'ModelTestScreen'} component={ModelTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
