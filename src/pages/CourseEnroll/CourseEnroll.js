import React from "react";
import classes from "./CourseEnroll.module.css";
import SideBar from "../../Component/SideBar/SideBar";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CourseCard1 from "../../Component/CourseCard1/CourseCard1";
import courseCardImg from "../../Imgs/courseCardImg1.png";
import UnitBox from "../../Component/UnitBox/UnitBox";
import CourseTime from "../../Component/CourseTime/CourseTime";

function Course() {
  // const courseName

  return (
    <div className={classes.Course}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>
      <div className={classes.CourseContainer}>
        <div className={classes.backBtn}>
          <div>
            <MdOutlineKeyboardBackspace />
          </div>
          <p>Back</p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.CourseHeader}>
          <CourseCard1 />
          <img src={courseCardImg} alt="Course Img" />
        </div>
        <div className={classes.CourseDetails}>
          <div className={classes.UnitContainer}>
            <UnitBox />
            <UnitBox />
            <UnitBox />
            <UnitBox />
            <UnitBox />
          </div>
          <div className={classes.CourseTime}>
            <CourseTime />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
