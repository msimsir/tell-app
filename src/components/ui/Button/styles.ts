import {StyleSheet} from 'react-native';
import {ButtonVariation} from '../../../types';

export const styles = (variant?: ButtonVariation) =>
  StyleSheet.create({
    root: {
      width: '100%',
      height: 16,
      padding: 8,
      borderRadius: 6,
    },
  });
