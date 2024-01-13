import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// Styles
import styles from './Header.module.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

type HeaderProps = {
  unauthorized?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
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
      <HeaderMenu />
    </div>
  );
};

export default Header;
