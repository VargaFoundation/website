import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import fr from './locales/fr.json'
import zh from './locales/zh.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      zh: { translation: zh }
    },
    // Always fall back to English
    fallbackLng: ['en'],
    // Limit to supported languages only
    supportedLngs: ['en', 'fr', 'zh'],
    // Normalize detected locales like fr-FR -> fr
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    // Language detection & persistence
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
      htmlTag: typeof document !== 'undefined' ? document.documentElement : undefined,
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
  })

export default i18n