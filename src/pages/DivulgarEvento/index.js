import React from "react";

import "./index.css";
import NavBar from "../../components/NavBar";
import Formulario from "../../components/Formulario";
import Breadcrumb from "../../components/Breadcrumb";
import Rodape from "../../components/Rodape";

export default props => (
  <>
    <NavBar />
    <Breadcrumb />
    <Formulario />
    <Rodape />
  </>
);
