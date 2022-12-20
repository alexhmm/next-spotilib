'use client';

import { memo } from 'react';
import { signIn } from 'next-auth/react';

// UI
import TextButtonOutlined from '../../ui/TextButtonOutlined/TextButtonOutlined';

const Login = () => {
  return (
    <TextButtonOutlined onClick={() => signIn('spotify')}>
      Login with Spotify
    </TextButtonOutlined>
  );
};

export default memo(Login);
