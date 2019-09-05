import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import logo from "../../assets/images/logo.svg";
import ItemMenu from "../ItemMenu";

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="navbar-menu">
      <img src={logo} alt="Doity" />
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">
              CONHEÇA A DOITY
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" href="#">
              BLOG
            </Link>
          </li>
          <li class="nav-item">
            <button id="btn-divulgar">Divulgar Evento</button>
          </li>
          <li class="nav-item">
            <button id="btn-login">Login</button>
          </li>
        </ul>
      </div>
    </div>

    <div className="menu">
      <h3>Explore eventos ao redor do Brasil</h3>
      <div class="form-row">
        <div class="form-group col-md-7">
          <input
            type="email"
            class="form-control"
            id="tipoEvento"
            placeholder="Que tipo de evento você procura?"
          />
        </div>
        <div class="form-group col-md-4">
          <input
            type="password"
            class="form-control"
            id="areaEvento"
            placeholder="Escolha uma área"
          />
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
        <ItemMenu
          img={require("../../assets/images/karaoke.png")}
          name="Shows"
        />
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
  </nav>
);
