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
import { useTranslation } from "react-i18next";
import airportsJsonData from "../jsonData/airports.json";

const FlightNHotelReservation = () => {
  const hiddenInputRef = useRef(null); // Create a ref for the hidden input

  const [multipleCities, setMultipleCities] = useState(0);
  const borderRAdArr1 = { borderRadius: "5px" };

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

  // Store the array of timezones in state
  // const [timezones] = useState([
  //   {
  //     timezone: "Pacific/Midway",
  //     country: "United States",
  //     gmt_offset: "-11:00",
  //     local_time: "06:00 AM",
  //   },
  //   {
  //     timezone: "Pacific/Honolulu",
  //     country: "United States",
  //     gmt_offset: "-10:00",
  //     local_time: "07:00 AM",
  //   },
  //   {
  //     timezone: "America/Anchorage",
  //     country: "United States",
  //     gmt_offset: "-09:00",
  //     local_time: "08:00 AM",
  //   },
  //   {
  //     timezone: "America/Los_Angeles",
  //     country: "United States",
  //     gmt_offset: "-08:00",
  //     local_time: "09:00 AM",
  //   },
  //   {
  //     timezone: "America/Denver",
  //     country: "United States",
  //     gmt_offset: "-07:00",
  //     local_time: "10:00 AM",
  //   },
  //   {
  //     timezone: "America/Chicago",
  //     country: "United States",
  //     gmt_offset: "-06:00",
  //     local_time: "11:00 AM",
  //   },
  //   {
  //     timezone: "America/New_York",
  //     country: "United States",
  //     gmt_offset: "-05:00",
  //     local_time: "12:00 PM",
  //   },
  //   {
  //     timezone: "America/Caracas",
  //     country: "Venezuela",
  //     gmt_offset: "-04:00",
  //     local_time: "01:00 PM",
  //   },
  //   {
  //     timezone: "America/Halifax",
  //     country: "Canada",
  //     gmt_offset: "-04:00",
  //     local_time: "02:00 PM",
  //   },
  //   {
  //     timezone: "America/St_Johns",
  //     country: "Canada",
  //     gmt_offset: "-03:30",
  //     local_time: "02:30 PM",
  //   },
  //   {
  //     timezone: "America/Sao_Paulo",
  //     country: "Brazil",
  //     gmt_offset: "-03:00",
  //     local_time: "03:00 PM",
  //   },
  //   {
  //     timezone: "Atlantic/South_Georgia",
  //     country: "South Georgia and the South Sandwich Islands",
  //     gmt_offset: "-02:00",
  //     local_time: "04:00 PM",
  //   },
  //   {
  //     timezone: "Atlantic/Azores",
  //     country: "Portugal",
  //     gmt_offset: "-01:00",
  //     local_time: "05:00 PM",
  //   },
  //   {
  //     timezone: "Europe/London",
  //     country: "United Kingdom",
  //     gmt_offset: "+00:00",
  //     local_time: "06:00 PM",
  //   },
  //   {
  //     timezone: "Europe/Berlin",
  //     country: "Germany",
  //     gmt_offset: "+01:00",
  //     local_time: "07:00 PM",
  //   },
  //   {
  //     timezone: "Europe/Athens",
  //     country: "Greece",
  //     gmt_offset: "+02:00",
  //     local_time: "08:00 PM",
  //   },
  //   {
  //     timezone: "Europe/Moscow",
  //     country: "Russia",
  //     gmt_offset: "+03:00",
  //     local_time: "09:00 PM",
  //   },
  //   {
  //     timezone: "Asia/Tehran",
  //     country: "Iran",
  //     gmt_offset: "+03:30",
  //     local_time: "09:30 PM",
  //   },
  //   {
  //     timezone: "Asia/Dubai",
  //     country: "United Arab Emirates",
  //     gmt_offset: "+04:00",
  //     local_time: "10:00 PM",
  //   },
  //   {
  //     timezone: "Asia/Kabul",
  //     country: "Afghanistan",
  //     gmt_offset: "+04:30",
  //     local_time: "10:30 PM",
  //   },
  //   {
  //     timezone: "Asia/Karachi",
  //     country: "Pakistan",
  //     gmt_offset: "+05:00",
  //     local_time: "11:00 PM",
  //   },
  //   {
  //     timezone: "Asia/Kolkata",
  //     country: "India",
  //     gmt_offset: "+05:30",
  //     local_time: "11:30 PM",
  //   },
  //   {
  //     timezone: "Asia/Dhaka",
  //     country: "Bangladesh",
  //     gmt_offset: "+06:00",
  //     local_time: "12:00 AM",
  //   },
  //   {
  //     timezone: "Asia/Bangkok",
  //     country: "Thailand",
  //     gmt_offset: "+07:00",
  //     local_time: "01:00 AM",
  //   },
  //   {
  //     timezone: "Asia/Shanghai",
  //     country: "China",
  //     gmt_offset: "+08:00",
  //     local_time: "02:00 AM",
  //   },
  //   {
  //     timezone: "Asia/Tokyo",
  //     country: "Japan",
  //     gmt_offset: "+09:00",
  //     local_time: "03:00 AM",
  //   },
  //   {
  //     timezone: "Australia/Sydney",
  //     country: "Australia",
  //     gmt_offset: "+10:00",
  //     local_time: "04:00 AM",
  //   },
  //   {
  //     timezone: "Pacific/Noumea",
  //     country: "New Caledonia",
  //     gmt_offset: "+11:00",
  //     local_time: "05:00 AM",
  //   },
  //   {
  //     timezone: "Pacific/Auckland",
  //     country: "New Zealand",
  //     gmt_offset: "+12:00",
  //     local_time: "06:00 AM",
  //   },
  // ]);

  // State to track the selected option
  const [selectedOption1, setSelectedOption1] = useState("");

  // Function to handle the change event of the select element
  const handleSelectChange = (event) => {
    setSelectedOption1(event.target.value);
  };
  // State to track the selected option
  const [showHideVal1, showHideFun1] = useState("");
  const [showHideVal2, showHideFun2] = useState("");

  // Function to handle the change event of the select element
  const showHideFunMain1 = (event) => {
    showHideFun1(event.target.value);
  };
  const showHideFunMain2 = (event) => {
    showHideFun2(event.target.value);
  };

  const [formData, setFormData] = useState({
    dataFor: "FlightNHotelReservation",
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

  const formCheckStyle = {
    width: "100%",
    marginLeft: "0px",
    paddingLeft: "0px",
  };

  const [numTravelers2, setNumTravelers2] = useState(0);
  const [priceCalData2, setpriceCalData2] = useState({
    noOfTravelers: "",
    onOfHotels: "",
    flightItineraryTotalVal: 0,
  });

  const handleDropdownChangeNValueChange2 = (e) => {
    handleChange(e);
    handleDropdownChange2(e);
    handlecalculation2(e);
  };
  const handlecalculationOnOfHotels2 = (e) => {
    handleChange(e);
    handlecalculation2(e);
  };

  const handlecalculation2 = (event) => {
    const { name, value, options, selectedIndex } = event.target;
    const selectedOption = options[selectedIndex];
    const price = parseFloat(selectedOption.getAttribute("price")) || 0;

    setpriceCalData2((prevData) => {
      let updatedPrice = prevData.flightItineraryTotalVal;

      if (name === "noOfTravelers") {
        // Step 1: Update price based on noOfTravelers selection
        updatedPrice = price;
        if (multipleCities === 3) {
          let multipleCitiesVal = multipleCities * value;
          updatedPrice += multipleCitiesVal;
        }

        // Add the price from the second select if it has a value
        if (prevData.onOfHotels) {
          const hotelPrice =
            parseFloat(
              document
                .querySelector("#onOfHotels option:checked")
                .getAttribute("price")
            ) || 0;

          if (value == 1) {
            updatedPrice += hotelPrice;
          } else {
            updatedPrice += hotelPrice * value;
          }
        }
      } else if (name === "onOfHotels") {
        // Step 2: Update price based on onOfHotels selection
        // updatedPrice = price;
        updatedPrice = price;

        // Add the price from the first select if it has a value
        if (prevData.noOfTravelers) {
          const travelerPrice =
            parseFloat(
              document
                .querySelector("#noOfTravelers option:checked")
                .getAttribute("price")
            ) || 0;
          const numTravelers22 =
            parseFloat(
              document
                .querySelector("#noOfTravelers option:checked")
                .getAttribute("value")
            ) || 0;
          if (numTravelers22 == 1) {
            updatedPrice = price;
          } else {
            updatedPrice = price * numTravelers22;
          }
          if (multipleCities === 3) {
            let multipleCitiesVal = multipleCities * numTravelers22;
            updatedPrice += multipleCitiesVal;
          }
          updatedPrice += travelerPrice;
        }
      }

      // Update form data and hidden input field
      document.getElementById("flightItineraryTotalVal").value = updatedPrice;
      setFormData({
        ...formData,
        ["amount"]: updatedPrice,
      });
      return {
        ...prevData,
        [name]: value,
        flightItineraryTotalVal: updatedPrice,
      };
    });
  };

  const handleDropdownChange2 = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const numberOfTravelers = parseInt(event.target.value, 10);
    const travelerPrice = parseInt(selectedOption.getAttribute("price"), 10);
    setNumTravelers2(numberOfTravelers);
  };

  const [numTravelers, setNumTravelers] = useState(1);
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
    const e = event;
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "multipleCities") {
      setMultipleCities(3);
      setShowTravelerFlightDetailDiv(true);
    } else {
      setMultipleCities(0);
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

  const [cityName, setCityName] = useState("");
  const [hotels, setHotels] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Function to fetch city code based on city name
  const fetchCityCode = async (cityName) => {
    try {
      const tokenResponse = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        {
          grant_type: "client_credentials",
          client_id: "2cHC2B0AyINKnbSNfh7xdGc1eMzs132n",
          client_secret: "vAPomArPZ71G8J5y",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;
      const response = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${cityName}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching city code! Status: ${response.status}`);
      }

      const data = await response.json();
      const cityCode = data.data[0]?.iataCode;
      return cityCode;
    } catch (error) {
      console.error("Error fetching city code:", error);
    }
  };

  // Function to fetch hotels based on city code
  const fetchHotels = async (cityCode) => {
    try {
      const tokenResponse = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        {
          grant_type: "client_credentials",
          client_id: "2cHC2B0AyINKnbSNfh7xdGc1eMzs132n",
          client_secret: "vAPomArPZ71G8J5y",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;
      const response = await fetch(
        `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setHotels(data.data || []);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  // Function to handle city name input change
  const handleCityNameChange = async (e) => {
    const value = e.target.value;
    setCityName(value);

    if (value.length > 3) {
      const cityCode = await fetchCityCode(value);
      if (cityCode) {
        fetchHotels(cityCode);
        setShowSuggestions(true);
      }
    } else {
      setHotels([]);
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (hotelName) => {
    setCityName(hotelName);
    setShowSuggestions(false); // Hide suggestions once a selection is made
  };
  // Handle changes for input
  const handle2FunctionForInput = (e) => {
    handleChange(e); // Assuming handleChange is defined elsewhere
    handleCityNameChange(e);
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
  const { t } = useTranslation(); // Get current language from i18n

  return (
    <>
      <div className="container-fluid FlightReservation pt-5">
        <div className="container pb-5">
          <div className="container w-75 mb-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h1>{t("bookingPages.Flight&Hotel-Reservation.mainHead")}</h1>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  {isReadMore
                    ? `${t(
                        "bookingPages.Flight&Hotel-Reservation.viewContent"
                      )}`
                    : `${t(
                        "bookingPages.Flight&Hotel-Reservation.allContent"
                      )}`}
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
            <h2 class="frH2">
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
                      )}
                      <span>*</span>
                    </label>
                    {/* <p>Format: Departure city (date) - Arrival city/airport</p> */}
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
                            <datalist
                              id={`toAirportList${index}`}
                              className="suggestions-list"
                            >
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
                    </p>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferencesForFlight"
                        id="ap1"
                        value="yes"
                        onClick={showHideFunMain1}
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
                        onClick={showHideFunMain1}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap2">
                        {t("bookingPages.Flight&Hotel-Reservation.No")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal1 === "yes" && (
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
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="noOfTravelers" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.noOfTravelers")}
                      <span>*</span>
                    </label>
                    <select
                      id="noOfTravelers"
                      name="noOfTravelers"
                      className="form-select"
                      onChange={handleDropdownChangeNValueChange2}
                      required
                    >
                      <option selected disabled>
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP1"
                        )}
                      </option>
                      <option value="1" price="24">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP2"
                        )}
                      </option>
                      <option value="2" price="40">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP3"
                        )}
                      </option>
                      <option value="3" price="56">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP4"
                        )}
                      </option>
                      <option value="4" price="72">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP5"
                        )}
                      </option>
                      <option value="5" price="88">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP6"
                        )}
                      </option>
                      <option value="6" price="104">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP7"
                        )}
                      </option>
                      <option value="7" price="120">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP8"
                        )}
                      </option>
                      <option value="8" price="136">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP9"
                        )}
                      </option>
                      <option value="9" price="152">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP10"
                        )}
                      </option>
                      <option value="10" price="168">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP11"
                        )}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="travelerEmail" className="form-label">
                      {t("bookingPages.Flight&Hotel-Reservation.emailaddress")}
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
                      {t("bookingPages.Flight&Hotel-Reservation.phoneNo")}
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

                {Array.from({ length: numTravelers2 }, (_, index) => (
                  <>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`travelTitle${index + 1}`}
                          className="form-label"
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.title")}
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
                          )}
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerFirstName${index + 1}`}
                          name={`travelerFirstName${index}`}
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.firstNamePH"
                          )}
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
                          {t(
                            `bookingPages.Flight&Hotel-Reservation.lastName${
                              index + 1
                            }`
                          )}
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`travelerLastName${index + 1}`}
                          name={`travelerLastName${index}`}
                          required
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.lastNamePH"
                          )}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                ))}

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h2 class="frH2">
                    {t("bookingPages.Flight&Hotel-Reservation.hotelDetails")}
                  </h2>

                  <div id="radioBtnDiv">
                    <h5>
                      {t("bookingPages.Flight&Hotel-Reservation.noOfHotels")}
                      <span>*</span>
                    </h5>

                    <div className="form-check" style={formCheckStyle}>
                      <label htmlFor="onOfHotels" className="form-label">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.noteForHotels"
                        )}
                      </label>
                      <select
                        id="onOfHotels"
                        name="onOfHotels"
                        className="form-select"
                        required
                        onChange={handlecalculationOnOfHotels2}
                      >
                        <option selected disabled>
                          {t(
                            "bookingPages.Flight&Hotel-Reservation.noOfTravelersOP1"
                          )}
                        </option>
                        <option
                          value={t(
                            "bookingPages.Flight&Hotel-Reservation.1To4"
                          )}
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.1To4")}
                        </option>
                        <option
                          value={t("bookingPages.Flight&Hotel-Reservation.5TH")}
                          price="8"
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.5TH")}
                        </option>
                        <option
                          value={t("bookingPages.Flight&Hotel-Reservation.6TH")}
                          price="16"
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.6TH")}
                        </option>
                        <option
                          value={t("bookingPages.Flight&Hotel-Reservation.7TH")}
                          price="24"
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.7TH")}
                        </option>
                        <option
                          value={t("bookingPages.Flight&Hotel-Reservation.8Th")}
                          price="32"
                        >
                          {t("bookingPages.Flight&Hotel-Reservation.8Th")}
                        </option>
                      </select>
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
                        "bookingPages.Flight&Hotel-Reservation.travelersHotelDetails"
                      )}
                      <span>*</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="travelerHotelDetailDiv">
                    <div id="destinationOrHotelNameDiv">
                      <div className="mb-3 inputDiv">
                        <label
                          htmlFor="destinationOrHotelName"
                          className="form-label"
                        >
                          {t(
                            "bookingPages.Flight&Hotel-Reservation.whereToStay"
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="destinationOrHotelName"
                          name="destinationOrHotelName"
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.whereToStayPH"
                          )}
                          value={cityName}
                          onChange={handleCityNameChange}
                          onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
                        />
                      </div>
                      {showSuggestions && hotels.length > 0 && (
                        <div className="dropdown-suggestions">
                          {hotels.map((hotel, index) => (
                            <div
                              key={index}
                              onClick={() => handleSuggestionClick(hotel.name)}
                              className="dropdown-item"
                            >
                              {hotel.name}
                            </div>
                          ))}
                        </div>
                      )}

                      {showSuggestions && hotels.length === 0 && (
                        <div className="dropdown-suggestions">
                          <div className="dropdown-item">
                            {t(
                              "bookingPages.Flight&Hotel-Reservation.nohotelsFound"
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div id="CheckInDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="CheckIn" className="form-label">
                          {t("bookingPages.Flight&Hotel-Reservation.checkIn")}
                        </label>
                        <input
                          type={inputType}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          id="CheckIn"
                          name="CheckIn"
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.returnPH"
                          )}
                        />
                      </div>
                    </div>
                    <div id="CheckOutDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="CheckOut" className="form-label">
                          {t("bookingPages.Flight&Hotel-Reservation.checkOut")}
                        </label>
                        <input
                          type={inputType}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          id="CheckOut"
                          name="CheckOut"
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.returnPH"
                          )}
                        />
                      </div>
                    </div>
                    <div id="guestsNRoomDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="guestsNRoom" className="form-label">
                          {t(
                            "bookingPages.Flight&Hotel-Reservation.guestsNRooms"
                          )}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="guestsNRoom"
                          name="guestsNRoom"
                          placeholder={t(
                            "bookingPages.Flight&Hotel-Reservation.travelersNCabinPH"
                          )}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div id="additionalPreferencesDiv">
                    <p className="me-2">
                      {t(
                        "bookingPages.Flight&Hotel-Reservation.additionalPreferencesH"
                      )}
                      :
                    </p>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferencesForHotel"
                        id="ap11"
                        value="yes"
                        onClick={showHideFunMain2}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap11">
                        {t("bookingPages.Flight&Hotel-Reservation.Yes")}
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="additionalPreferencesForHotel"
                        id="ap22"
                        value="no"
                        onClick={showHideFunMain2}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap22">
                        {t("bookingPages.Flight&Hotel-Reservation.No")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal2 === "yes" && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                      <label>
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.additionalHotelDetail"
                        )}
                        :
                      </label>
                      <textarea
                        cols="40"
                        rows="5"
                        name="additionalPreferencesForHotelYes"
                        maxlength="2000"
                        class="form-control"
                        onChange={handleChange}
                        placeholder={t(
                          "bookingPages.Flight&Hotel-Reservation.additionalHotelDetailPH"
                        )}
                      ></textarea>
                    </p>
                  </div>
                )}
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
                      <option value="Get both reservation within 1-2 hours">
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.flightItineraryOP1"
                        )}
                      </option>
                      <option value="Get both reservation on different date (E.g. 2 days before visa interview)">
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
                      <p id="flightItineraryTotal">
                        ${priceCalData2.flightItineraryTotalVal}
                      </p>
                      <input
                        type="hidden"
                        id="flightItineraryTotalVal"
                        name="flightItineraryTotalVal"
                        value={priceCalData2.flightItineraryTotalVal}
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
                        {t(
                          "bookingPages.Flight&Hotel-Reservation.termNConditions"
                        )}
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

export default FlightNHotelReservation;
