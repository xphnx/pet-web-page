import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPageHandle = () => location.reload();

  return (
    <div className={classNames(classes.ErrorPage, {}, [className])}>
      {t('FatalError')}
      <Button onClick={reloadPageHandle}>{t('ReloadPage')}</Button>
    </div>
  );
};
