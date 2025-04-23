// src/store/middleware/saveToStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Middleware} from '@reduxjs/toolkit';
import {IRootState} from '../store';
import {AsyncStorageKeys} from '../../utils';

export const saveConfigToStorage: Middleware<{}, IRootState> =
  store => next => async action => {
    const result = next(action);

    const state = store.getState();
    try {
      await AsyncStorage.setItem(
        AsyncStorageKeys.config,
        JSON.stringify(state.config),
      );
    } catch (e) {
      console.error('Failed to save config:', e);
    }

    return result;
  };
