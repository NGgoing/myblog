import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Search from "./Search";
import articleCards from "../../../config/articleData";
import Pagination from "./Pagination";
import myPagination from "../../../utils/myPagination";
import "./index.css";

/**
 * TODO: pages are not shown in first time -- unsolved
 */
export default () => {
  const [data, setData] = useState([]); //save the articles
  const [isFirst, setIsFirst] = useState(true); // detect the data is loaded or not
  //myPignation(arg1, arg2) -- arg1: dataArr, itemsPerPage: number
  let myPag = myPagination(articleCards, 9);
  const { count, showCurrentData } = myPag;
  useEffect(() => {
    setData(showCurrentData());
  }, []);

  /**
   * pagination onChange Handler, receive the selected page and show corresponding data
   * @param {Number} currentPage the selected page, default to 1 (the first page)
   */
  const pagHandler = (currentPage) => {
    setData(showCurrentData(currentPage));
    setIsFirst(false);
  };

  return (
    <Grid container direction="column" className="rightpartContainer">
      {/* the search part */}
      <Grid item xs={1} className="search">
        <Search />
      </Grid>

      {/* the article card part */}
      <Grid item xs={10} className="displayArea">
        {isFirst ? showCurrentData() : data.map((item) => item)}
      </Grid>

      {/* the pagination part */}
      <Grid item xs={1} className="pagination">
        <Pagination count={count} pagHandler={pagHandler} />
      </Grid>
    </Grid>
  );
};
