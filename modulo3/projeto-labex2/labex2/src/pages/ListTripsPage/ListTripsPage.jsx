import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";

const TripsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   height: 76vh; 

  @media (max-width: 500px) {
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
  width: 30vh;
  border: 1px solid black;
  margin: 2%;
  border: 2px solid transparent;
  border-radius: 16px;
  box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 16%);
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
    /* background: #7869bf; */
    background: #f7d36a;
    color: black;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const BotaoDel = styled.button`
  display: flex;
  justify-content: center;
  margin: 3%;
  border: #fff;
  border-radius: 8px;
  width: 30%;
  
  cursor: pointer;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

`

export default function ListTripsPage() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  const pegaTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips"
      )
      .then((res) => {
        console.log("sucesso", res.data);
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  //didUpdate
  useEffect(() => {
    pegaTrips();
  }, []);

  const todasTrips =
  [...trips].map((trip) => {
      return (
        <CardViagemUser key={trip.id}>
          <p>{trip.name}</p>
          <p>Planeta: {trip.planet}</p>
          <p>{trip.description}</p>
          <p>Data: {trip.date}</p>
          <BotaoDel
            onClick={() => goToApplicationFormPage(navigate, trip.id)}
          >Inscrever</BotaoDel>
        </CardViagemUser>
      );
    });

  return (
    <center>
      <TripsList>
        <Nav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
          {/*  <button onClick={() => goToApplicationFormPage(navigate)}>
            Increver-se
          </button> */}
        </Nav>

        <h2>Lista de viagens</h2>
        <CardsFather>{todasTrips}</CardsFather>
      </TripsList>
    </center>
  );
}
