import {Box, Typography } from '@mui/material';
import React from 'react'


const Rproc = (props) => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          overflow:"hidden",
          px: 3,
          py: 4,
          marginLeft: "30%",
          marginRight: "20%",
          borderRadius: "0.375rem",
          borderOpacity: "1",
          borderColor: "rgb(108,117,125)",
          boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
          borderWidth: "2px",
        }}
      >
        <Typography
          variant="h6"
          
          component="div"
          sx={{ textAlign: "center", fontSize: "20px" }}
        >
          {props.text}
        </Typography>
      </Box>
    </div>
  );
}

export default Rproc