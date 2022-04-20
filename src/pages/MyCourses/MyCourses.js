import React from "react";
import MyCourseCard from "../../Component/MyCourseCard/MyCourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./MyCourses.module.css";

function MyCourses() {
  return (
    <div className={classes.MyCourses}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>
      <div className={classes.MyCoursesContainer}>
        <div className={classes.CourseType}>
          <p className={classes.CourseTypeActive}>Active</p>
          <div></div>
          <p>Completed</p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.AllCourses}>
          <MyCourseCard />
          <MyCourseCard />
          <MyCourseCard />
          <MyCourseCard />
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
