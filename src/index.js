import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import HomePage from "./routePages/HomePage";
import FlightReservationPage from "./routePages/FlightReservationPage";


const App = () => {
  const [isHome2Active, setIsHome2Active] = useState(false);

  return (
    // <React.StrictMode>
    //   <Header />
    //   {isHome2Active ? (
    //     <FlightReservation />
    //   ) : (
    //     <>
    //       <Home setIsHome2Active={setIsHome2Active} />
    //       <Features />
    //       <Documents />
    //     </>
    //   )}
    //   <Reservation />
    //   <UserCentric />
    //   {!isHome2Active && <Steps />}
    //   <Footer hideDiv={isHome2Active} />
    // </React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Flight-Reservation" element={<FlightReservationPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
