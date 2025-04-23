import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IConfigState {
  isGetStarted: boolean;
}

const initialState: IConfigState = {
  isGetStarted: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<Partial<IConfigState>>) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {setConfig} = configSlice.actions;
export default configSlice.reducer;
