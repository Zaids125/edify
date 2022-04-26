import React from "react";
import classes from "./CourseTime.module.css";
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai";
import { Button } from "@mui/material";
import moment from "moment";

function CourseTime({ courseData }) {
  const start = moment();
  const end = moment().add(parseInt(courseData.courseDuration), "days");

  const months = end.diff(start, "months");
  start.add(months, "months");

  return (
    <div className={classes.CourseTime}>
      <div className={classes.CourseTimeContainer}>
        <div className={classes.CourseTimeData}>
          <AiOutlineCalendar />
          <p>Start Date: {start.format("DD/MM/YYYY")}</p>
        </div>
        <div className={classes.CourseTimeData}>
          <AiOutlineCalendar />
          <p>End Date: {start.add(months, "months").format("DD/MM/YYYY")}</p>
        </div>
        <div className={classes.CourseTimeData}>
          <AiOutlineFieldTime />
          <p>
            {months} {months > 1 ? "Months" : "Month"}
          </p>
        </div>
        <Button className={classes.EnrollNowBtn}>Enroll Now</Button>
      </div>
    </div>
  );
}

export default CourseTime;
