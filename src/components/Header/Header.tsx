import { FC } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

// Components
import HeaderLink from '../HeaderLink/HeaderLink';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

// Styles
import styles from './Header.module.scss';

type HeaderProps = {
  unauthorized?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
  const t = useTranslations('common');

  return (
    <div
      className={clsx(
        styles['header'],
        props.unauthorized
          ? styles['header-unauthorized']
          : styles['header-authorized']
      )}
    >
      <HeaderLogo />
      {props.unauthorized ? (
        <div className={styles['header-content']}>
          {props.unauthorized && (
            <>
              <HeaderLink href="/about">{t('menu.about')}</HeaderLink>
              <HeaderLink href="/faq">{t('menu.faq')}</HeaderLink>
            </>
          )}
        </div>
      ) : (
        <HeaderMenu />
      )}
    </div>
  );
};

export default Header;
