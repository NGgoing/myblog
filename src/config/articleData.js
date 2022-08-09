import ArticleBox from "../components/RightPart/Home/ArticleBox";
import { getAllArticle } from "../config/sendRequest";

const cards = [];
/**
 * get the all articles
 * @returns the data of all articles
 */
function getArticle() {
  getAllArticle().then((response) => {
    response.data.articles.map((item) => {
      cards.push(<ArticleBox {...item} key={item.aid} />);
      // return <ArticleBox {...item} key={item.aid} />;
    });
  });
}
getArticle();
// need a unique key props -- solved
export default cards;
