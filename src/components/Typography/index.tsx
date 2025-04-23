import React from 'react';
import {Text, TextProps} from 'react-native';
import {AppColors} from '@config';
import fonts from '@config/fonts';
import styles from './styles';
import {ITypography} from '@config/interfaces';

const Typography: React.FC<ITypography & TextProps> = ({
  type,
  color = AppColors.textPrimary,
  fontWeight,
  style,
  textAlign,
  children = '',
  textProps,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles[`${type}`],
        color && {color: color},
        fontWeight && {fontFamily: fonts.FONT_FAMILIES[`${fontWeight}`]},
        textAlign && {textAlign: textAlign},
        style,
        {flexShrink: 1},
      ]}
      {...rest}
      {...textProps}>
      {children}
    </Text>
  );
};

export default Typography;
