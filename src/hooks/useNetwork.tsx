import {useContext, useEffect} from 'react';
import {NetworkContext} from '../context/NetworkContext';

const useNetwork = () => {
  const {isConnected} = useContext(NetworkContext);

  useEffect(() => {});
  return {isConnected};
};

export default useNetwork;
