import { useTranslation } from "react-i18next"

const MainPage = () => {
  const {t} = useTranslation('mainPage');
  return (
    <div>{t('Main Page')}</div>
  )
}

export default MainPage