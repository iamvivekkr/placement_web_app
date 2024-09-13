import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Cards from "./asset/Cards";



const Team = () => {
  
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            O̼u̼r̼ T̼e̼a̼m̼
          </Typography>

          <br />
          <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            Department Placement Head:-
          </Typography>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "14%" }}>
              <Cards name="Manoj Bansal (TPO)" img="/images/TPO.png" />
            </div>

            <div style={{ marginLeft: "5%" }}>
              <Cards name="Dr. Rishi Sharma" img="/images/rishi.png" />
            </div>

            <div style={{ marginLeft: "5%" }}>
              <Cards name="Dr. Pushpender Singh" img="/images/pushpendra.png" />
            </div>
          </div>
          <br />
          {/* <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            Department Placement Committee Conveners:-
          </Typography>
          <br /> */}
          {/* <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "3%" }}>
              <Cards name="Nadia Aleem" img="/images/nadia.png" />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards name="vivek" img="/images/nadia.png" />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
          </div> */}

          <br />
          {/* <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "3%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="vivek"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
          </div> */}
          <br />
          <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            Student Placement Coordinators:-
          </Typography>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "3%" }}>
              <Cards
                name="Vivek Kumar"
                img="https://iamvivekkr.github.io/vivek-portfolio/images/about-img.png"
              />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards name="Yash Jain" img="/images/yash.png" />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards name="Prem Kumar" img="/images/prem.png" />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Cards
                name="Jayesh Bhatt"
                img="/images/jayesh.png"
              />
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Team;
