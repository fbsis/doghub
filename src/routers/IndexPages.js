import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";


import IndexPages from "../pages/index/indexPages";
import DogsDetails from "../pages/dogsDetails";
import Adopt from "../pages/adopt";

export default function Routers() {

  return (
    <Switch>
      <Route exact path="/">
        <IndexPages />
      </Route>
      <Route exact path="/detail/:id">
        <DogsDetails />
      </Route>
      <Route exact path="/adoper/">
        <Adopt />
      </Route>
    </Switch>
  );
}
