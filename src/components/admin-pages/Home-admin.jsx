import { Box, Typography } from "@mui/material";
import React from "react";
import Footeradmin from "../admin-pages/Footeradmin";

const AdminHome = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Set height to occupy full viewport height
        }}
      >
        <Box component="main" sx={{ p: 3, color: "#d63384" }}>
          <Typography variant="h2" align="center">
            Welcome to Job Portal
          </Typography>
        </Box>
      </Box>
      <Footeradmin />
    </>
  );
};

export default AdminHome;
