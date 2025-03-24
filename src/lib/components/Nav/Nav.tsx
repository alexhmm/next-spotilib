import { getTranslations, setRequestLocale } from 'next-intl/server';

// Components
import HeaderLink from '../HeaderLink/HeaderLink';

// Styles
import styles from './Nav.module.scss';

// Types
import { User } from '@/lib/types/spotify/user.types';

// Utils
import { getSpotifyData } from '@/lib/utils/spotify.utils';

type NavProps = {
  locale: string;
};

export default async function Nav(props: NavProps) {
  const data = await getSpotifyData<User>('/me');

  setRequestLocale(props.locale);

  const t = await getTranslations('common');

  return (
    <div className={styles['nav']}>
      <HeaderLink exact href="/">
        {t('nav.home')}
      </HeaderLink>
      <HeaderLink href="/posts">{t('nav.posts')}</HeaderLink>
      <HeaderLink href={`/user/${data?.id}`}>{t('nav.profile')}</HeaderLink>
      <HeaderLink exact href="/about">
        {t('nav.about')}
      </HeaderLink>
    </div>
  );
}
