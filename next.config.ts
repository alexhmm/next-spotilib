import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './src/i18n/messages/en.json',
  },
});

const config: NextConfig = {
  experimental: { useCache: true },
};

export default withNextIntl(config);
