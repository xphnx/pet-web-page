import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from './ThemeContext';

interface UseThemeResult {
  theme: ThemeEnum;
  toggleTheme: () => void;
}

const documentBodyThemeToggle = (theme: ThemeEnum): void => {
  document.body.className = '';
  document.body.classList.add(theme);
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => documentBodyThemeToggle(theme), [theme]);

  const toggleTheme = () => {
    const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
