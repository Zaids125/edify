import React from "react";
import classes from "./MyCourseCard.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import LinearWithValueLabel from "../ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

function MyCourseCard() {
  return (
    <div className={classes.MyCourseCard}>
      <div className={classes.MyCourseCardContainer}>
        <div className={classes.side}></div>
        <div className={classes.MyCourseCardLeft}>
          <p className={classes.title}>Importance of Social Media</p>
          <div className={classes.timeDetails}>
            <div>
              <BsCameraVideoFill />
              <p>24.5 hours</p>
            </div>
            <div>
              <></>
              <p>24 modules</p>
            </div>
          </div>
          <div className={classes.completionDetails}>
            <p>Completed on 23rd June 2022</p>
            <LinearWithValueLabel />
          </div>
          <p onClick={()=> window.open("http://localhost:3000/my-courses/abc/assignment1")}
            className={classes.viewDetails} 
          >
            View Details <AiOutlineArrowRight />
          </p>
        </div>
        <div className={classes.verticalSeparator}></div>
        <div className={classes.MyCourseCardRight}>
          <div className={classes.CourseTags}>
            <p>Artifical Intelligence</p>
            <p>Crypto</p>
          </div>
          <p className={classes.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
            diam consectetur aenean id nisl. Volutpat ornare pellentesque lectus
            metus, gravida tristique mi nulla enim. Nibh adipiscing neque
            lacinia non feugiat. Pulvinar vel in ultricies netus cursus
            egestas.Lorem ipsum dolor sit amet, Nibh adipiscing neque lacinia
            non feugiat. Pulvinar vel in ultricies netus cursus egestas.Lorem
            ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyCourseCard;
