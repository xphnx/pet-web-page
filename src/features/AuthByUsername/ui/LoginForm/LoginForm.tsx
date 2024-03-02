import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  const [loginValue, setLoginValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input placeholder={t('Login')} value={loginValue} onChange={setLoginValue} />
      <Input placeholder={t('Password')} value={passwordValue} onChange={setPasswordValue} />
      <Button>{t('SignIn')}</Button>
    </div>
  );
};
