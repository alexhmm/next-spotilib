import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

const handler = NextAuth({
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        // Calculate expire time by expires in and date
        const date = new Date();
        const currTime = date.getTime();
        const expireTime = currTime + token.expires_in * 1000;

        // Set token callback object
        token.accessToken = account.access_token;
        token.expires_in = account.expires_in;
        token.expire_time = expireTime;
        token.providerAccountId = account.providerAccountId;
        token.refreshToken = account.refresh_token;
        token.scope = account.scope;
        token.token_type = account.token_type;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Return token inside session
      session.token = token;
      return session;
    },
  },
  providers: [
    SpotifyProvider({
      // authorization:
      //   'https://accounts.spotify.com/authorize?scope=user-read-private,user-read-email,user-modify-playback-state,playlist-read-private',
      authorization: {
        params: {
          scope: process.env.SPOTIFY_API_SCOPE!,
        },
      },
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
  session: {
    maxAge: 3600,
  },
});

export { handler as GET, handler as POST };
