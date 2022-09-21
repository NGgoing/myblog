// react
import { Outlet } from "react-router-dom";
// MUI
import { Grid } from "@mui/material";
// My
import CenteredTabs from "./Tabs";
import "./index.css";

/**
 * This component includes two part, user and article management
 */
export default () => {
  return (
    <Grid container direction="column" className="management">
      <Grid item xs={1} className="management-tabs">
        <CenteredTabs />
      </Grid>
      <Grid item xs={11} className="management-body">
        <Outlet />
      </Grid>
    </Grid>
  );
};
