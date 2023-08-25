import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';

export type SettingStackParamList = {
  Setting: undefined;
};

export type StackNavigation = NativeStackNavigationProp<SettingStackParamList>;

export type SettingStackRouteProps<
  RouteName extends keyof SettingStackParamList,
> = RouteProp<SettingStackParamList, RouteName>;

export const NativeStack = createNativeStackNavigator<SettingStackParamList>();

const SettingStack = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen name="Setting" component={SettingScreen} />
    </NativeStack.Navigator>
  );
};

export default SettingStack;
