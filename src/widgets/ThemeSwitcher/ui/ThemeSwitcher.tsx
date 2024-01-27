import { FC } from 'react';

import { useTheme, ThemeEnum } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemeEnum } from '@/shared/ui';
import LightThemeIcon from '@/shared/assets/icons/light-theme.svg';
import DarkThemeIcon from '@/shared/assets/icons/dark-theme.svg';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
        className={classNames(classes.ThemeSwitcher, {}, [className])}
        theme={ButtonThemeEnum.GHOST}
        onClick={toggleTheme}
    >
        {theme === ThemeEnum.DARK ? <LightThemeIcon stroke="#f5f8ff" /> : <DarkThemeIcon stroke="#34495e" />}
    </Button>
  )
}