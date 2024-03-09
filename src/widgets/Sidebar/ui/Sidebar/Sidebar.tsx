import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeftSquare, ArrowRightSquare, Indent, Store } from 'lucide-react';
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
        className={classes.toggle}
        theme={ButtonThemeEnum.GHOST}
        size={ButtonSizeEnum.XL}
        onClick={onToggle}
        square
      >
        {isCollapsed ? <ArrowRightSquare /> : <ArrowLeftSquare />}
      </Button>
      <div className={classes.appLinks}>
        <div className={classes.appLink}>
          <AppLink to={ROUTE_PATH.main}>
            <Store />
            <span>{t('MainLink')}</span>
          </AppLink>
        </div>
        <div className={classes.appLink}>
          <AppLink to={ROUTE_PATH.about}>
            <Indent />
            <span>{t('AboutLink')}</span>
          </AppLink>
        </div>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher className={classes['theme-switcher']} />
        <LangSwitcher className={classes['lang-switcher']} />
      </div>
    </div>
  );
};
