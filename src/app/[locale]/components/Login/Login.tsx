'use client';
import { Button } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
  const session = useSession();

  console.log('SESSION', session);

  return (
    <Button
      disabled={session.status === 'loading'}
      onClick={() => signIn('spotify')}
    >
      Sign in with Spotify
    </Button>
  );
};

export default Login;
