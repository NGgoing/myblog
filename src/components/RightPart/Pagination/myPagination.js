import article from "../../../config/articleData";

/**
 * Calculate the count of the pagination and display the corresponding data for the selected tab
 * @param {number} perPage - indicate the items per page
 * @param {number} currentPage - the selected page currently， default to 1
 * @returns {object} include count and showCurrentData()
 */
function myPagination(perPage, currentPage = 1) {
  // calculate the count of the tabs page
  const count = Math.ceil(article.length / perPage);

  /**
   *
   * @param {number} cPage - the selected page currently
   * @returns {Array} the data of the selected tab
   */
  const showCurrentData = (cPage) => {
    const begin = (cPage - 1) * perPage;
    const end = begin + perPage;
    return article.slice(begin, end);
  };

  return {
    count,
    showCurrentData,
  };
}

export default myPagination;
