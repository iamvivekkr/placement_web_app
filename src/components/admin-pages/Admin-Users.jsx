import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

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

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "1%",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
            {/* {users.map((curUser, index) => {
            return <h2 key={index}> {curUser.username}</h2>
          })} */}

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
                      Name
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
                      Email
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ fontSize: "17px" }}>
                      Mobile No.
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((curUser, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {curUser.username}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {curUser.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {curUser.phone}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          
        </Box>
      </Box>
    </>
  );
};
