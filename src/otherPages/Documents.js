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
            <h1>Essential Visa Application Documents</h1>
            <h6 className="fw-normal">
            Secure your visa approval with our essential document list. From flight reservations to hotel bookings, we provide everything needed for a seamless application process.
            </h6>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Valid Passport</h3>
                <p className="docPTag">
                  A valid passport is essential for visa applications. Ensure it has at least six months' validity from your application date and enough blank pages for visa stamps. This key document confirms your identity and is necessary for processing your visa. Check your passport’s validity and condition before starting your application to avoid delays.
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
                <h3 className="fw-medium mb-4">Visa Application Form</h3>
                <p className="docPTag">
                Submit a completed visa application form, filled with accurate and truthful details. Ensure all sections are thoroughly filled out and the form is signed and dated where required. This document is crucial for processing your visa, as it provides essential information about your travel plans and personal details. Double-check for any errors or omissions to avoid delays in your visa application process.

                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Passport Photos</h3>
                <p className="docPTag">
                Provide recent passport-sized photographs that adhere to the specific requirements of your destination country. These photos must meet size, background, and quality standards to ensure they are accepted with your visa application. Verify the guidelines provided by the embassy or consulate to ensure compliance and avoid potential issues. Properly formatted photos are essential for the accurate identification and processing of your visa application.
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
                <h3 className="fw-medium mb-4">Flight Itinerary</h3>
                <p className="docPTag">
                A comprehensive flight itinerary is essential, detailing your entry and exit flights, including dates, flight numbers, and airlines. This document confirms your travel plans and helps validate your visa application. Ensure all details match your travel schedule and adhere to the requirements of the visa-issuing authority. Accurate and clear flight information facilitates a smooth visa approval process.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Hotel Booking</h3>
                <p className="docPTag">
                A confirmed hotel booking or proof of accommodation is crucial for your visa application. It should cover your entire stay, showing your lodging details and dates. This document verifies that you have a place to stay during your visit and aligns with the visa requirements of your destination. Ensure your reservation is valid and easily verifiable to streamline the visa approval process.
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
                Travel medical insurance is essential for your visa application. It must cover your entire stay and meet the minimum coverage requirements set by your destination country. This insurance provides financial protection for unforeseen medical expenses, ensuring you are covered throughout your trip. Having adequate travel insurance not only meets visa requirements but also offers peace of mind during your travels.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Bank Statements</h3>
                <p className="docPTag">
                Recent bank statements are crucial to demonstrate you have sufficient funds for your trip. They should reflect your financial stability, showing enough money to cover your stay and other expenses. These statements help confirm that you can support yourself during your visit, meeting the financial requirements of your visa application.
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
                <h3 className="fw-medium mb-4">Invitation Letter</h3>
                <p className="docPTag">
                An invitation letter from a host in the destination country, if applicable, is essential. It should detail the purpose of your visit, the duration of your stay, and any other relevant information. This letter helps establish the legitimacy of your trip and confirms the support of your host during your stay.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className="d-flex align-items-start flex-column">
                <h3 className="fw-medium mb-4">Proof of Employment</h3>
                <p className="docPTag">
                An employment letter or proof of employment is required, detailing your job position, salary, and leave approval. This document verifies your current employment status and ensures that you have a stable income and authorized time off, supporting your visa application.
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
                <h3 className="fw-medium mb-4">Visa Fee</h3>
                <p className="docPTag">
                Submit the payment receipt for the visa application fee, which is essential for processing your application. Ensure the receipt reflects the correct amount as specified by the consulate or embassy. This receipt acts as proof of payment and is a crucial document in your visa application process, demonstrating that you have met the financial requirements for visa processing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Documents;
