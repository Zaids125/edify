import React, { useEffect, useState } from "react";
import classes from "./CourseEnroll.module.css";
import SideBar from "../../Component/SideBar/SideBar";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CourseCard1 from "../../Component/CourseCard1/CourseCard1";
import courseCardImg from "../../Imgs/courseCardImg1.png";
import UnitBox from "../../Component/UnitBox/UnitBox";
import CourseTime from "../../Component/CourseTime/CourseTime";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axiosInstance from "../../adapters/api/axiosInstance";

function Course() {
  const courseId = useParams();

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const courseData = async () => {
      const res = await axiosInstance.get(
        `/courses/get?courseId=${courseId.id}`
      );
      console.log(res.data);
      setCourseData(res.data);
    };
    courseData();
  }, []);

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
        <Link to="/courses" className={classes.backBtn}>
          <div>
            <MdOutlineKeyboardBackspace />
          </div>
          <p>Back</p>
        </Link>
        <div className={classes.line}></div>
        <div className={classes.CourseHeader}>
          <CourseCard1 courseData={courseData} />
          <img src={courseCardImg} alt="Course Img" />
        </div>
        <div className={classes.CourseDetails}>
          <div className={classes.UnitContainer}>
            {courseData?.Units?.map((data, index) => {
              const myData = Object.keys(data).map((key) => {
                return data[key];
              });
              return (
                <UnitBox
                  key={courseData._id + index}
                  unitData={myData}
                  unitNumber={index + 1}
                />
              );
            })}
          </div>
          <div className={classes.CourseTime}>
            <CourseTime courseData={courseData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
