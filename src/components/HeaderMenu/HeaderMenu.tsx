'use client';

import { FC } from 'react';

// Icons
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

// UI
import { Button } from '@/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/DropdownMenu';

const HeaderMenu: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log('Test 1')}>
          Test 1
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Test 2')}>
          Test 2
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Test 3')}>
          Test 3
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
