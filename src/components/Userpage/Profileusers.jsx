import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import Navbarusers from "./Navbarusers";
import { Box, Typography } from "@mui/material";



const UserProfile = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

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
            My Profile
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
