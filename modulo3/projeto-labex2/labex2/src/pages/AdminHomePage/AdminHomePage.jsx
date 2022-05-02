import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  goToCreatTripPage,
  goToDetails,
} from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useState, useEffect } from "react";
import { FaBeer, FaTrashAlt } from 'react-icons/fa';

const AdmStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  

  @media (max-width: 800px) {
    height: 76%;
  }
`;

const CardsFather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardViagemUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  width: 40vh;
  border: 2px solid transparent;
  border-radius: 16px;
  box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 16%);
  margin: 1vh;
  font-weight: bold;
  
  
  @media (max-width: 375px) {
    height: 76%;
  }
`;

const Nav = styled.div`
  button {
    margin: 16px;
    color: #161616;
    font-size: 32px;
    font-weight: 500;
    padding: 16px 12px;
    border: #fff;
    border-radius: 6px;
    /* background: ; */
    width: auto;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(168, 13, 13, 0.19);
    cursor: pointer;
  }
  button:hover {
    background: #f7d36a;
    color: black;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const BotoesAdm = styled.div`
  display: flex;
  justify-content: center

`

const BotaoDel = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 3%;
  border: #fff;
  border-radius: 8px;
  width: 20%;
  
  cursor: pointer;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

`

export default function AdminHomePage() {
  useProtectedPage();

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const pegaTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips"
      )
      .then((res) => {
        /* console.log("sucesso", res.data); */
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips/${id}`,
    {
      headers: {
        auth: token,
      },
    }
    )
    .then((res)=>{
      alert("Viagem deletada!")
    })
    .catch((err)=>{
      console.log(err.res.data)
    })
  }

  const todasTrips = [...trips].map((trip) => {
    return (
      <CardViagemUser
        key={trip.id}
      >
      
        <p>{trip.name}</p>
        <p>Planeta: {trip.planet}</p>
        <p>{trip.description}</p>
        <p>Data: {trip.date}</p>
        <BotoesAdm>
        <BotaoDel  onClick={() => goToDetails(navigate, trip.id)}>Acessar</BotaoDel>
        <BotaoDel onClick={()=> deleteTrip(trip.id)}> <FaTrashAlt/> </BotaoDel>
        </BotoesAdm>
      </CardViagemUser>
    );
  });

    //didUpdate
    useEffect(() => {
      pegaTrips();
    }, [todasTrips]);
    
  return (
    <center>
      <AdmStyle>
        <h1>Painel Administrativo</h1>
        <Nav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          <button onClick={() => goToCreatTripPage(navigate)}>
            Criar Viagem
          </button>
          <button onClick={() => goBack(navigate)}>Logout(AÇÃO)</button>
        </Nav>

        <h2>Lista de viagens</h2>
        <CardsFather>{todasTrips}</CardsFather>
      </AdmStyle>
    </center>
  );
}
