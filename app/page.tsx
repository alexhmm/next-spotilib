// Components
import Login from './auth/components/Login/Login';

// Styles
import styles from './Home.module.scss';

export default function HomePage() {
  return (
    <div className={styles['home']}>
      <h1>Home Page</h1>
      <Login />
    </div>
  );
}
