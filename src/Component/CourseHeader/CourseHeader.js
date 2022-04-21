import React from "react";
import classes from "./CourseHeader.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../ProgressBar/ProgressBar";

function CourseHeader() {
  return (
    <div className={classes.CourseHeader}>
      <div className={classes.CourseHeaderContainer}>
        <Link to="/my-courses" className={classes.backBtn}>
          <div>
            <MdArrowBackIos />
          </div>
          <p>Back</p>
        </Link>
        <div className={classes.CoursePercent}>
          <p>25% completed</p>
          <LinearWithValueLabel />
        </div>
        <div className={classes.CourseTitle}>Importance of Marketing</div>
        <div className={classes.CourseTime}>
          <div className={classes.CourseStart}>
            <p>Start</p>
            <p>22/02/2022</p>
          </div>
          <div className={classes.CourseEnd}>
            <p>End</p>
            <p>22/05/2022</p>
          </div>
          <div className={classes.CourseDaysLeft}>
            <p>Days Left</p>
            <p>58</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
