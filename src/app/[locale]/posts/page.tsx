import { setRequestLocale, getTranslations } from 'next-intl/server';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

// Components
import Planets from './components/Planets/Planets';

// Styles
import styles from './Posts.module.scss';

// Types
import { PlanetsResponse } from './types/posts.types';

// UI
import { Text } from '@/lib/ui/Text';

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
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PlanetsResponse>({
    queryKey: ['planets'],
    queryFn: getPlanets,
  });

  const t = await getTranslations('posts');

  return (
    <main className={styles['posts']}>
      <Text variant="h5">{t('title')}</Text>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Planets />
      </HydrationBoundary>
    </main>
  );
}
