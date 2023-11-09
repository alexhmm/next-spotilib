import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Navigation
import { Link } from '@/navigation';

// Styles
import styles from './Nav.module.scss';

type NavProps = {
  locale: string;
};

const Nav: FC<NavProps> = (props) => {
  unstable_setRequestLocale(props.locale);

  const t = useTranslations('common');

  return (
    <div className={styles['nav']}>
      <Link href="/">{t('nav.home')}</Link>
      <Link href="/posts">{t('nav.posts')}</Link>
    </div>
  );
};

export default Nav;
