import {StyleSheet} from 'react-native';
import {
  renderDimension,
  renderLayoutPosition,
  renderSpacingSize,
} from '../../../utils';
import {LayoutPosition, ScreenScale, Size} from '../../../types';

export const styles = (
  paddingHorizontal?: Size,
  paddingVertical?: Size,
  rowGap?: Size,
  columnGap?: Size,
  layoutPosition?: LayoutPosition,
  backgroundColor?: string,
  height?: ScreenScale,
  width?: ScreenScale,
  percentHeight?: number,
  percentWidth?: number,
  absoluteHeight?: number,
  absoluteWidth?: number,
  paddingBottom?: Size,
  paddingLeft?: Size,
  paddingRight?: Size,
  paddingTop?: Size,
) =>
  StyleSheet.create({
    root: {
      paddingHorizontal:
        paddingHorizontal && renderSpacingSize(paddingHorizontal),
      paddingVertical: paddingVertical && renderSpacingSize(paddingVertical),
      rowGap: rowGap && renderSpacingSize(rowGap),
      columnGap: columnGap && renderSpacingSize(columnGap),
      position: layoutPosition
        ? renderLayoutPosition(layoutPosition)
        : 'relative',
      backgroundColor: backgroundColor ?? undefined,
      width: percentWidth
        ? `${percentWidth}%`
        : absoluteWidth
        ? absoluteWidth
        : width
        ? renderDimension(width)
        : '100%',
      height: percentHeight
        ? `${percentHeight}%`
        : absoluteHeight
        ? absoluteHeight
        : height
        ? renderDimension(height)
        : `auto`,
      paddingTop: paddingTop && renderSpacingSize(paddingTop),
      paddingBottom: paddingBottom && renderSpacingSize(paddingBottom),
      paddingLeft: paddingLeft && renderSpacingSize(paddingLeft),
      paddingRight: paddingRight && renderSpacingSize(paddingRight),
    },
  });
