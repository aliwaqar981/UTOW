/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Navigation from './App/Navigation/Navigation';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
