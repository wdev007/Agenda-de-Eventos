import React from "react";

import ItemMenu from "../ItemMenu";

export default props => (
  <div className="menu">
    <h3>Explore eventos ao redor do Brasil</h3>
    <div class="form-row">
      <div class="form-group col-md-7">
        <input
          type="text"
          class="form-control"
          id="tipoEvento"
          placeholder="Que tipo de evento você procura?"
        />
      </div>
      <div class="form-group col-md-4">
        <select id="areaEvento" class="form-control">
          <option selected>Escolha uma área</option>
          <option>...</option>
        </select>
      </div>
    </div>
    <div className="opcoes-menu">
      <ItemMenu
        img={require("../../assets/images/academic.png")}
        name="Academicos"
      />
      <ItemMenu
        img={require("../../assets/images/church.png")}
        name="Religiosos"
      />
      <ItemMenu
        img={require("../../assets/images/trophy.png")}
        name="Esportivos"
      />
      <ItemMenu img={require("../../assets/images/karaoke.png")} name="Shows" />
      <ItemMenu
        img={require("../../assets/images/cutlery.png")}
        name="Gastronomicos"
      />
      <ItemMenu
        // img={require("../../assets/images/academic.png")}
        name="Workshops"
      />
      <ItemMenu
        // img={require("../../assets/images/academic.png")}
        name="Tecnologia"
      />
      <ItemMenu
        // img={require("../../assets/images/academic.png")}
        name="Outros"
      />
    </div>
  </div>
);
