import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import PaperScreen from '../screens/PaperScreen';

export type PaperStackParamList = {
  Paper: undefined;
};

export type StackNavigation = NativeStackNavigationProp<PaperStackParamList>;

export type PaperStackRouteProps<RouteName extends keyof PaperStackParamList> =
  RouteProp<PaperStackParamList, RouteName>;

export const NativeStack = createNativeStackNavigator<PaperStackParamList>();

const PaperStack = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen name="Paper" component={PaperScreen} />
    </NativeStack.Navigator>
  );
};

export default PaperStack;
