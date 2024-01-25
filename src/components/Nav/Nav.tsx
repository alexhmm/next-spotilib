import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Components
import HeaderLink from '../HeaderLink/HeaderLink';

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
      <HeaderLink exact href="/">
        {t('nav.home')}
      </HeaderLink>
      <HeaderLink href="/posts">{t('nav.posts')}</HeaderLink>
    </div>
  );
};

export default Nav;
