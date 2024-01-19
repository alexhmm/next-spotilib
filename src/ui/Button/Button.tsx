'use client';

import { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

const Button: FC<MuiButtonProps> = (props) => {
  return (
    <MuiButton
      disableElevation
      sx={{
        borderRadius: !props.variant ? undefined : '20px',
        height: '36px',
        padding: !props.variant ? undefined : '0 32px',
        textTransform: 'none',
      }}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
