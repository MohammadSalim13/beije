import { configureStore } from '@reduxjs/toolkit';

import { userApi } from './services/user/api';
import globalSliceReducer from './slices/global/global-slice';

export const store = configureStore({
  reducer: {
    counter: globalSliceReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
