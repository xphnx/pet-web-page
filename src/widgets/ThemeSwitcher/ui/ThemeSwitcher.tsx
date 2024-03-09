import { FC } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeEnum, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemeEnum } from '@/shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={classNames('', {}, [className])} theme={ButtonThemeEnum.GHOST} onClick={toggleTheme}>
      {theme === ThemeEnum.DARK ? <Sun /> : <Moon />}
    </Button>
  );
};
