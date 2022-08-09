import CancelIcon from "@mui/icons-material/Cancel";
import "./index.css";

/**
 * not found page
 */
export default () => {
  return (
    <div className="notfound">
      <div>
        <CancelIcon />
        <span>Not Found</span>
      </div>
    </div>
  );
};
