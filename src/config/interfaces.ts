import {TextProps, TextStyle} from 'react-native';

export type TFontWeight = 'BOLD' | 'SEMI_BOLD' | 'MEDIUM' | 'REGULAR';
export type TTextType =
  | 'EXTRA_SMALL'
  | 'SMALL'
  | 'NORMAL'
  | 'LARGE'
  | 'EXTRA_LARGE';
export type TTextAlign = 'left' | 'right' | 'center';

export interface ITypography extends TextProps {
  type: TTextType;
  color?: TextStyle['color'];
  fontWeight?: TFontWeight;
  textAlign?: TTextAlign;
  textProps?: TextProps;
  children?: string | string[];
}
