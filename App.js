/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import AppProvider from './src/App/AppContext';
import AppContainer from './src/App/AppContainer';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppProvider>
        <AppContainer />
      </AppProvider>
    </View>
  );
};

export default App;
