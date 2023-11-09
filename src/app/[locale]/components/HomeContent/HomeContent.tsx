import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Typography } from '@mui/material';

// Components
import HomeContentSettings from '../HomeContentSettings/HomeContentSettings';

// Styles
import styles from './HomeContent.module.scss';

// Types
import { Language } from '@/types/shared.types';

const HomeContent = () => {
  const locale = useLocale();

  unstable_setRequestLocale(locale);

  const tCommon = useTranslations('common');
  const tHome = useTranslations('home');

  return (
    <div className={styles['home-content']}>
      <Typography variant="h5">{tHome('title')}</Typography>
      <HomeContentSettings title={tCommon('settings.language.title')} />
      <Typography>
        {locale === Language.English
          ? tCommon('settings.language.en')
          : tCommon('settings.language.de')}
      </Typography>
    </div>
  );
};

export default HomeContent;
