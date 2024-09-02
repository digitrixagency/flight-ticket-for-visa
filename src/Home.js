import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mobileImage from "./images/mobile.png";
import ot from "./images/ot.png";
const Home = () => {
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
            <h2 className="display-5 mb-4">
              Get Your Flight Reservations and Hotel Bookings for Visa Here
            </h2>
            <h2 className="display-6 fw-normal text-secondary mb-3">
              ONE-STOP SHOP
            </h2>
            <p className="lead textUnderTitlesHome">
            Secure your visa with ease using our verifiable flight reservations and hotel bookings. Whether you need a single document or a complete package, we provide authentic and affordable options to streamline your visa application process. Trust us for quick, reliable service.
            </p>
            {/* <p className="textUnderTitlesHome">
              Trusted by thousands, we simplify visa processing with documents
              that meet embassy standards, ensuring a smooth travel planning
              experience.
            </p> */}
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
