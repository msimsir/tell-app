import React from 'react';
import {View, Text} from 'react-native';
import TextElement from '../TextElement';
import {styles} from './styles';

interface ICardProps {
  children?: React.ReactNode;
}
const Card: React.FC<ICardProps> = ({children}) => {
  return (
    <View style={styles.root}>
      {/* <TextElement>Card</TextElement> */}
      {children}
    </View>
  );
};

export default Card;
