import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../config/sendRequest";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

/**
 * Login Modal;
 * css file is in the parent folder index.css, children share the css if they need a public layout
 */
export default (props) => {
  const { isShow, setIsShow, isLoginHandler, isValidHandler } = props;
  const [data, setData] = useState({}); // save the Username and Password
  const [showPassword, setShowPassword] = useState(false); //control the password iconButton's display
  const [errorText, setErrorText] = useState({}); //save the error message
  const navigate = useNavigate(); // redirect hook

  /**
   * Handler that sends the values to the Server
   */
  const loginInHandler = () => {
    //set error text if input nothing, otherwise send request to Server
    if (data.username && data.password) {
      //TODO: config the base URL -- solved
      login(data).then(
        (results) => {
          const { message } = results.data;
          //ok if username and password are both correct
          if (message === "ok") {
            setIsShow(false);
            localStorage.setItem("myToken", results.data.myAuth);
            localStorage.setItem("currUser", data.username);
            isLoginHandler();
            isValidHandler();
            navigate("/");
          } else setErrorText({ ...errorText, message });
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      setErrorText({
        ...errorText,
        message: "input the username and password",
      });
    }
  };

  /**
   * get the values of username and check it null or not
   * @param {*} event
   */
  const usernameHandler = (event) => {
    //set the error message and data if input noting, otherwise save
    if (event.target.value === "") {
      setErrorText({ ...errorText, username: "Username is required" });
      setData({ ...data, username: "" });
      return;
    }
    setErrorText({ ...errorText, username: "" });
    setData({ ...data, username: event.target.value });
  };

  /**
   * get the value of password and check it matches the rule or not
   * @param {*} event
   */
  const passwordHandler = (event) => {
    //set the error message and data if input noting, otherwise save
    if (event.target.value === "") {
      setErrorText({ ...errorText, password: "Password is required" });
      setData({ ...data, password: "" });
      return;
    }
    setErrorText({ ...errorText, password: "" });
    setData({ ...data, password: event.target.value });
  };

  return (
    <>
      {/* the login modal box */}
      <Modal
        open={isShow}
        onClose={() => setIsShow(!isShow)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className="modalBox">
          {/* Username */}
          <Typography component={"span"} sx={{ display: "block" }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              onBlur={usernameHandler}
              error={errorText.username ? true : false}
              helperText={errorText.username ? errorText.username : null}
            />
          </Typography>

          {/* Password */}
          <Typography component={"span"} sx={{ mt: 2, display: "block" }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="passwordLabel">Password</InputLabel>
              <OutlinedInput
                id="passwordLabel"
                type={showPassword ? "text" : "password"}
                onBlur={passwordHandler}
                error={errorText.password ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText error={errorText.password ? true : false}>
                {errorText.password ? errorText.password : null}
              </FormHelperText>
            </FormControl>
          </Typography>

          <Alert
            severity="error"
            sx={{ display: errorText.message ? "flex" : "none" }}
          >
            {errorText.message}
          </Alert>

          {/* Login In Button */}
          <Typography
            component={"span"}
            sx={{ mt: 2, display: "block", textAlign: "center" }}
          >
            <Button variant="outlined" onClick={loginInHandler}>
              Login in
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
