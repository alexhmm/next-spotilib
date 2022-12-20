'use client';

import { memo, ReactNode } from 'react';
import { useSession } from 'next-auth/react';

// Components
import Login from '../components/Login/Login';

type ProtectedRouteProps = {
  children: ReactNode;
};

/**
 * Wrapper component that displays login screen if not authenticated.
 * @param props ProtectedRouteProps
 * @returns ReactNode
 */
const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { status } = useSession();

  return (
    <>
      {status === 'loading' && <div>Loading ...</div>}
      {status === 'authenticated' && props.children}
      {status === 'unauthenticated' && <Login />}
    </>
  );
};

export default memo(ProtectedRoute);
