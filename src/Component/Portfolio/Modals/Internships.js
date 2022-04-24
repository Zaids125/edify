import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./Modals.module.css";

function Internships({ setOpen, setInternship, onChangeHandler }) {
  const {
    internshipProfile,
    internshipOrganization,
    internshipLocation,
    internshipStartDate,
    internshipEndDate,
    internshipDescription,
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
        <h2 style={{ fontSize: 20 }}>Internship Details</h2>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Profile</p>
          <Input
            id="internshipProfile"
            type="text"
            name="internshipProfile"
            value={internshipProfile}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="E.g. Software Developer"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Organization</p>
          <Input
            id="internshipOrganization"
            type="text"
            name="internshipOrganization"
            value={internshipOrganization}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="E.g. Microsoft"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Location</p>
          <Input
            id="internshipLocation"
            type="text"
            name="internshipLocation"
            value={internshipLocation}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="E.g. Mumbai or work from home"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Start Date</p>
          <Input
            id="internshipStartDate"
            type="date"
            name="internshipStartDate"
            value={internshipStartDate}
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <Input
            id="internshipEndDate"
            type="date"
            name="internshipEndDate"
            value={internshipEndDate}
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
            id="internshipDescription"
            type="text"
            name="internshipDescription"
            value={internshipDescription}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
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
