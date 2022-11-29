/**
 *  Generates a random string containing numbers and letters
 * @param length String length
 * @returns Generated string
 */
export const generateRandomString = (length: number): string => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/**
 * Login to spotify by enviroment variables.
 */
export const login = () => {
  // Generate random string
  const state = generateRandomString(16);

  // Set spotify auth state
  // This provides protection against attacks such as cross-site request forgery
  localStorage.setItem('spotify:auth:state', state);

  const queryParams = {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID ?? '',
    scope: 'user-read-private user-read-email user-modify-playback-state',
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI ?? '',
    state,
  };

  // Navigate to spotify authorization page
  window.location.replace(
    `https://accounts.spotify.com/authorize?${new URLSearchParams(queryParams)}`
  );
};
