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
import { orange } from "@mui/material/colors";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import classes from "./Modals.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DateFnsUtils from "@date-io/date-fns";
import { parseISO } from "date-fns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

function Education({
  setOpen,
  setEducation,
  onChangeHandler,
  onDateChangeHandler,
}) {
  const [SSCDetails, setSSCDetails] = useState(true);
  const [HSCDetails, setHSCDetails] = useState(false);
  const [DiplomaDetails, setDiplomaDetails] = useState(false);
  const [DegreeDetails, setDegreeDetails] = useState(false);

  const {
    SSCstatus,
    SSCschool,
    SSCyear,
    SSCendYear,
    SSCpercentage,
    SSCdegree,
    SSCstream,
    HSCstatus,
    HSCschool,
    HSCstartYear,
    HSCendYear,
    HSCpercentage,
    HSCdegree,
    HSCstream,
    Degreestatus,
    Degreeschool,
    DegreestartYear,
    DegreeendYear,
    Degreepercentage,
    Degreedegree,
    DegreeCourse,
  } = useSelector((state) => state.portfolioReducer.portfolioData);

  useEffect(() => {
    if (SSCstatus === "completed") setHSCDetails(true);
    else setHSCDetails(false);
    if (HSCstatus === "completed") setDegreeDetails(true);
    else setDegreeDetails(false);
  }, [SSCstatus, HSCstatus, Degreestatus]);

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
          id="SSCstatus"
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => {
            e.target.name = "SSCstatus";
            onChangeHandler(e);
          }}
        >
          <FormControlLabel
            value="completed"
            control={
              <Radio
                checked={SSCstatus === "completed" ? true : false}
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
            checked={SSCstatus === "pursuing" ? true : false}
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
            id="SSCschool"
            type="text"
            name="SSCschool"
            sx={{ width: 518, marginRight: 5 }}
            value={SSCschool}
            onChange={onChangeHandler}
            className={classes.Name}
            placeholder="Enter your school name"
          />
        </div>
      </Box>
      <Box className={classes.DialogTwoInputs}>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Year</p>
          <LocalizationProvider
            utils={DateFnsUtils}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              value={SSCyear}
              minDate={parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              openTo="year"
              views={["year"]}
              onChange={(newValue) => {
                onDateChangeHandler(newValue, "SSCyear");
              }}
              inputFormat="yyyy"
              toolbarPlaceholder="YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField size="small" readonly value={SSCyear} {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Percentage</p>
          <Input
            id="SSCpercentage"
            type="text"
            name="SSCpercentage"
            sx={{ width: 220, marginRight: 5 }}
            value={SSCpercentage}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter percentage"
          />
        </div>
        {/* <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Year</p>
          <LocalizationProvider
            utils={DateFnsUtils}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              value={SSCendYear}
              minDate={parseISO("2015-01-01")}
              maxDate={parseISO("2026-12-31")}
              openTo="year"
              views={["year"]}
              onChange={(newValue) => {
                onDateChangeHandler(newValue, "SSCendYear");
              }}
              inputFormat="yyyy"
              toolbarPlaceholder="YYYY"
              InputProps={{ style: { width: 220 } }}
              renderInput={(params) => (
                <TextField
                  size="small"
                  readonly
                  value={SSCendYear}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </div> */}
      </Box>
      {/* <Box
        className={`${classes.DialogOneInputSmall} ${classes.DialogOneInput}`}
        style={{ justifyContent: "flex-start" }}
      >
        <div style={{ margin: "0px !important" }}>
          <p style={{ fontSize: 12, color: "#262C5B" }}>Percentage</p>
          <Input
            id="SSCpercentage"
            type="text"
            name="SSCpercentage"
            sx={{ width: 220, marginRight: 5 }}
            value={SSCpercentage}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter percentage"
          />
        </div>
      </Box> */}
      {HSCDetails && (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <h2 style={{ fontSize: 20 }}>12th Board Details</h2>
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
              id="HSCstatus"
              onChange={(e) => {
                e.target.name = "HSCstatus";
                onChangeHandler(e);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="completed"
                control={
                  <Radio
                    checked={HSCstatus === "completed" ? true : false}
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
                    checked={HSCstatus === "pursuing" ? true : false}
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
              <p style={{ fontSize: 12, color: "#262C5B" }}>High School Name</p>
              <Input
                id="HSCschool"
                type="text"
                name="HSCschool"
                sx={{ width: 518, marginRight: 5 }}
                value={HSCschool}
                onChange={onChangeHandler}
                className={classes.Name}
                placeholder="Enter your high school name"
              />
            </div>
          </Box>
          <Box className={classes.DialogTwoInputs}>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Start Year</p>
              <LocalizationProvider
                utils={DateFnsUtils}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  value={HSCstartYear}
                  minDate={parseISO("2015-01-01")}
                  maxDate={parseISO("2026-12-31")}
                  openTo="year"
                  views={["year"]}
                  onChange={(newValue) => {
                    onDateChangeHandler(newValue, "HSCstartYear");
                  }}
                  inputFormat="yyyy"
                  toolbarPlaceholder="YYYY"
                  InputProps={{ style: { width: 220 } }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      readonly
                      value={HSCstartYear}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>End Year</p>
              <LocalizationProvider
                utils={DateFnsUtils}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  value={HSCendYear}
                  minDate={parseISO("2015-01-01")}
                  maxDate={parseISO("2026-12-31")}
                  openTo="year"
                  views={["year"]}
                  onChange={(newValue) => {
                    onDateChangeHandler(newValue, "HSCendYear");
                  }}
                  inputFormat="yyyy"
                  toolbarPlaceholder="YYYY"
                  InputProps={{ style: { width: 220 } }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      readonly
                      value={HSCendYear}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </Box>
          <Box className={classes.DialogTwoInputs}>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Percentage</p>
              <Input
                id="HSCpercentage"
                type="text"
                name="HSCpercentage"
                sx={{ width: 220, marginRight: 5 }}
                value={HSCpercentage}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Enter percentage"
              />
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Stream</p>
              <Input
                id="HSCstream"
                type="text"
                name="HSCstream"
                sx={{ width: 220, marginRight: 5 }}
                value={HSCstream}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Enter stream"
              />
            </div>
          </Box>
        </>
      )}
      {DegreeDetails && (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <h2 style={{ fontSize: 20 }}>Degree Details</h2>
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
              id="Degreestatus"
              onChange={(e) => {
                e.target.name = "Degreestatus";
                onChangeHandler(e);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="completed"
                control={
                  <Radio
                    checked={Degreestatus === "completed" ? true : false}
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
                    checked={Degreestatus === "pursuing" ? true : false}
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
              <p style={{ fontSize: 12, color: "#262C5B" }}>
                Degree College Name
              </p>
              <Input
                id="Degreeschool"
                type="text"
                name="Degreeschool"
                sx={{ width: 518, marginRight: 5 }}
                value={Degreeschool}
                onChange={onChangeHandler}
                className={classes.Name}
                placeholder="Enter your degree college name"
              />
            </div>
          </Box>
          <Box className={classes.DialogTwoInputs}>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Start Year</p>
              <LocalizationProvider
                utils={DateFnsUtils}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  value={DegreestartYear}
                  minDate={parseISO("2015-01-01")}
                  maxDate={parseISO("2026-12-31")}
                  openTo="year"
                  views={["year"]}
                  onChange={(newValue) => {
                    onDateChangeHandler(newValue, "DegreestartYear");
                  }}
                  inputFormat="yyyy"
                  toolbarPlaceholder="YYYY"
                  InputProps={{ style: { width: 220 } }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      readonly
                      value={DegreestartYear}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>End Year</p>
              <LocalizationProvider
                utils={DateFnsUtils}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  value={DegreeendYear}
                  minDate={parseISO("2015-01-01")}
                  maxDate={parseISO("2026-12-31")}
                  openTo="year"
                  views={["year"]}
                  onChange={(newValue) => {
                    onDateChangeHandler(newValue, "DegreeendYear");
                  }}
                  inputFormat="yyyy"
                  toolbarPlaceholder="YYYY"
                  InputProps={{ style: { width: 220 } }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      readonly
                      value={DegreeendYear}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </Box>
          <Box className={classes.DialogTwoInputs}>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Percentage</p>
              <Input
                id="Degreepercentage"
                type="text"
                name="Degreepercentage"
                sx={{ width: 220, marginRight: 5 }}
                value={Degreepercentage}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Enter percentage"
              />
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Degree</p>
              <Input
                id="Degreedegree"
                type="text"
                name="Degreedegree"
                sx={{ width: 220, marginRight: 5 }}
                value={Degreedegree}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Enter degree"
              />
            </div>
          </Box>
          <Box
            className={`${classes.DialogOneInputSmall} ${classes.DialogOneInput}`}
            style={{ justifyContent: "flex-start" }}
          >
            <div style={{ margin: "0px !important" }}>
              <p style={{ fontSize: 12, color: "#262C5B" }}>Course</p>
              <Input
                id="DegreeCourse"
                type="text"
                name="DegreeCourse"
                sx={{ width: 240, marginRight: 5 }}
                value={DegreeCourse}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Enter course"
              />
            </div>
          </Box>
        </>
      )}

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
{
  /* {DiplomaDetails && (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <h2 style={{ fontSize: 20 }}>Diploma Details</h2>
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
            id="status"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="completed"
                control={
                  <Radio
                    checked={HSCstatus
Degreestatus==="completed" ? true: false}
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
                    checked={HSCstatus
Degreestatus==="pursuing" ? true: false}
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
                value={school}
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
                value={startYear}
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
                value={endYear}
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
                value={percentage}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter percentage"
              />
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#262C5B" }}>
                Degree (optional)
              </p>
              <Input
                id="degree"
                type="text"
                name="degree"
                sx={{ width: 220, marginRight: 5 }}
                value={degree}
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
              <p style={{ fontSize: 12, color: "#262C5B" }}>
                Stream (optional)
              </p>
              <Input
                id="stream"
                type="text"
                name="stream"
                sx={{ width: 240, marginRight: 5 }}
                value={stream}
                className={classes.Name}
                // onChange={onChangeHandler}
                placeholder="Enter stream"
              />
            </div>
          </Box>
        </>
      )} */
}
