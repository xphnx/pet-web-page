import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('mainPage');

  useEffect(() => {
    throw Error;
  }, []);

  return <div>{t('MainPage')}</div>;
};

export default MainPage;
