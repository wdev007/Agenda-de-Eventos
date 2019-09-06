import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Listagem from "./pages/Listagem";
import Cadastro from "./pages/Cadastro";
import Header from "./components/Header";

export default () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Header />
            <Listagem />
          </>
        )}
      ></Route>
      <Route path="/cadastro" component={Cadastro}></Route>
    </Switch>
  </Router>
);
