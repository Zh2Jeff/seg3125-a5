import React from 'react';
import { useTranslation } from 'react-i18next';
export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  return (
    <button onClick={()=>i18n.changeLanguage(i18n.language==='en'?'fr':'en')}>
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
