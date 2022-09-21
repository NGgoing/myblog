//react
import PropTypes from "prop-types";
// MUI
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tooltip } from "@mui/material";
import { QuestionMarkOutlined } from "@mui/icons-material";
// my component
import { StyledTableCell } from "../tableStyle";

/**
 * Public component.
 * Table header component that needs a parameter: the data of header column.
 */
export default function TableHeader({ headers }) {
  // render password header with tooltip
  const renderPassword = (item) => {
    return item === "Password" ? (
      <>
        {item}
        <Tooltip title="default to 000000">
          <QuestionMarkOutlined color="white" fontSize="14" />
        </Tooltip>
      </>
    ) : (
      item
    );
  };

  return (
    <TableHead sx={{ position: "sticky", top: 0, zIndex: 999 }}>
      <TableRow>
        {headers.map((item, index) => (
          <StyledTableCell key={item} align={index === 0 ? "inherit" : "right"}>
            {renderPassword(item)}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// declare headers a string array
TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
