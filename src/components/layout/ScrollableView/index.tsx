import {ScrollView} from 'react-native';
import React from 'react';
import {
  IDimensionStyles,
  IMarginStyles,
  IPaddingStyles,
  LayoutPosition,
  Size,
} from '../../../types';
import {styles} from './styles';

interface IScrollViewProps extends IMarginStyles {
  children: React.ReactNode;
  isHorizontal?: boolean;
  layoutPosition?: LayoutPosition;
  backgroundColor?: string;
  isMarginBottom?: boolean;
}

const ScrollableView: React.FC<IScrollViewProps> = ({
  children,
  isHorizontal,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  isMarginBottom,
}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        //rowGap: 16,
        //columnGap: isHorizontal ? 16 : 0,
        //paddingHorizontal: 16,
        padding: 8,
        //paddingVertical: isHorizontal ? 16 : 0,
        //marginBottom: isMarginBottom ? 64 : 0,
      }}
      horizontal={isHorizontal}>
      {children}
    </ScrollView>
  );
};

export default ScrollableView;
