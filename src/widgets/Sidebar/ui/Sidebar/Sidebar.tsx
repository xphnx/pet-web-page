import { FC, useState } from 'react';

import { classNames } from '@/shared/lib';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { Button, ButtonThemeEnum } from '@/shared/ui';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const onToggle = () => setIsCollapsed(prev => !prev);

  return (
    <div className={classNames(classes.Sidebar, {[classes.collapsed]: isCollapsed}, [className])}>
        <Button theme={ButtonThemeEnum.GHOST} onClick={onToggle}>{isCollapsed ? '>' : '<'}</Button>
        <div className={classNames(classes.switchers)}>
            <ThemeSwitcher />
            {/* Language switcher */}
        </div>
    </div>
  )
}