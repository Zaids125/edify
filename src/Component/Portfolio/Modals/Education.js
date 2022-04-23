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
import { orange } from "@mui/material/colors";
import React from "react";
import classes from "./Modals.module.css";

function Education({ setOpen, setEducation }) {
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
        <h2 style={{ fontSize: 20 }}>10th Board Details</h2>
      </Box>
      <FormControl className={classes.RadioContainer}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            fontSize: 12,
            color: "#262C5B",
            fontFamily: "Montserrat",
          }}
        >
          Status
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="completed"
            control={
              <Radio
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            }
            label="Completed"
          />
          <FormControlLabel
            value="pursuing"
            control={
              <Radio
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            }
            label="Pursuing"
          />
        </RadioGroup>
      </FormControl>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>School Name</p>
          <Input
            id="school"
            type="text"
            name="school"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            placeholder="Enter your school name"
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
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Percentage</p>
          <Input
            id="percentage"
            type="text"
            name="percentage"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter percentage"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Degree (optional)</p>
          <Input
            id="degree"
            type="text"
            name="degree"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter degree"
          />
        </div>
      </Box>
      <Box
        className={`${classes.DialogOneInputSmall} ${classes.DialogOneInput}`}
        style={{ justifyContent: "flex-start" }}
      >
        <div style={{ margin: "0px !important" }}>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Stream (optional)</p>
          <Input
            id="stream"
            type="text"
            name="stream"
            sx={{ width: 240, marginRight: 5 }}
            className={classes.Name}
            // onChange={onChangeHandler}
            placeholder="Enter stream"
          />
        </div>
      </Box>
      <Button
        className={`${classes.SaveBtnSmall} ${classes.SaveBtn}`}
        onClick={() => {
          setOpen(false);
          setEducation(false);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Education;
