import { Avatar } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import "./index.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3040/test").then((results) => {
      setData(results.data.data);
    });
  }, []);

  return (
    <div className="userProfile">
      {/* the avatar part */}
      <div className="avatar">
        <Avatar alt="missing" sx={{ width: "80%", height: "80%" }}>
          <PersonOutline
            sx={{ width: "100%", height: "100%" }}
            color="disabled"
          />
        </Avatar>
      </div>
      {/* the username part */}
      <div className="username">username</div>
      {/* the tech tag part */}
      <div className="tag">
        {data.map((values, index) => {
          return <span>{values.type_name}</span>;
        })}
      </div>
      {/* the intro part */}
      <div className="introduce">
        test...test...test...test...test...test...test...test...test...test...
      </div>
    </div>
  );
};
