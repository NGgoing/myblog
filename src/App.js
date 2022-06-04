import { Grid } from "@mui/material";
import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";
import "./App.css";

function App() {
  return (
    <Grid className="myapp" container>
      <Grid className="left" item xs={2} sm={2} md={3} lg={3} xl={3}>
        <LeftPart></LeftPart>
      </Grid>
      <Grid className="right" item xs={9.5} sm={9.5} md={8.5} lg={8.5} xl={8.5}>
        <RightPart></RightPart>
      </Grid>
    </Grid>
  );
}

export default App;
