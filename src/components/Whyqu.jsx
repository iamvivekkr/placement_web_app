import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Cardwhy from "./asset/Cardwhy";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import Groups2Icon from "@mui/icons-material/Groups2";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";

const Whyqu = () => {
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            W̼h̼y̼ Q̼u̼?
          </Typography>
          <br />
          <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            Quantum at Glance:-
          </Typography>
          <br />
          <Box
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              px: 3,
              py: 4,
              marginLeft: "10%",
              marginRight: "10%",
              borderRadius: "0.375rem",
              borderOpacity: "1",
              borderColor: "rgb(108,117,125)",
              boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
              borderWidth: "2px",
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>1</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  The institute's impeccable teaching infrastructure, and
                  state-of-art laboratories offer the students to become one of
                  the brightest minds of the country.
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>2</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  R&D and Consultancy projects offered from DST, DST-SERB,
                  DST-FIST, UGC, TEQIP-II, ICSSR
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>3</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  More than 250 companies/ recruiters visited the institute
                  including Apple, JP Morgan Chase, DE Shaw, Salesforce,
                  Mercedes-Benz and many more.
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>4</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  The students are encouraged to take six months/ year long
                  internship in industries.
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>5</Avatar>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Alumni serving to almost all sectors such as Core, Government,
                  R&D, Consultancy, etc.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <Cardwhy
                title="Institute"
                name="An Institute of State Importance."
                img=<SchoolIcon />
                links="https://iqac.quantumuniversity.edu.in/media/NIRF-Ranking-Forms/University.pdf"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cardwhy
                title="Departments"
                name="Quantum University has 15+ departments."
                img=<ImportContactsIcon />
                links="https://www.quantumuniversity.edu.in/engineering"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cardwhy
                title="Students & Alumni"
                name="Quantum University brings out exceptional talents."
                img=<Groups2Icon />
                links="https://www.quantumuniversity.edu.in/life-at-quantum"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cardwhy
                title="Passion Program"
                name="A reason to enjoy life, a passion to follow."
                img=<EmojiEventsIcon />
                links="https://quantumuniversity.edu.in/passion-program"
              />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Whyqu;
