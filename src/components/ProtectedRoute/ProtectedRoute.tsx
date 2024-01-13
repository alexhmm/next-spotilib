import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from '@/navigation';

type ProtectedRouteProps = {
  children: ReactNode;
};

export default async function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }
  return <>{children}</>;
}
