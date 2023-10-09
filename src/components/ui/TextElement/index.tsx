import React from 'react';
import {Text} from 'react-native';
import {FontSize, FontStyle, FontWeight, IPaddingStyles} from '../../../types';
import {styles} from './styles';

export interface ITextElementProps extends IPaddingStyles {
  children: React.ReactNode;
  fontSize?: FontSize;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  fontColor?: string;
}

const TextElement: React.FC<ITextElementProps> = ({
  children,
  fontSize = FontSize.Normal,
  fontStyle = FontStyle.Normal,
  fontWeight = FontWeight.Medium,
  fontColor,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => {
  return (
    <Text
      style={
        styles(
          fontSize,
          fontStyle,
          fontWeight,
          fontColor,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
        ).root
      }>
      {children}
    </Text>
  );
};

export default TextElement;
