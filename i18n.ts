import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  // messages: (await import(`./src/messages/${locale}.json`)).default,
  messages: {
    ...(await import(`./src/messages/${locale}/common.json`)).default,
    ...(await import(`./src/messages/${locale}/home.json`)).default,
    ...(await import(`./src/messages/${locale}/posts.json`)).default,
  },
}));
