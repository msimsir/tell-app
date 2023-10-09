import {StyleSheet} from 'react-native';
import {renderHexColor} from '../../../utils';
import {colors} from '../../../constants';

export const styles = StyleSheet.create({
  root: {
    shadowColor: renderHexColor('#000', 0.25),
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 3,
    shadowRadius: 6,
    elevation: 8,
    height: 166,
    width: 156,
    borderRadius: 6,
    backgroundColor: colors.gray,
    color: colors.black,
  },
});
