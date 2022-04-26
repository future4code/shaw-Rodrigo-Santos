import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import homeBack from "../../assets/homecover.png"
import logo from "../../assets/logo.png";

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  

`

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

export default function HomePage() {
  

  return (
    <HomeLayout>
   <FotoLogo>
            <h2>Bem vindo</h2>
          </FotoLogo>
          <div>
            <h2>Aqui vão os botões e o card</h2>
          </div>
    </HomeLayout>
  );
}