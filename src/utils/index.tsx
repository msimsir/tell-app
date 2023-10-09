import {
  FontSize,
  FontStyle,
  FontWeight,
  FlexDirection,
  Size,
  Align,
  Justify,
  ScreenScale,
  FlexWrap,
  LayoutPosition,
} from '../types';

export const renderFlexDirection = (direction: FlexDirection) => {
  switch (direction) {
    case FlexDirection.Row:
      return 'row';
    case FlexDirection.Column:
      return 'column';
    case FlexDirection.RowReverse:
      return 'row-reverse';
    case FlexDirection.ColumnReverse:
      return 'column-reverse';
    default:
      return 'row';
  }
};

export const renderAlignItems = (align: Align) => {
  switch (align) {
    case Align.FlexStart:
      return 'flex-start';
    case Align.Center:
      return 'center';
    case Align.FlexEnd:
      return 'flex-end';
    case Align.BaseLine:
      return 'baseline';
    case Align.Stretch:
      return 'stretch';
    default:
      return 'stretch';
  }
};

export const renderJusfiyContent = (justify: Justify) => {
  switch (justify) {
    case Justify.Center:
      return 'center';
    case Justify.SpaceBetween:
      return `space-between`;
    case Justify.SpaceAround:
      return `space-around`;
    case Justify.SpaceEvenly:
      return `space-evenly`;
    case Justify.FlexStart:
      return `flex-start`;
    case Justify.FlexEnd:
      return `flex-end`;
    default:
      return `flex-start`;
  }
};

export const renderFlexWrap = (wrap: FlexWrap) => {
  switch (wrap) {
    case FlexWrap.Wrap:
      return `wrap`;
    case FlexWrap.NoWrap:
      return `nowrap`;
    default:
      return `nowrap`;
  }
};

export const renderLayoutPosition = (layoutPosition: LayoutPosition) => {
  switch (layoutPosition) {
    case LayoutPosition.Absolute:
      return `absolute`;
    case LayoutPosition.Relative:
      return `relative`;
    default:
      return `relative`;
  }
};

export const renderDimension = (scale: ScreenScale) => {
  switch (scale) {
    case ScreenScale.Quarter:
      return `25%`;
    case ScreenScale.Half:
      return `50%`;
    case ScreenScale.HalfAndQuarter:
      return `75%`;
    case ScreenScale.Full:
      return `100%`;
    case ScreenScale.Auto:
      return `auto`;
    default:
      return `100%`;
  }
};

export const renderFontSize = (fontSize: FontSize) => {
  switch (fontSize) {
    case FontSize.Overline:
      return 10;
    case FontSize.Caption:
      return 12;
    case FontSize.Normal:
      return 16;
    case FontSize.SubTitle:
      return 20;
    case FontSize.Title:
      return 24;
    case FontSize.SubHeader:
      return 32;
    case FontSize.Header:
      return 48;
    case FontSize.LargeHeader:
      return 64;
    default:
      return 16;
  }
};

export const renderFontStyle = (fontStyle: FontStyle) => {
  switch (fontStyle) {
    case FontStyle.Normal:
      return `normal`;
    case FontStyle.Italic:
      return `italic`;
    default:
      return `normal`;
  }
};

export const renderFontWeight = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case FontWeight.Light:
      return `300`;
    case FontWeight.Regular:
      return `400`;
    case FontWeight.Medium:
      return `500`;
    case FontWeight.SemiBold:
      return `600`;
    case FontWeight.Bold:
      return `700`;
    case FontWeight.ExtraBold:
      return `800`;
    case FontWeight.Black:
      return `900`;
    default:
      return `400`;
  }
};

export const renderSpacingSize = (size: Size) => {
  switch (size) {
    case Size.None:
      return 0;
    case Size.XXSmall:
      return 4;
    case Size.XSmall:
      return 8;
    case Size.Small:
      return 12;
    case Size.Medium:
      return 16;
    case Size.Large:
      return 24;
    case Size.XLarge:
      return 32;
    case Size.XXLarge:
      return 64;
    default:
      return 0;
  }
};

export const renderHexColor = (color: string, percent?: number) => {
  const hexColorPercent = percent ? Math.floor(percent * 255).toString(16) : ``;
  return `${color}${hexColorPercent}`;
};
