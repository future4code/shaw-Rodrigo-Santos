import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import homeBack from "../../assets/homecover.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
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


export default function HomePage() {
  const navigate = useNavigate()

  const goToListsTripsPage = () => {
    navigate("/listTrip")
  }
  return (
    <HomeLayout>
      <FotoLogo>
        <h2>Bem vindo</h2>
      </FotoLogo>
      <div>
        <button onClick={goToListsTripsPage}>Ver viagens</button>
      </div>
    </HomeLayout>
  );
}
