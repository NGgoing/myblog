import { Grid } from "@mui/material";
import Search from "./Search";
import Pagination from "./Pagination";
import ArticleBox from "./ArticleBox";
import "./index.css";

export default () => {
  return (
    <Grid container direction="column" className="border rightpartContainer">
      <Grid item xs={1} className="search">
        <Search />
      </Grid>
      <Grid item xs={10} className="displayArea">
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
        <ArticleBox className="item" />
      </Grid>
      <Grid item xs={1}>
        <Pagination />
      </Grid>
    </Grid>
  );
};
