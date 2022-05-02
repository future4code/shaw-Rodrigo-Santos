import React from "react";
import axios from "axios";
import styled from "styled-components";
import homeBack from "../../assets/homecover.png";
import homeMobile from "../../assets/homeMobile.png"
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToListsTripsPage, goToLoginPage } from "../../routes/coordinator";

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
  @media (max-width: 500px) {
    background-image: url(${homeMobile});
    background-size: contain;
  }
`;

const Nav = styled.div`
  margin-top: 35%;
  margin-right: 50%;
  margin-left: 1%;
  button {
    margin: 1%;
    color: #161616;
    font-size: 5vw;
    font-weight: 500;
    padding: 16px 12px;
    border: #fff;
    border-radius: 6px;
    /* background: ; */
    width: auto;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  button:hover {
    /* background: #7869bf; */
    background: #f7d36a;
    color: black;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 90%;
    margin-right: 50%;
    margin-left: 1%;
  }
`;

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <FotoLogo>
        <Nav>
          <button onClick={() => goToListsTripsPage(navigate)}>
            Ver viagens
          </button>

          <button onClick={() => goToLoginPage(navigate)}>Login</button>
        </Nav>
      </FotoLogo>
    </HomeLayout>
  );
}
