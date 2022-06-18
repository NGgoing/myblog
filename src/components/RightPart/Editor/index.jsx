import React from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";

export default function App() {
  return (
    <div className="container">
      <MDEditor.Markdown source="Hello Markdown!" />
    </div>
  );
}
