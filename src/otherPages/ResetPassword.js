import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ResetPassword.css';
import fpBgImg from "../images/fpBgImg.png";
import { useTranslation } from "react-i18next";


const ResetPassword = ({ onCancel, onSend, language }) => {
  const { t } = useTranslation(); // Get current language from i18n

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      // setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/reset-password', {
        token,
        newPassword: password,
      });

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Password reset successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to reset password. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="reset-password-container">
      {/* Illustration section */}
      <div className="illustration-section">
        <img src={fpBgImg} alt={t("resetPassword.title")} />
      </div>

      {/* Form section */}
      <div className="form-section">
        <h2 className="reset-password-header">{t("resetPassword.title")}</h2>

        <form>
          <input
            className="reset-password-input"
            type="password"
            placeholder={t("resetPassword.newPassword")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="reset-password-input"
            type="password"
            placeholder={t("resetPassword.confirmPassword")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {password && confirmPassword && password !== confirmPassword && (
            <p className="password-matching">{t("resetPassword.passwordsNotMatch")}</p>
          )}
          <div className="button-group">
            <button className="button-cancel" type="button" onClick={() => navigate('/')}>
              {t("resetPassword.Cancel")}
            </button>
            <button className="button-reset button-reset-password" type="button" onClick={handleResetPassword}>
              {t("resetPassword.Next")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
