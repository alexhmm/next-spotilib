import { useTranslations } from 'next-intl';

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('common');

  return <div>{t('menu.about')}</div>;
}
