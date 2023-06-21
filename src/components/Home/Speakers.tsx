import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lax from 'lax.js';

import speakers1 from "../../assets/images/speakers1.jpg";
import speakers2 from "../../assets/images/speakers2.jpg";
import speakers3 from "../../assets/images/speakers3.jpg";
import speakers4 from "../../assets/images/speakers4.jpg";
import speakers5 from "../../assets/images/speakers5.jpg";
import speakers6 from "../../assets/images/speakers6.jpg";
import speakers7 from "../../assets/images/speakers7.jpg";
import speakers8 from "../../assets/images/speakers8.jpg";

function Speakers() {
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
    <section className="speakers-area ptb-120 pb-0">
      <div className="container">
        <div className="section-title">
          <span>Listen to the Event Speakers</span>
          <h2>Who's Speaking</h2>
          <div className="bar"></div>
          <div className="bg-title lax" data-lax-preset="driftLeft">
            Speakers
          </div>
          <Link to="#" className="btn btn-primary">
            View More Speakers
          </Link>
        </div>
      </div>

      <div className="row m-0">
        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers1}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">James Anderson</Link>
              </h3>
              <span>Founder & CEO</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers2}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">Steven Smith</Link>
              </h3>
              <span>Lead Designer</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers3}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">Lucy Mandana</Link>
              </h3>
              <span>Developer Expert</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers4}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">David Warner</Link>
              </h3>
              <span>Senio Visual Designer</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers5}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">Alberta Amelia</Link>
              </h3>
              <span>Lead Designer</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers6}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">Abbie Edie</Link>
              </h3>
              <span>Lead Designer</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers7}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">Steven Garrad</Link>
              </h3>
              <span>Developer Expert</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 p-0">
          <div className="single-speakers">
            <img
              src={speakers8}
              alt="Speaker"
            />

            <div className="speakers-content">
              <h3>
                <Link to="#">David Wiley</Link>
              </h3>
              <span>Senio Visual Designer</span>
            </div>
            <ul>
              <li>
                <Link to="#" target="_blank" className="facebook">
                  <i className="icofont-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="instagram">
                  <i className="icofont-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="linkedin">
                  <i className="icofont-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
