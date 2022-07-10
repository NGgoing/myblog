import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

/**
 * copied from MUI
 * @param {*} param0
 * @returns
 */
export default function MySnackBar({ children }) {
  const [open, setOpen] = React.useState(false); //control the display of message box

  // put message box in the top center
  const style = {
    position: "fixed",
    top: "15%",
    left: "50%",
    display: "block",
    transform: "translateX(-50%)",
  };

  // detect if there are contents from parent component
  React.useEffect(() => {
    if (children) setOpen(true);
  }, [children]);

  //message box close handler
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //the close icon in message box
  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={children}
      action={action}
      style={style}
    />
  );
}
