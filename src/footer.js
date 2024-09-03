import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./otherPages/steps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQ from "./images/FAQ.png";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = ({ hideDiv }) => {
  const { t, i18n } = useTranslation(); // Get current language from i18n
  const navigate = useNavigate();

  const currentLanguage = i18n.language || "en"; // Default to 'en' if language is not set

  const redirectToFR = () => {
    navigate(`/${currentLanguage}/Flight-Reservation`);
    window.scrollTo(0, 0); // Scroll to the top after redirect
  };
  const redirectToHB = () => {
    navigate(`/${currentLanguage}/Hotel-Booking`);
    window.scrollTo(0, 0); // Scroll to the top after redirect
  };
  const redirectToRNHR = () => {
    navigate(`/${currentLanguage}/Flight+Hotel-Reservation`);
    window.scrollTo(0, 0); // Scroll to the top after redirect
  };

  return (
    <>
      {!hideDiv && (
        <div className="container-fluid footerBg1 pt-5">
          <div className="container pb-5">
            <div className="container footerFoot">
              <div className="text-center mb-5">
                <h1 className="plansHeader">Pricing & Plans</h1>
                <p className="plansSubHeader">
                  Amet minim mollit non deserunt ullamco.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-4 plansBG p-0 mx-3" id="mainDiv1">
                  <div className="text-start px-4 py-3 plansBG2" id="subDiv1">
                    <p className="planTitle">Flight Reservation</p>
                    <p className="planPrice">
                      <span className="planAmount">$15</span>/ Per Person
                    </p>
                    <p className="planText">Verifiable on Airlines Website.</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Unlimited Flights
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Airlines Confirmation
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 4 Corrections
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Confirmed PNR
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Multi Traveler Discount
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cancellations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;No Obligations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Verifiable Flight Itinerary
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cover & NOC Letter
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Urgent Delivery
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 2 Weeks Validity
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Worldwide Confirmation
                      </li>
                    </ul>

                    <div className="orderDiv" id="orderDiv1">
                      <button
                        className="orderBtn py-3"
                        id="orderBtn1"
                        onClick={redirectToFR}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-4 plansBG p-0 mx-3 plansBgImp"
                  id="mainDiv2"
                >
                  <div
                    className="text-start px-4 py-3 plansBG2 plansBorderImp"
                    id="subDiv2"
                  >
                    <p className="planTitle">Flight + &nbsp; Hotel</p>
                    <p className="planPrice">
                      <span className="planAmount">$24</span>/ Per Person
                    </p>
                    <p className="planText">(Combo Package)</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Unlimited Flights & Hotels
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 4 Corrections
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;100% Confirm bookings
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cancellations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;No Obligations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Verifiable Bookings
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 2 Weeks Validity
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cover & NOC Letter
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Urgent Delivery
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Worldwide Confirmation
                      </li>
                    </ul>

                    <div className="orderDiv orderDivImp" id="orderDiv2">
                      <button
                        className="orderBtn py-3 orderBtnImp"
                        id="orderBtn2"
                        onClick={redirectToRNHR}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 plansBG p-0 mx-3" id="mainDiv3">
                  <div className="text-start px-4 py-3 plansBG2" id="subDiv3">
                    <p className="planTitle">Hotel Booking</p>
                    <p className="planPrice">
                      <span className="planAmount">$15</span>/ Per Person
                    </p>
                    <p className="planText">Proof of Accommodation</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Unlimited Hotels
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Verify by Email & Phone
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 4 Corrections
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Upto 2 Weeks Validity
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Multi Traveler Discount
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cancellations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;100% Valid Booking
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;No Obligations
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Cover & NOC Letter
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Free Urgent Delivery
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;Worldwide Confirmation
                      </li>
                    </ul>

                    <div className="orderDiv" id="orderDiv3">
                      <button
                        className="orderBtn py-3"
                        id="orderBtn3"
                        onClick={redirectToHB}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr className="hrStyle" />
      <div className="container-fluid footerBg2 pt-5">
        <div className="container pb-5">
          <div className="container footerFoot">
            <div className="row faqRowDiv">
              <div className="col-5">
                <div className="text-center">
                  <p className="logoImg text-center">
                    Frequently Asked Questions?
                  </p>
                  <img src={FAQ} className="FAQImg mt-5 pt-4" />
                </div>
              </div>
              <div className="col-7 fixedHeightDetail">
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3" open="true">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        What is a flight itinerary for a visa application?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        A flight itinerary is a document showing your planned
                        travel details, including flight dates and numbers,
                        required by embassies to assess your visa application.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        How can I get a flight reservation for my visa?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        You can obtain a flight reservation through our service.
                        We provide verifiable flight itineraries that meet visa
                        requirements quickly and efficiently.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        Do I need a hotel booking for my visa application?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Yes, most visa applications require proof of
                        accommodation. We offer confirmed hotel bookings that
                        ensure your stay is covered for the entire duration of
                        your trip.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        What is included in your travel insurance?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Our travel insurance covers medical emergencies, trip
                        cancellations, and other unforeseen events, providing
                        the minimum coverage required for most visa
                        applications.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        How long does it take to receive the documents?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Typically, documents are delivered via email within 24
                        to 48 hours, ensuring you have ample time to submit them
                        with your visa application.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        Can I make changes to my flight or hotel booking?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Yes, we offer unlimited corrections to your flight and
                        hotel bookings at no additional charge, ensuring all
                        details are accurate before submission.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        Is the travel insurance valid for all countries?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Our travel insurance is valid internationally and meets
                        the coverage requirements for most visa applications,
                        including Schengen and other major destinations.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        How do I know if my flight itinerary is verifiable?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Our flight itineraries are issued through our network of
                        airlines and travel agencies, ensuring they are
                        verifiable and accepted by consulates and embassies.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">What if my visa is denied?</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        If your visa application is denied, you may contact us
                        to discuss possible solutions or request adjustments to
                        your documents. Refund policies are outlined in our
                        terms.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        Can I use the documents for multiple visa applications?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Documents such as flight itineraries and hotel bookings
                        are typically specific to each visa application. For
                        multiple applications, separate documents may be
                        required.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                        How do I choose the right plan for my needs?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                        Select a plan based on your travel requirements. We
                        offer flexible options for flight reservations, hotel
                        bookings, and insurance to suit various visa application
                        needs.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                      Are the documents you provide legally valid?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                      Yes, all documents provided are legally valid and meet the requirements set by embassies and consulates for visa applications.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                      Can I cancel my order if needed?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                      Yes, you can cancel your order within our specified cancellation period. Please refer to our refund policy for details on how to process cancellations.
                      </p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">
                      What types of payment do you accept?
                      </p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">
                      We accept various payment methods, including credit/debit cards and online payment systems, ensuring a secure and convenient transaction process for our customers.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrStyle" />
      <div className="container-fluid footerBg3 pt-5">
        <div className="container pb-5">
          <div className="container footerFoot">
            <div className="row">
              <div className="col-5">
                <div>
                  {/* <img src={logo} className='logoImg'/> */}
                  <p className="logoImg">LOGO</p>
                  <p className="textUL">
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sit
                    enim nec, proin faucibus nibh et sagittis a. Lacinia purus
                    ac amet.
                  </p>
                </div>
              </div>
              <div className="col-7">
                <div className="row text-center g-1 linkFootROwDiv">
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      Contact Us
                    </a>
                    <a href="#" className="linkIfoot">
                      Work With us
                    </a>
                    <a href="#" className="linkIfoot">
                      Terms of Services
                    </a>
                    <a href="#" className="linkIfoot">
                      Advertise
                    </a>
                    <a href="#" className="linkIfoot">
                      Site Map
                    </a>
                    <a href="#" className="linkIfoot">
                      Trust
                    </a>
                  </div>
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      About Us
                    </a>
                    <a href="#" className="linkIfoot">
                      Privacy Policy
                    </a>
                    <a href="#" className="linkIfoot">
                      Accessibility
                    </a>
                    <a href="#" className="linkIfoot">
                      Terms of Sale
                    </a>
                    <a href="#" className="linkIfoot">
                      Subscription
                    </a>
                    <a href="#" className="linkIfoot">
                      Legal
                    </a>
                  </div>
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      DMCA Policy
                    </a>
                    <a href="#" className="linkIfoot">
                      Guest Posting
                    </a>
                    <a href="#" className="linkIfoot">
                      Blog/Articles
                    </a>
                    <a href="#" className="linkIfoot">
                      Terms of Service
                    </a>
                    <a href="#" className="linkIfoot">
                      FAQ
                    </a>
                    <a href="#" className="linkIfoot">
                      Help
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
