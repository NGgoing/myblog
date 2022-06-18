import { Outlet } from "react-router-dom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export default () => {
  return (
    <>
      <Outlet />
      <Fab
        color="secondary"
        style={{ position: "fixed", right: "10%", bottom: "10%" }}
        href="./editor"
      >
        <EditIcon />
      </Fab>
    </>
  );
};
