import { ThemeProvider } from "@mui/material";
import Router from "./Routes/Router";
import React from "react";
import theme from "./Constants/theme";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./Context/Global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
