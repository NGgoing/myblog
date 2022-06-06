import UserProfile from "./UserProfile";
import MyTabs from "./Tabs";
import Footer from "./Footer";
import "./index.css";

export default () => {
  return (
    <div className="leftpart">
      {/* the UserProfile part */}
      <div className="flex7 userprofile">
        <UserProfile />
      </div>
      {/* the vertical tabs part */}
      <div className="flex22 tabs">
        <MyTabs />
      </div>
      {/* the footer that can show some website info  */}
      <div className="flex1 footer">
        <Footer />
      </div>
    </div>
  );
};
