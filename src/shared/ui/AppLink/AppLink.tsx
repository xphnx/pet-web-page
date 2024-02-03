import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import classes from './AppLink.module.scss';

export enum AppLinkThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  to: string;
  theme?: AppLinkThemeEnum;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  theme = AppLinkThemeEnum.PRIMARY,
  className,
  children,
  ...restProps
}) => (
  <Link to={to} className={classNames(classes.AppLink, {}, [className, classes[theme]])} {...restProps}>
    {children}
  </Link>
);
