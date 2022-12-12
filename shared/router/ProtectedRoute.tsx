'use client';

import { memo, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Hooks
import { useAuth } from '../../app/auth/use-auth.hook';

type ProtectedRouteProps = {
  children: ReactNode;
};

/**
 * Wrapper component that navigates to the login screen if not authorized.
 * @param props ProtectedRouteProps
 * @returns ReactNode
 */
const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { isAuthorized } = useAuth();
  const router = useRouter();

  const [show, setShow] = useState<boolean>(false);

  // Show children if authorized on mount
  useEffect(() => {
    if (isAuthorized()) {
      setShow(true);
    } else {
      router.replace('/login');
    }
  }, []);

  return <>{show ? props.children : <div>Loading...</div>}</>;
};

export default memo(ProtectedRoute);
