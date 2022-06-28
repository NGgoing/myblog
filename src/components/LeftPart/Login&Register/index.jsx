import { useState } from "react";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
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
import axios from "axios";
import "./index.css";

/**
 * login and register
 */
export default () => {
  const [data, setData] = useState({}); // save the Username and Password
  const [isShow, setIsShow] = useState(false); // control the modal's display

  const [showPassword, setShowPassword] = useState(false); //control the password iconButton;s display

  //Handler that sets the modal display or not
  const modalShowingHandler = (open) => setIsShow(open);
  //Handler that gets the values of Username and Password
  const getUsername = (event) =>
    setData({ ...data, username: event.target.value });
  const getPassword = (event) =>
    setData({ ...data, password: event.target.value });
  //Handler that sends the values to the Server
  const loginInHandler = () => {
    //TODO: config the base URL
    axios.post("http://127.0.0.1:3040/private/login", data).then((results) => {
      console.log(results);
    });
  };
  //Handler that sets the password iconButton's display
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      {/* Sign in and Sign up button */}
      <div className="loginRegister">
        <Stack direction="column" spacing={2}>
          {/* Register Button */}
          <Button variant="outlined" startIcon={<BorderColorIcon />}>
            Sign Up
          </Button>

          {/* Login Button */}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => modalShowingHandler(true)}
          >
            Sign In
          </Button>
        </Stack>
      </div>

      {/* the modal box */}
      <Modal
        open={isShow}
        onClose={() => modalShowingHandler(false)}
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
              onChange={getUsername}
            />
          </Typography>

          {/* Password */}
          <Typography component={"span"} sx={{ mt: 2, display: "block" }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="passwordLabel">Password</InputLabel>
              <OutlinedInput
                id="passwordLabel"
                type={showPassword ? "text" : "password"}
                onChange={getPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Typography>

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
