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

function Accomplishments({ setOpen, setAccomplishments, onChangeHandler }) {
  const { accomplishmentsDescription } = useSelector(
    (state) => state.portfolioReducer.portfolioData
  );
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
          <p style={{ fontSize: 12, color: "#262C5B" }}>
            Description (optional)
          </p>
          <Input
            id="accomplishmentsDescription"
            type="text"
            name="accomplishmentsDescription"
            value={accomplishmentsDescription}
            sx={{ width: 518, marginRight: 5 }}
            className={classes.Name}
            onChange={onChangeHandler}
            placeholder="Enter description of Project (250 max letter)"
          />
        </div>
      </Box>
      <Button
        className={`${classes.SaveBtnSmall} ${classes.SaveBtn}`}
        onClick={() => {
          setOpen(false);
          setAccomplishments(false);
        }}
      >
        Save
      </Button>
    </>
  );
}

export default Accomplishments;
