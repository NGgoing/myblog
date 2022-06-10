import UserProfile from "./UserProfile";
import LoginRegister from "./Login&Register";
import MyTabs from "./Tabs";
import Footer from "./Footer";
import "./index.css";

export default () => {
  return (
    <div className="leftpart">
      {/* the UserProfile or Login/Register part */}
      <div className="flex7 userprofile">
        <UserProfile />
        {/* <LoginRegister /> */}
      </div>
      {/* the vertical tabs part */}
      <div className="flex22 tabs border">
        <MyTabs />
      </div>
      {/* the footer that can show some website info  */}
      <div className="flex1 footer border">
        <Footer />
      </div>
    </div>
  );
};
