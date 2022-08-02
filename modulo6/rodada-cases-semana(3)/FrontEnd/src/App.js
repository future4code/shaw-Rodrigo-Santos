import { ThemeProvider } from "@mui/material";
import Router from "./Routes/Router";
import React from "react";
import theme from "./Constants/theme";
import Feed from "./Pages/Feed/feed";

function App() {
  return (
    <div >
     <Feed/>
    </div>
  );
}

export default App;
