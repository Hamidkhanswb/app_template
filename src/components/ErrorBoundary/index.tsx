import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';
import styles from './styles';

/*
    This screen is a fallback screen incase some part of the app throws an error which is not handled (otherwise the app would crash)
    caveats are listed here https://reactjs.org/docs/error-boundaries.html
    Main thing to note this will NOT catch all errors but only some errors
*/
export class ErrorBoundaryCatch extends Component<
  {},
  {
    hasError: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  render() {
    const {children}: any = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.heading}>Oops, Something Went Wrong</Text>
          <Text style={styles.explanation}>
            The app ran into a problem and could not continue. We apologize for
            any inconvenience this has caused. Press the restart button below,
            to restart the app and sign back in. Please contact us if this issue
            persists.
          </Text>

          {/* We allow the user to restart the app if a crash occurs */}
          <TouchableOpacity
            onPress={() => {
              // this may cause over memory usage in some cases
              RNRestart.Restart();
            }}>
            <Text>Restart</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    }
    return children;
  }
}
