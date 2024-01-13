'use client';
import { Button } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';

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
