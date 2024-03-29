import React, { useEffect } from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';

import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/shapes/5.png";
import signature from "../../assets/images/signature.png";


const About = () => {
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
        <section className="about-area ptb-120 bg-image">
            <div className="container">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Join The Event</span>
                            <h2>We Create and <b>Turn</b> Into Reality</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="signature">
                                <img src={signature} alt="signature" />
                            </div>

                            <Link to="#" className="btn btn-primary">
                                Read More
                                <i className="icofont-double-right"></i>
                            </Link>

                            <Link to="#" className="btn btn-secondary">Buy Ticket</Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src={about1} className="about-img1" alt="about" />

                            <img src={about2} className="about-img2" alt="about" />

                            <img src={about3} className="shape-img" alt="about" />

                            <LaxButton buttonText="Explore More About" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
