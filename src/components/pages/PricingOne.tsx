import React from "react";
import PagesMainBanner from "../Common/PagesMainBanner";
import PricingCardOne from "../Pricing/PricingCardOne";
import Footer from "../Common/Footer";

function PricingOne() {
  return (
    <>
      <PagesMainBanner title="Pricing" subTitle="Get Your Tickets" path="Pricing" />
      <PricingCardOne />
      <Footer />
    </>
  );
}

export default PricingOne;
