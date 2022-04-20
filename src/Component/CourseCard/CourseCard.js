import React from "react";
import classes from "./CourseCard.module.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsTerminalFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { Button } from "@mui/material";
import courseImg from "../../Imgs/courseCardImg.png";

function CourseCard() {
  return (
    <div className={classes.CourseCard}>
      <div className={classes.CourseCardContainer}>
        <img src={courseImg} alt="" />
        <p className={classes.CourseCardName}>Python for Complete Beginners</p>
        <div className={classes.CourseDetails}>
          <div className={classes.CourseDuration}>
            <MdAccessTimeFilled />
            <p>3 Months</p>
          </div>
          <div className={classes.CourseAssgn}>
            <BsTerminalFill />
            <p>4 Assignments</p>
          </div>
          <div className={classes.CourseUnits}>
            <MdVideoLibrary />
            <p>16 Units</p>
          </div>
        </div>
        <Button className={classes.EnrollBtn}>Enroll Now</Button>
      </div>
    </div>
  );
}

export default CourseCard;
