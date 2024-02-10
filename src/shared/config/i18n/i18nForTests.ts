import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  resources: { ru: { translations: {} } },
});

export default i18n;
