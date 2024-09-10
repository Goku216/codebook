import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from "./components";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer
          closeButton={false}
          autoClose={3000}
          position="bottom-right"
        />
        <App />
      </FilterProvider>
    </Router>
  </StrictMode>
);
