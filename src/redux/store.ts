import {configureStore} from '@reduxjs/toolkit';
import configReducer from './slices/config';
import {saveConfigToStorage} from './middlewares/config';

export const store: any = configureStore({
  reducer: {
    config: configReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      saveConfigToStorage,
    ),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
