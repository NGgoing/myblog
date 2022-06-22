import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MyFab from "./MyFab";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

/**
 * the right part(about three fourth) of the page
 */
export default () => {
  const [isEditor, setIsEditor] = useState(false); // true if the pathname is '/editor', otherwise false

  // todo:  how to detect pathname changed -- solved
  const { pathname } = useLocation(); //get the pathname from location

  // set the value of 'isEditor' when pathname changed
  useEffect(() => {
    setIsEditor(pathname == "/editor");
  }, [pathname]);

  return (
    <>
      {/* put matching components here */}
      <Outlet />

      {/* my Fab button */}
      <MyFab color={isEditor ? "error" : "secondary"}>
        <Link to="editor" style={{ color: "white" }} draggable="false">
          {isEditor ? <SaveIcon /> : <EditIcon />}
        </Link>
      </MyFab>
    </>
  );
};
