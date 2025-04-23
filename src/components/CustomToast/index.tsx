import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {CloseIcon, SuccessIcon, WarningIcon} from '@assets';
// import {Typography} from '@components';
// import {AppColors} from '@config';
import styles from './styles';
import Toast from 'react-native-toast-message';

interface CustomToastProps {
  status: 'success' | 'error' | 'warning';
  text1: string;
  text2?: string;
}

const CustomToast: React.FC<CustomToastProps> = ({text1, text2, status}) => {
  const renderIcon =
    status === 'success' ? (
      <SuccessIcon />
    ) : status === 'error' ? (
      <WarningIcon />
    ) : (
      <WarningIcon />
    );

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{renderIcon}</View>
      <View style={styles.text}>
        {/* <Typography type="H3" color={AppColors.textPrimary}>
          {text1}
        </Typography>
        {text2 && (
          <Typography type="BODY" color={AppColors.textSecondary}>
            {text2}
          </Typography>
        )} */}
      </View>
      <TouchableOpacity style={styles.closeIcon} onPress={() => Toast.hide()}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CustomToast;
