import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { Button, Input, Text } from '@/shared/ui';
import { TextTheme } from '@/shared/ui/Text/Text';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import { getLoginFormLoading } from '../../model/selectors/getLoginFormLoading/getLoginFormLoading';
import { authByLogin } from '../../model/services/authByLogin/authByLogin';
import { loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const [formFieldsValue, setFormFieldsValue] = useState<{ login: string; password: string }>({
    login: '',
    password: '',
  });
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoginFormLoading);
  const error = useSelector(getLoginFormError);
  const { t } = useTranslation();

  const onChangeLogin = useCallback((login: string) => {
    setFormFieldsValue((prev) => ({ ...prev, login }));
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setFormFieldsValue((prev) => ({ ...prev, password }));
  }, []);

  const onSubmitForm = useCallback(() => {
    dispatch(authByLogin({ login: formFieldsValue.login, password: formFieldsValue.password }));
  }, [dispatch, formFieldsValue]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(classes.LoginForm, {}, [className])}>
        <Text title={t('AuthForm')} />
        {error && <Text text={t('WrongFormValues')} theme={TextTheme.ERROR} />}
        <Input placeholder={t('Login')} value={formFieldsValue.login} onChange={onChangeLogin} />
        <Input placeholder={t('Password')} value={formFieldsValue.password} onChange={onChangePassword} />
        <Button onClick={onSubmitForm} isLoading={isLoading}>
          {t('SignIn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
