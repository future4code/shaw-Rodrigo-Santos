import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header";
import homeBack from "../src/assets/homecover.png";
import logo from "../src/assets/logo.png";

const SiteLayout = styled.div`
  display: grid;
  grid-template-rows: 10% 50% 30% 10%;
`;

const FotoLogo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  background-image: url(${homeBack});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <SiteLayout>
        
        <header>
          <Header />
        </header>

        <main>
          <FotoLogo>
            <h2>Bem vindo</h2>
          </FotoLogo>
          <div>
            <h2>Aqui vão os botões e o card</h2>
          </div>
        </main>

        <footer>
         <h2> Aqui é o footer!</h2>
        </footer>
      </SiteLayout>
    </>
  );
}
