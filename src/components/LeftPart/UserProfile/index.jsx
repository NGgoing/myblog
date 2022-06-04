import { Avatar } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import "./index.css";

export default () => {
  return (
    <div className="userProfile">
      <div className="avatar">
        <Avatar alt="missing" sx={{ width: 128, height: 128 }}>
          <PersonOutline sx={{ fontSize: 128 }} color="disabled" />
        </Avatar>
      </div>
      <div className="username">username</div>
      <div className="tag">tag</div>
      <div className="introduce">introduce</div>
    </div>
  );
};
