import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";

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

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>ApplicationFormPage</h1>
      <Nav>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(navigate)}>
          Increver-se
        </button>
      </Nav>
    </>
  );
}
