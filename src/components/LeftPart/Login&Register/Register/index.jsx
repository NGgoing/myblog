import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../../config/sendRequest";
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
 * Register Modal;
 * css file is in the parent folder index.css, children share the css if they need a public layout
 *
 * TODO -- user can register unlimitly - unsolved
 */
export default (props) => {
  const { isShow, setIsShow, isLoginHandler, isValidHandler } = props;
  const [data, setData] = useState({}); // save the Username and Password
  const [showPassword, setShowPassword] = useState(false); //control the password iconButton's display
  const [errorText, setErrorText] = useState({}); //save the error message
  const navigate = useNavigate(); // redirect hook
  const regUsername = /^[0-9A-Za-z]+$/; // regular expression to test username
  const regPassword1 = /[0-9]/; // regular expression to test password
  const regPassword2 = /[A-Z]/; // regular expression to test password
  const regPassword3 = /[a-z]/; // regular expression to test password
  const regPassword4 = /^[0-9A-Za-z]{6,15}$/; // regular expression to test password

  /**
   * Handler that sends the values to the Server
   */
  const registerHandler = () => {
    const { username, password, repPassword } = data;
    //set error text if input nothing, otherwise send request to Server
    if (username && password && repPassword) {
      if (password === repPassword) {
        //TODO: config the base URL -- solved
        register(data).then(
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
        // fix state doesn't update immediately
        setErrorText({
          ...errorText,
          repPassword: "the value isn't same as password",
        });
      }
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
    const { value } = event.target;
    //set the error message and data if input noting, otherwise save
    if (regUsername.test(value)) {
      setErrorText({
        ...errorText,
        username: "Username is required and don't use special charater",
      });
      setData({ ...data, username: "" });
      return;
    }
    setErrorText({ ...errorText, username: "" });
    setData({ ...data, username: value });
  };

  /**
   * get the value of password and check it match the rule or not
   * @param {*} event
   */
  const passwordHandler = (event) => {
    const { value } = event.target;
    const isMatch =
      regPassword1.test(value) &&
      regPassword2.test(value) &&
      regPassword3.test(value) &&
      regPassword4.test(value);
    if (isMatch) {
      setErrorText({ ...errorText, password: "" });
      setData({ ...data, password: value });
      return;
    }
    setErrorText({
      ...errorText,
      password: "6 to 15 charaters that include 0 - 9, A - Z, a - z",
    });
    setData({ ...data, password: "" });
  };

  /**
   * get the value of repeat password and check it match the password or not
   * @param {*} event
   */
  const repPasswordHandler = (event) => {
    const { value } = event.target;
    if (value !== "" && value === data.password) {
      setErrorText({ ...errorText, repPassword: "" });
      setData({ ...data, repPassword: value });
      return;
    }
    setErrorText({
      ...errorText,
      repPassword: "the value isn't same as password",
    });
    setData({ ...data, repPassword: "" });
  };

  return (
    <>
      {/* the register modal box */}
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
                // onChange={(event) =>
                //   setData({ ...data, password: event.target.value })
                // }
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

          {/* confirm password  */}
          <Typography component={"span"} sx={{ mt: 2, display: "block" }}>
            <TextField
              label="Repeat Password"
              variant="outlined"
              type="password"
              fullWidth
              onBlur={repPasswordHandler}
              error={errorText.repPassword ? true : false}
              helperText={errorText.repPassword ? errorText.repPassword : null}
            />
          </Typography>

          <Alert
            severity="error"
            sx={{ display: errorText.message ? "flex" : "none" }}
          >
            {errorText.message}
          </Alert>

          {/* Register Button */}
          <Typography
            component={"span"}
            sx={{ mt: 2, display: "block", textAlign: "center" }}
          >
            <Button variant="outlined" onClick={registerHandler}>
              Register
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
