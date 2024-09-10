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
      {/* plans section start  */}

      {!hideDiv && (
        <div className="container-fluid footerBg1 pt-5">
          <div className="container pb-5">
            <div className="container footerFoot">
              <div className="text-center mb-5">
                <h1 className="plansHeader">{t("plans.mainHead")}</h1>
                <p className="plansSubHeader">
                {t("plans.subHead")}
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-4 plansBG p-0 mx-3" id="mainDiv1">
                  <div className="text-start px-4 py-3 plansBG2" id="subDiv1">
                    <p className="planTitle">{t("plans.flightReservation.title")}</p>
                    <p className="planPrice">
                      <span className="planAmount">{t("plans.flightReservation.amount")}</span>/ {t("plans.flightReservation.for")}
                    </p>
                    <p className="planText">{t("plans.flightReservation.package")}</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle1")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle2")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle3")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle4")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle5")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle6")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle7")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle8")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle9")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle10")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle11")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightReservation.subTitle12")}
                      </li>
                    </ul>

                    <div className="orderDiv" id="orderDiv1">
                      <button
                        className="orderBtn py-3"
                        id="orderBtn1"
                        onClick={redirectToFR}
                      >
                        {t("plans.orderBtn")}
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
                    <p className="planTitle">{t("plans.flightNHotelReservation.title")}</p>
                    <p className="planPrice">
                      <span className="planAmount">{t("plans.flightNHotelReservation.amount")}</span>/ {t("plans.flightNHotelReservation.for")}
                    </p>
                    <p className="planText">{t("plans.flightNHotelReservation.package")}</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle1")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle2")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle3")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle4")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle5")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle6")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle7")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle8")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle9")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.flightNHotelReservation.subTitle10")}
                      </li>
                    </ul>

                    <div className="orderDiv orderDivImp" id="orderDiv2">
                      <button
                        className="orderBtn py-3 orderBtnImp"
                        id="orderBtn2"
                        onClick={redirectToRNHR}
                      >
                        {t("plans.orderBtn")}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 plansBG p-0 mx-3" id="mainDiv3">
                  <div className="text-start px-4 py-3 plansBG2" id="subDiv3">
                    <p className="planTitle">{t("plans.hotelReservation.title")}</p>
                    <p className="planPrice">
                      <span className="planAmount">{t("plans.hotelReservation.amount")}</span>/ {t("plans.hotelReservation.for")}
                    </p>
                    <p className="planText">{t("plans.hotelReservation.package")}</p>
                    <hr className="oneLine" />
                    <ul className="PlanList ps-0">
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle1")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle2")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle3")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle4")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle5")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle6")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle7")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle8")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle9")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle10")}
                      </li>
                      <li>
                        <FaCheckCircle
                          size={15}
                          color="rgba(113, 113, 122, 1)"
                        />
                        &nbsp;{t("plans.hotelReservation.subTitle11")}
                      </li>
                    </ul>

                    <div className="orderDiv" id="orderDiv3">
                      <button
                        className="orderBtn py-3"
                        id="orderBtn3"
                        onClick={redirectToHB}
                      >
                        {t("plans.orderBtn")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* plans section end  */}
      {/* FAQ section start  */}
      <hr className="hrStyle" />
      <div className="container-fluid footerBg2 pt-5">
        <div className="container pb-5">
          <div className="container footerFoot">
            <div className="row faqRowDiv">
              <div className="col-5">
                <div className="text-center">
                  <p className="logoImg text-center">{t("FAQ.Head")}</p>
                  <img
                    src={FAQ}
                    className="FAQImg mt-5 pt-4"
                    alt={t("FAQ.alt")}
                  />
                </div>
              </div>
              <div className="col-7 fixedHeightDetail">
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3" open={true}>
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question1")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans1")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question2")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans2")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question3")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans3")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question4")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans4")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question5")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans5")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question6")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans6")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question7")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans7")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question8")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans8")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question9")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans9")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question10")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans10")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question11")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans11")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question12")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans12")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question13")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans13")}</p>
                    </div>
                  </details>
                </div>
                <div className="detailDiv mb-3">
                  <details className="detailTab  py-2 px-3">
                    <summary className="summaryInDetail">
                      <p className="m-0">{t("FAQ.question14")}</p>
                    </summary>
                    <div className="parDiv mt-3">
                      <p className="py-2 px-3 m-0">{t("FAQ.ans14")}</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section end  */}

      {/* footer section start*/}

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
                    {t("footer.mainTitle")}
                  </p>
                </div>
              </div>
              <div className="col-7">
                <div className="row text-center g-1 linkFootROwDiv">
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title1")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title2")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title3")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title4")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title5")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle1.title6")}
                    </a>
                  </div>
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title1")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title2")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title3")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title4")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title5")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle2.title6")}
                    </a>
                  </div>
                  <div className="col-4 text-start d-flex flex-column ps-5 linkFootDiv">
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title1")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title2")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title3")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title4")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title5")}
                    </a>
                    <a href="#" className="linkIfoot">
                      {t("footer.subTitle3.title6")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end  */}
    </>
  );
};

export default Footer;
