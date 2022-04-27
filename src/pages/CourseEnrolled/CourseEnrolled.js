import React, { useEffect, useState } from "react";
import classes from "./CourseEnrolled.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CourseCard1 from "../../Component/CourseCard1/CourseCard1";
import courseCardImg from "../../Imgs/courseCardImg1.png";
import UnitBox from "../../Component/UnitBox/UnitBox";
import CourseTime from "../../Component/CourseTime/CourseTime";
import CourseHeader from "../../Component/CourseHeader/CourseHeader";
import CourseSideBar from "../../Component/CourseSideBar/CourseSideBar";
import axiosInstance from "../../adapters/api/axiosInstance";
import { useParams } from "react-router-dom";

function CourseEnrolled({ children }) {
  const params = useParams();
  const courseId = params.id;
  console.log(courseId);

  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/enrolledCourses/get", {
        params: { courseId },
      });
      console.log(res.data);
      setCourseData(res.data);
    };
    getCourse();
  }, []);

  return (
    <div className={classes.CourseEnrolled}>
      <div className={classes.CourseContainer}>
        <CourseHeader courseData={courseData} />
        <div className={classes.abc}>
          <div className={classes.Sidebar}>
            <CourseSideBar courseData={courseData} />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrolled;
