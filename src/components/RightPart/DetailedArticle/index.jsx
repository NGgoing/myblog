import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { getSeletedArticle } from "../../../config/sendRequest";
import MySkeleton from "../../public/MySkeleton";
import PersonIcon from "@mui/icons-material/Person";
import FunctionsIcon from "@mui/icons-material/Functions";
import PushPinIcon from "@mui/icons-material/PushPin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import EditIcon from "@mui/icons-material/Edit";
import "github-markdown-css";
import "./index.css";

/**
 *  article display box
 */
export default (props) => {
  const { aid } = useParams(); // get the aid from url
  const [data, setData] = useState({}); //save the data from server
  const [loading, setLoading] = useState(true); // page is loading or not

  /**
   * get the selected article details from server and set data
   */
  useEffect(() => {
    getSeletedArticle(aid).then((response) => {
      const html = marked(response.data.columns.content);
      setData({ ...data, ...response.data.columns, content: html });
      setLoading(false);
    });
  }, []);

  return (
    <div className="markdown-body">
      {
        loading ? (
          <MySkeleton />
        ) : (
          <div>
            <div className="title">{data.title}</div>
            <div className="icon">
              {data.is_pin === 1 ? (
                <span>
                  <PushPinIcon />
                  Pined
                </span>
              ) : (
                ""
              )}
              <span>
                <PersonIcon />
                {data.author}
              </span>
              <span>
                <ChromeReaderModeIcon />
                {data.type_name}
              </span>
              <span>
                <EditIcon />
                {data.written_in}
              </span>
              <span>
                <VisibilityIcon />
                {data.view} views
              </span>
              <span>
                <FunctionsIcon />
                {data.count} words
              </span>
              <span>
                <AccessTimeIcon />
                ?? mins
              </span>
            </div>
            {/*  area to display article */}
            <div
              dangerouslySetInnerHTML={{ __html: data.content }}
              style={{ padding: "40px" }}
            ></div>
          </div>
        )
        //  need an outline -- unsolve
      }
    </div>
  );
};
