import { Session } from 'next-auth';

export interface SpotilibSession extends Session {
  token?: {
    name: string;
    email: string;
    picture: string;
    sub: string;
    accessToken: string;
    expire_time: null;
    providerAccountId: string;
    refreshToken: string;
    scope: string;
    token_type: string;
    iat: number;
    exp: number;
    jti: string;
  };
}
