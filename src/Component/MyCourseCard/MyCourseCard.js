import React, { useEffect, useState } from "react";
import classes from "./MyCourseCard.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import LinearWithValueLabel from "../ProgressBar/ProgressBar";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../adapters/api/axiosInstance";
import moment from "moment";

function MyCourseCard({ courseData }) {
  console.log({ courseData });

  const [playlistDuration, setPlaylistDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const getDuration = async () => {
      console.log(
        "courseData.courseId.playlistLink",
        courseData.courseId.playlistLink,
        courseData
      );
      const res = await axiosInstance.get(
        `/courses/playlistDuration?playlistLink=${courseData.courseId.playlistLink}`
      );
      console.log(res.data, res);
      setPlaylistDuration(res.data);
    };
    getDuration();
  }, [courseData]);

  const history = useHistory();

  return (
    <div className={classes.MyCourseCard}>
      <div className={classes.MyCourseCardContainer}>
        <div className={classes.side}></div>
        <div className={classes.MyCourseCardLeft}>
          <p className={classes.title}>{courseData.courseId.courseName}</p>
          <div className={classes.timeDetails}>
            <div>
              <BsCameraVideoFill />
              <p>
                {playlistDuration.hours > 0
                  ? playlistDuration.hours
                  : playlistDuration.minutes}{" "}
                {playlistDuration.hours > 0 ? "Hours" : "Minutes"}
              </p>
            </div>
            <div>
              <></>
              <p>24 modules</p>
            </div>
          </div>
          <div className={classes.completionDetails}>
            {courseData.progress < 100 ? (
              <p>
                {moment(courseData.endDate) < moment()
                  ? "Due date was "
                  : "Due date is "}
                {moment(courseData.endDate).format("DD/MM/YYYY")}
              </p>
            ) : (
              <p>Course Completed</p>
            )}
            <LinearWithValueLabel progress={courseData.progress} />
          </div>
          <p
            className={classes.viewDetails}
            onClick={() =>
              history.push(`/my-courses/${courseData.courseId._id}`)
            }
          >
            View Details <AiOutlineArrowRight />
          </p>
        </div>
        <div className={classes.verticalSeparator}></div>
        <div className={classes.MyCourseCardRight}>
          <div className={classes.CourseTags}>
            {courseData.courseId.tags.map((data) => {
              return <p>{data}</p>;
            })}
          </div>
          <p className={classes.details}>
            {courseData.courseId.courseDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyCourseCard;
