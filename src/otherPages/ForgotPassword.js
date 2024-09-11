import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ForgotPassword.css";
import axios from "axios";
import Swal from "sweetalert2";
import fpBgImg from "../images/fpBgImg.png";
import { useTranslation } from "react-i18next";

const ForgotPassword = ({ onCancel, onSend, language }) => {
  const { t } = useTranslation(); // Get current language from i18n

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/send-reset-password-email",
        { email, language }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "A reset password email has been sent.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          onSend(email);
        });
      } else {
        const errorMessage =
          response.data?.message || "Failed to send reset password email.";
        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      let errorMessage = "An error occurred while sending the email.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="forgot-password-container">
      <img src={fpBgImg} alt="Forgot Password" />
      <div className="forgot-password-content">
        <h2>{t("forgotPassword.title")}</h2>
        <p>{t("forgotPassword.subTitle")}</p>

        <form onSubmit={handleSubmit}>
          <label>{t("forgotPassword.label")}</label>
          <input
            type="email"
            placeholder={t("forgotPassword.placeHolder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="button-group">
            <button type="button" className="cancel-button" onClick={onCancel}>
              {t("forgotPassword.Cancel")}
            </button>
            <button type="submit" className="send-button">
              {t("forgotPassword.Next")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default ForgotPassword;
