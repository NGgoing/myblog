import { useState } from "react";
import { NavLink } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.css";

/**
 * the tabs in the left part
 */
export default () => {
  // it controls which tab is selected, default to 0 (first tab)
  const [value, setValue] = useState(0);

  /**
   * set new value to the state when the selected tab is changed
   */
  const tabsChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={tabsChangeHandler}
        variant="scrollable"
        className="tabs"
      >
        <Tab
          label={
            <NavLink className="tab" to="home">
              home
            </NavLink>
          }
          disableRipple
        />
        <Tab
          label={
            <NavLink className="tab" to="dashboard">
              dashboard
            </NavLink>
          }
          disableRipple
        />
        <Tab
          label={
            <NavLink className="tab" to="management">
              management
            </NavLink>
          }
          disableRipple
        />
        <Tab
          label={
            <NavLink className="tab" to="extend">
              extend
            </NavLink>
          }
          disableRipple
        />
      </Tabs>
    </>
  );
};
