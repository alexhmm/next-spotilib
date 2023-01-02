import { unstable_getServerSession } from 'next-auth/next';

// Components
import Dashboard from '../shared/components/Dashboard/Dashboard';

// Router
import ProtectedRoute from '../shared/router/ProtectedRoute';

// Styles
import styles from './HomePage.module.scss';

// Types
import { SpotilibSession } from '../shared/types/auth.types';

// Utils
import { authOptions } from '../pages/api/auth/[...nextauth]';

export default async function HomePage() {
  const session: SpotilibSession | null = await unstable_getServerSession(
    authOptions
  );
  console.log('HomePage', JSON.stringify(session?.token?.accessToken, null, 2));

  return (
    <ProtectedRoute>
      <div className={styles['home-page']}>
        <Dashboard />
      </div>
    </ProtectedRoute>
  );
}
