import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/themes/default";
import Header from "../features/header/components/Header";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Canvas />
        <Properties />
      </>
    </ThemeProvider>
  );
}

export default App;
