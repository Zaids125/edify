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

function Certifications({ setOpen, setCertifications }) {
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
        <h2 style={{ fontSize: 20 }}>Courses and Certifications</h2>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Training program</p>
          <Input
            id="program"
            type="text"
            name="program"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Software Developer"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Organization</p>
          <Input
            id="organization"
            type="text"
            name="organization"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Udemy"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Location</p>
          <Input
            id="location"
            type="text"
            name="location"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Mumbai or online"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Start Date</p>
          <Input
            id="startDate"
            type="date"
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
            type="date"
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
      <Button
        className={`${classes.SaveBtnSmall} ${classes.SaveBtn}`}
        onClick={() => {
          setOpen(false);
          setCertifications(false);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Certifications;
