'use client';

import { memo } from 'react';

// Utils
import { login } from '../../auth.utils';

const Login = () => {
  return (
    <>
      <button onClick={login}>Login with Spotify</button>
    </>
  );
};

export default memo(Login);
