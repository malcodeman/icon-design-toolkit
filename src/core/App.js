import React from "react";
import { connect } from "react-redux";
import { Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import history from "./routing/history";
import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import Toolbar from "../features/toolbar/components/Toolbar";
import Canvas from "../features/canvas/components/Canvas";
import Properties from "../features/properties/components/Properties";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40vh auto;
  height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr 222px;
    grid-template-rows: initial;
  }
`;

function App(props) {
  function getTheme() {
    const { darkMode } = props;
    const theme = darkMode ? darkTheme : lightTheme;

    return theme;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <Router history={history}>
        <Grid>
          <Toolbar />
          <Canvas />
          <Properties />
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    darkMode: state.settings.darkMode
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
