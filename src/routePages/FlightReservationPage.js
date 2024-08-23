import React from "react";
import Header from "../Header";
import FlightReservation from "../otherPages/FlightReservation";
import Reservation from "../otherPages/Reservation";
import UserCentric from "../otherPages/userCentric";
import Footer from "../footer";
const FlightReservationPage = () => {
  return (
    <>
      <Header />
      <FlightReservation />
      <Reservation />
      <UserCentric />
      <Footer />
    </>
  );
};

export default FlightReservationPage;
