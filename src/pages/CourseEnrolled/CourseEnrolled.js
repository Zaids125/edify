import React from "react";
import classes from "./CourseEnrolled.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CourseCard1 from "../../Component/CourseCard1/CourseCard1";
import courseCardImg from "../../Imgs/courseCardImg1.png";
import UnitBox from "../../Component/UnitBox/UnitBox";
import CourseTime from "../../Component/CourseTime/CourseTime";
import CourseHeader from "../../Component/CourseHeader/CourseHeader";
import CourseSideBar from "../../Component/CourseSideBar/CourseSideBar";

function CourseEnrolled({ children }) {
  return (
    <div className={classes.CourseEnrolled}>
      <div className={classes.CourseContainer}>
        <CourseHeader />
        <div className={classes.abc}>
          <div className={classes.Sidebar}>
            <CourseSideBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrolled;
