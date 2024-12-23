import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";

import ReloadPrompt from "../ReloadPrompt";

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <App />
    <ReloadPrompt/>
  </React.StrictMode>
);
