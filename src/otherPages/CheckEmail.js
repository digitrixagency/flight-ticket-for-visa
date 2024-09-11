import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './CheckEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'; 
import { useTranslation } from "react-i18next";

const CheckEmail = ({ email }) => {
  const { t } = useTranslation(); // Get current language from i18n

  return (
    <div className="check-email-container">
      <div className="check-email-card">
        <div className="icon-container">
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="5x" className="email-icon" />
        </div>
        <h2>{t("checkEmail.title")}</h2>
        <p>{t("checkEmail.subTitle")} {email}</p>
        <button className="open-gmail-button">
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">{t("checkEmail.openMail")}</a>
        </button>
      </div>
    </div>
  );
};

// Define prop types for CheckEmail
CheckEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default CheckEmail;
