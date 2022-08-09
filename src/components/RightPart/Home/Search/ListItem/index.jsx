import { Link } from "react-router-dom";
import "./index.css";

export default (props) => {
  const { aid, title, content } = props;
  return (
    <div className="item">
      <Link to={`/detailed/${aid}`}>
        <div className="item-title">{title}</div>
        <div className="item-content">{content}</div>
      </Link>
    </div>
  );
};
