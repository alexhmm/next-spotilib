import Link from 'next/link';

// Styles
import styles from './RootLayout.module.scss';
import './globals.scss';

// Wrapper
import ReactQueryWrapper from './ReactQuerryWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className={styles['root-layout']}>
          <nav className={styles['root-layout-nav']}>
            <Link className={styles['root-layout-nav-item']} href="/">
              Home
            </Link>
            <Link className={styles['root-layout-nav-item']} href="/notes">
              Notes
            </Link>
          </nav>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </main>
      </body>
    </html>
  );
}
