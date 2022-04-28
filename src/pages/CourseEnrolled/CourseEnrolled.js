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
// import Video from "../Component/VideoPlayer/VideoPlayer";
import Video from "../../Component/VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

function CourseEnrolled({ children }) {
  const params = useParams();
  const courseId = params.id;

  const [markCompleted, setMarkCompleted] = useState(false);

  const { unitIndex, topicIndex } = params;

  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/enrolledCourses/get", {
        params: { courseId },
      });
      console.log("duplicatedFound", res.data);
      const duplicatedFound = res.data.chapterCompleted.find(
        (o) => o.unitNumber == unitIndex && o.topicNumber == topicIndex
      );
      if (duplicatedFound) setMarkCompleted(true);

      setCourseData(res.data);
    };
    getCourse();
  }, [markCompleted, courseId, unitIndex, topicIndex]);

  useEffect(() => {
    setMarkCompleted(false);
  }, [params]);

  console.log({ unitIndex, topicIndex });

  if (
    typeof topicIndex === "undefined" &&
    typeof courseData?.courseId?._id !== "undefined"
  )
    return <Redirect to={`/my-courses/${courseData?.courseId?._id}/1/1`} />;

  return (
    <div className={classes.CourseEnrolled}>
      <div className={classes.CourseContainer}>
        <CourseHeader courseData={courseData} />
        <div className={classes.abc}>
          <div className={classes.Sidebar}>
            <CourseSideBar courseData={courseData} />
          </div>
          <div>
            {typeof courseData?.courseId?.Units !== "undefined" && (
              <Video
                setMarkCompleted={setMarkCompleted}
                markCompleted={markCompleted}
                courseData={courseData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrolled;
