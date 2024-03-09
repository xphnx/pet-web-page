import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib';
import { Loader2 } from 'lucide-react';
import classes from './Button.module.scss';

export enum ButtonThemeEnum {
  GHOST = 'ghost',
}

export enum ButtonSizeEnum {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeEnum;
  square?: boolean;
  size?: ButtonSizeEnum;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ className, theme, square, size, isLoading, children, ...rest }) => {
  const mods: Record<string, boolean> = {
    [classes.square]: square,
    [classes.loading]: isLoading,
  };

  const additionalClasses = [className, classes[theme], classes[size]];

  return (
    <button className={classNames(classes.Button, mods, additionalClasses)} disabled={isLoading} {...rest}>
      {children}
      {isLoading && <Loader2 />}
    </button>
  );
};
