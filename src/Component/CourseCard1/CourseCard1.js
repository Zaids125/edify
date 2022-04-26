import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../adapters/api/axiosInstance";
// import axiosInstance from "../../adapters/api/axiosInstance";
import classes from "./CourseCard1.module.css";

function CourseCard1({ courseData }) {
  const courseId = useParams();

  // useEffect(() => {
  //   const courseData = async () => {
  //     const res = await axiosInstance.get(
  //       `/courses/get?courseId=${courseId.id}`
  //     );
  //     console.log(res.data);
  //   };
  //   courseData();
  // }, []);

  const [playlistDuration, setPlaylistDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const getDuration = async () => {
      console.log(
        "courseData.playlistLink",
        courseData.playlistLink,
        courseData
      );
      const res = await axiosInstance.get(
        `/courses/playlistDuration?playlistLink=${courseData.playlistLink}`
      );
      console.log(res.data, res);
      setPlaylistDuration(res.data);
    };
    getDuration();
  }, [courseData]);

  console.log(courseId);

  return (
    <div className={classes.CourseCard1}>
      <div className={classes.CourseCard1Container}>
        <div className={classes.CourseTags}>
          <p>Artifical Intelligence</p>
        </div>
        <h1 className={classes.CourseCard1Header}>{courseData.courseName}</h1>
        <div className={classes.CourseDetails}>
          <div className={classes.CourseUnits}>
            {courseData.numberOfUnits} Units
          </div>
          {courseData.numberOfAssignments > 0 && (
            <div className={classes.CourseAssignments}>
              {courseData.numberOfAssignments} Assignments
            </div>
          )}
          <div className={classes.CourseHours}>
            {playlistDuration.hours > 0
              ? playlistDuration.hours
              : playlistDuration.minutes}{" "}
            {playlistDuration.hours > 0 ? "Hours" : "Minutes"} Videos
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard1;
