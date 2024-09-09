import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import CheckEmail from "./CheckEmail";
import ResetPassword from "./ResetPassword";
import { useTranslation } from "react-i18next";
const ForgotPasswordFlow = () => {
  const { i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleSend = () => {
    setStep(2);
  };

  const handleReset = () => {
    setStep(3);
  };

  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="forgot-password-flow">
      {step === 1 && (
        <ForgotPassword
          onSend={handleSend}
          onCancel={handleCancel}
          language={i18n.language}
        />
      )}
      {step === 2 && <CheckEmail email={email} />}
      {step === 3 && (
        <ResetPassword
          onReset={handleReset}
          onCancel={handleCancel}
          language={i18n.language}
        />
      )}
    </div>
  );
};

export default ForgotPasswordFlow;
