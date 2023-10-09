import {StyleSheet} from 'react-native';
import {Size} from '../../../types';
import {renderSpacingSize} from '../../../utils';
import {colors, fonts} from '../../../constants';

export const styles = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      backgroundColor: colors.gray,
      borderRadius: 6,
      width: '100%',
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 4,
      paddingHorizontal: 12,
    },
  });
