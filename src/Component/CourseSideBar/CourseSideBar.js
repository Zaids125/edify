import React from "react";
import classes from "./CourseSideBar.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  MdOutlineMenuBook,
  MdAssignment,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";

function CourseSideBar() {
  return (
    <div className={classes.CourseSideBar}>
      <div className={classes.CourseSideBarContainer}>
        <div className={classes.HeaderContainer}>
          <p className={classes.SideBarHeader}>Social Media Heading</p>
          <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
        </div>
        <div className={classes.line}></div>
        <div className={classes.Topics}>
          <div className={classes.TopicTitle}>
            <p className={classes.SideBarHeader}>Social Media</p>
            <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div className={classes.TopicTime}>
              <p>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineMenuBook fontSize={22} />
              <p>Types of Social Media And Why it is prominent</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdAssignment fontSize={18} /> <p>Assessment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineAssignmentTurnedIn fontSize={18} /> <p>Assignment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
        </div>
        <div className={classes.Topics}>
          <div className={classes.TopicTitle}>
            <p className={classes.SideBarHeader}>Social Media</p>
            <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div className={classes.TopicTime}>
              <p>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineMenuBook fontSize={22} />
              <p>Types of Social Media And Why it is prominent</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdAssignment fontSize={18} /> <p>Assessment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineAssignmentTurnedIn fontSize={18} /> <p>Assignment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
        </div>
        <div className={classes.Topics}>
          <div className={classes.TopicTitle}>
            <p className={classes.SideBarHeader}>Social Media</p>
            <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div className={classes.TopicTime}>
              <p>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineMenuBook fontSize={22} />
              <p>Types of Social Media And Why it is prominent</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
            </div>
            <div>
              <p className={classes.TopicTime}>4 min</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdAssignment fontSize={18} /> <p>Assessment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <MdOutlineAssignmentTurnedIn fontSize={18} /> <p>Assignment 1</p>
            </div>
            <div>
              <p className={classes.TopicTime}>15/20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSideBar;
