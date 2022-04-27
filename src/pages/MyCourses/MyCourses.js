import React, { useEffect, useState } from "react";
import axiosInstance from "../../adapters/api/axiosInstance";
import MyCourseCard from "../../Component/MyCourseCard/MyCourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./MyCourses.module.css";

function MyCourses() {
  const [active, setActive] = useState(true);

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axiosInstance.get("/enrolledCourses/all");
      setAllCourses(res.data.enrolledCourses);
      console.log(res.data.enrolledCourses);
    };
    getAllCourses();
  }, [active]);

  return (
    <div className={classes.MyCourses}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>
      <div className={classes.MyCoursesContainer}>
        <div className={classes.CourseType}>
          <p
            onClick={() => setActive(true)}
            className={active ? classes.CourseTypeActive : ""}
          >
            Active
          </p>
          <div></div>
          <p
            onClick={() => setActive(false)}
            className={!active ? classes.CourseTypeActive : ""}
          >
            Completed
          </p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.AllCourses}>
          {allCourses.map((data) => {
            if (active && data.status === "Active")
              return <MyCourseCard courseData={data} />;
            else if (!active && data.status === "Completed")
              return <MyCourseCard courseData={data} />;
          })}
          {/* <MyCourseCard />
          <MyCourseCard />
          <MyCourseCard /> */}
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
