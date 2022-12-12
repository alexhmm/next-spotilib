// Components
import Login from './components/Login/Login';

// Styles
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={styles['login-page']}>
      <Login />
    </div>
  );
}
