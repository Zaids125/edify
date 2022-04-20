import React, { useState } from "react";
import logo from "../../Imgs/Logo.png";
import illust1 from "../../Imgs/Illust1.png";
import icon from "../../Imgs/icon.png";
import icon1 from "../../Imgs/icon-1.png";
import icon2 from "../../Imgs/icon-2.png";
import icon3 from "../../Imgs/icon-3.png";

import classes from "./Landing.module.css";
import Modal from "../../Component/Modal";
import Signup from "../../Component/Signup/Signup";
import Login from "../../Component/Login/Login";
import CourseCard from "../../Component/CourseCard/CourseCard";

function Landing() {
  const [isSignOpen, setisSignOpen] = useState(false);
  const [isLogOpen, setisLogOpen] = useState(false);
  return (
    <div className={classes.landingBody}>
      <Modal open={isSignOpen} onClose={() => setisSignOpen(false)}>
        <Signup />
      </Modal>
      <Modal open={isLogOpen} onClose={() => setisLogOpen(false)}>
        <Login />
      </Modal>
      <div className={classes.section1}>
        <div className={classes.texts}>
          <p className={classes.head}>Make learning fun!!</p>
          <p className={classes.caption}>
            Any language, on any device, for all ages!
          </p>
          <button onClick={() => setisSignOpen(true)} className={classes.btn}>
            Sign up for free
          </button>
        </div>
        <img src={illust1} alt="hello" />
      </div>

      <div className={classes.section2}>
        <p>Who edify is for?</p>
        <div className={classes.rowCards}>
          <div className={classes.card}>
            <img alt="" src={icon} />
            <h3> At School</h3>
            <p>
              Engaging group and distance learning for teachers and students.
            </p>
          </div>
          <div className={classes.card}>
            <img alt="" src={icon1} />
            <h3> At Work</h3>
            <p>For training, e-learning, interactive presentations and more.</p>
          </div>
          <div className={classes.card}>
            <img alt="" src={icon2} />
            <h3> At Home</h3>
            <p>Apps and games for family fun or home study.</p>
          </div>
          <div className={classes.card}>
            <img alt="" src={icon3} />
            <h3>Learning App</h3>
            <p>Engage kids with the Kahoot! family of learning apps</p>
          </div>
        </div>
      </div>
      <div className={classes.section3}>
        <p>Treding Courses</p>
        <div className={classes.TredingCourseCards}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Landing;
