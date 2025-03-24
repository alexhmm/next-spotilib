'use client';

import { FC, useCallback } from 'react';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/navigation';

import { Language } from '@/lib/types/shared.types';

import { Button } from '@/lib/ui/Button';

interface Props {
  title: string;
}

const SettingsLanguage: FC<Props> = (props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = useCallback(() => {
    router.replace(pathname, {
      locale: locale === Language.English ? Language.German : Language.English,
    });
  }, [locale, pathname]);

  return <Button onClick={changeLanguage}>{props.title}</Button>;
};

export default SettingsLanguage;
