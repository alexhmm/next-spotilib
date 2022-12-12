// Components
import Dashboard from '../shared/components/Dashboard/Dashboard';

// Route
import ProtectedRoute from '../shared/router/ProtectedRoute';
// Styles
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className={styles['home-page']}>
        <Dashboard />
      </div>
    </ProtectedRoute>
  );
}
