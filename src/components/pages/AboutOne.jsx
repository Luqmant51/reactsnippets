import React from "react";
import MainBanner from "../AboutOne/MainBanner";
import About from "../AboutOne/About";
import WhyUs from "../Common/WhyUs";
import Speakers from "../AboutOne/Speakers";
import GoTop from "../Shared/GoTop";
import Footer from "../Common/Footer";
import FunFact from "../Common/FunFact";
import Partner from "../Common/Partner";
import BuyTicket from "../Common/BuyTicket";
import Subscribe from "../Common/Subscribe";
import Cta from "../Common/Cta";

function AboutOne() {
 
  return (
    <>
      {/* Main Banner */}
      <MainBanner />
      {/* About Area */}
      <About />
      {/* Why Choose Us Area */}
      <WhyUs />
      {/* Speakers Area */}
      <Speakers />
      {/* CTA Are */}
      <Cta />
      {/* FunFacts Area */}
      <FunFact />
      {/* Pricing Area */}
      <Partner />
      {/* Buy Tickets Area */}
      <BuyTicket />
      {/* Subscribe Area */}
      <Subscribe />

      <Footer />

      {/* Back Top top */}
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
}

export default AboutOne;
