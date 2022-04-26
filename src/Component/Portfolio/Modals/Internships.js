import { Button, Input, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./Modals.module.css";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import { parseISO } from "date-fns";

function Internships({
  setOpen,
  setInternship,
  onChangeHandler,
  onDateChangeHandler,
}) {
  const {
    internshipProfile,
    internshipOrganization,
    internshipLocation,
    internshipStartDate,
    internshipEndDate,
    internshipDescription,
  } = useSelector((state) => state.portfolioReducer.portfolioData);

  useEffect(() => {
    console.log(
      moment(internshipStartDate),
      moment(internshipEndDate),
      moment(internshipEndDate) > moment(internshipStartDate)
    );
    if (moment(internshipEndDate) < moment(internshipStartDate)) {
      onDateChangeHandler(null, "internshipEndDate");
    }
  }, [internshipStartDate, internshipEndDate, onDateChangeHandler]);

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
          <LocalizationProvider
            utils={DateFnsUtils}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              //   label="Basic example"
              value={internshipStartDate}
              minDate={parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              onChange={(newValue) => {
                // setValue(newValue);
                // console.log(newValue);
                onDateChangeHandler(newValue, "internshipStartDate");
              }}
              inputFormat="dd/MM/yyyy"
              toolbarPlaceholder="DD/MM/YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  readonly
                  value={internshipStartDate}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={internshipEndDate}
              openTo={"year"}
              minDate={parseISO(internshipStartDate) || parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              onChange={(newValue) => {
                onDateChangeHandler(newValue, "internshipEndDate");
              }}
              inputFormat="dd/MM/yyyy"
              toolbarPlaceholder="DD/MM/YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField size="small" readonly {...params} />
              )}
            />
          </LocalizationProvider>
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
