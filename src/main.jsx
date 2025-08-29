import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Stairs from "./components/Stairs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs>
       <App />
      </Stairs>
    </BrowserRouter>
  </React.StrictMode>
);
