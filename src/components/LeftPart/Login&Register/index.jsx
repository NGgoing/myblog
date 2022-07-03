import { useState } from "react";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Login from "./Login";
import Register from "./Register";
import "./index.css";

/**
 * Login and Register Module
 */
export default (props) => {
  const [isLoginShow, setIsLoginShow] = useState(false); // control the login modal's display
  const [isRegShow, setIsRegShow] = useState(false); // control the register modal's display

  return (
    <>
      {/* Sign in and Sign up button */}
      <div className="loginRegister">
        <Stack direction="column" spacing={2}>
          {/* Register Button */}
          <Button
            variant="outlined"
            startIcon={<BorderColorIcon />}
            onClick={() => setIsRegShow(!isRegShow)}
          >
            Sign Up
          </Button>

          {/* Login Button */}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => setIsLoginShow(!isLoginShow)}
          >
            Sign In
          </Button>
        </Stack>
      </div>

      <Login
        isShow={isLoginShow}
        setIsShow={setIsLoginShow}
        isLoginHandler={props.isLoginHandler}
        isValidHandler={props.isValidHandler}
      />

      <Register
        isShow={isRegShow}
        setIsShow={setIsRegShow}
        isLoginHandler={props.isLoginHandler}
        isValidHandler={props.isValidHandler}
      />
    </>
  );
};
