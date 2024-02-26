import { createContext } from 'react';

export enum ThemeEnum {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'app_theme';

export const ThemeContext = createContext<ThemeContextProps>({});
