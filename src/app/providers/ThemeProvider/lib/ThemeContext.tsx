import { createContext } from 'react';

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
