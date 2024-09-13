import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, session, placement) {
  return { name, session, placement };
}

const rows = [
  createData(
    "1",
    "2023 - 2024",
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <PictureAsPdfIcon
        sx={{
          marginRight: "5%",
          color: "rgb(30,144,255)",
          fontSize: "200%",
          cursor: "pointer",
        }}
      />
    </a>
  ),
  createData(
    "2",
    "2022 - 2023",
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <PictureAsPdfIcon
        sx={{
          marginRight: "5%",
          color: "rgb(30,144,255)",
          fontSize: "200%",
          cursor: "pointer",
        }}
      />
    </a>
  ),
  createData(
    "3",
    "2021 - 2022",
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <PictureAsPdfIcon
        sx={{
          marginRight: "5%",
          color: "rgb(30,144,255)",
          fontSize: "200%",
          cursor: "pointer",
        }}
      />
    </a>
  ),
  createData(
    "4",
    "2020 - 2021",
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
      <PictureAsPdfIcon
        sx={{
          marginRight: "5%",
          color: "rgb(30,144,255)",
          fontSize: "200%",
          cursor: "pointer",
        }}
      />
    </a>
  ),
];

export default function Tablestats() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              S. No.
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Year
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Pdf Link
            </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.session}</StyledTableCell>
              <StyledTableCell align="center">{row.placement}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
