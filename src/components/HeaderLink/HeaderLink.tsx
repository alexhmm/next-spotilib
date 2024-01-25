'use client';

import { FC } from 'react';

// Navigation
import { usePathname } from '@/navigation';

// UI
import { Link } from '@/ui/Link';

type HeaderLinkProps = {
  children: string;
  exact?: boolean;
  href: string;
};

const HeaderLink: FC<HeaderLinkProps> = (props) => {
  const pathname = usePathname();

  const routeMatch = props.exact
    ? pathname === props.href
    : pathname.includes(props.href);

  return (
    <Link href={props.href} variant={routeMatch ? 'header-active' : 'header'}>
      {props.children}
    </Link>
  );
};

export default HeaderLink;
