import React from "react";
import classes from "./CourseTime.module.css";
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai";
import { Button } from "@mui/material";

function CourseTime() {
  return (
    <div className={classes.CourseTime}>
      <div className={classes.CourseTimeContainer}>
        <div className={classes.CourseTimeData}>
          <AiOutlineCalendar />
          <p>Start Date: 18/06/22</p>
        </div>
        <div className={classes.CourseTimeData}>
          <AiOutlineCalendar />
          <p>End Date: 18/09/22</p>
        </div>
        <div className={classes.CourseTimeData}>
          <AiOutlineFieldTime />
          <p>3 Months</p>
        </div>
        <Button 
        onClick={()=> window.open("http://localhost:3000/my-courses/abc/assignment1")}
        className={classes.EnrollNowBtn}>Enroll Now</Button>
      </div>
    </div>
  );
}

export default CourseTime;
