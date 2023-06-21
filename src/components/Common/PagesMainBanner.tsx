import React from "react";
import { Link } from "react-router-dom";

function PagesMainBanner(props: any) {
  return (
    <div className="page-title-area item-bg1">
      <div className="container">
        <h1>{props.title}</h1>
        <span>{props.subTitle}</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{props.path}</li>
        </ul>
      </div>
    </div>
  );
}

export default PagesMainBanner;
