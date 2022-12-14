import { signOut, useSession } from 'next-auth/react';

// Types
import { FetchDataOptions } from '../types/fetch-data.types';

// Stores
import { SpotilibSession } from '../types/auth.types';

class FetchError extends Error {
  constructor(public response: Response, message?: string) {
    super(message);
  }
}

export const useFetch = () => {
  const { data: session, status } = useSession();

  /**
   * Fetch data by query.
   * @param path Path
   * @param options Fetch options
   * @returns JSON data | Error
   */
  const fetchData = (path: string, options?: FetchDataOptions) => {
    const spotilibSession = session as SpotilibSession;
    if (spotilibSession.token?.accessToken && status === 'authenticated') {
      try {
        // Cast query params to string
        const params = options?.params?.toString();

        // Setup url with query params
        const url = `https://api.spotify.com/v1/${path}${
          params && params?.length > 0 ? `?${options?.params}` : ''
        }`;

        return fetch(url, {
          body: options?.body ? JSON.stringify(options.body) : undefined,
          method: options?.method,
          headers: {
            Authorization: `Bearer ${spotilibSession.token?.accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }).then(async (response) => {
          if (!response.ok) {
            throw new FetchError(response);
          }
          return await response.json().catch((error) => {
            console.error('Error fetching data:', error);
            return {};
          });
        });
      } catch (error) {
        console.error('ERROR fetching data:', error);
      }
    }
  };

  /**
   * Handle common http errors / status codes.
   * @param status Http response status code
   * @returns Error message
   */
  const handleError = (status: number): string => {
    switch (status) {
      case 401:
        // Logout if unauthorized
        signOut();
        return '';
      default:
        // return `Code ${status}: ${t('app.fetch.error.response')}`;
        return `Code ${status}`;
    }
  };

  /**
   * Handle http request retry by status code.
   * Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has encountered an error or is otherwise incapable of performing the request.
   * @param failureCount Failure count
   * @param error Error response
   * @returns Retrying state
   */
  const handleRetry = (failureCount: number, error: any): boolean => {
    const status = error?.response?.status;
    // Abort retrying after 3 tries
    if (status && status >= 500 && status <= 513 && failureCount < 2) {
      return true;
    } else {
      return false;
    }
  };

  return {
    fetchData,
    handleError,
    handleRetry,
  };
};
