import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import * as React from 'react';

type MySnackbarProps = SnackbarProps &
  Omit<AlertProps, keyof SnackbarProps> & {
    onClose?: (event: React.SyntheticEvent<Element, Event>) => void;
  };

const MySnackbar = (props: MySnackbarProps) => {
  return (
    <Snackbar
      {...props}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Alert
        severity={props.severity}
        onClose={props.onClose}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
