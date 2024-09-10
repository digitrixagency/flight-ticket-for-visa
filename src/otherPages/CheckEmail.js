import React from 'react';
import './CheckEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'; 

const CheckEmail = ({ email }) => {
  return (
    <div className="check-email-container">
      <div className="check-email-card">
        <div className="icon-container">
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="5x" className="email-icon" />
        </div>
        <h2>Check your email</h2>
        <p>We've sent password recovery instructions to {email}</p>
        <button className="open-gmail-button">
          <a href="https://mail.google.com">Open Mail</a>
        </button>
      </div>
    </div>
  );
};

export default CheckEmail;
