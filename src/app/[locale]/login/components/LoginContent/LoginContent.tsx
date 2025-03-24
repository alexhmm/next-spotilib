'use client';

import { signIn, useSession } from 'next-auth/react';

// UI
import { Button } from '@/lib/ui/Button';

const LoginContent = () => {
  const session = useSession();

  return (
    <Button
      disabled={session.status === 'loading'}
      variant="main"
      onClick={() => signIn('spotify')}
    >
      Sign in with Spotify
    </Button>
  );
};

export default LoginContent;
