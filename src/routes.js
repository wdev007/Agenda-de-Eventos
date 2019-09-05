import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
    </Switch>
  </Router>
);
