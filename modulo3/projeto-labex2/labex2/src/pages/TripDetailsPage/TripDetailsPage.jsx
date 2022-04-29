import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { goBack } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const DetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 375px) {
  }
`;

const CardCandidate = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 2%;
`;

const Aprovados = styled.div`

  border: 1px solid black;
  border-radius: 10px;
  margin: 2%;
`;

const BotaoBack = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 3%;
  border: 1px solid black;
  border-radius: 8px;

  width: 15%;
`;

export default function TripDetailsPage() {
  const params = useParams();
  useProtectedPage();
  const navigate = useNavigate();

  const [tripDetails, setTripDetails] = useState({});

  



  //mapeia os candidatos
  const listCandidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.candidates.map((candidate) => {
      /* return <CardCandidate key={candidate.id} candidate={candidate.name} />; */
      return (
        <CardCandidate key={candidate.id}>
          Nome: {candidate.name}
          <p>{candidate.applicationText}</p>
          <p>{candidate.age} anos</p>
          <p>País de origem: {candidate.country}</p>
          <p>Profissão: {candidate.profession}</p>
          <button onClick={() => decideCandidate(candidate.id, true)}>
            Aprovar
          </button>
          <button onClick={() => decideCandidate(candidate.id, false)}>
            Reprovar
          </button>
        </CardCandidate>
      );
    });

    //renderizar as informações de determinada trip
   useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        /* console.log(response.data); */
        setTripDetails(response.data);
      })
      .catch((error) => {
        console.log("Deu erro", error.response.data);
      });
  }, [listCandidates]);

    
  //mapeia os aprovados
  const listAprovados =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.approved.map((app) => {
      return (
        <Aprovados key={app.id}>
          <h3>Aprovados:</h3>
          <ul>
            <p>{app.name}</p>
          </ul>
        </Aprovados>
      );
    });
  //puxa o titula da viagem
  const titulo = tripDetails && tripDetails.trip && tripDetails.trip.planet;
  //decidir se o candidato vai ou não
  const decideCandidate = (candidateId, boolean) => {
    const body = { approve: boolean };
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips/${params.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Transação aceita!");
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
  
   
 

  return (
    <center>
      <DetailsStyle>
        <h1>Viagem para {titulo}</h1>
        <h2> Candidatos aprovados: {listAprovados}</h2>
        <h3> Candidatos: {listCandidates}</h3>
        <BotaoBack onClick={() => goBack(navigate)}>Voltar</BotaoBack>
      </DetailsStyle>
    </center>
  );
}
