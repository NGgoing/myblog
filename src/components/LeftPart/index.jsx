import UserProfile from "./UserProfile";
import MyTabs from "./Tabs";
import "./index.css";

export default () => {
  return (
    <div className="leftpart">
      {/* the UserProfile part */}
      <div className="flex7">
        <UserProfile />
      </div>
      {/* the vertical tabs part */}
      <div className="flex22 border">
        <MyTabs />
      </div>
      {/* the footer that can show some website info  */}
      <div className="flex1">footer</div>
    </div>
  );
};
