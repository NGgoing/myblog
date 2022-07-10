import { useEffect, useState } from "react";
import { testToken, getCurrentUser } from "../../config/sendRequest";
import UserProfile from "./UserProfile";
import LoginRegister from "./Login&Register";
import MyTabs from "./Tabs";
import Footer from "./Footer";
import "./index.css";

/**
 * Left Part
 *
 * TODO -- add a skeleton between the transition LoginRegister and UserProfile - unsolved
 */
export default () => {
  const [userinfo, setUserinfo] = useState({}); // save user infomation
  const [isLogin, setIsLogin] = useState(false); // check user login or not
  const [isValid, setIsValid] = useState(false); // control the token valid or not

  /**
   * check the user login or not and get the status of token
   */
  useEffect(() => {
    if (localStorage.getItem("myToken")) {
      setIsLogin(true);
      testToken().then((result) => {
        if (result.data.message === "ok") setIsValid(true);
      });
    }
  }, []);

  /**
   * get user info if user has login, otherwise render Login component
   */
  useEffect(() => {
    if (isLogin && isValid) {
      const currUser = localStorage.getItem("currUser");
      getCurrentUser(currUser).then((result) => {
        if (result.data.message === "ok") setUserinfo(result.data);
      });
    }
  }, [isLogin, isValid]);

  return (
    <div className="leftpart">
      {/* the UserProfile or Login/Register part */}
      <div className="flex7 userprofile">
        {isLogin && isValid ? (
          <UserProfile userinfo={userinfo} />
        ) : (
          <LoginRegister
            isLoginHandler={() => setIsLogin(true)}
            isValidHandler={() => setIsValid(true)}
          />
        )}
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
