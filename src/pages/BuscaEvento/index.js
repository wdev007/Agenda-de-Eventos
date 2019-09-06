import React, { useState, useEffect } from "react";
// import {} from "react-router-dom";

import "./index.css";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function({ history }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/eventos")
      .then(res => res.json())
      .then(res => {
        setEvents(res);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {events.map(item => (
          <Card
            key={item.id}
            descricao={item.descricao}
            data={item.data}
            nome={item.nome}
            imagem={item.banner}
          />
        ))}
      </div>
    </>
  );
}
