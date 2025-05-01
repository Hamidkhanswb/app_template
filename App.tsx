import {CustomToast} from '@components';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {ErrorBoundaryCatch} from './src/components/ErrorBoundary';
import {NetworkContextProvider} from './src/context/NetworkContext';
import AppNavigation from './src/navigation/AppNavigation';
import {store} from './src/redux/store';

const App = () => {
  const custom_toast = ({text1, text2, props}: any) => (
    <CustomToast text1={text1} text2={text2} status={props.status} />
  );
  return (
    <ErrorBoundaryCatch>
      <GestureHandlerRootView>
        <NetworkContextProvider>
          <Provider store={store}>
            <AppNavigation />
            <Toast config={{custom_toast}} position="bottom" />
          </Provider>
        </NetworkContextProvider>
      </GestureHandlerRootView>
    </ErrorBoundaryCatch>
  );
};

export default App;
