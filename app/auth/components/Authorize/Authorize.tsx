'use client';

import { memo, useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useRouter } from 'next/navigation';

// Hooks
import { useAuth } from '../../use-auth.hook';
import { useFetch } from '../../../../shared/hooks/use-fetch.hook';

// Stores
import { useAuthStore } from '../../use-auth.store';
import { useUserStore } from '../../../user/use-user.store';

// Types
import { UserProfile } from '../../../user/user.types';

type Authorize = {
  code: string;
  state?: string;
};

const Authorize = (props: Authorize) => {
  const { tokenGet, tokenByRefreshGet } = useAuth();
  const { fetchData } = useFetch();
  const router = useRouter();

  // Auth store state
  const [token, setToken] = useAuthStore((state) => [
    state.token,
    state.setToken,
  ]);

  // User store state
  const [setProfile] = useUserStore((state) => [state.setProfile]);

  /**
   * Get user profile data by token.
   */
  const profileQuery: UseQueryResult<UserProfile> = useQuery(
    ['me', token],
    () => fetchData('me'),
    {
      onSuccess: (data) => {
        setProfile(data);
      },
    }
  );

  /**
   * Get token.
   */
  const tokenQuery = useQuery('token', () => tokenGet(props.code), {
    enabled: false,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setToken(data);
      router.replace('/');
    },
  });

  /**
   * Get refreshed token by refresh token.
   */
  const tokenByRefreshQuery = useQuery(
    ['token-refresh', token],
    () => tokenByRefreshGet(token?.refresh_token ?? ''),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setToken(data);
      },
    }
  );

  // Get token on mount by code
  useEffect(() => {
    tokenQuery.refetch();
  }, [props.code]);

  return <>Authorizing ...</>;
};

export default memo(Authorize);
