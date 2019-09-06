import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function() {
  return (
    <nav aria-label="breadcrumb" className="">
      <ol class="container breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
      </ol>
    </nav>
  );
}
