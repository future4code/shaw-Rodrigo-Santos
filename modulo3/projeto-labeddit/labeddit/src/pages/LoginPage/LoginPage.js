import React from "react";
import logo from "../../assets/images/login-logo.png";
import { LogoStyle, InputsContainer, SignUpButton, SigButtonLetter  } from "./styled";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";

const LoginPage = ({ setRightButtonText }) => {
  const navigate = useNavigate();

  return (
    <center>
      <div>
        <LogoStyle src={logo} />
      </div>
      <InputsContainer>
        <LoginForm setRightButtonText={setRightButtonText} />
        <SignUpButton onClick={() => goToSignUp(navigate)}><SigButtonLetter>Crie uma conta!</SigButtonLetter></SignUpButton>
      </InputsContainer>
    </center>
  );
};

export default LoginPage;
