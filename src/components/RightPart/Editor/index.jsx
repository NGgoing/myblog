import React, { useState, useEffect } from "react";
import Vditor from "vditor";
import "vditor/dist/index.css";

// rich editor
export default () => {
  const [vd, setVd] = useState(); //save the instance of Vditor

  useEffect(() => {
    /**
     * @see https://github.com/Vanessa219/vditor for more details
     */
    const vditor = new Vditor("vditor", {
      after: () => {
        setVd(vditor);
      },
      height: "100%",
      width: "100%",
      counter: {
        enable: true,
        type: "text",
      },
      cache: {
        enable: false,
      },
      tab: "\t",

      toolbar: [
        { name: "emoji", tipPosition: "w" },
        "|",
        { name: "upload", tipPosition: "s" },
        { name: "record", tipPosition: "s" },
        "|",
        { name: "undo", tipPosition: "s" },
        { name: "redo", tipPosition: "s" },
        "|",
        { name: "fullscreen", tipPosition: "s" },
        { name: "edit-mode", tipPosition: "s" },
        { name: "both", tipPosition: "s" },
        { name: "code-theme", tipPosition: "s" },
        { name: "content-theme", tipPosition: "s" },
        { name: "export", tipPosition: "s" },
        { name: "outline", tipPosition: "s" },
        { name: "preview", tipPosition: "s" },
        { name: "devtools", tipPosition: "s" },
        { name: "help", tipPosition: "s" },
      ],
      toolbarConfig: {
        pin: true,
      },
      upload: {
        //todo
      },
      outline: {
        position: "right",
      },
      input: (str) => {
        //todo: handler the data
        console.log(str);
      },
    });
  }, []);
  return <div id="vditor" className="vditor" />;
};
