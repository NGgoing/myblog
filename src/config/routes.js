import { Navigate } from "react-router-dom";
import Home from "../components/RightPart/Home";
import Dashboard from "../components/RightPart/Dashboard";
import Management from "../components/RightPart/Management";
import Users from "../components/RightPart/Management/Table/Users";
import Posts from "../components/RightPart/Management/Table/Posts";
import Extend from "../components/RightPart/Extend";
import Editor from "../components/RightPart/Editor";
import Save from "../components/RightPart/Editor/Save";
import DetailedArticle from "../components/RightPart/DetailedArticle";
import NotFound from "../components/public/NotFound";
import NotAuthorized from "../components/public/NotAuthorized";

/**
 * routing table
 */
export default [
  {
    path: "/",
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "management",
        element: <Management />,
        children: [
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "posts",
            element: <Posts />,
          },
        ],
      },
      {
        path: "extend",
        element: <Extend />,
      },
      {
        path: "editor",
        element: <Editor />,
        children: [
          {
            path: "save",
            element: <Save />,
          },
        ],
      },
      {
        path: "detailed/:aid",
        element: <DetailedArticle />,
      },
      {
        path: "notauthorized",
        element: <NotAuthorized />,
      },
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
