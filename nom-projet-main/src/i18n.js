import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// الترجمة لكل لغة
const resources = {
  en: {
    translation: {
      accueil: "Home",
      cours: "Courses",
      contact: "Contact",
      register: "Register",
      login: "Login",
      close: "Close"
    }
  },
  fr: {
    translation: {
      accueil: "Accueil",
      cours: "Cours",
      contact: "Contact",
      register: "Inscription",
      login: "Connexion",
      close: "Fermer"
    }
  },
  ar: {
    translation: {
      accueil: "الرئيسية",
      cours: "الدورات",
      contact: "اتصل بنا",
      register: "تسجيل",
      login: "تسجيل الدخول",
      close: "إغلاق"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
