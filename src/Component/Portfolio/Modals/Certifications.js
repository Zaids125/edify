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
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio_details } from "../../../state/actions/portfolio";
import classes from "./Modals.module.css";

function Certifications({ setOpen, setCertifications, onChangeHandler }) {
  const {
    certificateProgram,
    certificateOrganization,
    certificateLocation,
    certificateStartDate,
    certificateEndDate,
    certificateDescription,
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
          <Input
            id="certificateStartDate"
            type="date"
            name="certificateStartDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            value={certificateStartDate}
            onChange={onChangeHandler}
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#262C5B" }}>End Date</p>
          <Input
            id="certificateEndDate"
            type="date"
            name="certificateEndDate"
            sx={{ width: 220, marginRight: 5 }}
            className={classes.Name}
            value={certificateEndDate}
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
