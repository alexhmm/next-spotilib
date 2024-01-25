'use client';

import { signOut, useSession } from 'next-auth/react';

// UI
import { Button } from '@/ui/Button';

const Logout = () => {
  const session = useSession();

  return (
    <Button
      disabled={session.status === 'loading'}
      variant="main"
      onClick={() => signOut()}
    >
      Sign out from Spotify
    </Button>
  );
};

export default Logout;
