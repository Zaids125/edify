import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Landing from "../pages/Landing/Landing";

const PublicRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Landing />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default PublicRoutes;
