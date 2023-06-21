import React, { useEffect } from "react";
import lax from 'lax.js';
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
  useEffect(() => {
    lax.setup();

    const handleScroll = () => {
      lax.update(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll, true);

    lax.update(window.scrollY);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
