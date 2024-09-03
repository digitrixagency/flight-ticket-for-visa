import React from "react";
import "../index.css";
import "../otherPages/steps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import nextStep from "../images/nextStep.png";
import { useTranslation as myTun } from "react-i18next";

const steps = () => {
  const { t } = myTun(); // Get current language from i18n

  return (
    <div className="container-fluid userCentricBg mt-5 pt-5">
      <div className="container pb-5">
        <div className="container w-75">
          <div className="text-center mb-5">
            <h1>{t("howItWorks.Head")}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img
                src={step1}
                className="stepImg"
                alt={t("howItWorks.title1")}
              />
              <h1 className="stepHeader">{t("howItWorks.title1")}</h1>
              <p className="stepText">{t("howItWorks.content1")}</p>
            </div>
            <div>
              <img
                src={nextStep}
                className="nextStepImg"
                alt={t("howItWorks.alt")}
              />
            </div>
            <div className="text-center">
              <img
                src={step2}
                className="stepImg"
                alt={t("howItWorks.title2")}
              />
              <h1 className="stepHeader">{t("howItWorks.title2")}</h1>
              <p className="stepText">{t("howItWorks.content2")}</p>
            </div>
            <div>
              <img
                src={nextStep}
                className="nextStepImg"
                alt={t("howItWorks.alt")}
              />
            </div>
            <div className="text-center">
              <img
                src={step3}
                className="stepImg"
                alt={t("howItWorks.title3")}
              />
              <h1 className="stepHeader"> {t("howItWorks.title3")}</h1>
              <p className="stepText">{t("howItWorks.content3")}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default steps;
