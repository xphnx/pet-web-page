import { useContext } from 'react';
import { THEME_LOCALSTORAGE__KEY } from '@/shared/const/localstorage';
import { ThemeContext, ThemeEnum } from './ThemeContext';

interface UseThemeResult {
  theme: ThemeEnum;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    setTheme(newTheme);
    localStorage.setItem(THEME_LOCALSTORAGE__KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
