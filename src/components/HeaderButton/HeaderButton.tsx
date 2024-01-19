'use client';

import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

// Utils
import { Link } from '@/navigation';

type HeaderButtonProps = {
  href: string;
  children: ReactNode;
};

const HeaderButton: FC<HeaderButtonProps> = (props) => {
  return (
    <Link href={props.href}>
      <Button
        disableRipple
        sx={{
          color: 'text.primary',
          minWidth: 0,
          padding: 0,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'primary.main',
          },
        }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default HeaderButton;
