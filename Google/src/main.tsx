import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./Context/ResultContextProvider";

createRoot(document.getElementById("root")!).render(
  <ResultContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ResultContextProvider>
);
