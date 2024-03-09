import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByLogin';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const { authorizedUser } = useSelector(getUser);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => setIsOpen((prev) => !prev), []);
  const onSignOut = () => dispatch(userActions.signOutAuthorizedUser());

  if (authorizedUser) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <Button className={classes.links} onClick={onSignOut}>
          {t('SignOutLink')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Button className={classes.links} onClick={onToggleModal}>
        {t('SignInLink')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};
