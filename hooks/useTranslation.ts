import { useLanguage } from '../contexts/LanguageContext';
import en from '../i18n/en';
import ar from '../i18n/ar';

const translations = { en, ar };

// Helper function to get nested values from an object using a dot-separated key
// FIX: Changed return type to `any` to support returning strings, objects, or arrays for translation.
const getNestedTranslation = (obj: any, key: string): any => {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const useTranslation = () => {
  const { language } = useLanguage();

  // FIX: Changed return type to `any` to resolve type conflicts in components.
  // This allows `t` to be used for both simple string translations and for retrieving structured data like arrays of objects from translation files.
  const t = (key: string): any => {
    const translation = getNestedTranslation(translations[language], key);
    if (!translation) {
      console.warn(`Translation not found for key: ${key}`);
      // Fallback to English
      const fallback = getNestedTranslation(translations['en'], key);
      return fallback || key;
    }
    return translation;
  };

  return { t };
};
