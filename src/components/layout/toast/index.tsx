import { Alert, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/store';
import { hideToast } from '@/store/slices/toast';

export default function GlobalToast() {
  const dispatch = useDispatch<AppDispatch>();
  const { open, message, severity } = useSelector((state: RootState) => state.toast);
  const toastTimeout = 3000;
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, toastTimeout);
      return () => clearTimeout(timer);
    }
  }, [open, dispatch]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => dispatch(hideToast())}
    >
      <Alert onClose={() => dispatch(hideToast())} severity={severity} variant='filled'>
        {message}
      </Alert>
    </Snackbar>
  );
}
