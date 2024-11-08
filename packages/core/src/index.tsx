import React from "react";
import ReactDOM from "react-dom/client";
import { ColorButton } from "@core/ColorButton";
import VirtualizedList from "./Common/VirtualScroll/VirtualScroll";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorButton />
    <VirtualizedList />
  </React.StrictMode>
);
