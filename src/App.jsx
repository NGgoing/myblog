import { Grid } from "@mui/material";
import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";
import "./App.css";

function App() {
  return (
    <Grid className="myapp" container>
      {/* the left one fourth part */}
      <Grid className="left" item xs={1} sm={1} md={2} lg={2} xl={2}>
        <LeftPart />
      </Grid>

      {/* the right three fourth part */}
      <Grid
        className="right"
        item
        xs={10.5}
        sm={10.5}
        md={9.5}
        lg={9.5}
        xl={9.5}
      >
        <RightPart />
      </Grid>
    </Grid>
  );
}

export default App;
