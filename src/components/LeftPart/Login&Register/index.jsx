import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./index.css";

export default () => {
  return (
    <div className="loginRegister">
      <Stack direction="column" spacing={2}>
        <Button variant="outlined" startIcon={<BorderColorIcon />}>
          Sign Up
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Sign In
        </Button>
      </Stack>
    </div>
  );
};
