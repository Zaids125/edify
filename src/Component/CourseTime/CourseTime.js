import React from "react";
import classes from "./CourseTime.module.css";
import { AiOutlineFieldTime, AiOutlineCalendar } from "react-icons/ai";
import { Button } from "@mui/material";
import moment from "moment";
import axiosInstance from "../../adapters/api/axiosInstance";

function CourseTime({ courseData }) {
  const start = moment();
  const end = moment().add(parseInt(courseData.courseDuration), "days");

  const months = end.diff(start, "months");
  start.add(months, "months");

  const enrollerCourseHandler = async () => {
    const res = await axiosInstance.post("/enrolledCourses/add", {
      courseId: courseData._id,
    });
  };

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
        <Button
          onClick={enrollerCourseHandler}
          className={classes.EnrollNowBtn}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
}

export default CourseTime;
