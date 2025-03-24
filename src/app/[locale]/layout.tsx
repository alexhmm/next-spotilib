import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';

// Components
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';

// Providers
import QueryClientProvider from '@/providers/QueryClientProvider';
import SessionProvider from '@/providers/SessionProvider';
import ThemeProvider from '@/providers/ThemeProvider';

// Routing
import { routing } from '@/i18n/routing';

// Styles
import './globals.scss';
import styles from './Layout.module.scss';

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
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const session = await getServerSession();

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      className={clsx(
        outfit.className,
        styles['layout'],
        !session && styles['layout-unauthorized']
      )}
      lang={locale}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
