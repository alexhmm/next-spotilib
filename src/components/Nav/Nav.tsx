import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Navigation
import { Link } from '@/navigation';

// Styles
import styles from './Nav.module.scss';

// UI
import Button from '@/ui/Button/Button';

type NavProps = {
  locale: string;
};

const Nav: FC<NavProps> = (props) => {
  unstable_setRequestLocale(props.locale);

  const t = useTranslations('common');

  return (
    <div className={styles['nav']}>
      <Link href="/">
        <Button>{t('nav.home')}</Button>
      </Link>
      <Link href="/posts">
        <Button>{t('nav.posts')}</Button>
      </Link>
    </div>
  );
};

export default Nav;
