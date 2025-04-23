import fonts from '@config/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  EXTRA_LARGE: {fontSize: 18, fontFamily: fonts.FONT_FAMILIES.MEDIUM},
  LARGE: {fontSize: 16, fontFamily: fonts.FONT_FAMILIES.MEDIUM},
  NORMAL: {fontSize: 14, fontFamily: fonts.FONT_FAMILIES.REGULAR},
  SMALL: {fontSize: 12, fontFamily: fonts.FONT_FAMILIES.REGULAR},
  EXTRA_SMALL: {fontSize: 10, fontFamily: fonts.FONT_FAMILIES.REGULAR},
});

export default styles;
