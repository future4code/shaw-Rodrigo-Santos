import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import { login } from "../../services/user";
import { CircularProgress } from "@mui/material";

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
    <form onSubmit={onSubimitForm}>
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        type={"email"}
        size="30"
        placeholder="E-mail*"
        required
      />
      <input
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        size="30"
        placeholder="Senha*"
        required
      />
      {/* Ternário nescessário para renderizar o loading */}
      <button>
        {isLoading ? <CircularProgress color={"inherit"} /> : <>Continuar</>}
      </button>
    </form>
  );
};

export default LoginForm;
