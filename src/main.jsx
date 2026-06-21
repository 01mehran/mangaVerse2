import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Css;
import "./index.css";

// Components;
import App from "./App.jsx";

// Contexts Provider;
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import { FavoritesContextProvider } from "./contexts/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
