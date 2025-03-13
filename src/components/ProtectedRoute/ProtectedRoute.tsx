import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from '@/navigation';
import { getLocale } from 'next-intl/server';

type ProtectedRouteProps = {
  children: ReactNode;
};

export default async function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const locale = await getLocale();
  const session = await getServerSession();

  if (!session) {
    redirect({
      href: '/login',
      locale,
    });
  }
  return <>{children}</>;
}
