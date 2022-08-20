// MUI
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// my component
import { StyledTableCell } from "../tableStyle";
import { Tooltip } from "@mui/material";
import { QuestionMarkOutlined } from "@mui/icons-material";

/**
 * table header
 */
export default (props) => {
  const { headers } = props;

  return (
    <TableHead sx={{ position: "sticky", top: 0, zIndex: 999 }}>
      <TableRow>
        {headers.map((item, index) => (
          <StyledTableCell key={item} align={index === 0 ? "inherit" : "right"}>
            {item === "Password" ? (
              <>
                {item}
                <Tooltip title="default to 000000">
                  <QuestionMarkOutlined color="white" fontSize="14" />
                </Tooltip>
              </>
            ) : (
              item
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
