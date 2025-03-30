'use client';

import { FC, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

// UI
import SearchBar from '@/lib/ui/SearchBar';

const HeaderSearch: FC = () => {
  const router = useRouter();
  const t = useTranslations();

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    // @ts-ignore
    router.push(`/search/${event.target.elements[0].value}`);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <SearchBar className="w-32 lg:w-96" placeholder={t('common.search')} />
    </form>
  );
};

export default HeaderSearch;
