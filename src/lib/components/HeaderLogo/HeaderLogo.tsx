'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const HeaderLogo = () => {
  const { resolvedTheme } = useTheme();

  const [src, setSrc] = useState<string>('/logo-light.svg');

  useEffect(() => {
    resolvedTheme === 'dark' && setSrc('/logo-light.svg');
    resolvedTheme === 'light' && setSrc('/logo-dark.svg');
  }, [resolvedTheme]);

  return (
    <Image
      alt="Spotilib Logo"
      className="header-logo"
      height={20}
      priority
      width={87}
      src={src}
    />
  );
};

export default HeaderLogo;
