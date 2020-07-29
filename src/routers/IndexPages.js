import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";


import IndexPages from "../pages/index/indexPages";
import DogsDetails from "../pages/dogsDetails";

export default function Routers() {

  return (
    <Switch>
      <Route exact path="/">
        <IndexPages />
      </Route>
      <Route exact path="/detail/:id">
        <DogsDetails />
      </Route>
    </Switch>
  );
}
