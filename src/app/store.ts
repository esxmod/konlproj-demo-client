import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { saReducer, sumReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    sa: saReducer,
    sum: sumReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
