/**
 * Calculate the count of the pagination and display the corresponding data for the selected tab
 * @param {Array} dataArr - the source of data, default to empty array
 * @param {number} perPage - indicate the items per page
 * @returns {object} include count and showCurrentData()
 */

const myPagination = (dataArr = [], perPage) => {
  // calculate the count of the tabs page
  const count = Math.ceil(dataArr.length / perPage) || 1;
  /**
   * @param {number} cPage - the selected page currently
   * @returns {Array} the data of the selected tab
   */
  const showCurrentData = (cPage = 1) => {
    const begin = (cPage - 1) * perPage;
    const end = begin + perPage;
    return dataArr.slice(begin, end);
  };

  return {
    count,
    showCurrentData,
  };
};

export default myPagination;

// import React, { useState } from "react";

// function usePagination(data, itemsPerPage) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const maxPage = Math.ceil(data.length / itemsPerPage);

//   function currentData() {
//     const begin = (currentPage - 1) * itemsPerPage;
//     const end = begin + itemsPerPage;
//     return data.slice(begin, end);
//   }

//   function next() {
//     setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
//   }

//   function prev() {
//     setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
//   }

//   function jump(page) {
//     const pageNumber = Math.max(1, page);
//     setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
//   }

//   return { next, prev, jump, currentData, currentPage, maxPage };
// }

// export default usePagination;
