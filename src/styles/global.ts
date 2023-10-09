import {StyleSheet} from 'react-native';
import {fonts} from '../constants';

export const globalStyles = StyleSheet.create({
  body: {
    fontFamily: fonts.default,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
});
