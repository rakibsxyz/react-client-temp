import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch } from 'react-redux';
import { ReducerAuth, ReducerUi } from './Slices';

const RootReducer = combineReducers({
  auth: ReducerAuth,
  ui: ReducerUi,
});

type TRootReducerParams = Parameters<typeof RootReducer>;
type TRootReducerReturn = ReturnType<typeof RootReducer>;

const ActionAppTypeResetStore = "RESET_APP_REDUX_STORE";

export const ActionApp = {
  ResetStore: (): AnyAction => ({ type: ActionAppTypeResetStore }),
};

const AppReducer = (...arg: TRootReducerParams): TRootReducerReturn => {
  const [, action] = arg;
  if (action.type === ActionAppTypeResetStore) {
    return RootReducer(undefined, action);
  }
  return RootReducer(...arg);
}

export const RisQAppStoreStore = configureStore({
  reducer: AppReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RisQAppStateType = ReturnType<typeof RootReducer>;
export type RisQAppDispatch = typeof RisQAppStoreStore.dispatch;
export const useAppDispatch = () => useDispatch<RisQAppDispatch>();
export const useAppSelector = createSelectorHook<RisQAppStateType>();