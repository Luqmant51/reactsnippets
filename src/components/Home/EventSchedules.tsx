import React from "react";
import { Link } from "react-router-dom";

import author1 from "../../assets/images/author1.jpg"
import author2 from "../../assets/images/author2.jpg"
import author3 from "../../assets/images/author3.jpg"
import author4 from "../../assets/images/author4.jpg"
import author5 from "../../assets/images/author5.jpg"
import author6 from "../../assets/images/author6.jpg"
import author7 from "../../assets/images/author7.jpg"
import author8 from "../../assets/images/author8.jpg"
import author9 from "../../assets/images/author9.jpg"
import shapes1 from "../../assets/images/shapes/1.png"
import shapes2 from "../../assets/images/shapes/2.png"
import shapes3 from "../../assets/images/shapes/3.png"
import shapes4 from "../../assets/images/shapes/4.png"


function EventSchedules() {
  const openTabSection = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>, tabName: string): void => {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element>;
    let tablinks: HTMLCollectionOf<Element>;
    
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }
  
    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).className = (tablinks[i] as HTMLElement).className.replace("current", "");
    }
  
    const element = document.getElementById(tabName);
    if (element !== null) {
      element.style.display = "block";
      (evt.currentTarget as HTMLElement).className += " current";
    }
  };
  

  return (
    <section className="schedule-area schedule-style-four bg-image ptb-120">
      <div className="container">
        <div className="section-title">
          <span>Schedule Plan</span>
          <h2>
            Information of <b>Event</b> <br /> Schedules
          </h2>

          <div className="bg-title lax" data-lax-preset="driftLeft">
            Events
          </div>

          <Link to="#" className="btn btn-primary">
            Buy Tickets Now!
          </Link>

          <div className="bar"></div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="tab">
              <div className="row">
                <div className="col-lg-8 col-md-9">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author">
                              <img
                                src={author1}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital Marketing Theory</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>Steven Smith</span> CEO of EnvyTheme
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author5}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author2}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author6}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author7}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>HTML, CSS and Bootstrap Introduction</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author8}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author9}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div id="tab2" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author">
                              <img
                                src={author1}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital Marketing Theory</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>Steven Smith</span> CEO of EnvyTheme
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author5}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author2}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author6}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author7}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>HTML, CSS and Bootstrap Introduction</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div id="tab3" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author">
                              <img
                                src={author1}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital Marketing Theory</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>Steven Smith</span> CEO of EnvyTheme
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author5}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author2}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author6}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author7}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>HTML, CSS and Bootstrap Introduction</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author8}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author9}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div id="tab4" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author">
                              <img
                                src={author1}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital Marketing Theory</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>Steven Smith</span> CEO of EnvyTheme
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author5}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author2}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author6}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author7}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>HTML, CSS and Bootstrap Introduction</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i> By{" "}
                                  <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi">
                              <img
                                src={author8}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Steven Lucy"
                                alt="Schedule"
                              />
                              <img
                                src={author9}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Jonaton Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author3}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Smith"
                                alt="Schedule"
                              />
                              <img
                                src={author4}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="John Doe"
                                alt="Schedule"
                              />
                            </div>

                            <div className="schedule-info">
                              <h3>Digital World Event Information</h3>

                              <ul>
                                <li>
                                  <i className="icofont-user-suited"></i>
                                  By <span>EnvyTheme Team</span> of USA Inc
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i> 13:00AM
                                  - 20:00PM
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <div className="accordion-content">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took Link galley of
                              type and scrambled it to make Link type specimen
                              book. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took Link
                              galley of type and scrambled it to make Link type
                              specimen book.
                            </p>

                            <div className="row h-100 align-items-center">
                              <div className="col-lg-6">
                                <div className="location">
                                  <b>Location:</b> Hall 1, Building C , King
                                  Street , <span>USA</span>
                                </div>
                              </div>

                              <div className="col-lg-6 text-right">
                                <Link to="#" className="btn btn-primary">
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-3">
                  <ul className="tabs active">
                    <li
                      onClick={(e) => openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">
                        First Day
                        <span>4 April 2020</span>
                      </Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab2")}>
                      <Link to="#">
                        Second Day
                        <span>5 April 2020</span>
                      </Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab3")}>
                      <Link to="#">
                        Third Day
                        <span>6 April 2020</span>
                      </Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab4")}>
                      <Link to="#">
                        Fourth Day
                        <span>7 April 2020</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src={shapes1} alt="shape1" />
      </div>
      <div className="shape2 rotateme">
        <img src={shapes2} alt="shape2" />
      </div>
      <div className="shape3 rotateme">
        <img src={shapes3} alt="shape3" />
      </div>
      <div className="shape4">
        <img src={shapes4} alt="shape4" />
      </div>
    </section>
  );
}

export default EventSchedules;
