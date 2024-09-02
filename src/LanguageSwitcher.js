import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lng } = useParams(); // Get current language from URL
  const [selectedLanguage, setSelectedLanguage] = useState(lng || 'en');

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
      setSelectedLanguage(lng);
    }
  }, [lng, i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);

    // Update URL without reloading the page
    const url = new URL(window.location.href);
    const newPathname = `/${lng}${url.pathname.replace(/^\/[a-z]{2}/, '')}`;
    navigate(newPathname + url.search);
  };

  return (
    <div className="language-switcher">
      <select
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-dropdown"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
