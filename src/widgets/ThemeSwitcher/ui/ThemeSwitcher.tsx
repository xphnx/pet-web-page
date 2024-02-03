import { FC } from 'react';
import { ThemeEnum, useTheme } from '@/app/providers/ThemeProvider';
import DarkThemeIcon from '@/shared/assets/icons/dark-theme.svg';
import LightThemeIcon from '@/shared/assets/icons/light-theme.svg';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemeEnum } from '@/shared/ui';
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
      {theme === ThemeEnum.DARK ? (
        <LightThemeIcon className={classNames(classes.Icon)} />
      ) : (
        <DarkThemeIcon className={classNames(classes.Icon)} />
      )}
    </Button>
  );
};
