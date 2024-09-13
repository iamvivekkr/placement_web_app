import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Rproc from "./asset/Rproc";
import Avatars from "./asset/Avatars";

const Recriutproc = () => {
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            R̼e̼c̼r̼u̼i̼t̼m̼e̼n̼t̼ P̼r̼o̼c̼e̼s̼s̼
          </Typography>
          <br />

          <Rproc text="Students register for the placement session" />
          <Avatars />
          <br />
          <Rproc text="P&T cell invites companies for internship and Placement" />
          <Avatars />
          <br />
          <Rproc text="Interested companies contact P&T cell and submit JNF/INF for the profiles offered" />
          <Avatars />
          <br />
          <Rproc text="Announcement of available job offer(s) as per JNF/INF by P&T cell" />
          <Avatars />
          <br />
          <Rproc text="Company registration by the interested students" />
          <Avatars />
          <br />
          <Rproc text="Eligibility check by P&T cell as per JNF requirements" />
          <Avatars />
          <br />
          <Rproc text="Notification of eligible student list" />
          <Avatars />
          <br />
          <Rproc text="Slot allotment to the company as per availability" />
          <Avatars />
          <br />
          <Rproc text="Selection process by the company" />
          <Avatars />
          <br />
          <Rproc text="Announcement of the selection results" />
        </Box>
      </Box>
    </>
  );
};

export default Recriutproc;
