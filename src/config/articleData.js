import ArticleBox from "../components/RightPart/ArticleBox";
import { getAllArticle } from "../config/sendRequest";

const boxes = [];

getAllArticle().then((response) => {
  response.data.articles.map((item) => {
    boxes.push(<ArticleBox {...item} key={item.aid} />);
  });
});

/*
    the article box
 */

// need a unique key props -- solved
export default boxes;
