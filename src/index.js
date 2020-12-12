import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import applyPlugins from "./applyPlugins";
import "./index.css";

applyPlugins();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
