import React from "react";

import logo from "../../assets/images/logo.svg";

import "./index.css";

export default function() {
  return (
    <div className="container-fluid rodape">
      <div className="logo-rodape">
        <img src={logo} alt="..." />
      </div>
      <div className="redes-sociais"></div>
    </div>
  );
}
