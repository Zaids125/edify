import React from "react";
import axiosInstance from "../../adapters/api/axiosInstance";
import classes from "./UnitBox.module.css";
import UnitChapter from "./UnitChapter";

function UnitBox({ unitData, unitNumber }) {
  console.log(Array.isArray(unitData), unitData);

  return (
    <div className={classes.UnitBox}>
      <div className={classes.UnitBoxContainer}>
        <h3 className={classes.UnitHeader}>Unit {unitNumber}</h3>
        <div className={classes.line}></div>
        <div className={classes.UnitChapters}>
          {unitData.map((data, index) => (
            <UnitChapter index={index} data={data} />
          ))}
          {/* <div className={classes.UnitChapter}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UnitBox;
