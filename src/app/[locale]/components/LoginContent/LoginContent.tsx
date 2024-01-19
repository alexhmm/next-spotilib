'use client';

import { signIn, useSession } from 'next-auth/react';
import { Button } from '@mui/material';

const LoginContent = () => {
  const session = useSession();

  return (
    <Button
      disabled={session.status === 'loading'}
      onClick={() => signIn('spotify')}
    >
      Sign in with Spotify
    </Button>
  );
};

export default LoginContent;
