import React from "react";
import "../index.css";
import "../otherPages/userCentric.css";
import "bootstrap/dist/css/bootstrap.min.css";
import headSet from "../images/headSet.png";
import graph from "../images/graph.png";
import tabs from "../images/tabs.png";
import folder from "../images/folder.png";
import docu from "../images/docu.png";
import pie from "../images/pie.png";
import { useTranslation as myTun } from "react-i18next";

const userCentric = () => {
  const { t } = myTun(); // Get current language from i18n

  return (
    <div className="container-fluid userCentricBg mt-5 pt-5">
      <div className="container pb-5">
        <div className="container w-75">
          <div className="text-center mb-5">
            <h1>{t("whyChooseUs.Head")}</h1>
            <h6 className="fw-normal">{t("whyChooseUs.Subhead")}</h6>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 g-0 g-lg-0">
            <div className="col-md-4">
              <div className="card cardBG card11">
                <div className="card-body text-center">
                  <img src={headSet} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title1")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content1")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cardBG card12">
                <div className="card-body text-center">
                  <img src={graph} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title2")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cardBG card13">
                <div className="card-body text-center">
                  <img src={tabs} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title3")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cardBG card21">
                <div className="card-body text-center">
                  <img src={docu} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title4")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content4")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cardBG card22">
                <div className="card-body text-center">
                  <img src={folder} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title5")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content5")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cardBG card23">
                <div className="card-body text-center">
                  <img src={pie} className="cardImage2" alt="..." />
                  <h2>{t("whyChooseUs.title6")}</h2>
                  <p className="text-center px-3">
                    {t("whyChooseUs.content6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userCentric;
