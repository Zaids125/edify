import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Courses from "../pages/Courses/Courses";
import Landing from "../pages/Landing/Landing";
import MyCourses from "../pages/MyCourses/MyCourses";
import CourseEnroll from "../pages/CourseEnroll/CourseEnroll";
import CourseEnrolled from "../pages/CourseEnrolled/CourseEnrolled";
import Portfolio from "../pages/Portfolio/Portfolio";
import Video from "../Component/VideoPlayer/VideoPlayer";

const PrivateRoutes = () => (
  <Switch>
    <Route path="/courses" exact>
      <Courses />
    </Route>
    <Route path="/courses/:id" exact>
      <CourseEnroll />
    </Route>
    <Route path="/my-courses" exact>
      <MyCourses />
    </Route>
    <Route path="/my-courses/:id" exact>
      <CourseEnrolled />
    </Route>
    <Route path="/my-courses/:id/assignment1" exact>
      <CourseEnrolled children={<Video />} />
    </Route>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route path="/" exact>
      {/* <Landing /> */}
      <Redirect to="/portfolio" />
    </Route>
    <Redirect to="/portfolio" />
  </Switch>
);

export default PrivateRoutes;
