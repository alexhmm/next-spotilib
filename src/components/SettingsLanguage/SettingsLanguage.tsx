'use client';

import { FC, useCallback } from 'react';
import { useLocale } from 'next-intl';

// Navigation
import { usePathname, useRouter } from '@/navigation';

// Types
import { Language } from '@/types/shared.types';

// UI
import { Button } from '@/ui/Button';

interface Props {
  title: string;
}

const SettingsLanguage: FC<Props> = (props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Change language on current path
   */
  const changeLanguage = useCallback(() => {
    router.replace(pathname, {
      locale: locale === Language.English ? Language.German : Language.English,
    });
  }, [locale, pathname]);

  return <Button onClick={changeLanguage}>{props.title}</Button>;
};

export default SettingsLanguage;
