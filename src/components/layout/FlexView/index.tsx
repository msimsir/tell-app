import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  Align,
  FlexWrap,
  FlexDirection,
  Justify,
  LayoutPosition,
  ScreenScale,
  Size,
  IPaddingStyles,
  IDimensionStyles,
  IMarginStyles,
} from '../../../types';
import {styles} from './styles';

export interface IFlexViewProps
  extends IPaddingStyles,
    IMarginStyles,
    IDimensionStyles {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  direction?: FlexDirection;
  align?: Align;
  justify?: Justify;
  paddingHorizontal?: Size;
  paddingVertical?: Size;
  flex?: number;
  gap?: Size;
  wrap?: FlexWrap;
  layoutPosition?: LayoutPosition;
  backgroundColor?: string;
}

const FlexView: React.FC<IFlexViewProps> = ({
  style,
  children,
  direction = FlexDirection.Column,
  align = Align.Stretch,
  justify = Justify.FlexStart,
  paddingHorizontal = Size.Medium,
  paddingVertical,
  flex,
  gap,
  wrap,
  layoutPosition,
  backgroundColor,
  height,
  width,
  absoluteHeight,
  absoluteWidth,
  percentHeight,
  percentWidth,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  return (
    <View
      style={
        styles(
          direction,
          align,
          justify,
          paddingHorizontal,
          paddingVertical,
          flex,
          gap,
          wrap,
          layoutPosition,
          backgroundColor,
          height,
          width,
          absoluteHeight,
          absoluteWidth,
          percentHeight,
          percentWidth,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
        ).root
      }>
      {children}
    </View>
  );
};

export default FlexView;
