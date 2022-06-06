import { NavLink } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState(0);

  const tabsChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* unsolved: tabs can't scroll */}
      <Tabs
        orientation="vertical"
        value={value}
        onChange={tabsChangeHandler}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        <Tab label={<NavLink to="home">home</NavLink>} />
        <Tab label={<NavLink to="dashboard">dashboard</NavLink>} />
        <Tab label={<NavLink to="management">management</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="extend">extend</NavLink>} />
        <Tab label={<NavLink to="home">home</NavLink>} />
      </Tabs>
    </div>
  );
};
