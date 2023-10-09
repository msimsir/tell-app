import {StyleSheet} from 'react-native';
import {renderHexColor} from '../../../utils';
import {colors} from '../../../constants';

export const styles = () =>
  StyleSheet.create({
    root: {
      shadowColor: renderHexColor('#000', 0.25),
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 3,
      shadowRadius: 6,
      elevation: 8,
      height: 180,
      flexBasis: 100,
      flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      borderRadius: 6,
      backgroundColor: '#ECECEC',
      color: colors.black,
    },
  });
