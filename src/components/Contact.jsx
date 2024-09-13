import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Contacttable from "./asset/Contacttable";

const Contact = () => {
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            C̼o̼n̼t̼a̼c̼t̼ U̼s̼
          </Typography>
          <br />
          <Contacttable />
        </Box>
      </Box>
    </>
  );
};

export default Contact;
