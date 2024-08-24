import React from "react";
import Header from "../Header";
import FlightNHotelReservation from "../otherPages/FlightNHotelReservation";
import Reservation from "../otherPages/Reservation";
import UserCentric from "../otherPages/userCentric";
import Footer from "../footer";
const FlightNHotelReservationPage = () => {
  return (
    <>
      <Header />
      <FlightNHotelReservation />
      <Reservation />
      <UserCentric />
      <Footer />
    </>
  );
};

export default FlightNHotelReservationPage;
