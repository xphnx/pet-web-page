import { FC, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) || ThemeEnum.LIGHT;

interface ThemeProviderProps {
  initialTheme?: ThemeEnum;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(initialTheme || defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
