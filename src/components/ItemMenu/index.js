import React from "react";

import "./index.css";

export default props => (
  <div class="card text-white mb-3">
    <div class="card-body">
      <img
        src={
          !props.img ? require("../../assets/images/academic.png") : props.img
        }
        alt={props.name}
        className="img-fluid"
      />
      <h5 class="card-title">{props.name}</h5>
    </div>
  </div>
);
