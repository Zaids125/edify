import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./Modals.module.css";
function Projects({ setOpen, setProjects, onChangeHandler }) {
  const {
    projectsTitle,
    projectsStartDate,
    projectsEndDate,
    projectsDescription,
    projectsProjectLink,
  } = useSelector((state) => state.portfolioReducer.portfolioData);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: 20 }}>Academia and Personal projects</h2>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Title</p>
          <Input
            id="projectsTitle"
            type="text"
            name="projectsTitle"
            value={projectsTitle}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="E.g. Software Developer"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Start Date</p>
          <Input
            id="projectsStartDate"
            type="number"
            name="projectsStartDate"
            value={projectsStartDate}
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <Input
            id="projectsEndDate"
            type="number"
            name="projectsEndDate"
            value={projectsEndDate}
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter End Date"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>
            Description (optional)
          </p>
          <Input
            id="projectsDescription"
            type="text"
            name="projectsDescription"
            value={projectsDescription}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter description of work done (250 max letter)"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>
            Project link (optional)
          </p>
          <Input
            id="projectsProjectLink"
            type="text"
            name="projectsProjectLink"
            value={projectsProjectLink}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="E.g. www/myproject.com"
          />
        </div>
      </Box>
      <Button
        className={`${classes.SaveBtnSmall} ${classes.SaveBtn}`}
        onClick={() => {
          setOpen(false);
          setProjects(false);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Projects;
