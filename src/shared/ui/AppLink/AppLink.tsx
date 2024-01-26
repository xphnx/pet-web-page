import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  to: string;
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, theme = AppLinkTheme.PRIMARY, className, children, ...restProps }) => {
  return (
    <Link to={to} className={classNames(classes.AppLink, {}, [className, classes[theme]])} {...restProps}>
        { children }
    </Link>
  )
}