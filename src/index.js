import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Home from "./Home";
import FlightReservation from "./otherPages/FlightReservation"; // Import Home2 component
import Features from "./otherPages/features";
import Documents from "./otherPages/Documents";
import Reservation from "./otherPages/Reservation";
import UserCentric from "./otherPages/userCentric";
import Steps from "./otherPages/steps";
import Footer from "./footer";

const App = () => {
  const [isHome2Active, setIsHome2Active] = useState(false);

  return (
    <React.StrictMode>
      <Header />
      {isHome2Active ? (
        <FlightReservation />
      ) : (
        <>
          <Home setIsHome2Active={setIsHome2Active} />
          <Features />
          <Documents />
        </>
      )}
      <Reservation />
      <UserCentric />
      {!isHome2Active && <Steps />}
      <Footer hideDiv={isHome2Active} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
