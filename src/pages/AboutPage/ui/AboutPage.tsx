import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('aboutPage');

  return <div>{t('AboutPage')}</div>;
};

export default AboutPage;
