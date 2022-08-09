import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * Require two attributes, onChange Handler and count, when using this component
 */
export default (props) => {
  // get props from Home component -- onChange Handler(pagHandler), count(count)
  const { pagHandler, count } = props;

  //pagination onChange Handler
  const tabChangedHandler = (event, page) => {
    pagHandler(page);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
      }}
    >
      <Pagination
        count={count}
        size="large"
        onChange={tabChangedHandler}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
