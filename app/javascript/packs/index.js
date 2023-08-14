import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement); // Use createRoot from the correct location
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
