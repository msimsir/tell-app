import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonVariation} from '../../../../types';
import {styles} from './styles';

interface IIconButtonProps {
  icon: React.ReactNode;
  variant?: ButtonVariation;
}
const IconButton: React.FC<IIconButtonProps> = ({icon, variant}) => {
  return (
    <TouchableOpacity style={styles(variant).root}>{icon}</TouchableOpacity>
  );
};

export default IconButton;
