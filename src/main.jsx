import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Css
import "./index.css";

// Components;
import App from "./App.jsx";

// React-router-dom;
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
