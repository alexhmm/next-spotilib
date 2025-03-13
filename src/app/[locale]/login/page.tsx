import { setRequestLocale } from 'next-intl/server';
import { getServerSession } from 'next-auth';

import LoginContent from '../../../components/LoginContent/LoginContent';

import { redirect } from '@/navigation';

export default async function Login({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const session = await getServerSession();
  setRequestLocale(locale);

  // Redirect if session is available
  if (session) {
    redirect({
      href: '/',
      locale,
    });
  }

  return <LoginContent />;
}
