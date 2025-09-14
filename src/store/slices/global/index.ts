import { createSlice } from '@reduxjs/toolkit';

import { GlobalState } from '@/store/slices/global/type';

const initialState: GlobalState = {
  user: null,
  cartCount: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    incrementCartCount: (state) => {
      state.cartCount += 1;
    },
    decrementCartCount: (state) => {
      if (state.cartCount > 0) {
        state.cartCount -= 1;
      }
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
  },
});

export const { setUser, incrementCartCount, decrementCartCount, setCartCount } =
  globalSlice.actions;

export const selectCartCount = (state: { global: GlobalState }) => state.global.cartCount;
export default globalSlice.reducer;
