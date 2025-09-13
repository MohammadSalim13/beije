export const ToastSeverity = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
} as const;

export interface ToastState {
  open: boolean;
  message: string;
  severity: keyof typeof ToastSeverity;
}
