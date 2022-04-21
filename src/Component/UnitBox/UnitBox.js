import React from "react";
import classes from "./UnitBox.module.css";

function UnitBox() {
  return (
    <div className={classes.UnitBox}>
      <div className={classes.UnitBoxContainer}>
        <h3 className={classes.UnitHeader}>Unit 1</h3>
        <div className={classes.line}></div>
        <div className={classes.UnitChapters}>
          <div className={classes.UnitChapter}>
            <div className={classes.UnitName}>
              <p>1.</p>
              <p>Introduction to Python</p>
            </div>
            <div className={classes.UnitTime}>
              <p>10 minutes</p>
            </div>
          </div>
          <div className={classes.UnitChapter}>
            <div className={classes.UnitName}>
              <p>1.</p>
              <p>Introduction to Python</p>
            </div>
            <div className={classes.UnitTime}>
              <p>10 minutes</p>
            </div>
          </div>
          <div className={classes.UnitChapter}>
            <div className={classes.UnitName}>
              <p>1.</p>
              <p>Introduction to Python</p>
            </div>
            <div className={classes.UnitTime}>
              <p>10 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitBox;
