import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextElement from '../TextElement';

interface IInputProps {
  label?: string;
}
const Input: React.FC<IInputProps> = ({label}) => {
  return (
    <View>
      {label ? <TextElement>{label}</TextElement> : undefined}
      <TextInput style={styles().root} />
    </View>
  );
};

export default Input;
