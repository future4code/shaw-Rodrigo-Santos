import React from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Router } from "./routes/Router";

const SiteLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    
      <SiteLayout>
        <header>
          <Header />
        </header>

        <main>
          <Router />
        </main>

        <footer>
          <Footer />
        </footer>
      </SiteLayout>
    
  );
}
