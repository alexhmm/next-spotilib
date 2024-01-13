import { getServerSession } from 'next-auth';
import { unstable_setRequestLocale } from 'next-intl/server';

// Components
import HomeContent from './components/HomeContent/HomeContent';
import LoginContent from './components/LoginContent/LoginContent';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

// Styles
import styles from './Home.module.scss';
import Logout from './components/Logout/Logout';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerSession();
  unstable_setRequestLocale(locale);

  return (
    <ProtectedRoute>
      <main className={styles['home']}>
        <HomeContent />
        {!session && <LoginContent />}
        {session?.user && <Logout />}
      </main>
    </ProtectedRoute>
  );
}
