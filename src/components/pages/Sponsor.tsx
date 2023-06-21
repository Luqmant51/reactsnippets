import React, { useEffect } from "react";
import Footer from "../Common/Footer";
import lax from 'lax.js';
import PagesMainBanner from "../Common/PagesMainBanner";
import SponsorTitles from "../SponsorTitles/SponsorTitles";

function Sponsor() {
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
      <PagesMainBanner title="Sponsors" subTitle="Check Who Makes This Event Possible!" path="Sponsors" />
      <SponsorTitles />
      <Footer />
    </>
  );
}

export default Sponsor;
