import React from "react";
import classes from "./CourseCard1.module.css";

function CourseCard1() {
  return (
    <div className={classes.CourseCard1}>
      <div className={classes.CourseCard1Container}>
        <div className={classes.CourseTags}>
          <p>Artifical Intelligence</p>
        </div>
        <h1 className={classes.CourseCard1Header}>Python for Beginners</h1>
        <div className={classes.CourseDetails}>
          <div className={classes.CourseUnits}>16 Units</div>
          <div className={classes.CourseAssignments}>5 Assignments</div>
          <div className={classes.CourseHours}>24 Hours</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard1;
