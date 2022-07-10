import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Search from "../Search";
import Pagination from "../Pagination";
import myPagination from "../Pagination/myPagination";
import ArticleBox from "../ArticleBox";
import { getAllArticle } from "../../../config/sendRequest";
import articleData from "../../../config/articleData";
import "./index.css";

export default () => {
  const [data, setData] = useState([]); //save the articles
  const myPag = myPagination(9);
  const { count, showCurrentData } = myPag;

  useEffect(() => {
    setData(showCurrentData(1));
  }, []);

  const pagHandler = (currentPage) => {
    setData(showCurrentData(currentPage));
  };

  return (
    <Grid container direction="column" className="border rightpartContainer">
      <Grid item xs={1} className="search">
        <Search />
      </Grid>
      <Grid item xs={10} className="displayArea">
        {articleData.map((item) => item)}
      </Grid>
      <Grid item xs={1} className="pagination">
        <Pagination count={count} pagHandler={pagHandler} />
      </Grid>
    </Grid>
  );
};
