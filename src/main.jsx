import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-icons";
import "./styles/Global.css";
import Home from "./Pages/Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Home />
  </>
);
