import React from 'react'
import { Avatar } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Avatars = () => {
  return (
    <>
      <Avatar
        sx={{
          marginLeft: "53%",
          marginTop: "2%",
          backgroundColor: "rgb(129, 41, 114)",
        }}
      >
        <ArrowDownwardIcon />
      </Avatar>
    </>
  );
}

export default Avatars