import { ReactNode } from 'react';

export enum Language {
  English = 'en',
  German = 'de',
}

export enum HeaderActions {
  About = 'ABOUT',
  Imprint = 'IMPRINT',
  Privacy = 'PRIVACY',
}

export enum MenuElement {
  Button = 'BUTTON',
  Checkbox = 'CHECKBOX',
}

export interface MenuItem {
  action: any;
  checked?: boolean;
  elem?: MenuElement;
  disabled?: boolean;
  icon?: ReactNode;
  title: string;
  undefined?: boolean;
}
