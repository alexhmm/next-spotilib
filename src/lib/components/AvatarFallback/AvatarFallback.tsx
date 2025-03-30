import { SpotifyType } from '@/lib/types/spotify.types';
import { FC, useMemo } from 'react';

// Icons
import { AccessibilityIcon } from '@radix-ui/react-icons';

type AvatarFallbackProps = {
  type: SpotifyType;
};

export const AvatarFallback: FC<AvatarFallbackProps> = (props) => {
  const icon = useMemo(() => {
    switch (props.type) {
      case SpotifyType.Artist:
        return <AccessibilityIcon className="h-16 w-16" />;
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
