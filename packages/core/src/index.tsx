import React from "react";
import ReactDOM from "react-dom/client";
import { ColorButton } from "@core/ColorButton";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorButton />
    <App />
  </React.StrictMode>
);
