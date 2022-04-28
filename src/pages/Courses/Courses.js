import {
  Autocomplete,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CourseCard from "../../Component/CourseCard/CourseCard";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Courses.module.css";
import { BiSearchAlt } from "react-icons/bi";
import axiosInstance from "../../adapters/api/axiosInstance";
import { debounce } from "lodash";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCourses, setAllCourses] = useState([]);
  const [AISearch, setAISearch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState(["HTML", "CSS", "Data Science"]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      setLoading(true);
      const res = await axiosInstance.get("/courses/all");
      console.log(res.data);
      setAllCourses(res.data.courses);
      setLoading(false);
    };
    if (searchTerm === "") getAllCourses();
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") debounceFn(searchTerm);
  }, [searchTerm]);

  const debounceFn = useCallback(
    debounce(async (searchTerm) => {
      const res = await axiosInstance.get(
        `/courses/search?searchField=${searchTerm}`
      );
      setAllCourses(res.data.courses);
    }, 500),
    []
  );

  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [foundCourses, setFoundCourses] = useState([]);

  const handleFindCourses = async () => {
    const res = await axiosInstance.get("/courses/findCourses", {
      params: { selectedSkills },
    });
    setFoundCourses(res.data.allCourses);
  };

  const getAIRecommendedCourses = async (data) => {
    const res = await axiosInstance.get("/courses/getAICourses", {
      params: { selectedSkills, courseSelected: data.courseName },
    });
    console.log(res.data);
  };

  return (
    <div className={classes.Courses}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>

      <div className={classes.CoursesContainer}>
        <div className={classes.SearchContainer}>
          <div className={classes.CourseSearchBar}>
            <input
              className={classes.CourseSearchInput}
              style={{ borderRadius: "100px" }}
              placeholder="Type here to search"
              label=""
              InputLabelProps={{ shrink: false }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={classes.SearchButtonContainer}>
              <Button className={classes.SearchButton}>
                <BiSearchAlt style={{ fontSize: 18 }} /> <p>Search</p>
              </Button>
            </div>
          </div>
          <Button
            onClick={() => setAISearch(true)}
            className={classes.AISearchBtn}
          >
            AI Search
          </Button>
        </div>
        <Dialog
          open={AISearch}
          onClose={() => {
            setAISearch(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          BackdropProps={{
            style: { backgroundColor: "rgba(255,255,255,0.7)" },
          }}
          maxWidth="md"
        >
          <div className={classes.AISearchDialog}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={selectedSkills}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {skills.map((skill) => (
                  <MenuItem
                    key={skill}
                    value={skill}
                    style={getStyles(skill, selectedSkills, theme)}
                  >
                    {skill}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={handleFindCourses}
              className={classes.getCoursesBtn}
            >
              <BiSearchAlt style={{ fontSize: 18 }} />
              <p>Find Courses</p>
            </Button>
            {foundCourses.length > 0 && (
              <>
                <h4 className={classes.foundCourseHeader}>
                  Click on a course to find the similar courses
                </h4>
                {foundCourses.map((data) => {
                  return (
                    <Button
                      onClick={() => getAIRecommendedCourses(data)}
                      className={classes.foundCourses}
                    >
                      {data.courseName}
                    </Button>
                  );
                })}
              </>
            )}
          </div>
        </Dialog>
        {loading ? (
          <Box
            className={classes.CircularProgress}
            color="inherit"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <div className={classes.AllCourseCards}>
            {allCourses.map((data) => (
              <CourseCard cardData={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
