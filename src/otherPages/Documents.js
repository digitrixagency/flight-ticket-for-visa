import React from "react";
import "../index.css";
import "../responsive.css";
import "../otherPages/Documents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blueBox from "../images/blueBox.png";
import { useTranslation } from "react-i18next";

const Documents = () => {
  const { t } = useTranslation(); // Get current language from i18n

  return (
    <div className="container-fluid documentsBg mt-5 pt-5">
      <div className="container pb-5">
        <div className="container w-75">
          <div className="text-center mb-5 mx-5">
            <h1>{t("document.Head")}</h1>
            <h6 className="fw-normal">{t("document.Subhead")}</h6>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title1")}</h3>
                <p className="docPTag">{t("document.content1")}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3 columnReverse">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <div className="d-flex align-items-start flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title2")}</h3>
                <p className="docPTag">{t("document.content2")}</p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title3")}</h3>
                <p className="docPTag">{t("document.content3")}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3 columnReverse">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <div className="d-flex align-items-start flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title4")}</h3>
                <p className="docPTag">{t("document.content4")}</p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title5")}</h3>
                <p className="docPTag">{t("document.content5")}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3 columnReverse">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <div className="d-flex align-items-start flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title6")}</h3>
                <p className="docPTag">{t("document.content6")}</p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title7")}</h3>
                <p className="docPTag">{t("document.content7")}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3 columnReverse">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <div className="d-flex align-items-start flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title8")}</h3>
                <p className="docPTag">{t("document.content8")}</p>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title9")}</h3>
                <p className="docPTag">{t("document.content9")}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3 columnReverse">
            <div className="col-md-6 d-flex align-items-center justify-content-start">
              <div className="d-flex align-items-start flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">{t("document.title10")}</h3>
                <p className="docPTag">{t("document.content10")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
