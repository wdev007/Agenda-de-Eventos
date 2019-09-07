import React, { useEffect, useState } from "react";
import "./index.css";

import HeaderNav from "../../components/HeaderNav";
import Rodape from "../../components/Rodape";
import Breadcrumb from "../../components/Breadcrumb";

export default function({ match, descricao }) {
  const id = match.params.id;
  const [evento, setEvento] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/eventos/${id}`)
      .then(res => res.json())
      .then(res => {
        setEvento(res);
        console.log(res);
      });
  }, [id]);

  return (
    <>
      <HeaderNav input={true} />
      <Breadcrumb />
      <div className="container">
        <div class="card mb-7" id="card-img">
          <img src={evento.banner} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{evento.nome}</h5>
            <p class="card-text">{evento.descricao}</p>
            <p class="card-text">
              <small class="text-muted">{evento.dataInicio}</small>
            </p>
          </div>
        </div>
        {/* <div id="card-desc">{evento.descricao}</div> */}
      </div>
      <Rodape />
    </>
  );
}
