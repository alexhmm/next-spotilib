import { Montserrat } from '@next/font/google';

// Styles
import styles from './RootLayout.module.scss';
import '../shared/styles/globals.scss';

// Wrapper
import ContentWrapper from '../shared/wrapper/ContentWrapper';
import ReactQueryWrapper from '../shared/wrapper/ReactQuerryWrapper';
import ThemeWrapper from '../shared/wrapper/ThemeWrapper';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js"></script>
      </head>
      <body className={styles['root-layout']}>
        <ReactQueryWrapper>
          <ThemeWrapper>
            <ContentWrapper>{children}</ContentWrapper>
          </ThemeWrapper>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
