'use client';

import { FC } from 'react';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// UI
import IconMenu from '@/ui/Menu/IconMenu';

const HeaderMenu: FC = () => {
  return (
    <IconMenu
      icon={<MenuIcon />}
      items={[
        {
          action: 'test',
          title: 'Test',
        },
      ]}
      onAction={(action) => console.log('meunAction', action)}
    />
  );
};

export default HeaderMenu;
