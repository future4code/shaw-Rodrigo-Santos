import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import homeBack from "../../assets/homecover.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  goToListsTripsPage,
  goToAdminHomePage,
} from "../../routes/coordinator";

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

const Nav = styled.div`
  margin-top: 35%;
  margin-right: 50%;
  margin-left: 48px;
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

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <FotoLogo>
        <h2>Bem vindo</h2>
        <Nav>
          <button onClick={() => goToListsTripsPage(navigate)}>
            Ver viagens
          </button>

          <button onClick={() => goToAdminHomePage(navigate)}>
            Administar viagens
          </button>
        </Nav>
      </FotoLogo>
      
        
     
    </HomeLayout>
  );
}
