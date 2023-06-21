import React from "react";
import PagesMainBanner from "../Common/PagesMainBanner";
import Speaker from "../Speakers/SpeakersOne";
import Footer from "../Common/Footer";

function Speakers() {
  return (
    <>
      <PagesMainBanner title="Speakers" subTitle="One Team, One Dream" path="Speakers" />
      <Speaker />
      <Footer />
    </>
  );
}

export default Speakers;
