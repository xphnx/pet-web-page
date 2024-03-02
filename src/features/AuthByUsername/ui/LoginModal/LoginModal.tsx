import { FC } from 'react';
import { classNames } from '@/shared/lib';
import { Modal } from '@/shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames(classes.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
    <LoginForm />
  </Modal>
);
