import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Player from "react-player";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import YouTube, { YouTubeProps } from "react-youtube";
import axiosInstance from "../../adapters/api/axiosInstance";
import classes from "./VideoPlayer.module.css";
// import ".../pages/CourseEnrolled/MyCourses.module.css";

function VideoPlayer({ courseData, markCompleted, setMarkCompleted }) {
  const params = useParams();

  const { id, unitIndex, topicIndex } = params;

  const [currentUnitData, setCurrentUnitData] = useState([]);

  useEffect(() => {
    const allUnits = courseData?.courseId?.Units;
    setCurrentUnitData(
      allUnits[parseInt(unitIndex) - 1][parseInt(topicIndex) - 1]
    );
  }, [courseData, topicIndex, unitIndex]);

  // const myData = Object.keys(allUnits).map((key) => {
  //   return allUnits[key];
  // });
  console.log(
    { id, unitIndex, topicIndex },
    currentUnitData,
    currentUnitData?.videoLink?.split("=")[1]
  );

  const [active, setActive] = useState(true);

  const opts: YouTubeProps["opts"] = {
    height: "471",
    width: "838",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  const completedHandler = async () => {
    const res = await axiosInstance.post("/enrolledCourses/completedTopic", {
      unitIndex: parseInt(unitIndex),
      topicIndex: parseInt(topicIndex),
      courseId: courseData.courseId._id,
    });
    setMarkCompleted(true);
    console.log(res.data);
  };

  if (typeof currentUnitData !== "undefined")
    return (
      <div className={classes.VideoPlayer}>
        <div>
          <YouTube
            opts={opts}
            videoId={currentUnitData?.videoLink?.split("v=")[1].split("&")[0]}
          />
        </div>
        <div>
          <h2
            style={{ paddingTop: "24px" }}
            className={classes.CourseCard1Header}
          >
            {currentUnitData.chapterName}
          </h2>
        </div>
        <div className={classes.CourseType}>
          <p
            onClick={() => setActive(true)}
            className={active ? classes.CourseTypeActive : ""}
          >
            OVERVIEW
          </p>
          <div></div>
          <p
            onClick={() => setActive(false)}
            className={!active ? classes.CourseTypeActive : ""}
          >
            RESOURCES
          </p>
        </div>
        <div style={{ paddingTop: "32px" }}>
          <h3 style={{ color: "#262C5B" }}>Module Description </h3>
          <p style={{ paddingTop: "8px" }}>
            Marketing is complex mechanism involving many people in one form or
            the other. The major marketing functions are buying, selling,
            financing, transport, warehousing, risk bearing and standardisation,
            etc
          </p>
        </div>
        <div style={{ paddingTop: "40px" }}>
          <Button
            disabled={markCompleted}
            onClick={() => {
              if (!markCompleted) completedHandler();
            }}
            className={classes.Button}
          >
            {!markCompleted ? "Mark as Completed" : "Chapter Completed"}
          </Button>
        </div>
      </div>
    );
  else return <></>;
}

export default VideoPlayer;
