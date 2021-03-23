import React from "react";
import { icons } from "./icons";

import ReactDOM from "react-dom";
import "./index.css";
import WeatherApp from "./components/weather-app";

React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);
