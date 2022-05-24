import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import { login } from "../../services/user";
import { CircularProgress } from "@mui/material";
import { InputStyle, PostButton, ButtonLetter } from "./styled";

const LoginForm = ({ setRightButtonText }) => {
  const { form, onChange, clear } = useForm({ email: "", password: "" });
  //Fazendo a função de loading ao carregar a API
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useUnprotectedProtectedPage();

  //Chamar aqui na requisição por props e no arquivo da requisição (user)
  const onSubimitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText, setIsLoading);
  };

  return (
    <center>
      <form onSubmit={onSubimitForm}>
      <InputStyle
        name="email"
        value={form.email}
        onChange={onChange}
        type={"email"}
        size="30"
        placeholder="E-mail*"
        required
      />
      <InputStyle
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        size="30"
        placeholder="Senha*"
        required
      />
      {/* Ternário nescessário para renderizar o loading */}
      <PostButton>
        <ButtonLetter>{isLoading ? <CircularProgress color={"inherit"} /> : <>Continuar</>}</ButtonLetter>
      </PostButton>
    </form>
    </center>
  );
};

export default LoginForm;
