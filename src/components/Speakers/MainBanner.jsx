import React from "react";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <div className="page-title-area item-bg5">
      <div className="container">
        <h1>Speakers</h1>
        <span>One Team, One Dream</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Speakers</li>
        </ul>
      </div>
    </div>
  );
}

export default MainBanner;
