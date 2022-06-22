import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import StateContextProvider from "./state";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
