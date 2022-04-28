import React, { useEffect } from "react";
import classes from "./CourseHeader.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../ProgressBar/ProgressBar";
import moment from "moment";

function CourseHeader({ courseData }) {
  const daysLeft = moment(courseData.endDate).diff(moment(), "days");

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
          <p>{Math.round(courseData.progress)}% completed</p>
          <LinearWithValueLabel progress={courseData.progress} />
        </div>
        <div className={classes.CourseTitle}>
          {courseData?.courseId?.courseName}
        </div>
        <div className={classes.CourseTime}>
          <div className={classes.CourseStart}>
            <p>Start</p>
            <p>{moment(courseData.startDate).format("DD/MM/YYYY")}</p>
          </div>
          <div className={classes.CourseEnd}>
            <p>End</p>
            <p>{moment(courseData.endDate).format("DD/MM/YYYY")}</p>
          </div>
          <div className={classes.CourseDaysLeft}>
            {daysLeft > 0 && (
              <>
                <p>Days Left</p>
                <p>{daysLeft}</p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className={classes.line}></div> */}
    </div>
  );
}

export default CourseHeader;
