import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

/* const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 32vw;
  height: 44vw;
  color: black;

`;

const ImagemCard = styled.img`
width: 100%;

` */

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  width: 33vh;
  background-color: #eae8eb;
  text-align: center;
  height: 50vh;
  border: 1px solid black;
  border-radius: 8px;
  margin: 5px;

  font-weight: bold;
  img {
    width: 100%;
    height: 60%;
    border-radius: 8px 8px 0 0;
  }

  /* :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  } */
`;

const BotoesCardMain = styled.div`
  display: flex;
  padding: 3%;
`;

const BotaoCard = styled.button`
  border-radius: 3px;
  padding: 6%;
  margin: 10%;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default function Card() {
  const [profilesList, setProfilesList] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProfilesList(res.data.profile);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <CardContainer>
        <img src={profilesList.photo} />
        <div>Nome: {profilesList.name}</div>
        <div>Bio: {profilesList.bio}</div>
        <div>Idade: {profilesList.age}</div>
        <BotoesCardMain>
          <BotaoCard>s2</BotaoCard>
          <BotaoCard>X</BotaoCard>
        </BotoesCardMain>
      </CardContainer>
      <></>
    </>
  );
}
