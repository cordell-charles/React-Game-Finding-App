// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Third party imports
import { Provider } from "@/components/ui/provider"

// App imports
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
