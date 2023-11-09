import { useLocale } from 'next-intl';
import { getTranslator, unstable_setRequestLocale } from 'next-intl/server';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Typography } from '@mui/material';

// Components
import Planets from './components/Planets/Planets';

// Styles
import styles from './Posts.module.scss';

// Types
import { PlanetsResponse } from './types/posts.types';

export async function getPlanets() {
  const res = await fetch('https://swapi.dev/api/planets');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Posts({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PlanetsResponse>({
    queryKey: ['planets'],
    queryFn: getPlanets,
  });

  const t = await getTranslator(useLocale(), 'posts');

  return (
    <main className={styles['posts']}>
      <Typography variant="h5">{t('title')}</Typography>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Planets />
      </HydrationBoundary>
    </main>
  );
}
