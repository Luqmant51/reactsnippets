import React from "react";
import PagesMainBanner from "../Common/PagesMainBanner";
import EventSchedulesOne from "../schedule/EventSchedulesOne";
import Footer from "../Common/Footer";

function Schedule() {
  return (
    <>
      <PagesMainBanner title="Schedule" subTitle="Listen to the Event Speakers" path="schedule" />
      <EventSchedulesOne />
      <Footer />
    </>
  );
}

export default Schedule;
