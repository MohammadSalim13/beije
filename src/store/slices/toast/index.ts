import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ToastSeverity, ToastState } from '@/store/slices/toast/type';

const initialState: ToastState = {
  open: false,
  message: '',
  severity: ToastSeverity.info,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; severity?: ToastState['severity'] }>,
    ) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? ToastSeverity.info;
    },
    hideToast: (state) => {
      state.open = false;
      state.message = '';
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
