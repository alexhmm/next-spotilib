import { FC } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

// Components
import HeaderLink from '../HeaderLink/HeaderLink';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

// Styles
import styles from './Header.module.scss';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

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
      <div className="flex items-center gap-2 lg:gap-4">
        <HeaderSearch />

        {props.unauthorized ? (
          <div className={styles['header-content']}>
            {props.unauthorized && (
              <>
                <HeaderLink href="/about">{t('nav.about')}</HeaderLink>
                <HeaderLink href="/faq">{t('nav.faq')}</HeaderLink>
              </>
            )}
          </div>
        ) : (
          <HeaderMenu />
        )}
      </div>
    </div>
  );
};

export default Header;
