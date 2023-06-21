import React, { useEffect } from "react";
import PagesMainBanner from "../Common/PagesMainBanner";
import About from "../Common/Aboutus";
import WhyUs from "../Common/WhyUs";
import Speakers from "../AboutOne/Speakers";
import GoTop from "../Shared/GoTop";
import Footer from "../Common/Footer";
import FunFact from "../Common/FunFact";
import Partner from "../Common/Partner";
import BuyTicket from "../Common/BuyTicket";
import Subscribe from "../Common/Subscribe";
import Cta from "../Common/Cta";
import lax from 'lax.js';

import signature from "../../assets/images/signature.png"
import about1 from "../../assets/images/about1.jpg"
import about2 from "../../assets/images/about2.jpg"
import about3 from "../../assets/images/about3.jpg"

function AboutOne() {
  useEffect(() => {
    lax.setup();

    const handleScroll = () => {
      lax.update(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll, false);
    lax.update(window.scrollY);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Banner */}
      <PagesMainBanner title="About Us" subTitle="Are you ready to attend?" path="About" />
      {/* About Area */}
      <About about1={about1} about2={about2} about3={about3} signature={signature} />
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
      <GoTop />
    </>
  );
}

export default AboutOne;
