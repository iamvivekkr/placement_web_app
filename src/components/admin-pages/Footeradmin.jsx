import { Box, Container, Paper, Typography } from "@mui/material";
import quLogo from "../asset/images/qulogo.png";

export default function Footeradmin() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        
        bottom: 0,
        width: "100%",
        backgroundColor:"#212529",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          {/* <div>
            <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
          </div> */}
          <img
            style={{
              height: "45px", // Set the height to your desired size
              width: "45px", // Maintain aspect ratio
              borderRadius: "50%", // Make the image round
              boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.75)", // Add a shadow
            }}
            src={quLogo}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="white">
            Copyright ©2024 Quantum University. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
