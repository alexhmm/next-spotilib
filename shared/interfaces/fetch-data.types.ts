export interface FetchDataOptions {
  body?: any;
  method?: string;
  params?: FetchDataParams;
}

export interface FetchDataParams {
  code?: string;
  grant_type?: string;
  id?: string;
  redirect_uri?: string;
}
