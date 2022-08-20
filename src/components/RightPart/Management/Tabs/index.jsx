import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/**
 * CenteredTabs Copied from MUI
 * @returns
 */
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0); // control the highlight tab's value
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === 0) navigate("/management/users");
    if (newValue === 1) navigate("/management/posts");
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Users" />
        <Tab label="Posts" />
      </Tabs>
    </Box>
  );
}
