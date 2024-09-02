import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./routePages/HomePage";
import FlightReservationPage from "./routePages/FlightReservationPage";
import HotelBookingPage from "./routePages/HotelBookingPage";
import FlightNHotelReservationPage from "./routePages/FlightNHotelReservationPage";
import './i18n/i18n'; // Import the i18n configuration

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:lng" element={<HomePage />} />
        <Route path="/:lng/Flight-Reservation" element={<FlightReservationPage />} />
        <Route path="/:lng/Hotel-Booking" element={<HotelBookingPage />} />
        <Route path="/:lng/Flight+Hotel-Reservation" element={<FlightNHotelReservationPage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
