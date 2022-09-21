// react
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// MUI
import { Button, Switch, Avatar } from "@mui/material";
// my
import { resetPassword, postStatus } from "../../../../../config/sendRequest";
import { StyledTableRow, StyledTableCell } from "../tableStyle";

/**
 * Public component.
 * Table header component that needs four parameters:
 * rows data, tips handler, the position index(begin and end) of slicing rows data.
 */
export default function TableBody({
  rowsData,
  setTipsParam,
  begin,
  end,
  type,
}) {
  const navigate = useNavigate();

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

  // the onClick event of the button of the content of the article
  const articleDetailedHandler = (aid) => {
    return () => {
      navigate(`/detailed/${aid}`);
    };
  };

  const renderUsers = () => {
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
          <StyledTableCell align="right" width="5%">
            <Avatar src={row.avatar} alt="avatar" />
          </StyledTableCell>
          <StyledTableCell align="right">{row.profile}</StyledTableCell>
          <StyledTableCell align="right">{row.created_time}</StyledTableCell>
          <StyledTableCell align="right" width="5%">
            <Switch
              defaultChecked={row.is_delete ? true : false}
              onChange={isDelHandler(row.uid)}
            />
          </StyledTableCell>
        </StyledTableRow>
      ));
  };

  const renderPosts = () => {
    return rowsData
      .slice(begin < 0 ? 0 : begin, end < 0 ? Infinity : end)
      .map((row) => (
        <StyledTableRow key={row.aid}>
          <StyledTableCell component="th" scope="row" width="5%">
            {row.aid}
          </StyledTableCell>
          <StyledTableCell align="right">{row.title}</StyledTableCell>
          <StyledTableCell align="right" width="5%">
            {row.author}
          </StyledTableCell>
          <StyledTableCell align="right">{row.introduction}</StyledTableCell>
          <StyledTableCell align="right" width="15%">
            <Button color="primary" onClick={articleDetailedHandler(row.aid)}>
              Detailed
            </Button>
          </StyledTableCell>
          <StyledTableCell align="right" width="5%">
            <Avatar src={row.cover} alt="cover" />
          </StyledTableCell>
          <StyledTableCell align="right">{row.written_in}</StyledTableCell>
          <StyledTableCell align="right" width="3%">
            <Switch defaultChecked={row.is_delete ? true : false} />
          </StyledTableCell>
          <StyledTableCell align="right" width="5%">
            {row.count}
          </StyledTableCell>
          <StyledTableCell align="right" width="5%">
            {row.view}
          </StyledTableCell>
          <StyledTableCell align="right" width="3%">
            <Switch defaultChecked={row.is_pin ? true : false} />
          </StyledTableCell>
        </StyledTableRow>
      ));
  };
  return type.indexOf("posts") !== -1 ? renderPosts() : renderUsers();
}

// declare the type for each props parameter
TableBody.propTypes = {
  rowsData: PropTypes.array.isRequired,
  setTipsParam: PropTypes.func.isRequired,
  begin: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
