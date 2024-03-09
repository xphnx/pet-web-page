import { FC, useState } from 'react';
import { THEME_LOCALSTORAGE__KEY } from '@/shared/const/localstorage';
import { ThemeContext, ThemeEnum } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(THEME_LOCALSTORAGE__KEY) as ThemeEnum) || ThemeEnum.LIGHT;

interface ThemeProviderProps {
  initialTheme?: ThemeEnum;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
