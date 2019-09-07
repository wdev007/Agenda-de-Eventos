import React, { useEffect, useState } from "react";
import "./index.css";
import HeaderNav from "../../components/HeaderNav";
import Rodape from "../../components/Rodape";
// fetch('http://localhost:3001/eventos', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify()
// })
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
      <div className="container">
        <div class="card mb-7" id="card-img">
          <img src={evento.banner} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div id="card-desc">{descricao}</div>
      </div>
      <Rodape />
    </>
  );
}
