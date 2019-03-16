import React from "react";

import { Route, Switch } from "react-router-dom";

import Counter from "./counter/Counter.js";

const Routes = () => (
  <Switch>
    <Route component={Counter} />
  </Switch>
);

export default Routes;
