import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/coordinator";



const CardViagemAdmin = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 20vw;
  height: 5vh;
  margin: 2%;
`

export default function AdminHomePage() {
  const navigate = useNavigate();
  

  return (
    <>
   <h1>AdminHomePage</h1>
   <button onClick={() => goBack(navigate)}>Voltar</button>
   <button onClick={() => goBack(navigate)}>Criar Viagem</button>
   <button onClick={() => goBack(navigate)}>Logout</button>
   <CardViagemAdmin>CARD COM VIAGEM</CardViagemAdmin>
   <CardViagemAdmin>CARD COM VIAGEM</CardViagemAdmin>
   <CardViagemAdmin>CARD COM VIAGEM</CardViagemAdmin>
    </>
  );
}