import React from "react";

import "./index.css";
import logo from "../../assets/images/logo.svg";

export default props => (
  <nav class="navbar-cad">
    <div className="logo">
      <img src={logo} alt=".." />
    </div>
    <div className="label">
      <h3>organizador</h3>
    </div>
  </nav>
);
