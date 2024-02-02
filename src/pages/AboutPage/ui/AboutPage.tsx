import { Button, ButtonThemeEnum } from "@/shared/ui";
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const {t} = useTranslation('aboutPage');
  return (
    <div>{t('About Page')}</div>
  )
}

export default AboutPage