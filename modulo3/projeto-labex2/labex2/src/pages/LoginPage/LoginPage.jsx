import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  @media (max-width: 480px) {
  }
`;

const Input = styled.input`
 font-size: 12px;
  border: #fff;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  margin: 1rem;
  width: 30vh;
  background-color: rgba(232,240,254,255);
`;

const InputsFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  //logica de fazer login da API
  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/login`,
        body
      )
      .then((response) => {
        console.log(`Deu certo, token:`, response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/adminHome", { replace: true });
      })
      .catch((error) => {
        console.log("Deu erro", error.response);
      });
  };

  return (
    <center>
      <LoginStyle>
        <InputsFather>
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
            pattern={"/^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i"}
            tittle={"Digite um email válido"}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputsFather>
        <Nav>
          <button onClick={onSubmitLogin}> Entrar </button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </Nav>
      </LoginStyle>
    </center>
  );
}
