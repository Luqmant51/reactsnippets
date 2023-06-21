import React, { useEffect } from "react";
import lax from 'lax.js';
import MainBanner from "../Home/MainBanner";
import About from "../Common/Aboutus";
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

import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/shapes/5.png";
import signature from "../../assets/images/signature.png";

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
      <About about1={about1} about2={about2} about3={about3} signature={signature} />
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
