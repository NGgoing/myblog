import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useRoutes } from "react-router-dom";
import MyFab from "./MyFab";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import routes from "../../config/routes";

/**
 * the right part(about three fourth) of the page
 */
export default () => {
  const [isEditor, setIsEditor] = useState(false); // true if the pathname is '/editor', otherwise false

  // todo:  how to detect pathname changed -- solved
  const { pathname } = useLocation(); //get the pathname from location

  const route = useRoutes(routes);

  // set the value of 'isEditor' when pathname changed
  useEffect(() => {
    setIsEditor(pathname == "/editor");
  }, [pathname]);

  return (
    <>
      {/* put matching components here */}
      {route}
      <Outlet />

      {/* my Fab button */}
      <MyFab color={isEditor ? "error" : "secondary"}>
        <Link
          to={isEditor ? "editor/save" : "editor"}
          style={{ color: "white" }}
          draggable="false"
        >
          {isEditor ? (
            <Tooltip title="save" placement="top">
              <SaveIcon />
            </Tooltip>
          ) : (
            <Tooltip title="edit" placement="top">
              <EditIcon />
            </Tooltip>
          )}
        </Link>
      </MyFab>
    </>
  );
};
