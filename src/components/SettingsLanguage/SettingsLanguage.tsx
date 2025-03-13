'use client';

import { FC, useCallback } from 'react';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/navigation';

import { Language } from '@/types/shared.types';

import { Button } from '@/ui/Button';

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
