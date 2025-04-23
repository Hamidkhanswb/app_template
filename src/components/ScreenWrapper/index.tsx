import React from 'react';
import {SafeAreaView, ViewStyle} from 'react-native';
import styles from './styles';

const ScreenWrapper: React.FC<{
  children: React.ReactNode;
  style?: ViewStyle;
}> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default ScreenWrapper;
