import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="navbar navbar-expand bg-light mb-4">
      <div className="container">
        <span className="navbar-brand">{t('appTitle')}</span>
        <button
          className="btn btn-outline-secondary ms-auto"
          onClick={toggleLang}
        >
          {i18n.language === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
