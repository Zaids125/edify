import React from "react";
import classes from "./CourseSideBar.module.css";
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
<<<<<<< HEAD
        <div className={classes.Topics}>
          <div className={classes.TopicTitle}>
            <p className={classes.SideBarHeader}>Social Media</p>
            <p className={classes.HeaderData}>1/6 | 2 hr 20 min</p>
          </div>
          <div className={classes.TopicContainer}>
            <div className={classes.Topic}>
              <AiFillPlayCircle fontSize={18} /> <p>Types of Social Media</p>
=======
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
                {myData.map((data, topicIndex) => {
                  return (
                    <TopicContainer
                      topicData={data}
                      topicIndex={topicIndex}
                      unitIndex={index}
                      courseId={courseData.courseId._id}
                    />
                  );
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
>>>>>>> 3a045014093d85b9d1d6cf99d1d05cff05c9e36f
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
