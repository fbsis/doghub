import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";


import IndexPages from "../pages/index/indexPages";

export default function Routers() {

  return (
    <Switch>
      <Route exact path="/">
        <IndexPages />
      </Route>
    </Switch>
  );
}
