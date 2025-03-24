'use client';

import { signIn, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

// UI
import { Button } from '@/lib/ui/Button';

const LoginContent = () => {
  const session = useSession();
  const t = useTranslations();

  return (
    <Button
      disabled={session.status === 'loading'}
      variant="main"
      onClick={() => signIn('spotify')}
    >
      {t('login.button')}
    </Button>
  );
};

export default LoginContent;
