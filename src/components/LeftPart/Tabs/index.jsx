import { NavLink } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default () => {
  return (
    <div>
      <Tabs orientation="vertical" value={0}>
        <Tab label={<NavLink to="home">home</NavLink>} />
        <Tab label={<NavLink to="dashboard">dashboard</NavLink>} />
        <Tab label={<NavLink to="management">management</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
      </Tabs>
    </div>
  );
};
