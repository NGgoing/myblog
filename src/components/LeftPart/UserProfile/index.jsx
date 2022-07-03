import { Avatar } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import "./index.css";

export default (props) => {
  return (
    <div className="userProfile">
      {/* the avatar part */}
      <div className="avatar">
        <Avatar
          alt="missing"
          sx={{ width: "80%", height: "80%" }}
          src={props.userinfo.avatar}
        >
          <PersonOutline
            sx={{ width: "100%", height: "100%" }}
            color="disabled"
          />
        </Avatar>
      </div>
      {/* the username part */}
      <div className="username">{props.userinfo.username}</div>
      {/* the tech tag part */}
      <div className="tag">
        <span>javascript</span>
      </div>
      {/* the intro part */}
      <div className="introduce">{props.userinfo.profile}</div>
    </div>
  );
};
