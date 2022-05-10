import React, { useState } from "react";
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <div>
      <div>
        <BrowserRouter>
          <Header
            rightButtonText={rightButtonText}
            setRightButtonText={setRightButtonText}
          />
          <Router setRightButtonText={setRightButtonText} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
