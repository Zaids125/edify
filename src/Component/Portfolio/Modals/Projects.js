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
import classes from "./Modals.module.css";
function Projects({ setOpen, setProjects }) {
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
            id="title"
            type="text"
            name="title"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Software Developer"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Start Date</p>
          <Input
            id="startDate"
            type="number"
            name="startDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <Input
            id="endDate"
            type="number"
            name="endDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
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
            id="description"
            type="text"
            name="description"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
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
            id="projectLink"
            type="text"
            name="projectLink"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
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
