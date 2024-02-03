import { FC, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum) || ThemeEnum.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
