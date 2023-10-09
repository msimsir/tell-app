import {StyleSheet} from 'react-native';
import {Size} from '../../../types';
import {renderSpacingSize} from '../../../utils';
import {fonts} from '../../../constants';

export const styles = (
  paddingTop?: Size,
  paddingBottom?: Size,
  paddingLeft?: Size,
  paddingRight?: Size,
) =>
  StyleSheet.create({
    root: {
      fontFamily: fonts.bold,
      paddingTop: paddingTop && renderSpacingSize(paddingTop),
      paddingBottom: paddingBottom && renderSpacingSize(paddingBottom),
      paddingLeft: paddingLeft && renderSpacingSize(paddingLeft),
      paddingRight: paddingRight && renderSpacingSize(paddingRight),
    },
  });
