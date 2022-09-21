// react
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// MUI
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/**
 * CenteredTabs Copied from MUI
 * @returns
 */
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0); // control the highlight tab's value
  const navigate = useNavigate(); // redirect
  const { pathname } = useLocation(); // pathname

  // detect if the pathname have changed
  React.useEffect(() => {
    if (pathname.indexOf("users") !== -1) setValue(0);
    if (pathname.indexOf("posts") !== -1) setValue(1);
    if (pathname.indexOf("types") !== -1) setValue(2);
  }, [pathname]);

  // tab changed Handler
  const handleChange = (event, newValue) => {
    if (newValue === 0) navigate("/management/users");
    if (newValue === 1) navigate("/management/posts");
    if (newValue === 2) navigate("/management/types");
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Users" />
        <Tab label="Posts" />
        <Tab label="Types" />
      </Tabs>
    </Box>
  );
}
