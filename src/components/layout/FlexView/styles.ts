import {StyleSheet} from 'react-native';
import {
  renderAlignItems,
  renderDimension,
  renderFlexDirection,
  renderFlexWrap,
  renderJusfiyContent,
  renderLayoutPosition,
  renderSpacingSize,
} from '../../../utils';
import {
  Align,
  FlexDirection,
  FlexWrap,
  Justify,
  LayoutPosition,
  ScreenScale,
  Size,
} from '../../../types';

export const styles = (
  direction: FlexDirection,
  align: Align,
  justify: Justify,
  paddingHorizontal: Size,
  paddingVertical?: Size,
  flex?: number,
  gap?: Size,
  wrap?: FlexWrap,
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
  marginBottom?: Size,
  marginLeft?: Size,
  marginRight?: Size,
  marginTop?: Size,
) =>
  StyleSheet.create({
    root: {
      flex: flex ?? 0,
      zIndex: 1,
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: renderFlexDirection(direction),
      alignItems: renderAlignItems(align),
      justifyContent: renderJusfiyContent(justify),
      gap: gap && renderSpacingSize(gap),
      wrap: wrap && renderFlexWrap(wrap),
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
      paddingHorizontal: renderSpacingSize(paddingHorizontal),
      paddingVertical: paddingVertical && renderSpacingSize(paddingVertical),
      paddingTop: paddingTop && renderSpacingSize(paddingTop),
      paddingBottom: paddingBottom && renderSpacingSize(paddingBottom),
      paddingLeft: paddingLeft && renderSpacingSize(paddingLeft),
      paddingRight: paddingRight && renderSpacingSize(paddingRight),
      marginTop: marginTop && renderSpacingSize(marginTop),
      marginBottom: marginBottom && renderSpacingSize(marginBottom),
      marginLeft: marginLeft && renderSpacingSize(marginLeft),
      marginRight: marginRight && renderSpacingSize(marginRight),
    },
  });
