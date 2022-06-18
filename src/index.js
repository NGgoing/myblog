import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./components/RightPart/Home";
import Dashboard from "./components/RightPart/Dashboard";
import Management from "./components/RightPart/Management";
import Extend from "./components/RightPart/Extend";
import Editor from "./components/RightPart/Editor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/management" element={<Management />} />
          <Route path="/extend" element={<Extend />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
