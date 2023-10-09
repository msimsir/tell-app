export type Nullable<T> = T | null;

export enum FlexDirection {
  Row = 1,
  Column,
  RowReverse,
  ColumnReverse,
}

export enum Align {
  FlexStart = 1,
  Center,
  FlexEnd,
  BaseLine,
  Stretch,
}

export enum Justify {
  Start = 1,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
  FlexStart,
  FlexEnd,
}

export enum FlexWrap {
  Wrap = 1,
  NoWrap,
}

export enum LayoutPosition {
  Absolute = 1,
  Relative,
}

export enum ScreenScale {
  Quarter = 1,
  Half,
  HalfAndQuarter,
  Full,
  Auto,
}

export enum Size {
  None = 1,
  XXSmall,
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
  Initial,
  Auto,
}

export enum FontSize {
  Overline = 1,
  Caption,
  Normal,
  SubTitle,
  Title,
  SubHeader,
  Header,
  LargeHeader,
}

export enum FontStyle {
  Normal = 1,
  Italic,
}

export enum FontWeight {
  Light = 1,
  Regular,
  Medium,
  SemiBold,
  Bold,
  ExtraBold,
  Black,
}

export enum TextTransform {
  Capitalize = 1,
  Uppercase,
  LowerCase,
}

export enum TextAlign {
  Left = 1,
  Right,
  Center,
  Justify,
  Initial,
  Inherit,
}

export enum ButtonVariation {
  Primary = 1,
  Secondary,
  Outlined,
}

export interface IPaddingStyles {
  paddingTop?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
}

export interface IMarginStyles {
  marginTop?: Size;
  marginBottom?: Size;
  marginLeft?: Size;
  marginRight?: Size;
}

export interface IDimensionStyles {
  height?: ScreenScale;
  width?: ScreenScale;
  percentHeight?: number;
  percentWidth?: number;
  absoluteHeight?: number;
  absoluteWidth?: number;
}
