import { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

// Styles
import styles from './Header.module.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderButton from '../HeaderButton/HeaderButton';

type HeaderProps = {
  unauthorized?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
  const t = useTranslations('common');

  console.log('unauthorized', props.unauthorized);

  return (
    <div
      className={clsx(
        styles['header'],
        props.unauthorized
          ? styles['header-unauthorized']
          : styles['header-authorized']
      )}
    >
      <Image
        src="/logo.svg"
        alt="Spotilib Logo"
        width={87}
        height={20}
        priority
      />
      {props.unauthorized ? (
        <div className={styles['header-content']}>
          {props.unauthorized && (
            <>
              <HeaderButton href="/about">{t('menu.about')}</HeaderButton>
              <HeaderButton href="/faq">{t('menu.faq')}</HeaderButton>
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
