import React from "react";
import classes from "./CourseCard.module.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsTerminalFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { Button } from "@mui/material";
import courseImg from "../../Imgs/courseCardImg.png";
import { useHistory } from "react-router-dom";
import moment from "moment";

function CourseCard({ cardData }) {
  const history = useHistory();

  const start = moment();
  const end = moment().add(parseInt(cardData.courseDuration), "days");

  const months = end.diff(start, "months");
  start.add(months, "months");

  // const days = end.diff(start, "days");

  return (
    <div className={classes.CourseCard}>
      <div className={classes.CourseCardContainer}>
        <img src={courseImg} alt="" />
        <p className={classes.CourseCardName}>{cardData.courseName}</p>
        <div className={classes.CourseDetails}>
          <div className={classes.CourseDuration}>
            <MdAccessTimeFilled />
            <p>
              {months} {months > 1 ? "Months" : "Month"}
            </p>
          </div>
          {cardData.numberOfAssignments > 0 && (
            <div className={classes.CourseAssgn}>
              <BsTerminalFill />
              <p>{cardData.numberOfAssignments} Assignments</p>
            </div>
          )}
          <div className={classes.CourseUnits}>
            <MdVideoLibrary />
            <p>{cardData.numberOfUnits} Units</p>
          </div>
        </div>
        <Button
          onClick={() =>
            window.open(`http://localhost:3000/courses/${cardData._id}`)
          }
          className={classes.EnrollBtn}
        >
          View this course
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
