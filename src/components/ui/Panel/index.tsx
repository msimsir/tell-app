import {View, Text} from 'react-native';
import React from 'react';
import TextElement from '../TextElement';
import {styles} from './styles';

const Panel = () => {
  return (
    <View style={styles().root}>
      <TextElement>Panel</TextElement>
    </View>
  );
};

export default Panel;
