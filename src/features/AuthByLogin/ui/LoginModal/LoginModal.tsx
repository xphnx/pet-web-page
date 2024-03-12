import { FC, Suspense } from 'react';
import { classNames } from '@/shared/lib';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginForm />
    </Suspense>
  </Modal>
);
