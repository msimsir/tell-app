import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
};

export type StackNavigation = NativeStackNavigationProp<HomeStackParamList>;

export type HomeStackRouteProps<RouteName extends keyof HomeStackParamList> =
  RouteProp<HomeStackParamList, RouteName>;

export const NativeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen name="Home" component={HomeScreen} />
    </NativeStack.Navigator>
  );
};

export default HomeStack;
