import { FC } from 'react';

import { ROUTE_PATH } from '@/shared/config'
import { classNames } from '@/shared/lib'
import { AppLink } from '@/shared/ui';

import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classNames(classes.links)}>
            <AppLink to={ROUTE_PATH.main}>{t('Main Link')}</AppLink>
            <AppLink to={ROUTE_PATH.about}>{t('About Link')}</AppLink>
        </div>
    </div>
  )
}