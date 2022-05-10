import React from "react";
import logo from "../../assets/images/login-logo.png";
import { LogoStyle, InputsContainer } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <center>
      <div>
        <LogoStyle src={logo} />
      </div>
      <InputsContainer>
        <LoginForm />
        <button onClick={() => goToSignUp(navigate)}>Crie uma conta!</button>
      </InputsContainer>
    </center>
  );
};

export default LoginPage;
