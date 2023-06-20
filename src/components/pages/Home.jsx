import React from "react";
import MainBanner from "../Home/MainBanner";
import About from "../Home/About";
import WhyUs from "../Home/WhyUs";
import Speakers from "../Home/Speakers";
import EventSchedules from "../Home/EventSchedules";
import FunFact from "../Common/FunFact";
import Pricing from "../Home/Pricing";
import Partner from "../Common/Partner";
import LatesNews from "../Home/LatestNews";
import BuyTicket from "../Common/BuyTicket";
import Subscribe from "../Common/Subscribe";
import Footer from "../Common/Footer";
import GoTop from "../Shared/GoTop";

function Home() {
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
      {/* Schedule Area */}
      <EventSchedules />
      {/* FunFacts Area */}
      <FunFact />
      {/* Pricing Area */}
      <Pricing />
      {/* Partner Area */}
      <Partner />
      {/* Blog Area */}
      <LatesNews />
      {/* Buy Tickets Area */}
      <BuyTicket />
      {/* Subscribe Area */}
      <Subscribe />
      {/* Footer Area */}
      <Footer />
      {/* Back Top top */}
      <GoTop />
    </>
  );
}

export default Home;
