import React, { useState, useRef, useEffect } from "react";
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
import axios from "axios";
import swal from "sweetalert";
import airportsJsonData from "../jsonData/airports.json";
import { useTranslation } from "react-i18next";

const FlightReservation = () => {
  const { t, i18n } = useTranslation(); // Get current language from i18n

  const hiddenInputRef = useRef(null); // Create a ref for the hidden input

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
  const [selectedOption, setSelectedOption] = useState("");
  const [divCount, setDivCount] = useState(2); // Start with 2 divs
  const [showTravelerFlightDetailDiv, setShowTravelerFlightDetailDiv] =
    useState(false);

  const [numTravelers, setNumTravelers] = useState(1);
  const [price, setPrice] = useState(0);

  const handleDropdownChange = (event) => {
    const selectedOption1 = event.target.options[event.target.selectedIndex];
    const numberOfTravelers = parseInt(event.target.value, 10);
    const travelerPrice = parseInt(selectedOption1.getAttribute("price"), 10);
    setNumTravelers(numberOfTravelers);
    if (selectedOption === "multipleCities") {
      const newPrice = travelerPrice + numberOfTravelers * 3;
      console.log(newPrice);
      setPrice(newPrice);
      setFormData({
        ...formData,
        ["amount"]: newPrice,
      });
    } else {
      setPrice(travelerPrice);
      setFormData({
        ...formData,
        ["amount"]: travelerPrice,
      });
    }
  };

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

  const [formData, setFormData] = useState({
    dataFor: "flightReservation",
  });
  useEffect(() => {
    const authVal = JSON.parse(localStorage.getItem("isAuthenticated"));
    const userMail = localStorage.getItem("userMail");

    if (authVal === true && userMail && userMail.trim() !== "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        UserMail: userMail.trim(),
      }));
    }
  }, []);
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const mailData = {
  //       userdata: formData,
  //     };

  //     // Set MUID and transactionId
  //     const MUIDVal = "MUID" + Date.now();
  //     const transIdVal = "TransId" + Date.now();
  //     setFormData({
  //       ...formData,
  //       ["MUID"]: MUIDVal,
  //       ["transactionId"]: transIdVal,
  //       ["amount"]: hiddenInputRef.current.value,
  //     });

  //     // Step 1: Handle payment with your payment gateway
  //     const paymentResponse = await axios.post(
  //       "http://localhost:5000/api/process-payment",
  //       {
  //         amount: hiddenInputRef.current.value,
  //         transactionId: transIdVal, // Ensure transaction ID is consistent
  //         MUID: MUIDVal, // Ensure transaction ID is consistent
  //       }
  //     );
  //     if (paymentResponse.data.success) {
  //       // Step 2: If payment is successful, submit form data to the backend
  //       const response = await axios.post(
  //         "http://localhost:5000/api/submit-form",
  //         formData
  //       );
  //       // alert(response.data); // Should show 'Form submitted successfully!'
  //       swal({
  //         title: "Payment success",
  //         text: response.data,
  //         icon: "success",
  //         button: "Ok",
  //       });
  //       sendMailFun(mailData);
  //     } else {
  //       // Handle payment failure
  //       swal({
  //         title: paymentResponse.message,
  //         text: "Please try again",
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   } catch (error) {
  //     // Handle errors during payment or form submission
  //     swal({
  //       title: `${error.message}`,
  //       text: "Please try again",
  //       icon: "error",
  //       button: "Ok",
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate MUID and transactionId
      const MUIDVal = "MUID" + Date.now();
      const transIdVal = "TransId" + Date.now();

      // Update formData with additional fields
      setFormData((formData) => ({
        ...formData,
        MUID: MUIDVal,
        transactionId: transIdVal,
        amount: hiddenInputRef.current.value,
      }));

      // Step 1: Handle payment with your payment gateway
      const paymentResponse = await axios.post(
        "http://localhost:5000/api/process-payment",
        {
          formData,
        }
      );
      console.log(paymentResponse);
      // Check if response is successful and contains links
      if (
        paymentResponse.data.httpStatusCode === 201 &&
        paymentResponse.data.links
      ) {
        const approvalUrl = paymentResponse.data.links.find(
          (link) => link.rel === "approval_url"
        );

        if (approvalUrl) {
          // Open the PayPal approval page in a new window
          // window.open(approvalUrl.href, "_blank", "noopener,noreferrer");
          window.location.href = approvalUrl.href;
        } else {
          swal({
            title: "Error",
            text: "Approval URL not found. Please try again.",
            icon: "error",
            button: "Ok",
          });
        }
      } else {
        swal({
          title: "Error",
          text: "Unexpected response from payment gateway. Please try again.",
          icon: "error",
          button: "Ok",
        });
      }
    } catch (error) {
      // Display error message using SweetAlert
      swal({
        title: "Error",
        text:
          error.response?.data?.message || error.message || "Please try again ",
        icon: "error",
        button: "Ok",
      });
    }
  };

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleFilterNChange = (inputNo, e) => {
    handleChange(e);
    handleFilter(inputNo, e);
  };
  // State to manage multiple inputs and their filters
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "", // Add more inputs as needed
  });

  // State to manage filtered airports for each input
  const [filteredAirports, setFilteredAirports] = useState({
    input1: [],
    input2: [], // Add more inputs as needed
  });

  // State to control the visibility of the <datalist> elements
  const [visibleLists, setVisibleLists] = useState({
    input1: true,
    input2: true, // Add more inputs as needed
  });

  // Handle input change and filter airports for the specific input
  const handleFilter = (inputKey, e) => {
    const input = e.target.value;
    setInputValues((prev) => ({
      ...prev,
      [inputKey]: input,
    }));

    // Filter airports based on user input
    const filtered = airportsJsonData.filter(
      (airport) =>
        airport.iata && // Ensure iata code exists
        airport.iata !== "0" && // Ensure iata code is not "0"
        (airport.name.toLowerCase().includes(input.toLowerCase()) ||
          airport.city.toLowerCase().includes(input.toLowerCase()) ||
          airport.country.toLowerCase().includes(input.toLowerCase()))
    );
    setFilteredAirports((prev) => ({
      ...prev,
      [inputKey]: filtered,
    }));

    // Show the datalist if there are filtered results
    setVisibleLists((prev) => ({
      ...prev,
      [inputKey]: filtered.length > 0,
    }));
  };

  // Handle airport selection for a specific input
  const handleClick = (inputKey, airport) => {
    const formattedString = `${airport.name} - ${airport.city}, ${airport.country} (${airport.iata})`;
    setInputValues((prev) => ({
      ...prev,
      [inputKey]: formattedString,
    }));

    // Update filteredAirports to exclude the selected airport
    setFilteredAirports((prev) => ({
      ...prev,
      [inputKey]: prev[inputKey].filter((a) => a.iata !== airport.iata),
    }));

    // Hide the datalist element after selection
    setVisibleLists((prev) => ({
      ...prev,
      [inputKey]: false,
    }));
  };

  const [filteredFromAirports, setFilteredFromAirports] = useState([]);
  const [filteredToAirports, setFilteredToAirports] = useState([]);
  const [selectedFromAirport, setSelectedFromAirport] = useState("");
  const [selectedToAirport, setSelectedToAirport] = useState("");

  // Handle input change to filter airports for "From" field
  const handleFromInputChange = (e, index) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      const filtered = airportsJsonData.filter(
        (airport) =>
          airport.name.toLowerCase().includes(query) ||
          airport.city.toLowerCase().includes(query) ||
          airport.country.toLowerCase().includes(query) ||
          airport.icao.toLowerCase().includes(query) ||
          airport.iata.toLowerCase().includes(query)
      );
      setFilteredFromAirports(filtered);
    } else {
      setFilteredFromAirports([]);
    }
  };

  // Handle airport selection for "From" field
  const handleFromAirportSelect = (e, index) => {
    setSelectedFromAirport(e.target.value);
    setFilteredFromAirports([]); // Hide datalist after selection
  };

  // Handle input change to filter airports for "To" field
  const handleToInputChange = (e, index) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      const filtered = airportsJsonData.filter(
        (airport) =>
          airport.name.toLowerCase().includes(query) ||
          airport.city.toLowerCase().includes(query) ||
          airport.country.toLowerCase().includes(query) ||
          airport.icao.toLowerCase().includes(query) ||
          airport.iata.toLowerCase().includes(query)
      );
      setFilteredToAirports(filtered);
    } else {
      setFilteredToAirports([]);
    }
  };

  // Handle airport selection for "To" field
  const handleToAirportSelect = (e, index) => {
    setSelectedToAirport(e.target.value);
    setFilteredToAirports([]); // Hide datalist after selection
  };

  const handleFilterNChangeMulti1 = (e, inputNo) => {
    handleChange(e);
    handleFromInputChange(e, inputNo);
  };
  const handleFilterNChangeMulti2 = (e, inputNo) => {
    handleChange(e);
    handleToInputChange(e, inputNo);
  };

  const sendMailFun = async (mailData) => {
    const HBhtmlTemplate = `
              <!DOCTYPE html>
              <html>
              <head>
                  <style>
                      body { font-family: Arial, sans-serif; }
                      .container { width: 80%; margin: auto; padding: 20px; }
                      .header { background-color: #f4f4f4; padding: 10px; text-align: center; }
                      .content { margin: 20px 0; }
                      .footer { font-size: 0.8em; color: #777; text-align: center; }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <div class="header">
                          <h1>Reservation Received</h1>
                      </div>
                      <div class="content">
                          <p>Dear ${mailData.userdata.travelerFirstName0},</p>
                          <p>Thank you for your reservation request!</p>
                          <p>We have received your reservation data and are currently processing it. Our team will review the information and get back to you within the next 48 hours.</p>
                          <p>If you have any questions in the meantime, please do not hesitate to contact us.</p>
                          <p>Thank you for choosing Flight & Hotel reservations.</p>
                      </div>
                      <div class="footer">
                          <p>Best regards,<br>Flight & Hotel reservations<br>FlightHotelreservations@mail.com</p>
                      </div>
                  </div>
              </body>
              </html>
              `;

    const emailData = {
      to: mailData.userdata.travelerEmail,
      subject: "Reservation Received",
      html: `${HBhtmlTemplate}`,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        emailData
      );
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="container-fluid FlightReservation pt-5">
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

          <div className="container w-75 mb-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h1>{t("bookingPages.Flight-Reservation.mainHead")}</h1>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  {isReadMore
                    ? `${t("bookingPages.Flight-Reservation.viewContent")}`
                    : `${t("bookingPages.Flight-Reservation.allContent")}`}
                  <span
                    onClick={toggleReadMore}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    {isReadMore
                      ? `${t("bookingPages.Flight&Hotel-Reservation.readMore")}`
                      : `${t(
                          "bookingPages.Flight&Hotel-Reservation.showLess"
                        )}`}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="container w-75">
            <h2 id="frH2">
              {t("bookingPages.Flight&Hotel-Reservation.TravelerInformation")}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="radioBtnDiv">
                    <h5>
                      {t("bookingPages.Flight&Hotel-Reservation.chooseTrip")}
                    </h5>
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
                        {t("bookingPages.Flight&Hotel-Reservation.radio1")}
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
                        {t("bookingPages.Flight&Hotel-Reservation.radio2")}
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
                        {t("bookingPages.Flight&Hotel-Reservation.radio3")}
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
                      {t(
                        "bookingPages.Flight&Hotel-Reservation.travelerFlightDetails"
                      )}{" "}
                      <span>*</span>
                    </label>
                  </div>
                </div>

                {!showTravelerFlightDetailDiv && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div id="travelerFlightDetailDiv">
                      <div id="fromDiv">
                        <div className="mb-3 inputDiv">
                          <label htmlFor="fromInput" className="form-label">
                            {t("bookingPages.Flight&Hotel-Reservation.from")}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fromInput"
                            name="fromInput"
                            placeholder={t(
                              "bookingPages.Flight&Hotel-Reservation.fromPH"
                            )}
                            onChange={(e) => handleFilterNChange("input1", e)}
                            value={inputValues.input1}
                            list="datalist1" // Associate input with datalist
                          />
                        </div>

                        <datalist id="datalist1" className="suggestions-list">
                          {filteredAirports.input1.map((airport) => (
                            <option
                              key={airport.iata} // Use a unique key for better performance
                              value={`${airport.name} - ${airport.city}, ${airport.country} (${airport.iata})`}
                              onClick={() => handleClick("input1", airport)}
                            >
                              {airport.name} - {airport.city}, {airport.country}
                              ({airport.iata})
                            </option>
                          ))}
                        </datalist>
                      </div>
                      <div id="toDiv">
                        <div className="mb-3 inputDiv">
                          <label htmlFor="toInput" className="form-label">
                            {t("bookingPages.Flight&Hotel-Reservation.to")}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="toInput"
                            name="toInput"
                            placeholder={t(
                              "bookingPages.Flight&Hotel-Reservation.toPH"
                            )}
                            onChange={(e) => handleFilterNChange("input2", e)}
                            list="datalist2" // Associate input with datalist
                            value={inputValues.input2}
                          />
                        </div>
                        <datalist id="datalist2" className="suggestions-list">
                          {filteredAirports.input2.map((airport) => (
                            <option
                              key={airport.iata} // Use a unique key for better performance
                              value={`${airport.name} - ${airport.city}, ${airport.country} (${airport.iata})`}
                              onClick={() => handleClick("input2", airport)}
                            >
                              {airport.name} - {airport.city}, {airport.country}
                              ({airport.iata})
                            </option>
                          ))}
                        </datalist>
                      </div>
                      <div id="departDiv">
                        <div className="mb-3 inputDiv">
                          <label
                            htmlFor="departDateInput"
                            className="form-label"
                          >
                            {t("bookingPages.Flight&Hotel-Reservation.depart")}
                          </label>
                          <input
                            type={inputType}
                            onFocus={handleFocus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                            id="departDateInput"
                            name="departDateInput"
                            placeholder={t(
                              "bookingPages.Flight&Hotel-Reservation.departPH"
                            )}
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
                              {t(
                                "bookingPages.Flight&Hotel-Reservation.return"
                              )}
                            </label>
                            <input
                              type={inputType}
                              onFocus={handleFocus}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                              id="returnDateInput"
                              name="returnDateInput"
                              placeholder={t(
                                "bookingPages.Flight&Hotel-Reservation.returnPH"
                              )}
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
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.travelersNCabin"
                            )}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="travelersNCabin"
                            name="travelersNCabin"
                            placeholder={t(
                              "bookingPages.Flight&Hotel-Reservation.travelersNCabinPH"
                            )}
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
                          <div className="mb-3 inputDiv">
                            <label
                              htmlFor={`fromInput${index}`}
                              className="form-label"
                            >
                              {t("bookingPages.Flight&Hotel-Reservation.from")}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`fromInput${index}`}
                              name={`fromInput${index}`}
                              placeholder={t(
                                "bookingPages.Flight&Hotel-Reservation.fromPH"
                              )}
                              list={`fromAirportList${index}`}
                              onChange={(e) =>
                                handleFilterNChangeMulti1(e, index)
                              }
                              onInput={(e) => handleFromAirportSelect(e, index)}
                            />
                            <datalist
                              id={`fromAirportList${index}`}
                              className="suggestions-list"
                            >
                              {filteredFromAirports.map((airport, idx) => (
                                <option key={idx} value={airport.name}>
                                  {airport.name}, {airport.city},
                                  {airport.country} ({airport.icao}/
                                  {airport.iata})
                                </option>
                              ))}
                            </datalist>
                          </div>
                          <div className="mb-3 inputDiv">
                            <label
                              htmlFor={`toInput${index}`}
                              className="form-label"
                            >
                              {t("bookingPages.Flight&Hotel-Reservation.to")}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`toInput${index}`}
                              name={`toInput${index}`}
                              placeholder={t(
                                "bookingPages.Flight&Hotel-Reservation.toPH"
                              )}
                              list={`toAirportList${index}`}
                              onChange={(e) =>
                                handleFilterNChangeMulti2(e, index)
                              }
                              onInput={(e) => handleToAirportSelect(e, index)}
                            />
                            <datalist id={`toAirportList${index}`}>
                              {filteredToAirports.map((airport, idx) => (
                                <option key={idx} value={airport.name}>
                                  {airport.name}, {airport.city},
                                  {airport.country} ({airport.icao}/
                                  {airport.iata})
                                </option>
                              ))}
                            </datalist>
                          </div>
                          <div className="mb-3 inputDiv">
                            <label
                              htmlFor={`departDateInput${index}`}
                              className="form-label"
                            >
                              {t(
                                "bookingPages.Flight&Hotel-Reservation.depart"
                              )}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`departDateInput${index}`}
                              name={`departDateInput${index}`}
                              placeholder={t(
                                "bookingPages.Flight&Hotel-Reservation.departPH"
                              )}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeDiv(index)}
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
                                {t(
                                  "bookingPages.Flight&Hotel-Reservation.travelersNCabin"
                                )}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="travelersNCabin"
                                name="travelersNCabin"
                                placeholder={t(
                                  "bookingPages.Flight&Hotel-Reservation.travelersNCabinPH"
                                )}
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
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.addMoreBtn"
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div id="additionalPreferencesDiv">
                    <p className="me-2">
                      {t(
                        "bookingPages.Flight&Hotel-Reservation.additionalPreferencesF"
                      )}
                      :
                    </p>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferencesForFlight"
                        id="ap1"
                        value="yes"
                        onClick={showHideFunMain}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap1">
                        {t("bookingPages.Flight&Hotel-Reservation.Yes")}
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferencesForFlight"
                        id="ap2"
                        value="no"
                        onClick={showHideFunMain}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap2">
                        {t("bookingPages.Flight&Hotel-Reservation.No")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal === "yes" && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                      <label>
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.additionalFlightDetails"
                        )}
                        :
                      </label>
                      <textarea
                        cols="40"
                        rows="5"
                        name="additionalPreferencesForFlightYes"
                        maxlength="2000"
                        class="form-control"
                        onChange={handleChange}
                        placeholder={t(
                          "bookingPages.Flight&Hotel-Reservation.additionalFlightDetailsPH"
                        )}
                      ></textarea>
                    </p>
                  </div>
                )}
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="noOfTravelers" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.noOfTravelers")}{" "}
                      <span>*</span>
                    </label>
                    <select
                      id="noOfTravelers"
                      name="noOfTravelers"
                      className="form-select"
                      onChange={handleDropdownChangeNValueChange}
                      required
                    >
                      <option selected disabled>
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP1")}
                      </option>
                      <option value="1" price="15">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP2")}
                      </option>
                      <option value="2" price="25">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP3")}
                      </option>
                      <option value="3" price="35">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP4")}
                      </option>
                      <option value="4" price="45">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP5")}
                      </option>
                      <option value="5" price="55">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP6")}
                      </option>
                      <option value="6" price="65">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP7")}
                      </option>
                      <option value="7" price="75">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP8")}
                      </option>
                      <option value="8" price="85">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP9")}
                      </option>
                      <option value="9" price="95">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP10")}
                      </option>
                      <option value="10" price="105">
                        {t("bookingPages.Flight-Reservation.noOfTravelersOP11")}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerEmail" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.emailaddress")}{" "}
                      <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="travelerEmail"
                      name="travelerEmail"
                      placeholder={t(
                        "bookingPages.Flight&Hotel-Reservation.emailaddressPH"
                      )}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerNo" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.phoneNo")}{" "}
                      <span>*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="travelerNo"
                      name="travelerNo"
                      placeholder={t(
                        "bookingPages.Flight&Hotel-Reservation.phoneNoPH"
                      )}
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
                          {t("bookingPages.Flight&Hotel-Reservation.title")}{" "}
                          <span>*</span>
                        </label>
                        <select
                          id={`travelTitle${index + 1}`}
                          name={`travelTitle${index}`}
                          className="form-select"
                          onChange={handleChange}
                          required
                        >
                          <option value="" selected disabled>
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP1"
                            )}
                          </option>
                          <option
                            value={t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp1"
                            )}
                          >
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp1"
                            )}
                          </option>
                          <option
                            value={t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp2"
                            )}
                          >
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp2"
                            )}
                          </option>
                          <option
                            value={t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp3"
                            )}
                          >
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp3"
                            )}
                          </option>
                          <option
                            value={t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp4"
                            )}
                          >
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.titleOp4"
                            )}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`travelerFirstName${index + 1}`}
                          className="form-label"
                        >
                          {t(
                            `bookingPages.Flight&Hotel-Reservation.firstName${
                              index + 1
                            }`
                          )}{" "}
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerFirstName${index + 1}`}
                          name={`travelerFirstName${index}`}
                          required
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.firstNamePH"
                          )}
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
                          {t(
                            `bookingPages.Flight&Hotel-Reservation.lastName${
                              index + 1
                            }`
                          )}{" "}
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerLastName${index + 1}`}
                          name={`travelerLastName${index}`}
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.lastNamePH"
                          )}
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
              <h2>
                {t("bookingPages.Flight&Hotel-Reservation.generalDetails")}
              </h2>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="hearAboutUs" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.hearAboutUs")}
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option selected disabled>
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP1"
                        )}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.searchEngineGoogle"
                        )}
                      >
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.searchEngineGoogle"
                        )}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.facebook"
                        )}
                      >
                        {t("bookingPages.Flight&Hotel-Reservation.facebook")}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.blogArticles"
                        )}
                      >
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.blogArticles"
                        )}
                      </option>
                      <option
                        value={t("bookingPages.Flight&Hotel-Reservation.quora")}
                      >
                        {t("bookingPages.Flight&Hotel-Reservation.quora")}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.friendFamily"
                        )}
                      >
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.friendFamily"
                        )}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="consulateApplying" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.consulate")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="consulateApplying"
                      name="consulateApplying"
                      placeholder={t(
                        "bookingPages.Flight&Hotel-Reservation.consulatePH"
                      )}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="flightItinerary" className="form-label">
                      {t(
                        "bookingPages.Flight&Hotel-Reservation.flightItinerary"
                      )}
                    </label>
                    <select
                      id="flightItinerary"
                      name="flightItinerary"
                      className="form-select"
                      onChange={handleSelectChange}
                    >
                      <option selected disabled>
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP1"
                        )}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryOP1"
                        )}
                      >
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryOP1"
                        )}
                      </option>
                      <option
                        value={t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryOP2"
                        )}
                      >
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryOP2"
                        )}
                      </option>
                    </select>
                  </div>
                </div>
                {/* Conditionally render the div based on the selected option */}
                {selectedOption1 ===
                  `${t(
                    "bookingPages.Flight&Hotel-Reservation.flightItineraryOP2"
                  )}` && (
                  <>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label
                          htmlFor="visaInterviewDate"
                          className="form-label"
                        >
                          {t(
                            "bookingPages.Flight&Hotel-Reservation.visaInterviewDate"
                          )}
                          :
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
                          {t("bookingPages.Flight&Hotel-Reservation.timeZone")}
                        </label>
                        {/* <select
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
                              {timezone.timezone} ({timezone.gmt_offset}) -
                              {timezone.country}
                            </option>
                          ))}
                        </select> */}
                        <input
                          type="text"
                          className="form-control"
                          id="timeZone"
                          name="timeZone"
                          onChange={handleChange}
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.timeZonePH"
                          )}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div id="payNowMainDiv">
                <h2 className="px-3 py-4">
                  {t("bookingPages.Flight&Hotel-Reservation.orderSummary")}
                </h2>
                <div className="row px-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 fitRow1">
                    <div id="flightItineraryTotalDiv">
                      <p id="flightItineraryTotalText">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryTotal"
                        )}
                        :
                      </p>
                      <p id="flightItineraryTotal">${price}</p>
                      <input
                        type="hidden"
                        id="flightItineraryTotalVal"
                        name="flightItineraryTotalVal"
                        value={price}
                        ref={hiddenInputRef} // Attach the ref to the input
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <ul>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms1")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms2")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms3")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms4")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms5")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms6")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms7")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms8")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms9")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms10")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms11")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms12")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms13")}
                        </span>
                      </li>
                      <li>
                        <img
                          src={tickImg}
                          className="tickImg"
                          atl={t(
                            "bookingPages.Flight&Hotel-Reservation.tickAtl"
                          )}
                        />
                        <span>
                          {t("bookingPages.Flight&Hotel-Reservation.terms14")}
                        </span>
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
                        {t("bookingPages.Flight&Hotel-Reservation.payNow")}
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
