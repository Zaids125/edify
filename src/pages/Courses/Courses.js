import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import CourseCard from "../../Component/CourseCard/CourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Courses.module.css";

function Courses() {
  return (
    <div className={classes.Courses}>
      <div className={classes.Sidebar}>
        <SideBar />
      </div>
      <div className={classes.CoursesContainer}>
        <div className={classes.CourseSearchBar}>
          <input
            className={classes.CourseSearchInput}
            style={{ borderRadius: "100px" }}
            placeholder="Type here to search"
            label=""
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div className={classes.AllCourseCards}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Courses;
