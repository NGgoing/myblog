import { useEffect, useRef, useState } from "react";
import { isEmpty } from "lodash";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { getArticleByQueryString } from "../../../../config/sendRequest";
import ListItem from "./ListItem";
import NotFound from "../../../public/NotFound";
import "./index.css";

/**
 * Search Part
 */
export default () => {
  const [data, setData] = useState([]); // save the data from request
  const [isFocus, setIsFocus] = useState(false); // detect the textfield is focused or not
  const clearBtnRef = useRef(); // connect the textfield

  //add a listener to document to control the search list's display
  useEffect(() => {
    window.addEventListener("click", () => {
      setIsFocus(false);
    });
  }, []);

  //textfield onClick Handler, show the search result box
  const onClickHandler = (event) => {
    event.stopPropagation();
    setIsFocus(true);
  };

  //textfield onChange Handler, getting data from the server
  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (isEmpty(value)) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
      getArticleByQueryString(value).then((response) => {
        setData(response.data.results);
      });
    }
  };

  //IconButton onClick Handler, clearing the input value
  const clearTextHandler = () => (clearBtnRef.current.value = null);

  //display the search list to the corresponding box
  function showSearchList() {
    return isFocus ? (
      !isEmpty(data) ? (
        data.map((item) => <ListItem key={item.aid} {...item} />)
      ) : (
        <div className="item" style={{ margin: "10px 20px" }}>
          <NotFound />
        </div>
      )
    ) : null;
  }

  return (
    <div className="search-container">
      {/* search input */}
      <TextField
        fullWidth
        label="Type the keyword you wanna search"
        autoComplete="off"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={clearTextHandler}>
                {isFocus ? <CloseIcon /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={onChangeHandler}
        onClick={onClickHandler}
        inputRef={clearBtnRef}
      />

      {/* search result */}
      <div className="result-list">{showSearchList()}</div>
    </div>
  );
};
