import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SideBar from "../../Component/SideBar/SideBar";
import classes from "./Portfolio.module.css";
import { BsPlusLg } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";

import { orange } from "@mui/material/colors";
import InternshipsModal from "../../Component/Portfolio/Modals/Internships";
import CertificationsModal from "../../Component/Portfolio/Modals/Certifications";
import AccomplishmentsModal from "../../Component/Portfolio/Modals/Accomplishments";
import ProjectsModal from "../../Component/Portfolio/Modals/Projects";
import EducationModal from "../../Component/Portfolio/Modals/Education";
import { useDispatch, useSelector } from "react-redux";
import { update_portfolio_details } from "../../state/actions/portfolio";

function Portfolio() {
  const [Education, setEducation] = useState(false);
  const [Internship, setInternship] = useState(false);
  const [Certifications, setCertifications] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Accomplishments, setAccomplishments] = useState(false);
  const [Open, setOpen] = useState(false);

  const { firstName, lastName, email, phone, city, district, skills } =
    useSelector((state) => state.portfolioReducer.portfolioData);

  console.log({ firstName, lastName, email, phone, city, district });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    console.log(e.target.value, e.target.name);
    dispatch(update_portfolio_details(e.target.value, e.target.name));
  };

  const onDateChangeHandler = (date, fieldName) => {
    console.log(date, fieldName);
    dispatch(update_portfolio_details(date, fieldName));
  };

  useEffect(() => {
    if (
      Education ||
      Internship ||
      Certifications ||
      Projects ||
      Accomplishments
    )
      setOpen(true);
  }, [Education, Internship, Certifications, Projects, Accomplishments]);

  //   useEffect(() => {
  //     if (Open) {
  //     }
  //   }, [Open]);

  return (
    <div className={classes.Portfolio}>
      <div
        className={classes.Sidebar}
        style={{
          background: "#F8F9FA",
        }}
      >
        <SideBar />
      </div>
      <div className={classes.PortfolioContainer}>
        <div className={classes.HeaderContainer}>
          <h2>Portfolio</h2>
        </div>
        <form>
          <Box className={classes.TwoInputs}>
            <div>
              <p>First Name</p>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={firstName || ""}
                onChange={onChangeHandler}
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <p>Last Name</p>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={lastName || ""}
                onChange={onChangeHandler}
                placeholder="Enter Last Name"
              />
            </div>
          </Box>
          <Box className={classes.TwoInputs}>
            <div>
              <p>Email Address</p>
              <Input
                id="email"
                type="text"
                name="email"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={email || ""}
                onChange={onChangeHandler}
                placeholder="Enter your Email Address"
              />
            </div>
            <div>
              <p>Mobile Number</p>
              <Input
                id="phone"
                type="text"
                name="phone"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={phone || ""}
                onChange={onChangeHandler}
                placeholder="Enter your Mobile Number"
              />
            </div>
          </Box>
          <Box className={classes.TwoInputs}>
            <div>
              <p>City</p>
              <Input
                id="city"
                type="text"
                name="city"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={city || ""}
                onChange={onChangeHandler}
                placeholder="Enter the city you live in"
              />
            </div>
            <div>
              <p>District</p>
              <Input
                id="district"
                type="text"
                name="district"
                sx={{ width: 220, marginRight: 5 }}
                className={classes.Name}
                value={district || ""}
                onChange={onChangeHandler}
                placeholder="Enter the district you live in"
              />
            </div>
          </Box>
          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Education</p>
              <Button
                className={classes.AddBtn}
                onClick={() => setEducation(true)}
              >
                <BsPlusLg color="#fff" style={{ marginRight: 10 }} />
                Add Education
              </Button>
            </div>
          </Box>
          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Past Internships</p>
              <Button
                className={classes.AddBtn}
                onClick={() => setInternship(true)}
              >
                <BsPlusLg color="#fff" style={{ marginRight: 10 }} />
                Add Internships
              </Button>
            </div>
          </Box>
          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Courses/Certifications</p>
              <Button
                className={classes.AddBtn}
                //   id="firstName"
                //   type="text"
                //   name="firstName"
                //   sx={{ width: 220, marginRight: 5 }}
                //   className={classes.Name}
                //   // onChange={onChangeHandler}
                //   placeholder="Enter First Name"
                onClick={() => setCertifications(true)}
              >
                <BsPlusLg color="#fff" style={{ marginRight: 10 }} />
                Add certifications
              </Button>
            </div>
          </Box>

          <Box className={classes.OneInput}>
            <div>
              <p>Skills</p>
              <Input
                id="skills"
                type="text"
                name="skills"
                sx={{ width: 720, marginRight: 5 }}
                value={skills}
                className={classes.Name}
                onChange={onChangeHandler}
                placeholder="Add your skills"
              />
            </div>
          </Box>

          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Academia/Personal Projects</p>
              <Button
                className={classes.AddBtn}
                onClick={() => setProjects(true)}
              >
                <BsPlusLg color="#fff" style={{ marginRight: 10 }} />
                Add Projects
              </Button>
            </div>
          </Box>

          <Box className={`${classes.OneInput} ${classes.EducationInput}`}>
            <div>
              <p>Accomplishments/Other Details</p>
              <Button
                className={classes.AddBtn}
                onClick={() => setAccomplishments(true)}
              >
                <BsPlusLg color="#fff" style={{ marginRight: 10 }} />
                Add Other Details
              </Button>
            </div>
          </Box>
          {Open && (
            <Dialog
              open={Open}
              onClose={() => {
                setOpen(false);
                setEducation(false);
                setInternship(false);
                setCertifications(false);
                setProjects(false);
                setAccomplishments(false);
              }}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              BackdropProps={{
                style: { backgroundColor: "rgba(255,255,255,0.7)" },
              }}
              maxWidth="md"
            >
              <div className={classes.DialogContainer}>
                {Education && (
                  <EducationModal
                    setOpen={setOpen}
                    setEducation={setEducation}
                    onChangeHandler={onChangeHandler}
                    onDateChangeHandler={onDateChangeHandler}
                  />
                )}

                {Internship && (
                  <InternshipsModal
                    setOpen={setOpen}
                    setInternship={setInternship}
                    onChangeHandler={onChangeHandler}
                    onDateChangeHandler={onDateChangeHandler}
                  />
                )}

                {Certifications && (
                  <CertificationsModal
                    setOpen={setOpen}
                    setCertifications={setCertifications}
                    onChangeHandler={onChangeHandler}
                    onDateChangeHandler={onDateChangeHandler}
                  />
                )}
                {Projects && (
                  <ProjectsModal
                    setOpen={setOpen}
                    setProjects={setProjects}
                    onChangeHandler={onChangeHandler}
                    onDateChangeHandler={onDateChangeHandler}
                  />
                )}
                {Accomplishments && (
                  <AccomplishmentsModal
                    setOpen={setOpen}
                    setAccomplishments={setAccomplishments}
                    onChangeHandler={onChangeHandler}
                  />
                )}
              </div>
            </Dialog>
          )}
          <Button className={classes.SaveBtn}>Save</Button>
        </form>
      </div>
    </div>
  );
}

export default Portfolio;
