'use client';
import { Button } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';

const Logout = () => {
  const session = useSession();

  return (
    <Button disabled={session.status === 'loading'} onClick={() => signOut()}>
      Sign out from Spotify
    </Button>
  );
};

export default Logout;
