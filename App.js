/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import AppContainer from './src/App/AppContainer';
import AppProvider from './src/App/AppContext';

// import AppProvider from './src/App/AppContext';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </View>
  );
};

export default App;
