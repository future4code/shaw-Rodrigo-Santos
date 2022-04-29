import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToCreatTripPage } from "../../routes/coordinator";

const Nav = styled.div`
  background-color: black;

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

const CardsFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default function CreateTripPage() {
  const navigate = useNavigate();

  return (
   <center>
      <Nav>
      <h1>CreateTripPage</h1>

      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goBack(navigate)}>Criar(AÇÃO)</button>

      <CardsFather>
        <CardViagemUser>Criar uma viagem</CardViagemUser>
        <CardViagemUser>Nome</CardViagemUser>
        <CardViagemUser>Escolha uma viagem</CardViagemUser>
        <CardViagemUser>DD/MM/AA</CardViagemUser>
        <CardViagemUser>DESCRIÇÃO</CardViagemUser>
        <CardViagemUser>DURAÇÃO EM DIAS</CardViagemUser>
      </CardsFather>
    </Nav>
   </center>
  );
}
