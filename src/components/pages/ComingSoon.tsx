import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  const makeTimer = () => {
    let endTime: Date = new Date("August 23, 2022 17:00:00 PDT");
    let endTimeParse = endTime.getTime() / 1000;
    let now = new Date();
    let nowParse = now.getTime() / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
    if (hours < 10) { hours = 0 + hours; }
    if (minutes < 10) { minutes = 0 + minutes; }
    if (seconds < 10) { seconds = 0 + seconds; }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      makeTimer();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <section className="coming-soon">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="coming-soon-content">
              <h1>We are launching our new website</h1>
              <p>Working hard for something we don't care about is called stress. Working hard for something we love is called passion.</p>

              <div id="timer">
                <div id="days">{days} <span>Days</span></div>
                <div id="hours">{hours} <span>Hours</span></div>
                <div id="minutes">{minutes} <span>Minutes</span></div>
                <div id="seconds">{seconds} <span>Seconds</span></div>
              </div>

              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your email address"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
