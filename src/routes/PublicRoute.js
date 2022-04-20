import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Courses from "../pages/Courses/Courses";
import Landing from "../pages/Landing/Landing";
import Sidebar from "../Component/SideBar/SideBar";

const PublicRoutes = () => (
  <Switch>
    <Route path="/courses" exact>
      <Courses />
    </Route>
    <Route path="/" exact>
      <Landing />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default PublicRoutes;
