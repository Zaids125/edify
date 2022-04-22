import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Courses from "../pages/Courses/Courses";
import Landing from "../pages/Landing/Landing";
import Sidebar from "../Component/SideBar/SideBar";
import MyCourses from "../pages/MyCourses/MyCourses";
import CourseEnroll from "../pages/CourseEnroll/CourseEnroll";
import CourseEnrolled from "../pages/CourseEnrolled/CourseEnrolled";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

const PublicRoutes = () => (
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
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/forgotpassword">
      <ForgotPassword />
    </Route>
    <Route path="/" exact>
      <Landing />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default PublicRoutes;
