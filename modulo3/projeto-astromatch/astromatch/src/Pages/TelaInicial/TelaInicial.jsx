import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 80vh;
  width: 50vh;
  background-color: #eae8eb;
  text-align: center;
 
  border-radius: 8px;
  margin: 5px;
  box-shadow: 0px 0px 3px 0px #555;
  font-weight: bold;
  
  img {
    width: 100%;
    height: 60%;
  
    /* border-radius: 8px 8px 0 0; */
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: blue;
`;

const BotoesCardMain = styled.div`
  display: flex;
  padding: 3%;
  background-color: green
`;

const BotaoCard = styled.button`
  border-radius: 30px;
  padding: 1%;
  margin: 10%;
  height: 5vh;
  width: 8vh;
  border: none;
  background-color: white;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const BotaoHead = styled.button`
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  background-color: pink;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export default function TelaInicial(props) {
  return (
    <div>
      <CardContainer>
        <CardHeader>
          <BotaoHead onClick={props.goToMatch}> Ir para matches </BotaoHead>
          <h3>AstroMatch</h3>
          
        </CardHeader>

        <div>

        <img src={props.perfil.photo} />
        <p><strong>{props.perfil.name}</strong></p>
        <p><strong>Idade: {props.perfil.age}</strong></p>
        <p>Bio: {props.perfil.bio}</p>

        </div>
       
        <BotoesCardMain>
          <BotaoCard onClick={props.choosePersonTrue}>❤</BotaoCard>
          <BotaoCard onClick={props.choosePersonFalse}>X</BotaoCard>
        </BotoesCardMain>
      </CardContainer>
    </div>
  );
}
