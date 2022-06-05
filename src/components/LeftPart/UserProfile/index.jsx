import { Avatar } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import "./index.css";

export default () => {
  return (
    <div className="userProfile">
      {/* the avatar part */}
      <div className="avatar">
        <Avatar alt="missing" sx={{ width: 128, height: 128 }}>
          <PersonOutline sx={{ fontSize: 128 }} color="disabled" />
        </Avatar>
      </div>
      {/* the username part */}
      <div className="username">username</div>
      {/* the tech tag part */}
      <div className="tag">
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>frontend</span>
        <span>backend</span>
        <span>fullstack</span>
      </div>
      {/* the intro part */}
      <div className="introduce">
        test...test...test...test...test...test...
      </div>
    </div>
  );
};
