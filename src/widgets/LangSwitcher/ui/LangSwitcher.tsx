import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import { Button, ButtonThemeEnum } from '@/shared/ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button theme={ButtonThemeEnum.GHOST} className={classNames('', {}, [className])} onClick={toggleLanguage}>
      {t('lang')}
    </Button>
  );
};
