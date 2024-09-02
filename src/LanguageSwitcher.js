import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    const currentPath = window.location.pathname.replace(/^\/[^\/]*/, ''); // Remove current language from path
    navigate(`/${lng}${currentPath}`, { replace: true });
  };

  return (
    <div className="language-switcher">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="language-dropdown"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
