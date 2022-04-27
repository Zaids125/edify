import React, { useEffect, useState } from "react";
import classes from "./CourseSideBar.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import axiosInstance from "../../adapters/api/axiosInstance";
import { useHistory } from "react-router-dom";

function TopicContainer({ topicData, topicIndex, unitIndex, courseId }) {
  useEffect(() => {
    const getDuration = async () => {
      const res = await axiosInstance.get(
        `/courses/videoDuration?videoUrl=${topicData.videoLink}`
      );
      if (res.data.hours > 1) {
        setDuration(res.data.hours);
        setDurationType("Hrs");
      } else if (res.data.minutes > 1) {
        setDuration(res.data.minutes);
        setDurationType("Mins");
      } else {
        setDuration(res.data.seconds);
        setDurationType("Sec");
      }
    };
    getDuration();
  }, []);

  const [duration, setDuration] = useState(0);
  const [durationType, setDurationType] = useState("");

  const history = useHistory();

  return (
    <div
      className={classes.TopicContainer}
      onClick={() =>
        history.push(
          `/my-courses/${courseId}/${unitIndex + 1}/${topicIndex + 1}`
        )
      }
    >
      <div className={classes.Topic}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AiFillPlayCircle fontSize={18} />{" "}
        </div>
        <p>{topicData.chapterName}</p>
      </div>
      <div className={classes.TopicTime}>
        <p>
          {duration} {durationType}
        </p>
      </div>
    </div>
  );
}

export default TopicContainer;
