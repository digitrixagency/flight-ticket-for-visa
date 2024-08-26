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
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import axios from "axios";

import airportsJsonData from "../jsonData/airports.json";

const FlightNHotelReservation = () => {
  const hiddenInputRef = useRef(null); // Create a ref for the hidden input

  const [multipleCities, setMultipleCities] = useState(0);
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
      // Set MUID and transactionId
      const MUIDVal = "MUID" + Date.now();
      const transIdVal = "TransId" + Date.now();
      setFormData({
        ...formData,
        ["MUID"]: MUIDVal,
        ["transactionId"]: transIdVal,
        ["amount"]: hiddenInputRef.current.value,
      });

      // Step 1: Handle payment with your payment gateway
      const paymentResponse = await axios.post(
        "http://localhost:5000/api/process-payment",
        {
          amount: hiddenInputRef.current.value,
          transactionId: transIdVal, // Ensure transaction ID is consistent
          MUID: MUIDVal, // Ensure transaction ID is consistent
        }
      );

      if (paymentResponse.data.success) {
        // Step 2: If payment is successful, submit form data to the backend
        const response = await axios.post(
          "http://localhost:5000/api/submit-form",
          formData
        );
        alert(response.data); // Should show 'Form submitted successfully!'
      } else {
        // Handle payment failure
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      // Handle errors during payment or form submission
      alert("Error processing payment or submitting form.");
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

  const [numTravelers2, setNumTravelers2] = useState(1);
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
          let multipleCitiesVal = multipleCities * value ;
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
            let multipleCitiesVal = multipleCities * numTravelers22 ;
            updatedPrice += multipleCitiesVal;
          }
          updatedPrice += travelerPrice;
        }
      } 

      // Update form data and hidden input field
      document.getElementById("flightItineraryTotalVal").value = updatedPrice;
      setFormData({
        ...formData,
        ['amount']: updatedPrice,
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

  // Function to fetch city code based on city name
  const fetchCityCode = async (cityName) => {
    try {
      // Fetch access token
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
            Authorization: `Bearer ${accessToken}`, // Replace with your actual token
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
      // Fetch access token
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
            Authorization: `Bearer ${accessToken}`, // Replace with your actual token
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setHotels(data.data || []); // Safeguard: Ensure hotels is set to an empty array if data.hotels is undefined
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  // Function to handle city name input change
  const handleCityNameChange = async (e) => {
    const value = e.target.value;
    setCityName(value);

    // Trigger search only if input has more than 3 characters
    if (value.length > 3) {
      const cityCode = await fetchCityCode(value);
      if (cityCode) {
        fetchHotels(cityCode);
      }
    } else {
      setHotels([]); // Clear hotels if input length is not greater than 3
    }
  };

  // Handle changes for input
  const handle2FunctionForInput = (e) => {
    handleChange(e); // Assuming handleChange is defined elsewhere
    handleCityNameChange(e);
  };
  return (
    <>
      <div className="container-fluid FlightReservation pt-5">
        <div className="container pb-5">
          <div className="container w-75 mb-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h1>Instant Flight Plus Hotel Bookings for Visa</h1>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  {isReadMore
                    ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  ..."
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  <span
                    onClick={toggleReadMore}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    {isReadMore ? "Read More" : "Show Less"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="container w-75">
            <h2 class="frH2">Traveler Information</h2>
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
                    {/* <p>Format: Departure city (date) - Arrival city/airport</p> */}
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
                              {airport.name} - {airport.city}, {airport.country}{" "}
                              ({airport.iata})
                            </option>
                          ))}
                        </datalist>
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
                              {airport.name} - {airport.city}, {airport.country}{" "}
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
                          <div className="mb-3 inputDiv">
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
                              list={`fromAirportList${index}`}
                              onChange={(e) =>
                                handleFilterNChangeMulti1(e, index)
                              }
                              onInput={(e) => handleFromAirportSelect(e, index)}
                            />
                            <datalist id={`fromAirportList${index}`} className="suggestions-list">
                              {filteredFromAirports.map((airport, idx) => (
                                <option key={idx} value={airport.name}>
                                  {airport.name}, {airport.city},{" "}
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
                              To
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`toInput${index}`}
                              name={`toInput${index}`}
                              placeholder="Country, city or airport"
                              list={`toAirportList${index}`}
                              onChange={(e) =>
                                handleFilterNChangeMulti2(e, index)
                              }
                              onInput={(e) => handleToAirportSelect(e, index)}
                            />
                            <datalist id={`toAirportList${index}`} className="suggestions-list">
                              {filteredToAirports.map((airport, idx) => (
                                <option key={idx} value={airport.name}>
                                  {airport.name}, {airport.city},{" "}
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
                              Depart
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id={`departDateInput${index}`}
                              name={`departDateInput${index}`}
                              placeholder="Add date"
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
                        name="additionalPreferencesForFlight"
                        id="ap1"
                        value="yes"
                        onClick={showHideFunMain1}
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
                        name="additionalPreferencesForFlight"
                        id="ap2"
                        value="no"
                        onClick={showHideFunMain1}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="ap2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal1 === "yes" && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                      <label>Additional Flight Details:</label>
                      <textarea
                        cols="40"
                        rows="5"
                        name="additionalPreferencesForFlightYes"
                        maxlength="2000"
                        class="form-control"
                        onChange={handleChange}
                        placeholder="Please mention your special instructions for your flight here, we are trying to make it accordingly to your details."
                      ></textarea>
                    </p>
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="noOfTravelers" className="form-label">
                      No. Of Travelers <span>*</span>
                    </label>
                    <select
                      id="noOfTravelers"
                      name="noOfTravelers"
                      className="form-select"
                      onChange={handleDropdownChangeNValueChange2}
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
                      placeholder="example@mail.com"
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
                      placeholder="123-4567-8901"
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
                          placeholder="First name"
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
                          placeholder="Last name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                ))}

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h2 class="frH2">Hotel Details</h2>

                  <div id="radioBtnDiv">
                    <h5>
                      NO. OF HOTELS <span>*</span>
                    </h5>

                    <div className="form-check" style={formCheckStyle}>
                      <label htmlFor="onOfHotels" className="form-label">
                        (Maximum 4 hotels free in 1 trip, Will be charged $8 for
                        each additional hotels.)
                      </label>
                      <select
                        id="onOfHotels"
                        name="onOfHotels"
                        className="form-select"
                        required
                        onChange={handlecalculationOnOfHotels2}
                      >
                        <option selected disabled>
                          —Please choose an option—
                        </option>
                        <option value="1-4 Hotels/Free">1-4 Hotels/Free</option>
                        <option value="5th Hotel($8/Hotel)" price="8">
                          5th Hotel($8/Hotel)
                        </option>
                        <option value="6th Hotel($8/Hotel)" price="16">
                          6th Hotel($8/Hotel)
                        </option>
                        <option value="7th Hotel($8/Hotel)" price="24">
                          7th Hotel($8/Hotel)
                        </option>
                        <option value="8th Hotel($8/Hotel)" price="32">
                          8th Hotel($8/Hotel)
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
                      Travelers Hotel Details <span>*</span>
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
                          Where do you want to stay?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="destinationOrHotelName"
                          name="destinationOrHotelName"
                          placeholder="Enter destination or hotel name"
                          onChange={handle2FunctionForInput}
                          list="hotels"
                        />
                      </div>
                      <datalist id="hotels" className="suggestions-list">
                        {hotels.length > 0 ? (
                          hotels.map((hotel, index) => (
                            <option key={index} value={hotel.name} />
                          ))
                        ) : (
                          <option value="No hotels found" disabled />
                        )}
                      </datalist>
                    </div>
                    <div id="CheckInDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="CheckIn" className="form-label">
                          Check-in
                        </label>
                        <input
                          type={inputType}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          id="CheckIn"
                          name="CheckIn"
                          placeholder="Add date"
                        />
                      </div>
                    </div>
                    <div id="CheckOutDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="CheckOut" className="form-label">
                          Check-out
                        </label>
                        <input
                          type={inputType}
                          onFocus={handleFocus}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          id="CheckOut"
                          name="CheckOut"
                          placeholder="Add date"
                        />
                      </div>
                    </div>
                    <div id="guestsNRoomDiv">
                      <div className="mb-3 inputDiv">
                        <label htmlFor="guestsNRoom" className="form-label">
                          Travelers and Cabin
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="guestsNRoom"
                          name="guestsNRoom"
                          placeholder="2 Adult, 1 room"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div id="additionalPreferencesDiv">
                    <p className="me-2">
                      Have You Any Additional Hotel Preferences/Details?:
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
                        Yes
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
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12"></div>

                {showHideVal2 === "yes" && (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>
                      <label>Additional Hotel Detail:</label>
                      <textarea
                        cols="40"
                        rows="5"
                        name="additionalPreferencesForHotelYes"
                        maxlength="2000"
                        class="form-control"
                        onChange={handleChange}
                        placeholder="Please mention your special instructions for your hotel here, we are trying to make it accordingly to your details."
                      ></textarea>
                    </p>
                  </div>
                )}
              </div>

              <h2>General Details</h2>
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
                      <option value="Get both reservation within 1-2 hours">
                        Get both reservation within 1-2 hours
                      </option>
                      <option value="Get both reservation on different date (E.g. 2 days before visa interview)">
                        Get both reservation on different date (E.g. 2 days
                        before visa interview)
                      </option>
                    </select>
                  </div>
                </div>
                {/* Conditionally render the div based on the selected option */}
                {selectedOption1 ===
                  "Get both reservation on different date (E.g. 2 days before visa interview)" && (
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

export default FlightNHotelReservation;
