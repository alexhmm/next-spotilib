// Styles
import styles from './Auth.module.scss';
import AccountInfo from './components/AccountInfo/AccountInfo';

type AuthPageProps = {
  params: any;
  searchParams: { code?: string; state?: string };
};

export default function AuthPage(props: AuthPageProps) {
  return (
    <div className={styles['auth']}>
      <h1>Auth Page</h1>
      <AccountInfo
        code={props.searchParams.code ?? ''}
        state={props.searchParams.state}
      />
    </div>
  );
}
