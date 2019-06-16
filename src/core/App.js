import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import history from "./routing/history";
import theme from "./styles/themes/default";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Canvas />
        <Properties />
      </Router>
    </ThemeProvider>
  );
}

export default App;
