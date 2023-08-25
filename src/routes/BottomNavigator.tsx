import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack, {HomeStackParamList} from './HomeStack';
import PaperStack, {PaperStackParamList} from './PaperStack';
import WritingStack, {WritingStackParamList} from './WritingStack';
import ScoreStack, {ScoreStackParamList} from './ScoreStack';
import SettingStack, {SettingStackParamList} from './SettingStack';
import {colors} from '../constants';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  PaperStack: NavigatorScreenParams<PaperStackParamList>;
  WritingStack: NavigatorScreenParams<WritingStackParamList>;
  ScoreStack: NavigatorScreenParams<ScoreStackParamList>;
  SettingStack: NavigatorScreenParams<SettingStackParamList>;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="PaperStack"
        component={PaperStack}
        options={{
          tabBarLabel: 'Paper',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="clipboard-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="WritingStack"
        component={WritingStack}
        options={{
          tabBarLabel: 'Writing',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pencil-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="ScoreStack"
        component={ScoreStack}
        options={{
          tabBarLabel: 'Scoıre',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="trophy-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
