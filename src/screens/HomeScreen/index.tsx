import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '../../constants';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{fontFamily: fonts.default, fontSize: 16}}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
