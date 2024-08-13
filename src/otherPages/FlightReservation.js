import React, { useState, useRef } from "react";
import frImg from "../images/flightReservationImg.png";
import leftWave from "../images/leftWave.png";
import rightWave from "../images/rightWave.png";
import secure from "../images/secureImg.png";
import payment from "../images/paymentImg.png";
import pci from "../images/pciImg.png";
import tncImg from "../images/terms&conditionImg.png";
import tickImg from "../images/tickImg.gif";
const FlightReservation = () => {
  const [inputType, setInputType] = useState("text");
  const dateInputRef = useRef(null);
  const handleFocus = () => {
    setInputType("date");
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };

  const handleBlur = () => {
    setInputType("text");
  };

  return (
    <>
      <div className="container-fluid FlightReservation mt-5 pt-5">
        <div className="container pb-5">
          <div className="container w-75 mb-5">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12 p-0">
                <div className="p-0 paddingResponsive">
                  <h1 id="frHeader">
                    Instant Flight Itinerary for Visa & Travel
                  </h1>
                  <div className="d-flex" id="frStepsDiv">
                    <div className="frNumberDiv numStart">
                      <span>1</span>
                      <p>Provide Details</p>
                    </div>
                    <div className="frWaveImgDiv">
                      <img
                        src={leftWave}
                        className="waveForNum"
                        alt="left wave"
                      />
                    </div>
                    <div className="frNumberDiv numEnd">
                      <span>2</span>
                      <p>Make Payment</p>
                    </div>
                    <div className="frWaveImgDiv">
                      <img
                        src={rightWave}
                        className="waveForNum"
                        alt="right wave"
                      />
                    </div>
                    <div className="frNumberDiv numStart">
                      <span>3</span>
                      <p>Receive Docs Via Email</p>
                    </div>
                  </div>
                  <p id="frText">
                    Embassy and consulates recommend purchasing an actual flight
                    ticket only after visa officer approves your visa
                    application. If you attach an actual flight ticket and your
                    visa application gets rejected, you’ll lose greater chunk of
                    your hard-earned money. Therefore, always attach a confirmed
                    flight Itinerary for visa application.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12" id="frImgMainDiv">
                <div className="" id="frImgDiv">
                  <img src={frImg} alt="Flight Reservation Image" id="frImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="container w-75">
            <h2>Traveler Information</h2>
            <form>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="noOfTravelers" className="form-label">
                      No. Of Travelers
                    </label>
                    <select
                      id="noOfTravelers"
                      name="noOfTravelers"
                      className="form-select"
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="15">1 Traveler ($15)</option>
                      <option value="25">2 Traveler ($25)</option>
                      <option value="35">3 Traveler ($35)</option>
                      <option value="45">4 Traveler ($45)</option>
                      <option value="55">5 Traveler ($55)</option>
                      <option value="65">6 Traveler ($65)</option>
                      <option value="75">7 Traveler ($75)</option>
                      <option value="85">8 Traveler ($85)</option>
                      <option value="95">9 Traveler ($95)</option>
                      <option value="105">10 Traveler ($105)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerEmail" className="form-label">
                      Email address <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="travelerEmail"
                      name="travelerEmail"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerNo" className="form-label">
                      Phone No. <span>*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="travelerNo"
                      name="travelerNo"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelTitle" className="form-label">
                      Title <span>*</span>
                    </label>
                    <select
                      id="travelTitle"
                      name="travelTitle"
                      className="form-select"
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerFirstName" className="form-label">
                      Traveler 1 First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="travelerFirstName"
                      name="travelerFirstName"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerLastName" className="form-label">
                      Traveler 1 Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="travelerLastName"
                      name="travelerLastName"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="radioBtnDiv">
                    <h5> CHOOSE YOUR TRIP</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tripType"
                        id="tripType1"
                      />
                      <label className="form-check-label" htmlFor="tripType1">
                        One Way
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tripType"
                        id="tripType2"
                      />
                      <label className="form-check-label" htmlFor="tripType2">
                        Round Trip
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tripType"
                        id="tripType3"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="tripType3">
                        Multiple Cities (+3.00$)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label
                      htmlFor="travelerFlightDetails"
                      className="form-label"
                    >
                      Traveler Flight Details <span>*</span>
                    </label>
                    <p>Format: Departure city (date) - Arrival city/airport</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="travelerFlightDetailDiv">
                    <div id="fromDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="fromInput" className="form-label">
                          From
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fromInput"
                          name="fromInput"
                          placeholder="Country, city or airport"
                        />
                      </div>
                    </div>
                    <div id="toDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="toInput" className="form-label">
                          To
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="toInput"
                          name="toInput"
                          placeholder="Country, city or airport"
                        />
                      </div>
                    </div>
                    <div id="dateDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="dateInput" className="form-label">
                          Date
                        </label>
                        <input
                          type={inputType}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className="form-control"
                          id="dateInput"
                          name="dateInput"
                          placeholder="Add date"
                        />
                      </div>
                    </div>
                    <div id="travelersNCabinDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="travelersNCabin" className="form-label">
                          Travelers and Cabin
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="travelersNCabin"
                          name="travelersNCabin"
                          placeholder="1 Adult, Economy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div id="additionalPreferencesDiv">
                    <p className="me-2">
                      Have You Any Additional Flight Preferences/Details?:
                    </p>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ap"
                        id="ap1"
                      />
                      <label className="form-check-label" htmlFor="ap1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ap"
                        id="ap2"
                      />
                      <label className="form-check-label" htmlFor="ap2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h2>Order Summary</h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="hearAboutUs" className="form-label">
                      How Did You Hear About Us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      className="form-select"
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="15">1 Traveler ($15)</option>
                      <option value="25">2 Traveler ($25)</option>
                      <option value="35">3 Traveler ($35)</option>
                      <option value="45">4 Traveler ($45)</option>
                      <option value="55">5 Traveler ($55)</option>
                      <option value="65">6 Traveler ($65)</option>
                      <option value="75">7 Traveler ($75)</option>
                      <option value="85">8 Traveler ($85)</option>
                      <option value="95">9 Traveler ($95)</option>
                      <option value="105">10 Traveler ($105)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="consulateApplying" className="form-label">
                      What Consulate Are You Applying At?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="consulateApplying"
                      name="consulateApplying"
                      placeholder="Like: William@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="flightItinerary" className="form-label">
                      When you might to get your flight itinerary?
                    </label>
                    <select
                      id="flightItinerary"
                      name="flightItinerary"
                      className="form-select"
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="15">1 Traveler ($15)</option>
                      <option value="25">2 Traveler ($25)</option>
                      <option value="35">3 Traveler ($35)</option>
                      <option value="45">4 Traveler ($45)</option>
                      <option value="55">5 Traveler ($55)</option>
                      <option value="65">6 Traveler ($65)</option>
                      <option value="75">7 Traveler ($75)</option>
                      <option value="85">8 Traveler ($85)</option>
                      <option value="95">9 Traveler ($95)</option>
                      <option value="105">10 Traveler ($105)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerEmail" className="form-label">
                      Visa Interview Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="travelerEmail"
                      name="travelerEmail"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="timeZone" className="form-label">
                      Visa Interview Time/ Time Zone
                    </label>
                    <select
                      id="timeZone"
                      name="timeZone"
                      className="form-select"
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="15">1 Traveler ($15)</option>
                      <option value="25">2 Traveler ($25)</option>
                      <option value="35">3 Traveler ($35)</option>
                      <option value="45">4 Traveler ($45)</option>
                      <option value="55">5 Traveler ($55)</option>
                      <option value="65">6 Traveler ($65)</option>
                      <option value="75">7 Traveler ($75)</option>
                      <option value="85">8 Traveler ($85)</option>
                      <option value="95">9 Traveler ($95)</option>
                      <option value="105">10 Traveler ($105)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div id="payNowMainDiv">
              <h2 className="px-3 py-4">Order Summary</h2>
              <div className="row px-3">
                <div className="col-lg-12 col-md-12 col-sm-12 fitRow1">
                  <div id="flightItineraryTotalDiv">
                    <p id="flightItineraryTotalText">Flight Itinerary Total:</p>
                    <p id="flightItineraryTotal">$15</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <ul>
                    <li> <img src={tickImg} className="tickImg"/><span> 100% satisfaction guaranteed </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Directly verifiable from airlines </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> 100% confirmed PNR or Reservation Number </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Valid and confirmed flight Itinerary for visa </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Embassy or consulate recommended </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Accept payments via debit/credit card </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Secure Connection with SSL certificate + PCI Layers + SHA-2 </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Upto 2 weeks validity </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Get best airline class booking </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> 24/7 live support </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> No charges for urgent delivery </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Happy customers feedback </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Global services provider </span></li>
                    <li> <img src={tickImg} className="tickImg"/><span> Covers both visa and travel purposes </span></li>
                  </ul>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-1">
                      <img src={secure} id="secureImg"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-1">
                      <img src={pci} id="pciImg"/>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 paymentImgDiv">
                      <img src={payment} id="paymentImg"/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 fitRow2">
                  <div id="payNowBtnDiv">
                    <button id="payNowBtn">PAY NOW</button>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <div id="termNConditionDiv">
                    <p id="termNConditionText">You agree to our privacy policy and term & conditions after tapping pay now.</p>
                    <img id="termNConditionImg" src={tncImg} />
                  </div>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightReservation;
