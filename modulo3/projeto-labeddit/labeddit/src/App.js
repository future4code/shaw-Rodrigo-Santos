import React, { useState } from "react";
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const AppStyle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <div>
      <AppStyle>
        <BrowserRouter>
          <Header
            rightButtonText={rightButtonText}
            setRightButtonText={setRightButtonText}
          />
          <Router setRightButtonText={setRightButtonText} />
        </BrowserRouter>
      </AppStyle>
    </div>
  );
};

export default App;
