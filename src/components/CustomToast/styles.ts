import {StyleSheet} from 'react-native';
import {AppColors} from '@config';

const styles = StyleSheet.create({
  container: {
    gap: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: AppColors.toastBackground,
    width: '90%',
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'center',
    bottom: 23,
    zIndex: 9999,
  },
  icon: {
    paddingTop: 5,
    paddingLeft: 12,
    height: 24,
    width: 24,
  },
  closeIcon: {
    paddingLeft: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    width: '80%',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
  },
});

export default styles;
