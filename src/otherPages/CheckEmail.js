import React from 'react';
import './CheckEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
const CheckEmail = ({ email }) => {
  return (
    <div className="check-email-container">
       <FontAwesomeIcon icon={faEnvelope} size='2x'/>
      <h2>Check your email</h2>
      <p>We've sent a password recovery instruction to {email}</p>
      <button className="open-gmail-button">
        <a href="https://mail.google.com">Open Mail</a>
      </button>
    </div>
  );
};

export default CheckEmail;
