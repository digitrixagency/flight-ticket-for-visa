import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./routePages/HomePage";
import FlightReservationPage from "./routePages/FlightReservationPage";
import HotelBookingPage from "./routePages/HotelBookingPage";
import FlightNHotelReservationPage from "./routePages/FlightNHotelReservationPage";

const App = () => {
  const [isHome2Active, setIsHome2Active] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Flight-Reservation" element={<FlightReservationPage />} />
        <Route path="/Hotel-Booking" element={<HotelBookingPage />} />
        <Route path="/Flight+Hotel-Reservation" element={<FlightNHotelReservationPage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
