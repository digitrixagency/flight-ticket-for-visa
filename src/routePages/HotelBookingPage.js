import React from "react";
import Header from "../Header";
import HotelBooking from "../otherPages/HotelBooking";
import Reservation from "../otherPages/Reservation";
import UserCentric from "../otherPages/userCentric";
import Footer from "../footer";
const HotelBookingPage = () => {
  return (
    <>
      <Header />
      <HotelBooking />
      <Reservation />
      <UserCentric />
      <Footer />
    </>
  );
};

export default HotelBookingPage;
