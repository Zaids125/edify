import React, { useState } from "react";
import MyCourseCard from "../../Component/MyCourseCard/MyCourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./MyCourses.module.css";

function MyCourses() {
  const [active, setActive] = useState(true);

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
          <p
            onClick={() => setActive(true)}
            className={active ? classes.CourseTypeActive : ""}
          >
            Active
          </p>
          <div></div>
          <p
            onClick={() => setActive(false)}
            className={!active ? classes.CourseTypeActive : ""}
          >
            Completed
          </p>
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
