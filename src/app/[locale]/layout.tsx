import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { unstable_setRequestLocale } from 'next-intl/server';

// Components
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';

// Providers
import QueryClientProvider from '@/providers/QueryClientProvider';
import SessionProvider from '@/providers/SessionProvider';
import ThemeProvider from '@/providers/ThemeProvider';

// Styles
import './globals.scss';
import styles from './Layout.module.scss';

// Theme
import clsx from 'clsx';

const outfit = Outfit({ subsets: ['latin'], weight: ['400'] });
const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Spotilib',
  description: 'Build your own library. A tool for music enthusiasts.',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const session = await getServerSession();

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html
      className={clsx(
        outfit.className,
        styles['layout'],
        !session && styles['layout-unauthorized']
      )}
      lang={locale}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <QueryClientProvider>
              <Header unauthorized={!session} />
              <Nav locale={locale} />
              {children}
            </QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
