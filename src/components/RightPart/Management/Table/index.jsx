//package related to react
import * as React from "react";
// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
// my
import TableFooter from "../Table/TableFooter";
import TableHeader from "./TableHeader";
import Users from "./Users";

// users tab talbe's header
const usersHeaders = [
  "UID",
  "Username",
  "Password",
  "Avatar",
  "Profile",
  "Created In",
  "IsDel",
];

/**
 * userinfo table, mainly copied from MUI
 * @returns user list table
 */
export default function CustomizedTables(props) {
  const [page, setPage] = React.useState(0); //control table pagination's page
  const [rowsPerPage, setRowsPerPage] = React.useState(10); // control table pagiantion's rowsPerPage
  const [rowsData, setRowsData] = React.useState([]); // save data requested from server
  const [tipsParam, setTipsParam] = React.useState({
    open: false,
    message: "nothing",
  }); // save parameters for snackbar
  const { open, message } = tipsParam;
  const begin = page * rowsPerPage; // the start position index of data
  const end = (page + 1) * rowsPerPage; // the end position index of data

  // table pagination, onPageChange Handler
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // table pagination, onRowsPerPageChange Handler
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //snackbar onClose Handler
  const handleClose = () => {
    setTipsParam({ open: false });
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: "60%",
          maxWidth: "100%",
          minHeight: "60%",
          maxHeight: "100%",
          position: "relative",
        }}
      >
        <Table aria-label="customized table">
          <TableHeader headers={usersHeaders} />

          <TableBody>
            <Users
              setRowsData={setRowsData}
              setTipsParam={setTipsParam}
              begin={begin}
              end={end}
            />
          </TableBody>

          <TableFooter
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsData={rowsData}
          />
        </Table>
      </TableContainer>

      {/* tips box */}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={message}
        autoHideDuration={2000}
        onClose={handleClose}
      />
    </>
  );
}
