import React from "react";
import { Link } from "react-router-dom";

function EventSchedulesOne() {
  const openTabSection = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>, tabName: string) => {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element>;
    let tablinks: HTMLCollectionOf<HTMLLIElement>;

    tabcontent = document.getElementsByClassName("tabs_item") as HTMLCollectionOf<Element>;
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    tablinks = document.getElementsByTagName("li") as HTMLCollectionOf<HTMLLIElement>;
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.style.display = "block";
    }

    evt.currentTarget.className += " current";
  };

  return (
    <section className="schedule-area bg-image ptb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab">
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

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <Link className="accordion-title" to="#">
                        <div className="author">
                          <img
                            src={require("../../assets/images/author1.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Smith"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital Marketing Theory</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>Riley</span> CEO of EnvyTheme
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author5.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author2.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author6.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author7.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
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
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author8.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author9.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author1.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Smith"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital Marketing Theory</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>Gilbert</span> CEO of EnvyTheme
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author5.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author2.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author6.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author7.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
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
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author1.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Smith"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital Marketing Theory</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>Brian</span> CEO of EnvyTheme
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author5.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author2.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author6.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author7.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
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
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author8.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author9.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author1.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Smith"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital Marketing Theory</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>Roberto</span> CEO of EnvyTheme
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author5.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author2.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author6.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author7.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
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
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
                            src={require("../../assets/images/author8.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Steven Lucy"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author9.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Jonaton Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author3.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Smith"
                            alt="Author"
                          />
                          <img
                            src={require("../../assets/images/author4.jpg")}
                            data-toggle="tooltip"
                            data-placement="top"
                            title="John Doe"
                            alt="Author"
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>Digital World Event Information</h3>

                          <ul>
                            <li>
                              <i className="icofont-user-suited"></i> By{" "}
                              <span>EnvyTheme Team</span> of USA Inc
                            </li>
                            <li>
                              <i className="icofont-wall-clock"></i> 13:00AM -
                              20:00PM
                            </li>
                          </ul>
                        </div>
                      </Link>

                      <div className="accordion-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book. Lorem
                          Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took Link galley of type and
                          scrambled it to make Link type specimen book.
                        </p>

                        <div className="row h-100 align-items-center">
                          <div className="col-lg-6 col-md-7">
                            <div className="location">
                              <b>Location:</b> Hall 1, Building C , King Street
                              , <span>USA</span>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-5 text-right">
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
          </div>

          <div className="col-lg-12">
            <div className="btn-box">
              <Link to="#" className="btn btn-primary">
                Download Schedule (PDF)
              </Link>
              <Link to="#" className="btn btn-secondary">
                Connect Via Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
      </div>
      <div className="shape2 rotateme">
        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
      </div>
      <div className="shape3 rotateme">
        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
      </div>
      <div className="shape4">
        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
      </div>
    </section>
  );
}

export default EventSchedulesOne;
