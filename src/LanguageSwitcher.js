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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    const currentPath = window.location.pathname.replace(/^\/[^\/]*/, "");
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
        {selectedLanguage === "en" && (
          <>
            <ReactCountryFlag
              countryCode="US"
              svg
              className="flag-icon"
              aria-label="English"
            />
            <span className="language-text">English</span>
          </>
        )}
        {selectedLanguage === "hi" && (
          <>
            <ReactCountryFlag
              countryCode="IN"
              svg
              className="flag-icon"
              aria-label="Hindi"
            />
            <span className="language-text">हिन्दी</span>
          </>
        )}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li
            onClick={() => changeLanguage("en")}
            className="dropdown-item"
            aria-label="Switch to English"
          >
            <ReactCountryFlag
              countryCode="US"
              svg
              className="flag-icon"
            />
            <span className="language-text">English</span>
          </li>
          <li
            onClick={() => changeLanguage("hi")}
            className="dropdown-item"
            aria-label="Switch to Hindi"
          >
            <ReactCountryFlag
              countryCode="IN"
              svg
              className="flag-icon"
            />
            <span className="language-text">हिन्दी</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
