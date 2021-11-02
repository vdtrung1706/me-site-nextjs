import { SnackbarCloseReason } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';
import * as React from 'react';

export const useSnackbar = () => {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [alertContent, setAlertContent] = React.useState('');
  const [alertSeverity, setAlertSeverity] =
    React.useState<AlertColor>('success');

  const handleSnackClose = (
    event: React.SyntheticEvent<Element, Event>
  ): void => {
    if (event != null) {
      event.preventDefault();
    }
    setSnackOpen(false);
  };

  return {
    snackOpen,
    alertContent,
    alertSeverity,
    setSnackOpen,
    setAlertContent,
    setAlertSeverity,
    handleSnackClose,
  };
};
