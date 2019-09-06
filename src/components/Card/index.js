import React from "react";

import "./index.css";

export default props => (
  <div className="card">
    <img
      src={props.imagem}
      className="card-img-top img-fluid"
      alt={props.descricao}
    />
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{props.data}</h6>
      <p className="card-text">{props.descricao}</p>
      <h6 className="card-subtitle mb-2 text-muted">{props.local}</h6>
    </div>
  </div>
);
