// Types
import { Token } from './auth.types';

export const useAuth = () => {
  /**
   * Get token by code.
   * @param code Generated code.
   * @returns Token
   */
  const tokenGet = async (code: string): Promise<Token | undefined> => {
    return await fetch('https://accounts.spotify.com/api/token', {
      body: `code=${code}&grant_type=authorization_code&redirect_uri=${
        process.env.NEXT_PUBLIC_REDIRECT_URI ?? ''
      }`,
      headers: {
        Authorization: `Basic ${window.btoa(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        )}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    }).then((res) => res.json());
  };

  /**
   * Get token by refresh token
   * @param refreshToken Refresh token
   * @returns Token
   */
  const tokenByRefreshGet = async (
    refreshToken: string
  ): Promise<Token | undefined> => {
    return await fetch('https://accounts.spotify.com/api/token', {
      body: `grant_type=refresh_token&redirect_uri=${
        process.env.NEXT_PUBLIC_REDIRECT_URI ?? ''
      }&refresh_token=${refreshToken}`,
      headers: {
        Authorization: `Basic ${window.btoa(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        )}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    }).then((res) => res.json());
  };

  return {
    tokenGet,
    tokenByRefreshGet,
  };
};
