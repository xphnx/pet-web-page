import { FC, useState } from 'react';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemeEnum } from '@/shared/ui';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, { [classes.collapsed]: isCollapsed }, [className])}
    >
      <Button data-testid="toggle" theme={ButtonThemeEnum.GHOST} onClick={onToggle}>
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={classNames(classes.switchers)}>
        <ThemeSwitcher className={classes['theme-switcher']} />
        <LangSwitcher className={classes['lang-switcher']} />
      </div>
    </div>
  );
};
