import React from "react";
import Header from "../Header";
import Home from "../Home";
import Features from "../otherPages/features";
import Documents from "../otherPages/Documents";
import Reservation from "../otherPages/Reservation";
import UserCentric from "../otherPages/userCentric";
import Steps from "../otherPages/steps";
import Footer from "../footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Documents />
      <Reservation />
      <UserCentric />
      <Steps />
      <Footer />
    </>
  );
};

export default HomePage;
