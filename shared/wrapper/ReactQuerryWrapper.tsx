'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

// Passing server components as a child or prop of a Client Component. You can do this by wrapping both components in another Server Component:
// https://beta.nextjs.org/docs/rendering/server-and-client-components#importing-server-components-into-client-components

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const ReactQueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryWrapper;
