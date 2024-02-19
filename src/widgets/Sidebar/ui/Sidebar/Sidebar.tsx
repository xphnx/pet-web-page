import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import About from '@/shared/assets/icons/about.svg';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import Home from '@/shared/assets/icons/home.svg';
import { ROUTE_PATH } from '@/shared/config';
import { classNames } from '@/shared/lib';
import { AppLink, Button, ButtonThemeEnum } from '@/shared/ui';
import { ButtonSizeEnum } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <Button
        data-testid="toggle"
        className={classNames(classes.toggle)}
        theme={ButtonThemeEnum.GHOST}
        size={ButtonSizeEnum.XL}
        onClick={onToggle}
        square
      >
        {isCollapsed ? (
          <ArrowRight className={classes['toggle-icon']} />
        ) : (
          <ArrowLeft className={classes['toggle-icon']} />
        )}
      </Button>
      <div className={classNames(classes.appLinks)}>
        <div className={classNames(classes.appLink)}>
          <AppLink to={ROUTE_PATH.main}>
            <Home />
            <span>{t('MainLink')}</span>
          </AppLink>
        </div>
        <div className={classNames(classes.appLink)}>
          <AppLink to={ROUTE_PATH.about}>
            <About />
            <span>{t('AboutLink')}</span>
          </AppLink>
        </div>
      </div>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher className={classes['theme-switcher']} />
        <LangSwitcher className={classes['lang-switcher']} />
      </div>
    </div>
  );
};
