import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Courses from "../pages/Courses/Courses";
import Landing from "../pages/Landing/Landing";
import Sidebar from "../Component/SideBar/SideBar";
import MyCourses from "../pages/MyCourses/MyCourses";
import Course from "../pages/Course/Course";

const PublicRoutes = () => (
  <Switch>
    <Route path="/courses" exact>
      <Courses />
    </Route>
    <Route path="/courses/:id" exact>
      <Course />
    </Route>
    <Route path="/my-courses" exact>
      <MyCourses />
    </Route>
    <Route path="/" exact>
      <Landing />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default PublicRoutes;
