import React from "react";
import { Link } from "react-router-dom";
import SponsorTitles from "../SponsorTitles/SponsorTitles";

function Partner() {


  return (
    <section className="partner-area ptb-120">
      <div className="container">
        <div className="section-title">
          <span>Check Who Makes This Event Possible!</span>
          <h2>
            Our Event <b>Sponsors</b>
          </h2>

          <Link to="/sponsors" className="btn btn-primary">
            Become Link Sponsor
          </Link>

          <div className="bar"></div>
        </div>
        <SponsorTitles />

      </div>
    </section>
  );
}

export default Partner;
