import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TSliceAuth = {
  isLoggedIn: boolean;
}

function InitSliceAuth(): TSliceAuth {
  return {
    isLoggedIn: false,
  };
}

const sliceAuth = createSlice({
  name: 'sliceAuth',
  initialState: InitSliceAuth(),
  reducers: {
    SetIsLoggedIn: (state, action: PayloadAction<boolean>): TSliceAuth => ({ ...state, isLoggedIn: action.payload }),
  },
});

export const ReducerAuth = sliceAuth.reducer;
export const ActionAuth = sliceAuth.actions;