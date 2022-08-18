import PersonOffIcon from "@mui/icons-material/PersonOff";
import "./index.css";

/**
 * not found page
 */
export default () => {
  return (
    <div className="notauthorized">
      <div>
        <PersonOffIcon />
        <span>Not Authorized</span>
      </div>
    </div>
  );
};
