import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Icon404 from '@/shared/assets/icons/page404.svg';
import { classNames } from '@/shared/lib';
import classes from './Page404.module.scss';

interface Page404Props {
  className?: string;
}

export const Page404: FC<Page404Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.Page404, {}, [className])}>
      <div className={classNames(classes.icon404)}>
        <Icon404 />
      </div>
      {t('PageNotFound')}
    </div>
  );
};
