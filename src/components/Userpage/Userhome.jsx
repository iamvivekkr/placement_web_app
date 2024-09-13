import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import Navbarusers from "./Navbarusers";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")({
  position: "relative",
  borderRadius: "4px",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  border: "1px solid #812972",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginRight: "8px",
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Align items with space between
});



const StyledInputBase = styled(InputBase)({
  color: "inherit",
  padding: "8px 8px 8px 32px",
  width: "100%",
});

const Userhome = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    // Execute search functionality with searchTerm
    if (e.target.tagName === "svg") {
      // Execute search functionality with searchTerm
      console.log("Search term:", searchTerm);
      // Clear the search term
      setSearchTerm("");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "6%",
        }}
      >
        <Navbarusers />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h4"
            noWrap
            component="div"
            style={{ textAlign: "center" }}
          >
            Jobs
          </Typography>

          {/* Search component */}
          <Search onClick={handleSearch} style={{ width:"50%", marginLeft:"25%"}}>
            <StyledInputBase
              placeholder="Search Jobs"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <SearchIcon
              style={{
                cursor: "pointer",
                //marginLeft: "8px", // Add left margin to separate from input
                marginRight: "5%",
              }}
            />
          </Search>
          <br />
          <Paper
            //className={classes.jobTileOuter}
            style={{
              padding: "20px",
              margin: "10px 0",
              boxSizing: "border-box",
              width: "100%",
            }}
            elevation={3}
          >
            <Grid container>
              <Grid
                container
                item
                xs={9}
                spacing={0}
                direction="column"
                style={{ height: "140px" }}
              >
                <Grid item>
                  <Typography variant="h5">Web Developer</Typography>
                </Grid>

                <Grid item style={{ fontSize: "14px" }}>
                  Role : Work from Home
                </Grid>
                <Grid item style={{ fontSize: "14px" }}>
                  Salary : &#8377; 6000 per month
                </Grid>
                <Grid item style={{ fontSize: "14px" }}>
                  Duration : flexible
                </Grid>
                <Grid item style={{ fontSize: "14px" }}>
                  Posted By : Quantum Admin
                </Grid>
                <Grid item style={{ fontSize: "14px" }}>
                  Application Deadline : 22/04/2024
                </Grid>

                {/* <Grid item>
                  {job.skillsets.map((skill) => (
                    <Chip label={skill} style={{ marginRight: "2px" }} />
                  ))}
                </Grid> */}
                {/* <Grid item>
                  <Chip label="reactjs" style={{ marginRight: "2px" }} />
                </Grid> */}
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: "100%",
                    height: "140px",
                  }}
                  //className={classes.button}
                  // onClick={() => {
                  //   setOpen(true);
                  // }}
                  //disabled={userType() === "recruiter"}
                >
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Userhome;
