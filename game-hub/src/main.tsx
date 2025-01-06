// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// Third party imports
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// App imports
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
