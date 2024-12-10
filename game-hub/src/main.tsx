// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Third party imports
import { ChakraProvider } from "@chakra-ui/react";

// App imports
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
