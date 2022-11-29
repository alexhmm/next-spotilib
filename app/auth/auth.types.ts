export interface TokenPostRequest {
  code?: string;
  grant_type: string;
  redirect_uri?: string;
}

export interface Token {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
