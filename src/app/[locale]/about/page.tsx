import { getTranslations } from 'next-intl/server';

export default async function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('common');

  return <div>{t('nav.about')}</div>;
}
