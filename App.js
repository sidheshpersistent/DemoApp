/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppContainer from './src/app/AppContainer';
import AppProvider from './src/app/AppContext';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <LoginScreen></LoginScreen> */}
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </View>
  );
};

export default App;
