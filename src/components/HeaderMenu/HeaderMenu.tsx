'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

// Hooks
import useSpotify from '@/lib/hooks/use-spotify';

// Types
import { User } from '@/types/spotify/user.types';

// UI
import { Button } from '@/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/DropdownMenu';

const HeaderMenu: FC = () => {
  const router = useRouter();
  const { getSpotifyData, token } = useSpotify();
  const t = useTranslations();

  const [user, setUser] = useState<User | null>(null);

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

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        const data = await getSpotifyData<User | undefined>('/me');
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
            <HamburgerMenuIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push(`/user/${user?.id}`)}>
          {t('common.menu.profile')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
