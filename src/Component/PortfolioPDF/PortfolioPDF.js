import React from "react";
import classes from "./PortfolioPDF.module.css";

function PortfolioPDF() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.Container}>
        {/* <div className={classes.divider}></div> */}
        <div className={classes.Block}>
          <div className={classes.Block1}>
            <div className={classes.Tag}>Designer</div>
            <div className={classes.Name}>
              <h2>Mohd Zaid</h2>
              <h2>Shaikh</h2>
            </div>
          </div>
          <div className={classes.Block2}>
            <div className={classes.Tag}>Contact</div>
            <div className={classes.info}>
              <p>+91 7752012364 </p>
              <p>mail@email.com</p>
              <p>Mumbai, Maharashtra</p>
            </div>
            <div className={classes.divider}></div>
          </div>
        </div>
        <div className={classes.subConatiner}>
          <div className={classes.leftContainer}>
            <div className={classes.Internship}>
              <p className={classes.title}>Internship</p>
              <p className={classes.subTitle}>ABCD Company, UI/UX Designer</p>
              <p className={classes.boldTitle}>2016 - Present</p>
              <p className={classes.des}>
                I worked here for more than 3 months . It was a very wonderful
                experiece . I got to convert wireframes into designs and some
                amazing prjeicts
              </p>
            </div>
            <div className={classes.Projects}>
              <p className={classes.title}>Academia/Personal projects</p>
              <p className={classes.subTitle}>www.netlitfynaturally.com</p>
              <p className={classes.boldTitle}>Tours and travel website</p>
              <p className={classes.des}>
                I worked here for more than 3 months . It was a very wonderful
                experiece . I got to convert wireframes into designs and some
                amazing prjeicts
              </p>
            </div>
            <div className={classes.Certification}>
              <p className={classes.title}>Courses/Certifications</p>
              <p className={classes.subTitle}>Udemy</p>
              <p className={classes.boldTitle}>Zero to mastery in javascript</p>
              <p className={classes.des}>
                I worked here for more than 3 months . It was a very wonderful
                experiece . I got to convert wireframes into designs and some
                amazing prjeicts
              </p>
            </div>
            <div className={classes.OtherDetails}>
              <p className={classes.title}>Accomplishments/Other details</p>
              <p className={classes.des} style={{ paddingTop: "12px" }}>
                I worked here for more than 3 months . It was a very wonderful
                experiece . I got to convert wireframes into designs and some
                amazing prjeicts
              </p>
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div className={classes.Education}>
              <p className={classes.tag}>Education</p>
              <p className={classes.Year}>2015-2016</p>
              <p className={classes.SchoolName}>STHS</p>
              <p className={classes.Percent}>90 Percent</p>
              <div style={{ paddingTop: "8px" }}></div>
              <p className={classes.Year}>2015-2016</p>
              <p className={classes.SchoolName}>STHS</p>
              <p className={classes.Percent}>90 Percent</p>
              <div style={{ paddingTop: "8px" }}></div>
              <p className={classes.Year}>2015-2016</p>
              <p className={classes.SchoolName}>STHS</p>
              <p className={classes.Percent}>90 Percent</p>
            </div>
            <div className={classes.Skills} style={{ paddingTop: "48px" }}>
              <p className={classes.tag}>Skills</p>
              <p className={classes.skillName}>Skill1, Skills2, Skill3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPDF;
