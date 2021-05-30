import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {App} from "./views/App/App.js";
import LocationList from "./views/LocationList.js"
import Stalls from "./views/Stalls.js"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/locations" component={LocationList} />
        <Route exact path="/stalls" component={Stalls} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;