import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import classes from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, ...restProps }) => (
  <Link to={to} className={classNames(classes.AppLink, {}, [className])} {...restProps}>
    {children}
  </Link>
);
