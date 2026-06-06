import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Css
import "./index.css";

// Components;
import App from "./App.jsx";

// React-router-dom;
import { BrowserRouter } from "react-router-dom";

// Theme Context Provider;
import { ThemeContextProvider } from "./ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
