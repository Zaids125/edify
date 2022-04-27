import React, { useEffect, useState } from "react";
import axiosInstance from "../../adapters/api/axiosInstance";
import classes from "./UnitBox.module.css";

function UnitChapter({ index, data }) {
  useEffect(() => {
    const getDuration = async () => {
      const res = await axiosInstance.get(
        `/courses/videoDuration?videoUrl=${data.videoLink}`
      );
      if (res.data.hours > 1) {
        setDuration(res.data.hours);
        setDurationType("Hours");
      } else if (res.data.minutes > 1) {
        setDuration(res.data.minutes);
        setDurationType("Minutes");
      } else {
        setDuration(res.data.seconds);
        setDurationType("Seconds");
      }
    };
    getDuration();
  }, []);

  const [duration, setDuration] = useState(0);
  const [durationType, setDurationType] = useState("");

  return (
    <div className={classes.UnitChapter}>
      <div className={classes.UnitName}>
        <p>{index + 1}</p>
        <p>{data.chapterName}</p>
      </div>
      <div className={classes.UnitTime}>
        <p>
          {duration} {durationType}
        </p>
      </div>
    </div>
  );
}

export default UnitChapter;
