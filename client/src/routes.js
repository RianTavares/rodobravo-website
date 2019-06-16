import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rastreio from "./pages/Rastreio";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rastreio" component={Rastreio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;