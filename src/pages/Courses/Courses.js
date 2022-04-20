import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";
import CourseCard from "../../Component/CourseCard/CourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Courses.module.css";
import { BiSearchAlt } from "react-icons/bi";

function Courses() {
  return (
    <div className={classes.Courses}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
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
          <div className={classes.SearchButtonContainer}>
            <Button className={classes.SearchButton}>
              <BiSearchAlt style={{ fontSize: 16 }} /> <p>Search</p>
            </Button>
          </div>
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
