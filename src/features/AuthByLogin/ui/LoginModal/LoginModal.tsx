import { FC } from 'react';
import { classNames } from '@/shared/lib';
import { Modal } from '@/shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose}>
    <LoginForm />
  </Modal>
);
