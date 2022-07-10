import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getType, postItem } from "../../../../config/sendRequest";
import encodeImageFileAsURL from "../../../../utils/dataURL";
import { postArticle } from "../../../../config/sendRequest";
import MySnackBar from "../../../public/MySnackBar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import "./index.css";

/**
 * Fab save button
 */
export default () => {
  const { count } = useOutletContext(); // get count from editor
  const [data, setData] = useState({ count }); //save the form data
  const [open, setOpen] = useState(true); // control the status of Modal
  const [type, setType] = useState([]); // save the article type requested from Server
  const [typeValue, setTypeValue] = useState(0); // save the value of Selector
  const [errorText, setErrorText] = useState({}); // receive error message
  const navigate = useNavigate(); //redirect hook

  useEffect(() => {
    //   get type from Server
    getType().then((response) => {
      setType(response.data.data);
    });
    //get the content from localStorage
    setData({
      ...data,
      content: localStorage.getItem("vditorvditor"),
      author: localStorage.getItem("currUser"),
    });
  }, []);

  //take effect when modal are closed
  const handleModalClose = () => {
    setOpen(false);
    navigate("/editor");
  };

  //convert image to base64 and save it
  const coverHandler = (event) => {
    encodeImageFileAsURL(event.target).then((result) => {
      setData({ ...data, cover: result });
    });
  };

  //send data to Server
  const saveHandler = (event) => {
    let item = {
      username: localStorage.getItem("currUser"),
      tid: typeValue,
    };
    postArticle(data).then((response) => {
      const { status } = response.data;
      if (status === 1)
        // error occurs
        setErrorText({ ...errorText, msgFromServer: response.data.message });
      else
        postItem({ ...item, aid: response.data.insertId }).then((response) => {
          if (status === 1)
            // error occurs
            setErrorText({
              ...errorText,
              msgFromServer: response.data.message,
            });
        });
      navigate("/home");
    });
  };

  return (
    <>
      // the save modal box
      <Modal open={open} onClose={handleModalClose}>
        <Box className="modalBox">
          {/* title */}
          <Typography component={"span"} sx={{ display: "block" }}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              onBlur={(e) => setData({ ...data, title: e.target.value })}
            />
          </Typography>

          {/* summary */}
          <Typography component={"span"} sx={{ mt: 2, display: "block" }}>
            <TextField
              label="Summary"
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              onBlur={(e) => setData({ ...data, introduction: e.target.value })}
            />
          </Typography>

          {/* essay type */}
          <Typography component={"span"} sx={{ mt: 2, display: "block" }}>
            <FormControl fullWidth>
              <InputLabel id="type">Type</InputLabel>
              <Select
                id="type"
                value={typeValue}
                label="type"
                fullWidth
                onChange={(event) => setTypeValue(event.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                {type.map((item) => (
                  <MenuItem key={item.tid} value={item.tid}>
                    {item.type_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>

          {/* cover */}
          <Typography
            component={"span"}
            sx={{
              mt: 2,
              width: 140,
              height: 140,
              display: "inline-block",
            }}
          >
            <input
              id="uploadFile"
              accept="image/*"
              type="file"
              hidden
              onChange={coverHandler}
            />
            <label htmlFor="uploadFile">
              <Avatar
                variant="square"
                sx={{ cursor: "pointer", width: "100%", height: "100%" }}
              >
                <CameraAltIcon sx={{ width: "30%", height: "30%" }} />
              </Avatar>
            </label>
          </Typography>

          {/* save */}
          <Typography
            component={"span"}
            sx={{ mt: 4, display: "block", textAlign: "center" }}
          >
            <Button variant="outlined" onClick={saveHandler}>
              Save
            </Button>
          </Typography>

          {/* tips */}
          <Typography
            component={"span"}
            sx={{
              mt: 1,
              display: "block",
              textAlign: "center",
              color: "rgba(100, 100, 100, 0.5)",
              fontSize: 14,
            }}
          >
            It will take default values if not set
          </Typography>
        </Box>
      </Modal>
      {/* error tip */}
      <MySnackBar>{errorText.msgFromServer}</MySnackBar>
    </>
  );
};
