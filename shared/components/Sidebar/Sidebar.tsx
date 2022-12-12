'use client';

import { memo } from 'react';
import Link from 'next/link';

// Stores
import { useAuthStore } from '../../../app/auth/use-auth.store';

// Styles
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [token] = useAuthStore((state) => [state.token]);

  return (
    <div className={styles['sidebar']}>
      {token && (
        <>
          <Link className={styles['sidebar-item']} href="/">
            Home
          </Link>
          <Link className={styles['sidebar-item']} href="/notes">
            Notes
          </Link>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
          <div>Nav</div>
        </>
      )}
    </div>
  );
};

export default memo(Sidebar);
