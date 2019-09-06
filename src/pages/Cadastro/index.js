import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import NavBar from "../../components/NavBar";
import Formulario from "../../components/Formulario";

export default props => (
  <>
    <NavBar />
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol class="container breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
      </ol>
    </nav>
    <Formulario />
  </>
);
