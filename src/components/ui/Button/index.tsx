import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ButtonVariation} from '../../../types';
import {styles} from './styles';

interface IButtonProps {
  title: string;
  variant?: ButtonVariation;
}
const Button: React.FC<IButtonProps> = ({title, variant}) => {
  return (
    <Pressable style={styles(variant).root}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
