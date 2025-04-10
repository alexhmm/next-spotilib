'use client';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { signOut, useSession } from 'next-auth/react';

// Hooks
import useSpotify from '@/lib/hooks/use-spotify';

// Icons
import { MenuIcon } from 'lucide-react';

// Types
import { SpotifyUser } from '@/lib/types/spotify.types';

// UI
import { Button } from '@/lib/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/ui/DropdownMenu';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';

const HeaderMenu: FC = () => {
  const router = useRouter();
  const session = useSession();
  const { getSpotifyData, token } = useSpotify();
  const t = useTranslations();

  const [user, setUser] = useState<SpotifyUser | null>(null);

  const image = useMemo(() => {
    if (user?.images && user?.images.length > 1) {
      for (const image of user?.images.reverse()) {
        return {
          height: image.height,
          url: image.url,
          width: image.width,
        };
      }
    }
    return undefined;
  }, [user?.images]);

  const logout = useCallback(() => {
    signOut();
    router.push('/');
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        const data = await getSpotifyData<SpotifyUser | undefined>('/me');
        data && setUser(data);
      }
    };

    getUserData();
  }, [token]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={image ? 'header' : 'icon'}
          variant={image ? 'header' : 'ghost'}
        >
          {image ? (
            <img
              className={
                'aspect-square border-8 object-cover rounded-full w-16'
              }
              src={image.url}
              alt={`${user?.display_name} user image`}
            />
          ) : (
            <MenuIcon size={20} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col px-2 py-1.5">
          <span className="text-sm truncate">{user?.display_name}</span>
          <span className="font-normal text-foreground/60 text-xs">{`${t(
            'user.followers'
          )}: ${user?.followers.total}`}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(`/user/${user?.id}`)}>
          {t('common.menu.profile')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={session.status === 'loading'}
          onClick={logout}
        >
          {t('common.menu.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
