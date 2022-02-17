import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../Screens/Dashboard/Dashboard';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}} >
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
