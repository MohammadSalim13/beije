import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './services/baseApi';
import globalSliceReducer from './slices/global/global-slice';

export const store = configureStore({
  reducer: {
    global: globalSliceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
