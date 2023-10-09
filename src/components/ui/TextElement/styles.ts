import {StyleSheet} from 'react-native';
import {FontSize, FontStyle, FontWeight, Size} from '../../../types';
import {
  renderFontSize,
  renderFontStyle,
  renderFontWeight,
  renderSpacingSize,
} from '../../../utils';
import {fonts} from '../../../constants';

export const styles = (
  fontSize: FontSize,
  fontStyle: FontStyle,
  fontWeight: FontWeight,
  fontColor?: string,
  paddingTop?: Size,
  paddingBottom?: Size,
  paddingLeft?: Size,
  paddingRight?: Size,
) =>
  StyleSheet.create({
    root: {
      fontFamily: fonts.bold,
      fontSize: renderFontSize(fontSize),
      fontStyle: renderFontStyle(fontStyle),
      fontWeight: renderFontWeight(fontWeight),
      paddingTop: paddingTop && renderSpacingSize(paddingTop),
      paddingBottom: paddingBottom && renderSpacingSize(paddingBottom),
      paddingLeft: paddingLeft && renderSpacingSize(paddingLeft),
      paddingRight: paddingRight && renderSpacingSize(paddingRight),
      color: fontColor,
    },
  });
