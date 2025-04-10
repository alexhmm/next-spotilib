'use client';

import { SpotifyType } from '@/lib/types/spotify.types';
import { FC, useMemo } from 'react';

// Icons
import { MusicIcon } from 'lucide-react';

type AvatarFallbackProps = {
  type: SpotifyType;
};

const AvatarFallback: FC<AvatarFallbackProps> = (props) => {
  const icon = useMemo(() => {
    switch (props.type) {
      case SpotifyType.Artist:
        return <MusicIcon size={64} />;
      default:
        return null;
    }
  }, [props.type]);

  return (
    <div className="aspect-square bg-accent flex items-center justify-center rounded-full w-5/6">
      {icon && icon}
    </div>
  );
};

export default AvatarFallback;
