import { unstable_setRequestLocale } from 'next-intl/server';
import { getServerSession } from 'next-auth';

// Components
import LoginContent from '../../../components/LoginContent/LoginContent';

// Utils
import { redirect } from '@/navigation';

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = await getServerSession();
  unstable_setRequestLocale(locale);

  // Redirect if session is available
  if (session) {
    redirect('/');
  }

  return <LoginContent />;
}
