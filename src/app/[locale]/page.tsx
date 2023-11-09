import { getServerSession } from 'next-auth';
import { unstable_setRequestLocale } from 'next-intl/server';

// Components
import HomeContent from './components/HomeContent/HomeContent';

// Styles
import styles from './Home.module.scss';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerSession();
  unstable_setRequestLocale(locale);

  return (
    <main className={styles['home']}>
      <HomeContent />
      {!session && <Login />}
      {session?.user && <Logout />}
    </main>
  );
}
