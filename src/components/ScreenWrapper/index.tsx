import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  SafeAreaView,
  StatusBarStyle,
  StatusBar,
} from 'react-native';
import styles from './styles';

interface ScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  style?: any;
  header?: React.ReactNode;
  statusBarColor?: string;
  statusBarStyle?: StatusBarStyle;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  scrollable = false,
  keyboardAvoiding = true,
  style,
  header,
  statusBarColor,
  statusBarStyle,
}) => {
  const Container = scrollable ? ScrollView : View;

  const content = (
    <Container
      style={[styles.container, style]}
      {...(scrollable && {
        keyboardShouldPersistTaps: 'handled',
      })}>
      {children}
    </Container>
  );

  return (
    <SafeAreaView style={styles.container}>
      {(statusBarColor || statusBarStyle) && (
        <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      )}
      {keyboardAvoiding ? (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
          {header && header}
          {content}
        </KeyboardAvoidingView>
      ) : (
        <>
          {header && header}
          {content}
        </>
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
