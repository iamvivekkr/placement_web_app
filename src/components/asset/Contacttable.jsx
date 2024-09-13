import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(name, session, placement, internship, department) {
  return { name, session, placement, internship, department };
}

const rows = [
  createData(
    "1",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "CIVIL ENGINEERING"
  ),
  createData(
    "2",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "COMPUTER SCIENCE AND ENGINEERING"
  ),
  createData(
    "3",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "CIVIL ENGINEERING"
  ),
  createData(
    "4",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "COMPUTER SCIENCE AND ENGINEERING"
  ),
  createData(
    "5",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "CIVIL ENGINEERING"
  ),
  createData(
    "6",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "COMPUTER SCIENCE AND ENGINEERING"
  ),
  createData(
    "7",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "COMPUTER SCIENCE AND ENGINEERING"
  ),
  createData(
    "8",
    "Dr. Amit Kumar",
    "1234567890",
    "amitkumar.ce@qu.edu.in",
    "COMPUTER SCIENCE AND ENGINEERING"
  ),
];

export default function Contacttable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              S. No.
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Placement Faculty Name
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Mobile No.
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Email
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
              Department
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
              <StyledTableCell align="center">{row.internship}</StyledTableCell>
              <StyledTableCell align="center">{row.department}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
