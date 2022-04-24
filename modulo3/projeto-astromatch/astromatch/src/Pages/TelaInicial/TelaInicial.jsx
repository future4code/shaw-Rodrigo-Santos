import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98vh;
  width: 30vw;
  border-radius: 16px;
  margin: 5px;
  box-shadow: 2px 2px 5px 0px #555;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  background-color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ImgStyle = styled.img`
  width: 100%;
  height: 60vh;
`;

const ImgLogo = styled.img`
  height: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const CardHeader = styled.div`
  display: flex;
  height: 8%;
`;

const GoToButton = styled.button`
  align-self: center;
  width: 6em;
  height: 2em;
  margin: 4px;
  background-color: #f27244;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  border: 0;
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 2px 2px 5px 0px #555;
`;

const LikeButton = styled.button`
  align-self: center;
  width: 4em;
  height: 4em;
  margin-top: 4px;
  background-color: #f27244;
  cursor: pointer;
  border: 0;
  border-radius: 45px;
  transition: all 0.3s;
  box-shadow: 2px 2px 5px 0px #555;
  margin: 4%;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;



export default function TelaInicial(props) {
  return (
    <div>
      <CardContainer>
        <CardHeader>
          <ImgLogo src={logo}/>
          <GoToButton onClick={props.goToMatch}> matches </GoToButton>
        </CardHeader>

        <div>
          <ImgStyle src={props.perfil.photo} />
          <p>
            <strong>{props.perfil.name}</strong>
          </p>
          <p>
            <strong>Idade: {props.perfil.age}</strong>
          </p>
          <p>Bio: {props.perfil.bio}</p>
          <center>
            <LikeButton onClick={props.choosePersonTrue}>❤</LikeButton>
            <LikeButton onClick={props.choosePersonFalse}>X</LikeButton>
          </center>
        </div>
      </CardContainer>
    </div>
  );
}
