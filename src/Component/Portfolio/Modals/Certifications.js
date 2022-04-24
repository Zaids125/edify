import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio_details } from "../../../state/actions/portfolio";
import classes from "./Modals.module.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import { parseISO } from "date-fns";

function Certifications({
  setOpen,
  setCertifications,
  onChangeHandler,
  onDateChangeHandler,
}) {
  const {
    certificateProgram,
    certificateOrganization,
    certificateLocation,
    certificateStartDate,
    certificateEndDate,
    certificateDescription,
  } = useSelector((state) => state.portfolioReducer.portfolioData);

  useEffect(() => {
    console.log(
      moment(certificateStartDate),
      moment(certificateEndDate),
      moment(certificateEndDate) > moment(certificateStartDate)
    );
    if (moment(certificateEndDate) < moment(certificateStartDate)) {
      onDateChangeHandler(null, "certificateEndDate");
    }
  }, [certificateStartDate, certificateEndDate, onDateChangeHandler]);

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
            id="certificateProgram"
            type="text"
            name="certificateProgram"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            value={certificateProgram}
            onChange={onChangeHandler}
            placeholder="E.g. Software Developer"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Organization</p>
          <Input
            id="certificateOrganization"
            type="text"
            name="certificateOrganization"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            value={certificateOrganization}
            onChange={onChangeHandler}
            placeholder="E.g. Udemy"
          />
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Location</p>
          <Input
            id="certificateLocation"
            type="text"
            name="certificateLocation"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            value={certificateLocation}
            onChange={onChangeHandler}
            placeholder="E.g. Mumbai or online"
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
              value={certificateStartDate}
              minDate={parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              onChange={(newValue) => {
                // setValue(newValue);
                // console.log(newValue);
                onDateChangeHandler(newValue, "certificateStartDate");
              }}
              inputFormat="dd/MM/yyyy"
              toolbarPlaceholder="DD/MM/YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  readonly
                  value={certificateStartDate}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          {/* <Input
            id="certificateStartDate"
            type="date"
            name="certificateStartDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            value={certificateStartDate}
            onChange={onChangeHandler}
            placeholder="Enter Start Date"
          /> */}
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={certificateEndDate}
              openTo={"year"}
              minDate={parseISO(certificateStartDate) || parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              onChange={(newValue) => {
                onDateChangeHandler(newValue, "certificateEndDate");
              }}
              inputFormat="dd/MM/yyyy"
              toolbarPlaceholder="DD/MM/YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField size="small" readonly {...params} />
              )}
            />
          </LocalizationProvider>
          {/* <Input
            id="certificateEndDate"
            type="date"
            name="certificateEndDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            value={certificateEndDate}
            onChange={onChangeHandler}
            placeholder="Enter End Date"
          /> */}
        </div>
      </Box>
      <Box className={classes.DialogOneInput}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>
            Description (optional)
          </p>
          <Input
            id="certificateDescription"
            type="text"
            name="certificateDescription"
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            value={certificateDescription}
            onChange={onChangeHandler}
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
