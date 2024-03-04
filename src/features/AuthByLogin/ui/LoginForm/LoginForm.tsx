import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';
import { getLoginFormState } from '../../model/selectors/getLoginForm/getLoginFormState';
import { authByLogin } from '../../model/services/authByLogin/authByLogin';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const dispatch = useDispatch();
  const { login, password } = useSelector(getLoginFormState);
  const { t } = useTranslation();

  const onChangeLogin = useCallback(
    (login: string) => {
      dispatch(loginActions.setLogin(login));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onSubmitForm = useCallback(() => {
    dispatch(authByLogin({ login, password }));
  }, [dispatch, login, password]);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input placeholder={t('Login')} value={login} onChange={onChangeLogin} />
      <Input placeholder={t('Password')} value={password} onChange={onChangePassword} />
      <Button onClick={onSubmitForm}>{t('SignIn')}</Button>
    </div>
  );
});
