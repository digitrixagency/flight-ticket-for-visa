import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import "./LanguageSwitcher.css"; // Import the CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Define available languages
  const languages = [
    { code: 'en', label: 'English', countryCode: 'US' },
    { code: 'hi', label: 'हिन्दी', countryCode: 'IN' },
    { code: 'id', label: 'Indonesian', countryCode: 'ID' }
    // Add more languages here
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    const currentPath = window.location.pathname.replace(/^\/[^/]*/, "");
    navigate(`/${lng}${currentPath}`, { replace: true });
    setSelectedLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="dropdown-header"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {languages.find(lang => lang.code === selectedLanguage) && (
          <>
            <ReactCountryFlag
              countryCode={languages.find(lang => lang.code === selectedLanguage).countryCode}
              svg
              className="flag-icon"
              aria-label={languages.find(lang => lang.code === selectedLanguage).label}
            />
            <span className="language-text">
              {languages.find(lang => lang.code === selectedLanguage).label}
            </span>
          </>
        )}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="dropdown-item"
              aria-label={`Switch to ${lang.label}`}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                className="flag-icon"
              />
              <span className="language-text">{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
