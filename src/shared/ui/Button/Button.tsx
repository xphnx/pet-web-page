import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib';

import classes from './Button.module.scss';

export enum ButtonThemeEnum {
    GHOST = 'ghost',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeEnum;
}

export const Button: FC<ButtonProps> = ({ className, theme, children, ...rest }) => {
  return (
    <button className={classNames(classes.Button, {}, [className, classes[theme]])} {...rest}>
        { children }
    </button>
  )
}