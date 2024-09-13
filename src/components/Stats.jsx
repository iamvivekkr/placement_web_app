import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Tablestats from "./asset/Tablestats";

const Stats = () => {
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            P̼l̼a̼c̼e̼m̼e̼n̼t̼ S̼t̼a̼t̼i̼s̼t̼i̼c̼s̼
          </Typography>
          <br />
          <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            Placement Report:-
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
            <Tablestats />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Stats;
