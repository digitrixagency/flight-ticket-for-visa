import React, { useState, useRef } from "react";
// import frImg from "../images/flightReservationImg.png";
// import leftWave from "../images/leftWave.png";
// import rightWave from "../images/rightWave.png";
import secure from "../images/secureImg.png";
import payment from "../images/paymentImg.png";
import pci from "../images/pciImg.png";
import tncImg from "../images/terms&conditionImg.png";
import tickImg from "../images/tickImg.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import axios from "axios";

const FlightReservation = () => {
  const borderRAdArr = { borderRadius: "5px", width: "30%" };
  const borderRAdArr1 = { borderRadius: "5px" };
  const [errors, setErrors] = useState({});

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

  const [numTravelers, setNumTravelers] = useState(0);
  const [price, setPrice] = useState(0);

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const numberOfTravelers = parseInt(event.target.value, 10);
    const travelerPrice = parseInt(selectedOption.getAttribute("price"), 10);
    setNumTravelers(numberOfTravelers);
    if (price === 3) {
      const newPrice = travelerPrice + 3;
      setPrice(newPrice);
    } else {
      setPrice(travelerPrice);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [divCount, setDivCount] = useState(2); // Start with 2 divs
  const [showTravelerFlightDetailDiv, setShowTravelerFlightDetailDiv] =
    useState(false);

  // Handle radio button change
  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "multipleCities") {
      setPrice((price) => price + 3); // Assuming setPrice updates the price state
      setShowTravelerFlightDetailDiv(true);
    } else {
      // Reset the price to the base value depending on the number of travelers
      const basePrice =
        numTravelers === 0
          ? 0
          : parseInt(
              document
                .querySelector(`#noOfTravelers option[value="${numTravelers}"]`)
                .getAttribute("price"),
              10
            );
      setPrice(basePrice);
      setShowTravelerFlightDetailDiv(false);
    }
  };

  // Add more divs, limit to 4
  const addMoreDivs = () => {
    if (divCount < 6) {
      setDivCount(divCount + 1);
    }
  };

  // Remove a div
  const removeDiv = () => {
    if (divCount > 0) {
      setDivCount(divCount - 1);
    }
  };

  // Store the array of timezones in state
  const [timezones] = useState([
    {
      timezone: "Pacific/Midway",
      country: "United States",
      gmt_offset: "-11:00",
      local_time: "06:00 AM",
    },
    {
      timezone: "Pacific/Honolulu",
      country: "United States",
      gmt_offset: "-10:00",
      local_time: "07:00 AM",
    },
    {
      timezone: "America/Anchorage",
      country: "United States",
      gmt_offset: "-09:00",
      local_time: "08:00 AM",
    },
    {
      timezone: "America/Los_Angeles",
      country: "United States",
      gmt_offset: "-08:00",
      local_time: "09:00 AM",
    },
    {
      timezone: "America/Denver",
      country: "United States",
      gmt_offset: "-07:00",
      local_time: "10:00 AM",
    },
    {
      timezone: "America/Chicago",
      country: "United States",
      gmt_offset: "-06:00",
      local_time: "11:00 AM",
    },
    {
      timezone: "America/New_York",
      country: "United States",
      gmt_offset: "-05:00",
      local_time: "12:00 PM",
    },
    {
      timezone: "America/Caracas",
      country: "Venezuela",
      gmt_offset: "-04:00",
      local_time: "01:00 PM",
    },
    {
      timezone: "America/Halifax",
      country: "Canada",
      gmt_offset: "-04:00",
      local_time: "02:00 PM",
    },
    {
      timezone: "America/St_Johns",
      country: "Canada",
      gmt_offset: "-03:30",
      local_time: "02:30 PM",
    },
    {
      timezone: "America/Sao_Paulo",
      country: "Brazil",
      gmt_offset: "-03:00",
      local_time: "03:00 PM",
    },
    {
      timezone: "Atlantic/South_Georgia",
      country: "South Georgia and the South Sandwich Islands",
      gmt_offset: "-02:00",
      local_time: "04:00 PM",
    },
    {
      timezone: "Atlantic/Azores",
      country: "Portugal",
      gmt_offset: "-01:00",
      local_time: "05:00 PM",
    },
    {
      timezone: "Europe/London",
      country: "United Kingdom",
      gmt_offset: "+00:00",
      local_time: "06:00 PM",
    },
    {
      timezone: "Europe/Berlin",
      country: "Germany",
      gmt_offset: "+01:00",
      local_time: "07:00 PM",
    },
    {
      timezone: "Europe/Athens",
      country: "Greece",
      gmt_offset: "+02:00",
      local_time: "08:00 PM",
    },
    {
      timezone: "Europe/Moscow",
      country: "Russia",
      gmt_offset: "+03:00",
      local_time: "09:00 PM",
    },
    {
      timezone: "Asia/Tehran",
      country: "Iran",
      gmt_offset: "+03:30",
      local_time: "09:30 PM",
    },
    {
      timezone: "Asia/Dubai",
      country: "United Arab Emirates",
      gmt_offset: "+04:00",
      local_time: "10:00 PM",
    },
    {
      timezone: "Asia/Kabul",
      country: "Afghanistan",
      gmt_offset: "+04:30",
      local_time: "10:30 PM",
    },
    {
      timezone: "Asia/Karachi",
      country: "Pakistan",
      gmt_offset: "+05:00",
      local_time: "11:00 PM",
    },
    {
      timezone: "Asia/Kolkata",
      country: "India",
      gmt_offset: "+05:30",
      local_time: "11:30 PM",
    },
    {
      timezone: "Asia/Dhaka",
      country: "Bangladesh",
      gmt_offset: "+06:00",
      local_time: "12:00 AM",
    },
    {
      timezone: "Asia/Bangkok",
      country: "Thailand",
      gmt_offset: "+07:00",
      local_time: "01:00 AM",
    },
    {
      timezone: "Asia/Shanghai",
      country: "China",
      gmt_offset: "+08:00",
      local_time: "02:00 AM",
    },
    {
      timezone: "Asia/Tokyo",
      country: "Japan",
      gmt_offset: "+09:00",
      local_time: "03:00 AM",
    },
    {
      timezone: "Australia/Sydney",
      country: "Australia",
      gmt_offset: "+10:00",
      local_time: "04:00 AM",
    },
    {
      timezone: "Pacific/Noumea",
      country: "New Caledonia",
      gmt_offset: "+11:00",
      local_time: "05:00 AM",
    },
    {
      timezone: "Pacific/Auckland",
      country: "New Zealand",
      gmt_offset: "+12:00",
      local_time: "06:00 AM",
    },
  ]);

  // State to track the selected option
  const [selectedOption1, setSelectedOption1] = useState("");

  // Function to handle the change event of the select element
  const handleSelectChange = (event) => {
    setSelectedOption1(event.target.value);
  };
  // State to track the selected option
  const [showHideVal, showHideFun] = useState("");

  // Function to handle the change event of the select element
  const showHideFunMain = (event) => {
    showHideFun(event.target.value);
  };

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDropdownChangeNValueChange = (e) => {
    handleChange(e);
    handleDropdownChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/submit-form",
        formData
      );

      // Handle success (e.g., show a success message, reset the form)
      alert(response.data); // Should show 'Form submitted successfully!'
    } catch (error) {
      // Handle error (e.g., show an error message)
      alert("Error submitting form");
    }
  };

  return (
    <>
      <div className="container-fluid FlightReservation mt-5 pt-5">
        <div className="container pb-5">
          {/* <div className="container w-75 mb-5">
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
          </div> */}
          <div className="container w-75">
            <h2>Traveler Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="radioBtnDiv">
                    <h5> CHOOSE YOUR TRIP</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tripType"
                        id="tripType1"
                        checked={selectedOption === "oneWay"}
                        onChange={handleRadioChange}
                        value="oneWay"
                        onClick={handleChange}
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
                        value="returnTrip"
                        checked={selectedOption === "returnTrip"}
                        onChange={handleRadioChange}
                        onClick={handleChange}
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
                        value="multipleCities"
                        checked={selectedOption === "multipleCities"}
                        onChange={handleRadioChange}
                        onClick={handleChange}
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

                {!showTravelerFlightDetailDiv && (
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div id="departDiv">
                        <div className="mb-3 inputDiv">
                          <label
                            htmlFor="departDateInput"
                            className="form-label"
                          >
                            Depart
                          </label>
                          <input
                            type={inputType}
                            onFocus={handleFocus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            id="departDateInput"
                            name="departDateInput"
                            placeholder="Add date"
                          />
                        </div>
                      </div>
                      {selectedOption === "returnTrip" && (
                        <div id="returnDiv">
                          <div className="mb-3 inputDiv">
                            <label
                              htmlFor="returnDateInput"
                              className="form-label"
                            >
                              Return
                            </label>
                            <input
                              type={inputType}
                              onFocus={handleFocus}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                              id="returnDateInput"
                              name="returnDateInput"
                              placeholder="Add date"
                            />
                          </div>
                        </div>
                      )}
                      <div id="travelersNCabinDiv">
                        <div className="mb-3 inputDiv">
                          <label
                            htmlFor="travelersNCabin"
                            className="form-label"
                          >
                            Travelers and Cabin
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="travelersNCabin"
                            name="travelersNCabin"
                            placeholder="1 Adult, Economy"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-12 col-md-12 col-sm-12">
                  {/* Traveler Flight Detail Div */}
                  {showTravelerFlightDetailDiv && (
                    <div
                      id="travelerFlightDetailDiv"
                      className="d-flex flex-column travelerFlightDetailDiv"
                    >
                      {[...Array(divCount)].map((_, index) => (
                        <div
                          className="d-flex justify-content-around"
                          key={index}
                        >
                          <div className="mb-3 inputDiv" style={borderRAdArr}>
                            <label
                              htmlFor={`fromInput${index}`}
                              className="form-label"
                            >
                              From
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`fromInput${index}`}
                              name={`fromInput${index}`}
                              placeholder="Country, city or airport"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 inputDiv" style={borderRAdArr}>
                            <label
                              htmlFor={`toInput${index}`}
                              className="form-label"
                            >
                              To
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`toInput${index}`}
                              name={`toInput${index}`}
                              placeholder="Country, city or airport"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 inputDiv" style={borderRAdArr}>
                            <label
                              htmlFor={`departDateInput${index}`}
                              className="form-label"
                            >
                              Depart
                            </label>
                            <input
                              type={inputType}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              className="form-control"
                              id={`departDateInput${index}`}
                              name={`departDateInput${index}`}
                              placeholder="Add date"
                              onChange={handleChange}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={removeDiv}
                            className={
                              index === 0 || index === 1
                                ? "disabled btn removeBtn"
                                : "btn removeBtn"
                            }
                          >
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                          </button>
                        </div>
                      ))}

                      <div
                        className="d-flex justify-content-between my-4"
                        id="addMTNCDiv"
                      >
                        {/* Additional Inputs from travelersNCabin */}
                        {showTravelerFlightDetailDiv && (
                          <div id="travelersNCabinDiv">
                            <div
                              className="mb-3 inputDiv"
                              style={borderRAdArr1}
                            >
                              <label
                                htmlFor="travelersNCabin"
                                className="form-label"
                              >
                                Travelers and Cabin
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="travelersNCabin"
                                name="travelersNCabin"
                                placeholder="1 Adult, Economy"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        )}
                        {/* Add More Button */}
                        {divCount < 6 && (
                          <button
                            type="button"
                            onClick={addMoreDivs}
                            className="btn addMoreBTn"
                          >
                            <FontAwesomeIcon icon={faPlus} size="1x" />
                            Add another flight
                          </button>
                        )}
                      </div>
                    </div>
                  )}
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
                        name="additionalPreferences"
                        id="ap1"
                        value="yes"
                        onClick={showHideFunMain}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferences"
                        id="ap2"
                        value="no"
                        onClick={showHideFunMain}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal === "yes" && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                      <label>Additional Flight Details:</label>
                      <textarea
                        cols="40"
                        rows="5"
                        name="additionalPreferencesYes"
                        maxlength="2000"
                        class="form-control"
                        onChange={handleChange}
                        placeholder="Please mention your special instructions for your flight here, we are trying to make it accordingly to your details."
                      ></textarea>
                    </p>
                  </div>
                )}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="noOfTravelers" className="form-label">
                      No. Of Travelers <span>*</span>
                    </label>
                    <select
                      id="noOfTravelers"
                      name="noOfTravelers"
                      className="form-select"
                      onChange={handleDropdownChangeNValueChange}
                      required
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="1" price="15">
                        1 Traveler($15)
                      </option>
                      <option value="2" price="25">
                        2 Travelers($25)
                      </option>
                      <option value="3" price="35">
                        3 Travelers($35)
                      </option>
                      <option value="4" price="45">
                        4 Travelers($45)
                      </option>
                      <option value="5" price="55">
                        5 Travelers($55)
                      </option>
                      <option value="6" price="65">
                        6 Travelers($65)
                      </option>
                      <option value="7" price="75">
                        7 Travelers($75)
                      </option>
                      <option value="8" price="85">
                        8 Travelers($85)
                      </option>
                      <option value="9" price="95">
                        9 Travelers($95)
                      </option>
                      <option value="10" price="105">
                        10 Travelers($105)
                      </option>
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
                      required
                      onChange={handleChange}
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {Array.from({ length: numTravelers }, (_, index) => (
                  <>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`travelTitle${index + 1}`}
                          className="form-label"
                        >
                          Title <span>*</span>
                        </label>
                        <select
                          id={`travelTitle${index + 1}`}
                          name={`travelTitle${index}`}
                          className="form-select"
                          onChange={handleChange}
                          required
                        >
                          <option value="" selected disabled>
                            —Please choose an option—
                          </option>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Miss.">Miss.</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`travelerFirstName${index + 1}`}
                          className="form-label"
                        >
                          Traveler {index + 1} First Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerFirstName${index + 1}`}
                          name={`travelerFirstName${index}`}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`travelerLastName${index + 1}`}
                          className="form-label"
                        >
                          Traveler {index + 1} Last Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerLastName${index + 1}`}
                          name={`travelerLastName${index}`}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <input
                      type="hidden"
                      id={`travelerPrice${index + 1}`}
                      name={`travelerPrice${index + 1}`}
                      value={price} // Set the hidden input's value to the price
                    /> */}
                  </>
                ))}
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
                      onChange={handleChange}
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="Search Engine (Google)">
                        Search Engine (Google)
                      </option>
                      <option value="Facebook">Facebook</option>
                      <option value="Blog Articles">Blog Articles</option>
                      <option value="Quora">Quora</option>
                      <option value="Friend &amp; Family">
                        Friend &amp; Family
                      </option>
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
                      onChange={handleChange}
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
                      onChange={handleSelectChange}
                    >
                      <option selected disabled>
                        —Please choose an option—
                      </option>
                      <option value="Get flight reservation within 1-2 hours">
                        Get flight reservation within 1-2 hours
                      </option>
                      <option value="Get flight reservation on different date (E.g. 2 days before visa interview)">
                        Get flight reservation on different date (E.g. 2 days
                        before visa interview)
                      </option>
                    </select>
                  </div>
                </div>
                {/* Conditionally render the div based on the selected option */}
                {selectedOption1 ===
                  "Get flight reservation on different date (E.g. 2 days before visa interview)" && (
                  <>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="visaInterviewDate"
                          className="form-label"
                        >
                          Visa Interview Date:
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="visaInterviewDate"
                          name="visaInterviewDate"
                          onChange={handleChange}
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
                          onChange={handleChange}
                        >
                          <option selected disabled>
                            —Please choose an option—
                          </option>
                          {timezones.map((timezone, index) => (
                            <option key={index} value={timezone.timezone}>
                              {timezone.timezone} ({timezone.gmt_offset}) -{" "}
                              {timezone.country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div id="payNowMainDiv">
                <h2 className="px-3 py-4">Order Summary</h2>
                <div className="row px-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 fitRow1">
                    <div id="flightItineraryTotalDiv">
                      <p id="flightItineraryTotalText">
                        Flight Itinerary Total:
                      </p>
                      <p id="flightItineraryTotal">${price}</p>
                      <input
                        type="hidden"
                        id="flightItineraryTotalVal"
                        name="flightItineraryTotalVal"
                        value={price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <ul>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> 100% satisfaction guaranteed </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Directly verifiable from airlines </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> 100% confirmed PNR or Reservation Number </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span>
                          {" "}
                          Valid and confirmed flight Itinerary for visa{" "}
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Embassy or consulate recommended </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Accept payments via debit/credit card </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span>
                          {" "}
                          Secure Connection with SSL certificate + PCI Layers +
                          SHA-2{" "}
                        </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Upto 2 weeks validity </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Get best airline class booking </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> 24/7 live support </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> No charges for urgent delivery </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Happy customers feedback </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Global services provider </span>
                      </li>
                      <li>
                        {" "}
                        <img src={tickImg} className="tickImg" />
                        <span> Covers both visa and travel purposes </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-1">
                        <img src={secure} id="secureImg" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-1">
                        <img src={pci} id="pciImg" />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 paymentImgDiv">
                        <img src={payment} id="paymentImg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 fitRow2">
                    <div id="payNowBtnDiv">
                      <button id="payNowBtn" type="submit">
                        PAY NOW
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div id="termNConditionDiv">
                      <p id="termNConditionText">
                        You agree to our privacy policy and term & conditions
                        after tapping pay now.
                      </p>
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
