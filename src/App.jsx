import { Grid } from "@mui/material";
import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";
import AppBar from "./components/TopPart";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <>
      {/* the Top Part */}
      <div className="top">
        <AppBar />
      </div>

      <Grid className="myapp" container>
        {/* the left one fourth part */}
        <Grid className="left" item xs={1} sm={2} md={2} lg={2} xl={2}>
          <LeftPart />
        </Grid>

        {/* the right three fourth part */}
        <Grid
          className="right"
          item
          xs={10.5}
          sm={9.5}
          md={9.5}
          lg={9.5}
          xl={9.5}
        >
          <RightPart />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
