import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByLogin';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button className={classes.links} onClick={onToggleModal}>
        {t('SignUpLink')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};
