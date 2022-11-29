'use client';

import { memo, useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

// Hooks
import { useAuth } from '../../use-auth.hook';
import { useFetch } from '../../../../shared/hooks/use-fetch.hook';

// Stores
import { useAuthStore } from '../../use-auth.store';
import { useUserStore } from '../../../user/use-user.store';

// Types
import { UserProfile } from '../../../user/user.types';

type AccountInfoProps = {
  code: string;
  state?: string;
};

const AccountInfo = (props: AccountInfoProps) => {
  const { tokenGet, tokenByRefreshGet } = useAuth();
  const { fetchData } = useFetch();

  // Auth store state
  const [token, setToken] = useAuthStore((state) => [
    state.token,
    state.setToken,
  ]);

  // User store state
  const [profile, setProfile] = useUserStore((state) => [
    state.profile,
    state.setProfile,
  ]);

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

  return (
    <>
      <h2>Logged in as {profile?.display_name}</h2>
      <p>
        <b>Display name</b> {profile?.display_name}
      </p>
      <p>
        <b>Id</b> {profile?.id}
      </p>
      <p>
        <b>Email</b> {profile?.email}
      </p>
      <p>
        <b>Spotify URI</b> {profile?.external_urls.spotify}
      </p>
      <p>
        <b>Link</b> {profile?.href}
      </p>
      <p>
        <b>Profile Image</b>&nbsp;
        <img src={profile?.images[0].url} alt="Profile Image" />
      </p>
      <p>
        <b>Country</b> {profile?.country}
      </p>

      <h1>oAuth Info</h1>
      <p>
        <b>Access token</b> {token?.access_token}
      </p>
      <p>
        <b>Refresh token</b> {token?.refresh_token}
      </p>

      <button
        className="mb-8 w-fit"
        onClick={() => tokenByRefreshQuery.refetch()}
      >
        Obtain new token using the refresh token
      </button>
    </>
  );
};

export default memo(AccountInfo);
