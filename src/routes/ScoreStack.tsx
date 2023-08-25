import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ScoreScreen from '../screens/ScoreScreen';

export type ScoreStackParamList = {
  Score: undefined;
};

export type StackNavigation = NativeStackNavigationProp<ScoreStackParamList>;

export type ScoreStackRouteProps<RouteName extends keyof ScoreStackParamList> =
  RouteProp<ScoreStackParamList, RouteName>;

export const NativeStack = createNativeStackNavigator<ScoreStackParamList>();

const ScoreStack = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen name="Score" component={ScoreScreen} />
    </NativeStack.Navigator>
  );
};

export default ScoreStack;
