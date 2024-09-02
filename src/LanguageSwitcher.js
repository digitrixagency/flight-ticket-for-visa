import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Initialize language state based on URL or default to 'en'
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get('lng') || 'en';
    i18n.changeLanguage(urlLanguage);
    setSelectedLanguage(urlLanguage);
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);

    // Update URL without reloading the page
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lng', lng);
    navigate(`?${urlParams.toString()}`); // Use navigate to update the URL
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
