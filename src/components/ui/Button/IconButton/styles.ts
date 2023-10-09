import {StyleSheet} from 'react-native';
import {ButtonVariation} from '../../../../types';
import {colors} from '../../../../constants';

export const styles = (variant?: ButtonVariation) =>
  StyleSheet.create({
    root: {
      width: 48,
      height: 48,
      padding: 8,
      borderRadius: 6,
      backgroundColor: colors.purple,
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.white,
    },
  });
