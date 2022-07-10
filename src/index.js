import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./components/RightPart/Home";
import Dashboard from "./components/RightPart/Dashboard";
import Management from "./components/RightPart/Management";
import Extend from "./components/RightPart/Extend";
import Editor from "./components/RightPart/Editor";
import Save from "./components/RightPart/Editor/Save";
import DetailedArticle from "./components/RightPart/DetailedArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/management" element={<Management />} />
        <Route path="/extend" element={<Extend />} />
        <Route path="/editor" element={<Editor />}>
          <Route path="save" element={<Save />} />
        </Route>
        <Route path="/detailed/:aid" element={<DetailedArticle />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
