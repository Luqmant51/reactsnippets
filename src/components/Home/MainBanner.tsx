import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='icofont-swoosh-left'></i>",
    "<i class='icofont-swoosh-right'></i>",
  ],
};

function MainBanner() {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="cRXm1p-CNyk"
        onClose={() => setOpen(false)}
      />

      <OwlCarousel className="home-slides owl-carousel owl-theme" {...options}>
        <div className="main-banner item-bg3">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <VisibilitySensor>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div className="main-banner-content">
                      <p className={isVisible ? "animated fadeInDown" : ""}>
                        Are you <span>ready</span> to attend?
                      </p>
                      <h1 className={isVisible ? "animated fadeInUp" : ""}>
                        World Advanced <span>Biggest</span> <br /> Conference{" "}
                        <b>2</b>
                        <b>0</b>
                        <b>2</b>
                        <b>0</b>
                      </h1>
                      <ul className={isVisible ? "animated zoomIn" : ""}>
                        <li>
                          <i className="icofont-compass"></i> Yellow Street,
                          United State
                        </li>
                        <li>
                          <i className="icofont-calendar"></i> 23-27 Jan, 2020
                        </li>
                      </ul>
                      <div className="button-box">
                        <Link
                          to="#"
                          className={`btn btn-primary ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          Buy Tickets Now!
                        </Link>
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          to="#"
                          className={`video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          <i className="icofont-ui-play"></i> Watch Pormo Video
                        </Link>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner item-bg4">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <VisibilitySensor>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div className="main-banner-content banner-content-center">
                      <p className={isVisible ? "animated fadeInDown" : ""}>
                        Are you <span>ready</span> to attend?
                      </p>
                      <h1 className={isVisible ? "animated fadeInUp" : ""}>
                        World Advanced <span>Biggest</span> <br /> Conference{" "}
                        <b>2</b>
                        <b>0</b>
                        <b>2</b>
                        <b>0</b>
                      </h1>
                      <ul className={isVisible ? "animated zoomIn" : ""}>
                        <li>
                          <i className="icofont-compass"></i> Yellow Street,
                          United State
                        </li>
                        <li>
                          <i className="icofont-calendar"></i> 23-27 Jan, 2020
                        </li>
                      </ul>
                      <div className="button-box">
                        <Link
                          to="#"
                          className={`btn btn-primary ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          Buy Tickets Now!
                        </Link>
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          to="#"
                          className={`video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          <i className="icofont-ui-play"></i> Watch Pormo Video
                        </Link>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner item-bg5">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <VisibilitySensor>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div className="main-banner-content">
                      <p className={isVisible ? "animated fadeInDown" : ""}>
                        Are you <span>ready</span> to attend?
                      </p>
                      <h1 className={isVisible ? "animated fadeInUp" : ""}>
                        World Advanced <span>Biggest</span> <br /> Conference{" "}
                        <b>2</b>
                        <b>0</b>
                        <b>2</b>
                        <b>0</b>
                      </h1>
                      <ul className={isVisible ? "animated zoomIn" : ""}>
                        <li>
                          <i className="icofont-compass"></i> Yellow Street,
                          United State
                        </li>
                        <li>
                          <i className="icofont-calendar"></i> 23-27 Jan, 2020
                        </li>
                      </ul>
                      <div className="button-box">
                        <Link
                          to="#"
                          className={`btn btn-primary ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          Buy Tickets Now!
                        </Link>
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          to="#"
                          className={`video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ""
                            }`}
                        >
                          <i className="icofont-ui-play"></i> Watch Pormo Video
                        </Link>
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default MainBanner;
