import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.js";

const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" component={App} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));