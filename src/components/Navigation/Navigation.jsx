import React, { useState, useEffect } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleScroll = () => {
    const elementId = document.getElementById("navbar");
    if (window.scrollY > 170) {
      elementId.classList.add("is-sticky");
      window.history.pushState("", document.title, window.location.pathname);
    } else {
      elementId.classList.remove("is-sticky");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  return (
    <header id="header" className="header-area">
      <div id="navbar" className="elkevent-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    exact="true"
                    to="/"
                    onClick={toggleOpen}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" onClick={toggleOpen} className="nav-link">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/speakers" className="nav-link" onClick={toggleOpen}>
                    Speakers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/schedule"
                    className="nav-link"
                    onClick={toggleOpen}
                  >
                    Schedule
                  </Link>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/sponsors"
                    className="nav-link"
                    onClick={toggleNavbar}
                  >
                    Sponsor
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    onClick={toggleNavbar}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="others-option">
                <ul>
                  <li>
                    <NavLink
                      to="/pricing-1"
                      className="btn btn-primary"
                      onClick={toggleNavbar}
                    >
                      Buy Ticket
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
