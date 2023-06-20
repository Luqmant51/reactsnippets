import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import Sponsors from "../LaxButton/Sponsors";
import lax from 'lax.js';

import platinum1 from "../../assets/images/platinum-partner1.png";
import platinum2 from "../../assets/images/platinum-partner2.png";
import platinum3 from "../../assets/images/platinum-partner3.png";
import platinum4 from "../../assets/images/platinum-partner4.png";
import platinum5 from "../../assets/images/platinum-partner5.png";
import gold1 from "../../assets/images/gold-partner1.png";
import gold2 from "../../assets/images/gold-partner2.png";
import gold3 from "../../assets/images/gold-partner3.png";
import gold4 from "../../assets/images/gold-partner4.png";
import gold5 from "../../assets/images/gold-partner5.png";

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='icofont-rounded-left'></i>",
    "<i class='icofont-rounded-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

function Partner() {
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

        <div className="row">
          <div className="col-lg-12">
            <div className="partner-title platinum-sponsor">
              <Sponsors text="Platinum Sponsors" />
            </div>
          </div>
          <OwlCarousel
            className="platinum-partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={platinum1}
                    alt="Partner Logo"
                  />
                  <img
                    src={platinum1}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={platinum2}
                    alt="Partner Logo"
                  />
                  <img
                    src={platinum2}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={platinum3}
                    alt="Partner Logo"
                  />
                  <img
                    src={platinum3}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={platinum4}
                    alt="Partner Logo"
                  />
                  <img
                    src={platinum4}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={platinum5}
                    alt="Partner Logo"
                  />
                  <img
                    src={platinum5}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>
          </OwlCarousel>

          <div className="col-lg-12">
            <div className="border"></div>
          </div>

          <div className="col-lg-12">
            <div className="partner-title gold-sponsor">
              <Sponsors text="Gold Sponsors" />
            </div>
          </div>

          <OwlCarousel
            className="gold-partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={gold1}
                    alt="Partner Logo"
                  />
                  <img
                    src={gold1}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={gold2}
                    alt="Partner Logo"
                  />
                  <img
                    src={gold2}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={gold3}
                    alt="Partner Logo"
                  />
                  <img
                    src={gold3}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={gold4}
                    alt="Partner Logo"
                  />
                  <img
                    src={gold4}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="partner-item">
                <Link to="/sponsors" target="_blank">
                  <img
                    src={gold5}
                    alt="Partner Logo"
                  />
                  <img
                    src={gold5}
                    alt="Partner Logo"
                  />
                </Link>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Partner;
