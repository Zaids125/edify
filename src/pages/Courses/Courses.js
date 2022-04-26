import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCard from "../../Component/CourseCard/CourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Courses.module.css";
import { BiSearchAlt } from "react-icons/bi";
import axiosInstance from "../../adapters/api/axiosInstance";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axiosInstance.get("/courses/all");
      console.log(res.data);
      setAllCourses(res.data.courses);
    };
    if (searchTerm === "") getAllCourses();
  }, [searchTerm]);

  useEffect(() => {
    const searchCourses = async () => {
      const res = await axiosInstance.get(
        `/courses/search?searchField=${searchTerm}`
      );
      setAllCourses(res.data.courses);
    };
    if (searchTerm !== "") searchCourses();
  }, [searchTerm]);

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={classes.SearchButtonContainer}>
            <Button className={classes.SearchButton}>
              <BiSearchAlt style={{ fontSize: 18 }} /> <p>Search</p>
            </Button>
          </div>
        </div>
        <div className={classes.AllCourseCards}>
          {allCourses.map((data) => (
            <CourseCard cardData={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
