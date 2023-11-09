import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import PlanetDetail from './components/PlanetDetail/PlanetDetail';

export async function getPost(id: string) {
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<any>({
    queryKey: ['planet'],
    queryFn: () => getPost(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PlanetDetail id={id} />
    </HydrationBoundary>
  );
}
