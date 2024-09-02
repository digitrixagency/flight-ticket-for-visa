import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mobileImage from "./images/mobile.png";
import ot from "./images/ot.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const redirectToFR = () => {
    navigate("/Flight-Reservation");
  };
  const redirectToHB = () => {
    navigate("/Hotel-Booking");
  };
  const redirectToRNHR = () => {
    navigate("/Flight+Hotel-Reservation");
  };

  return (
    <div className="container homeContainerDiv px-5 pb-5">
      <div className="container px-5 homeDivInDiv">
        <div className="row align-items-center ms-4 me-5 mt-5 backGroundImage">
          <div className="col-md-6 ps-0 pt-5 zIndex1">
            <h2 className="display-5 mb-4">{t("title1")}</h2>
            <h2 className="display-6 fw-normal text-secondary mb-3">
              {t("title2")}
            </h2>
            <p className="lead textUnderTitlesHome">{t("description")}</p>

            <div className="d-flex justify-content-between px-2 threeBtnInHome">
              <button
                type="button"
                className="btn btn-primary homePageBtn px-3"
                onClick={redirectToFR}
              >
                Flight Reservation
              </button>
              <button
                type="button"
                className="btn btn-primary homePageBtn px-4"
                onClick={redirectToHB}
              >
                Hotel Booking
              </button>
              <button
                type="button"
                className="btn btn-primary homePageBtn px-4"
                onClick={redirectToRNHR}
              >
                Flight + Hotel
              </button>
            </div>
          </div>
          <img src={ot} className="otImg" />
          <div className="col-md-6 d-flex justify-content-center align-items-end">
            <div className="positionDiv">
              <img
                src={mobileImage}
                alt="Flight and hotel reservations"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
