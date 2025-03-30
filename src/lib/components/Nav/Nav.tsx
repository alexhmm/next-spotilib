import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import HeaderLink from '../HeaderLink/HeaderLink';

// Styles
import styles from './Nav.module.scss';

// Types
import { SpotifyUser } from '@/lib/types/spotify.types';

// Utils
import { getSpotifyData } from '@/lib/utils/spotify.utils';

type NavProps = {
  locale: string;
};

export default async function Nav(props: NavProps) {
  const data = await getSpotifyData<SpotifyUser>('/me');

  setRequestLocale(props.locale);

  const t = await getTranslations('common');

  return (
    <div className={styles['nav']}>
      <HeaderLink exact href="/">
        {t('nav.home')}
      </HeaderLink>
      <HeaderLink href="/posts">{t('nav.posts')}</HeaderLink>
      <HeaderLink href={`/user/${data?.id}`}>{t('menu.profile')}</HeaderLink>
      <HeaderLink exact href="/about">
        {t('nav.about')}
      </HeaderLink>
    </div>
  );
}
