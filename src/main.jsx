import React from "react";
import ReactDOM from "react-dom/client"; // Usa ReactDOM desde react-dom/client
import App from "./App";

import ReloadPrompt from "../ReloadPrompt";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el punto de entrada raíz
root.render(
  <React.StrictMode>
    <App />
    <ReloadPrompt/>
  </React.StrictMode>
);
