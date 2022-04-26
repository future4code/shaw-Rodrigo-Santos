import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";
import { Formik, Field, Form } from "formik";

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

const Select = styled.select`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  width: 30vh;
`;

const Input = styled.input`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  margin: 1rem;
  width: 30vh;
`;

const InputsFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  return (
    <center>
      <h1>ApplicationFormPage</h1>
      <Nav>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>
          Increver-se(Ação)
        </button>
      </Nav>
      <h2>Inscrever-se para uma viagem</h2>
      <>
        <p>Escolha uma viagem</p>
        <Select multiple value={"formasPagamento"} onChange={"formaPagamento"}>
          <option>Marte</option>
          <option>Lua</option>
          <option>Plutão</option>
          <option>Vênus</option>
        </Select>
        <InputsFather>
          <Input
            type="texto"
            size="50"
            placeholder="Nome"
            value={"Nome"}
            onChange={"Nome"}
          />
          <Input
            type="number"
            size="50"
            placeholder="Idade"
            value={"idade"}
            onChange={"idade"}
          />
          <Input
            type="texto"
            size="50"
            placeholder="Texto de candidatura"
            value={"Texto de candidatura"}
            onChange={"Texto de candidatura"}
          />
          <Input
            type="texto"
            size="50"
            placeholder="Profissão"
            value={"Profissão"}
            onChange={"Profissão"}
          />
        </InputsFather>
      </>
    </center>
  );
}
