'use client';

import { ReactNode, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from '@tanstack/react-query';

export default function QueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
}
