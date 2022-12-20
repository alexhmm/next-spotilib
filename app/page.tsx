import { unstable_getServerSession } from 'next-auth/next';

// Components
import Dashboard from '../shared/components/Dashboard/Dashboard';

// Router
import ProtectedRoute from '../shared/router/ProtectedRoute';

// Styles
import styles from './HomePage.module.scss';

export default async function HomePage() {
  const session = await unstable_getServerSession();
  console.log('HomePage', JSON.stringify(session, null, 2));

  return (
    <ProtectedRoute>
      <div className={styles['home-page']}>
        <Dashboard />
      </div>
    </ProtectedRoute>
  );
}
