import React, {createContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = createContext({
  isConnected: false,
});

const NetworkContextProvider = ({children}: any) => {
  const [isConnected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const subscription = NetInfo.addEventListener(state => {
      setConnected(state.isConnected || state.isInternetReachable || false);
    });
    return () => {
      subscription;
    };
  }, []);

  return (
    <NetworkContext.Provider
      value={{
        isConnected: isConnected,
      }}>
      {children}
    </NetworkContext.Provider>
  );
};

export {NetworkContext, NetworkContextProvider};
