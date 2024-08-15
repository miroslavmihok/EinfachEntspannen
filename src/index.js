import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#403d39" highlightColor="#727272">
      <App />
    </SkeletonTheme>
  </React.StrictMode>,
);
reportWebVitals();
