import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default (props) => {
  const { pagHandler, count } = props;

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
