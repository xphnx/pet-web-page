import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Button, Modal } from '@/shared/ui';
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
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        {t('SignUp')}
      </Modal>
    </div>
  );
};
