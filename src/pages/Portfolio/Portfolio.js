import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Portfolio.module.css";
import { BsPlusSquareFill } from "react-icons/bs";

function Portfolio() {
  return (
    <div className={classes.Portfolio}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>
      <div className={classes.PortfolioContainer}>
        <div className={classes.HeaderContainer}>
          <h2>Portfolio</h2>
        </div>
        <form>
          <Box className={classes.TwoInputs}>
            <div>
              <p>First Name</p>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <p>Last Name</p>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter Last Name"
              />
            </div>
          </Box>
          <Box className={classes.TwoInputs}>
            <div>
              <p>Email Address</p>
              <Input
                id="email"
                type="text"
                name="email"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter your Email Address"
              />
            </div>
            <div>
              <p>Mobile Number</p>
              <Input
                id="mobile"
                type="text"
                name="mobile"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter your Mobile Number"
              />
            </div>
          </Box>
          <Box className={classes.TwoInputs}>
            <div>
              <p>City</p>
              <Input
                id="city"
                type="text"
                name="city"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter the city you live in"
              />
            </div>
            <div>
              <p>District</p>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter the district you live in"
              />
            </div>
          </Box>
          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Education</p>
              <Button
                className={classes.EducationBtn}
                //   id="firstName"
                //   type="text"
                //   name="firstName"
                //   sx={{ width: 220, marginRight: 5 }}
                //   className={classes.Name}
                //   // onChange={onChangeHandler}
                //   placeholder="Enter First Name"
              >
                Add Eduction
              </Button>
            </div>
          </Box>
          <Box className={classes.OneInput}>
            <div>
              <p>Paid Internships</p>
              <Input
                id="internship"
                type="text"
                name="internship"
                sx={{ width: 720, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter your past internships"
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton>
                //       <BsPlusSquareFill />
                //     </IconButton>
                //   </InputAdornment>
                // }
              />
            </div>
          </Box>
          <Box className={classes.OneInput}>
            <div>
              <p>Courses/Certifications</p>
              <Input
                id="courses"
                type="text"
                name="courses"
                sx={{ width: 720, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Add you courses and certifications"
              />
            </div>
          </Box>
          <Box className={classes.OneInput}>
            <div>
              <p>Skills</p>
              <Input
                id="skills"
                type="text"
                name="skills"
                sx={{ width: 720, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Add your skills"
              />
            </div>
          </Box>
          <Box className={classes.OneInput}>
            <div>
              <p>Academia/Personal projects</p>
              <Input
                id="projects"
                type="text"
                name="projects"
                sx={{ width: 720, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Add your academia or personal projects"
              />
            </div>
          </Box>
          <Box className={classes.OneInput}>
            <div>
              <p>Accomplishments/Other details</p>
              <Input
                id="otherDetails"
                type="text"
                name="otherDetails"
                sx={{ width: 720, marginRight: 5 }}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Add you accomplishments or other details"
              />
            </div>
          </Box>
          <Button className={classes.SaveBtn}>Save</Button>
        </form>
      </div>
    </div>
  );
}

export default Portfolio;
