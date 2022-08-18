import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  getAllUser,
  postStatus,
  resetPassword,
} from "../../../../config/sendRequest";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

// funtionality related to table pagination
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// costomized cell style
const StyledTableCell = styled(TableCell)(({ theme, width }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      whiteSpace: "nowrap",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      wordBreak: "break-word",
    },
  };
});

// customized row style
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

/**
 * userinfo table, mainly copied from MUI
 * @returns user list table
 */
export default function CustomizedTables() {
  const [page, setPage] = React.useState(0); //control table pagination's page
  const [rowsPerPage, setRowsPerPage] = React.useState(10); // control table pagiantion's rowsPerPage
  const [rowsData, setRowsData] = React.useState([]); // save data requested from server
  const [tipsParam, setTipsParam] = React.useState({
    open: false,
    message: "nothing",
  }); // save parameters for snackbar
  const { open, message } = tipsParam;
  const navigate = useNavigate();

  /**
   * initialed rows data by requesting to server
   */
  React.useEffect(() => {
    getAllUser().then((response) => {
      if (response.data.status === 1) return navigate("/notauthorized");
      setRowsData(response.data.rows);
    });
  }, []);

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

  // reset button onClick Handler
  const resetPasswordHandler = (uid) => {
    return () => {
      resetPassword(uid).then((response) =>
        setTipsParam({ open: true, message: response.data.message })
      );
    };
  };

  // Switch onChange Handler
  const isDelHandler = (uid) => {
    return (event) => {
      postStatus({ uid, status: event.target.checked ? 1 : 0 }).then(
        (response) => {
          setTipsParam({ open: true, message: response.data.message });
        }
      );
    };
  };

  //table body, rendering rows' data here
  const mapRowsData = (begin, end) => {
    if (isEmpty(rowsData)) return null;
    return rowsData
      .slice(begin < 0 ? 0 : begin, end < 0 ? Infinity : end)
      .map((row) => (
        <StyledTableRow key={row.uid}>
          <StyledTableCell component="th" scope="row" width="5%">
            {row.uid}
          </StyledTableCell>
          <StyledTableCell align="right" width="12.5%">
            {row.username}
          </StyledTableCell>
          <StyledTableCell align="right" width="12.5%">
            <Button color="primary" onClick={resetPasswordHandler(row.uid)}>
              Reset
            </Button>
          </StyledTableCell>
          <StyledTableCell align="right" width="10%">
            <Avatar src={row.avatar} alt="avatar" />
          </StyledTableCell>
          <StyledTableCell align="right" width="20%">
            {row.profile}
          </StyledTableCell>
          <StyledTableCell align="right" width="30%">
            {row.created_time}
          </StyledTableCell>
          <StyledTableCell align="right" width="10%">
            <Switch
              defaultChecked={row.is_delete ? true : false}
              onChange={isDelHandler(row.uid)}
            />
          </StyledTableCell>
        </StyledTableRow>
      ));
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
          <TableHead sx={{ position: "sticky", top: 0, zIndex: 999 }}>
            <TableRow>
              <StyledTableCell>UID</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">
                Password
                <Tooltip title="default to 000000">
                  <QuestionMarkIcon color="white" fontSize="14" />
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell align="right">Avatar</StyledTableCell>
              <StyledTableCell align="right">Profile</StyledTableCell>
              <StyledTableCell align="right">Created In</StyledTableCell>
              <StyledTableCell align="right">IsDel</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {mapRowsData(page * rowsPerPage, (page + 1) * rowsPerPage)}
          </TableBody>

          <TableFooter
            sx={{ position: "sticky", bottom: 0, backgroundColor: "#ccc" }}
          >
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={0}
                width="100%"
                count={isEmpty(rowsData) ? 0 : rowsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

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
