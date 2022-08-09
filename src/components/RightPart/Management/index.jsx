import { Grid } from "@mui/material";
import CenteredTabs from "./Tabs";
import CustomizedTables from "./Table";
import "./index.css";

/**
 * This component includes two part, article and user management
 */
export default () => {
  return (
    <Grid container direction="column" className="management">
      <Grid item xs={1} className="management-tabs">
        <CenteredTabs />
      </Grid>
      <Grid item xs={11} className="management-body">
        <CustomizedTables />
      </Grid>
    </Grid>
  );
};
