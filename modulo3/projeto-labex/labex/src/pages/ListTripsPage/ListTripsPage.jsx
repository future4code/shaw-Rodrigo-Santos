import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";

const TripsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 80vh;
`;

const CardsFather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardViagemUser = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 2%;
  width: 30vh;
  background-color: white;
  color: black;
`;

const Nav = styled.div`
  button {
    margin: 16px;
    color: #161616;
    font-size: 32px;
    font-weight: 500;
    padding: 16px 12px;
    /* border: #fff; */
    border-radius: 6px;
    /* background: ; */
    width: auto;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  button:hover {
    /* background: #7869bf; */
    background: #f44926;
    color: white;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default function ListTripsPage() {
  const navigate = useNavigate();

  return (
    <center>
      <TripsList>
        <h1>ListTripsPage</h1>
        <Nav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          <button onClick={() => goToApplicationFormPage(navigate)}>
            Increver-se
          </button>
        </Nav>
        <h2>Lista de viagens</h2>
        <CardsFather>
          <CardViagemUser>
            CARD COM VIAGEM
            <p>Nome:</p>
            <p>Descrição:</p>
            <p>Planeta:</p>
            <p>Duração:</p>
            <p>Data:</p>
          </CardViagemUser>
          <CardViagemUser>
            CARD COM VIAGEM
            <p>Nome:</p>
            <p>Descrição:</p>
            <p>Planeta:</p>
            <p>Duração:</p>
            <p>Data:</p>
          </CardViagemUser>
          <CardViagemUser>
            CARD COM VIAGEM
            <p>Nome:</p>
            <p>Descrição:</p>
            <p>Planeta:</p>
            <p>Duração:</p>
            <p>Data:</p>
          </CardViagemUser>
        </CardsFather>
      </TripsList>
    </center>
  );
}
