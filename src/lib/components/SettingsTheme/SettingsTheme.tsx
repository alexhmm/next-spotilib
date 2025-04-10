'use client';

import { FC } from 'react';
import { useTheme } from 'next-themes';

// Icons
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';

// Styles
import styles from './SettingsTheme.module.scss';

// UI
import { Button } from '@/lib/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/ui/DropdownMenu';

type SettingsThemeProps = {
  dark: string;
  light: string;
  title: string;
  system: string;
};

const SettingsTheme: FC<SettingsThemeProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={styles['settings-theme-button']} variant="outline">
          {/* <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          {/* {theme === 'dark' ? <MoonIcon /> : <SunIcon />} */}
          {/* <span className="sr-only">Toggle theme</span> */}
          {props.title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon className="mr-2" size={20} /> {props.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon className="mr-2" size={20} /> {props.dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <MonitorIcon className="mr-2" size={20} /> {props.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsTheme;
