import UserProfile from "./UserProfile";
import "./index.css";

export default () => {
  return (
    <div className="leftpart">
      <div className="flex7">
        <UserProfile></UserProfile>
      </div>
      <div className="flex22">body func</div>
      <div className="flex1">footer</div>
    </div>
  );
};
