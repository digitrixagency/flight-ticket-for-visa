import React from "react";
import "../index.css";
import "../responsive.css";
import "../otherPages/Documents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blueBox from "../images/blueBox.png";
const Documents = () => {
  return (
    <div className="container-fluid documentsBg mt-5 pt-5">
      <div className="container pb-5">
        <div className="container w-75">
          <div className="text-center mb-5 mx-5">
            <h1>Essential Documents for Visa Application</h1>
            <h6 className="fw-normal">
              Discover seamless booking experiences with our user-friendly
              platform. Easily reserve flights, hotels, and more with
              confidence, ensuring your travel plans are hassle-free and
              reliable
            </h6>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Flight Itinerary</h3>
                <p className="docPTag">
                  Secure your visa with a valid flight itinerary. Our service
                  provides verifiable flight reservations tailored for visa
                  applications, ensuring flexibility and compliance. Fast
                  delivery within hours.
                </p>
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
                <h3 className="fw-medium mb-4">Hotel Confirmation</h3>
                <p className="docPTag">
                  Ensure your travel plans with a reliable hotel confirmation.
                  We offer quick processing and verifiable hotel bookings
                  tailored for visa applications. Receive your confirmation
                  swiftly within hours.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Visa Cover Letter</h3>
                <p className="docPTag">
                  Craft a personalized cover letter for your visa application.
                  Our expertly written letters highlight your travel purpose,
                  itinerary details, and intent, enhancing your visa approval
                  chances.
                </p>
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
                <h3 className="fw-medium mb-4">Travel Insurance</h3>
                <p className="docPTag">
                  Secure comprehensive travel insurance covering medical
                  emergencies, trip cancellations, and more. Our policies meet
                  embassy requirements and ensure worry-free travel.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Day-wise Planner</h3>
                <p className="docPTag">
                  Plan your trip day-by-day with our personalised itineraries.
                  Tailored to maximise your travel experience, ensuring you see
                  the best of your destination hassle-free.
                </p>
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
                <h3 className="fw-medium mb-4">Schengen Visa Process</h3>
                <p className="docPTag">
                  Navigate the Schengen visa application seamlessly with our
                  comprehensive guide. From document preparation to appointment
                  booking, we simplify the process for your convenience.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Verifiable Documents</h3>
                <p className="docPTag">
                  Verifiable documents are essential for visa applications,
                  ensuring that your itinerary, hotel bookings, and other travel
                  arrangements can be authenticated online by embassies and
                  consulates.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-end flex-column">
                <img src={blueBox} className="blueBoxClass" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
