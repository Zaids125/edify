import React, { useEffect, useState } from "react";
import classes from "./CourseSideBar.module.css";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  MdOutlineMenuBook,
  MdAssignment,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import axiosInstance from "../../adapters/api/axiosInstance";
import TopicContainer from "./TopicContainer";

function CourseSideBar({ courseData }) {
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

  return (
    <div className={classes.CourseSideBar}>
      <div className={classes.CourseSideBarContainer}>
        <div className={classes.HeaderContainer}>
          <p className={classes.SideBarHeader}>
            {courseData?.courseId?.courseName}
          </p>
          {/* <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p> */}
          <p className={classes.HeaderData}>
            {courseData?.courseId?.Units.length} Units |{" "}
            {playlistDuration.hours > 0
              ? playlistDuration.hours
              : playlistDuration.minutes}{" "}
            {playlistDuration.hours > 0 ? "Hours" : "Minutes"} Videos
          </p>
        </div>
        <div className={classes.line}></div>
        {courseData?.courseId?.Units.map((data, index) => {
          const myData = Object.keys(data).map((key) => {
            return data[key];
          });
          return (
            <>
              <div className={classes.Topics}>
                <div className={classes.TopicTitle}>
                  <p className={classes.SideBarHeader}>Unit {index + 1}</p>
                  <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
                </div>
                {myData.map((data, index) => {
                  return <TopicContainer topicData={data} />;
                })}
                {/* <div className={classes.TopicContainer}>
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
                        <p>{data.chapterName}</p>
                      </div>
                      <div className={classes.TopicTime}>
                        <p>4 min</p>
                      </div>
                    </div> */}
                {/* <div className={classes.TopicContainer}>
                  <div className={classes.Topic}>
                    <AiFillPlayCircle fontSize={18} />{" "}
                    <p>Types of Social Media</p>
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
                    <AiFillPlayCircle fontSize={18} />{" "}
                    <p>Types of Social Media</p>
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
                    <MdOutlineAssignmentTurnedIn fontSize={18} />{" "}
                    <p>Assignment 1</p>
                  </div>
                  <div>
                    <p className={classes.TopicTime}>15/20</p>
                  </div>
                </div> */}
              </div>
            </>
          );
        })}
        {/* <>
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
                <MdOutlineAssignmentTurnedIn fontSize={18} />{" "}
                <p>Assignment 1</p>
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
                <MdOutlineAssignmentTurnedIn fontSize={18} />{" "}
                <p>Assignment 1</p>
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
                <MdOutlineAssignmentTurnedIn fontSize={18} />{" "}
                <p>Assignment 1</p>
              </div>
              <div>
                <p className={classes.TopicTime}>15/20</p>
              </div>
            </div>
          </div>
        </> */}
      </div>
    </div>
  );
}

export default CourseSideBar;
