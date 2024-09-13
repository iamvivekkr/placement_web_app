import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Navbar from "./asset/Navbar";
import Tables from "./asset/Tables";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h3" noWrap component="div">
            H̼o̼m̼e̼
          </Typography>
          <br />
          <Typography variant="h5" sx={{ color: "rgb(129, 41, 114)" }}>
            The Training & Placement cell is mainly responsible for:-
          </Typography>

          <div style={{ display: "flex", width: "85%", marginTop: "1%" }}>
            {/* First box */}
            <Box
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                flex: "1",
                padding: "30px", // Adjust padding as needed
                border: "1px solid grey",
                borderRadius: "0.375rem",
                borderOpacity: "1",
                borderColor: "rgb(108,117,125)",
                boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                borderWidth: "2px",
              }}
            >
              <VerifiedUserIcon
                sx={{ marginRight: "5%", color: "rgb(25,135,84)" }}
              />
              Facilitating Industrial Training, mandatory for all UG (B.Tech.)
              curriculum.
            </Box>
            {/* Second box */}
            <Box
              component="section"
              sx={{
                flex: "1",
                alignItems: "center",
                display: "flex",
                padding: "30px",
                border: "1px solid grey",
                marginRight: "0.5rem",
                marginLeft: "1.5rem",
                borderRadius: "0.375rem",
                borderOpacity: "1",
                borderColor: "rgb(108,117,125)",
                boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                borderWidth: "2px",
              }}
            >
              <VerifiedUserIcon
                sx={{ marginRight: "5%", color: "rgb(25,135,84)" }}
              />
              Inviting Companies/ Institutions/ Organizations of repute for
              placements of both UG and PG students.
            </Box>
          </div>

          <Typography
            paragraph
            sx={{
              marginTop: "2%",
              textAlign: "justify",
              fontSize: "1rem",
              marginLeft: "1%",
              marginRight: "1%",
            }}
          >
            The T&P cell collaborates with leading organizations for setting up
            internship and training program of students.The Office interacts
            with many companies/industries in the country, of which nearly 200
            companies visit the campus for holding campus interviews. These
            organizations which approach the institute come under the purview
            of: Core Engineering Industries, IT & IT enabled services,
            Manufacturing, Consultancy Firms, Investment & Finance Companies,
            Management Organisations, R&D laboratories. Job offers, dates of
            interviews, selection of candidates etc. are announced through the
            Training & Placement Office.
          </Typography>

          <div style={{ display: "flex", width: "85%", marginTop: "2%" }}>
            {/* First box */}
            <Box
              component="section"
              sx={{
                display: "flex",
                alignItems: "center",
                flex: "1",
                padding: "18px",
                border: "1px solid grey",
                borderRadius: "0.375rem",
                borderOpacity: "1",
                borderColor: "rgb(108,117,125)",
                boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                borderWidth: "2px",
              }}
            >
              <VerifiedUserIcon
                sx={{
                  marginRight: "5%",
                  color: "rgb(25,135,84)",
                  fontSize: "200%",
                }}
              />
              <div>
                <h1 style={{ marginTop: "-4%", color: "rgb(129, 41, 114)" }}>
                  Placement
                </h1>
                <p style={{ marginTop: "-4%", wordSpacing: "0.1em" }}>
                  The placement season runs through the course of the year
                  commencing the first week of August through to March.
                </p>
              </div>
            </Box>
            {/* Second box */}
            <Box
              component="section"
              sx={{
                flex: "1",
                alignItems: "center",
                display: "flex",
                padding: "18px",
                border: "1px solid grey",
                marginRight: "0.5rem",
                marginLeft: "1.5rem",
                borderRadius: "0.375rem",
                borderOpacity: "1",
                borderColor: "rgb(108,117,125)",
                boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                borderWidth: "2px",
              }}
            >
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PictureAsPdfIcon
                  sx={{
                    marginRight: "5%",
                    color: "rgb(30,144,255)",
                    fontSize: "200%",
                    cursor: "pointer",
                  }}
                />
              </a>
              <div style={{ marginLeft: "4%", marginTop: "1%" }}>
                <h1 style={{ marginTop: "-4%", color: "rgb(129, 41, 114)" }}>
                  Placement Policy
                </h1>
                <p style={{ marginTop: "-4%", wordSpacing: "0.1em" }}>
                  This policy document details the organization and management
                  of placements and training opportunities. Click the PDF icon
                  to view the placement policy.
                </p>
              </div>
            </Box>
          </div>

          <Typography
            variant="h5"
            sx={{ color: "rgb(129, 41, 114)", marginTop: "2%" }}
          >
            Placement Procedure for Companies
          </Typography>

          <Typography
            paragraph
            sx={{
              marginTop: "1%",
              textAlign: "justify",
              fontSize: "1rem",
              marginLeft: "1%",
              marginRight: "1%",
            }}
          >
            The company should fill in the Job Form /Internship Form (INF) and
            submit it to the portal. Interested students can easily apply after
            sign-in. They can upload resume for better references. Company can
            manage all students who applied for the job/Internship. They can
            give rating to the students based on their interview performance.
            Students cannot apply after getting placed in 1 company.
          </Typography>
          <Divider />

          <Typography
            paragraph
            sx={{
              marginTop: "1%",
              textAlign: "justify",
              fontSize: "1rem",
              marginLeft: "1%",
              marginRight: "1%",
            }}
          >
            The company will be allotted slots and dates for conducting
            Pre-Placement Talk (PPT)/Written Test/Online Test, with a request to
            confirm the same by a specified date. On failing to do so, the
            allotted slot may be given to other companies on their request.
            Request for any change in the slot can be entertained subject to its
            availability.
          </Typography>
          <Divider />

          <Typography
            paragraph
            sx={{
              marginTop: "1%",
              textAlign: "justify",
              fontSize: "1rem",
              marginLeft: "1%",
              marginRight: "1%",
            }}
          >
            The company can also see the resumes of interested students and has
            the liberty to shortlist them before the beginning of the placement
            process.
          </Typography>
          <Divider />

          <Typography
            variant="h5"
            sx={{ color: "rgb(129, 41, 114)", marginTop: "2%" }}
          >
            Filers
          </Typography>

          <div
            style={{
              marginTop: "1%",
              marginLeft: "4%",
              marginRight: "4%",
              boxShadow: "0 .5rem 1rem rgba(0,0,0,.25)",
            }}
          >
            <Tables />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
