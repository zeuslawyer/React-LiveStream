import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <div className="secondary ui pointing menu ">
      <Link to="/" className="item">
        StreamingApp
      </Link>
      <div className="right menu ">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
