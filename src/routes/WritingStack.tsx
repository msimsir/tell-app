import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import WritingScreen from '../screens/WritingScreen';

export type WritingStackParamList = {
  Writing: undefined;
};

export type StackNavigation = NativeStackNavigationProp<WritingStackParamList>;

export type WritingStackRouteProps<
  RouteName extends keyof WritingStackParamList,
> = RouteProp<WritingStackParamList, RouteName>;

export const NativeStack = createNativeStackNavigator<WritingStackParamList>();

const WritingStack = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen name="Writing" component={WritingScreen} />
    </NativeStack.Navigator>
  );
};

export default WritingStack;
