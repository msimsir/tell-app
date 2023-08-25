/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import BottomNavigator from './routes/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

export default App;
