import React,{useState} from "react";
import Player from "react-player"
import classes from "./VideoPlayer.module.css";
// import ".../pages/CourseEnrolled/MyCourses.module.css";



function VideoPlayer() {

  const [active, setActive] = useState(true);

  return (
  <div className={classes.VideoPlayer}>
    <div>
      <Player url="https://www.youtube.com/watch?v=k85mRPqvMbE" width="838px" height="471px"/>
    </div>
    <div>
      <h2 style={{paddingTop:"24px"}} className={classes.CourseCard1Header}>Types of Social Media</h2>
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
        <div style={{paddingTop:"32px"}}>
          <h3 style={{color:"#262C5B"}}>Module Description </h3>
          <p style={{paddingTop:"8px"}}>
          Marketing is complex mechanism involving many people in one form or the other. The major marketing functions are buying, selling, financing, transport, warehousing, risk bearing and standardisation, etc
          </p>
        </div>
        <div style={{paddingTop:"40px"}}>
          <button  className={classes.Button}>Mark as Completed</button>
        </div>
  </div>
  );
}

export default VideoPlayer;
