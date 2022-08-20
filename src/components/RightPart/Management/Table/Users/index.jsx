// react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// my
import {
  getAllUser,
  resetPassword,
  postStatus,
} from "../../../../../config/sendRequest";
import { StyledTableRow, StyledTableCell } from "../tableStyle";
import { Button, Switch, Avatar } from "@mui/material";

// table header
const headers = [
  "UID",
  "Username",
  "Password",
  "Avatar",
  "Profile",
  "Created In",
  "IsDel",
];

export default (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { setRowsData, setTipsParam, begin, end } = props;

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

  useEffect(() => {
    getAllUser().then((response) => {
      if (response.data.status === 1) return navigate("/notauthorized");
      setRowsData(response.data.rows);
      setData(response.data.rows);
    });
  }, []);

  const renderData = () => {
    return data
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

  return renderData();
};
