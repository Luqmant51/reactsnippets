import React from "react";
import { Link } from "react-router-dom";
import Cta from "../Common/Cta";

import choose1 from "../../assets/images/why-choose-img1.jpg";
import choose2 from "../../assets/images/why-choose-img2.jpg";
import choose3 from "../../assets/images/why-choose-img3.jpg";

function WhyUs() {
  return (
    <>
      <section className="why-choose-us-two">
        <div className="row m-0 h-100 align-items-center">
          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <img
                src={choose1}
                alt="Why Us"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Great Speakers</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link to="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>01</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <img
                src={choose2}
                alt="Why Us"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Networking</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link to="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>02</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <img
                src={choose3}
                alt="Why Us"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Have Fun</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link to="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>03</span>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

export default WhyUs;
