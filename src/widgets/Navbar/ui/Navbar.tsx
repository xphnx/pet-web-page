import { FC } from 'react';

import { ROUTE_PATH } from '@/shared/config'
import { classNames } from '@/shared/lib'
import { AppLink } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={classNames(classes.links)}>
            <AppLink to={ROUTE_PATH.main}>Main</AppLink>
            <AppLink to={ROUTE_PATH.about}>About</AppLink>
        </div>
    </div>
  )
}