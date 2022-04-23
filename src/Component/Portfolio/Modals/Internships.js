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

function Internships({ setOpen, setInternship }) {
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
        <h2 style={{ fontSize: 20 }}>Internship Details</h2>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Profile</p>
          <Input
            id="school"
            type="text"
            name="school"
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
            id="school"
            type="text"
            name="school"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Microsoft"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Location</p>
          <Input
            id="school"
            type="text"
            name="school"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="E.g. Mumbai or work from home"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Start Year</p>
          <Input
            id="startYear"
            type="number"
            name="startYear"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter Start Year"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Year</p>
          <Input
            id="endYear"
            type="number"
            name="endYear"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter End Year"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>
            Description (optional)
          </p>
          <Input
            id="school"
            type="text"
            name="school"
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
          setInternship(false);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Internships;
