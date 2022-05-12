import { Checkbox } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { InputStyle, InputFather } from "./styled";

const SignUpForm = ({ setRightButtonText }) => {
  const { form, onChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useUnprotectedProtectedPage();

  const onSubimitForm = (event) => {
    console.log(form);
    event.preventDefault();
    signUp(form, clear, navigate, setRightButtonText);
  };

  return (
    <form onSubmit={onSubimitForm}>
      <InputFather>
        <InputStyle
          name="username"
          value={form.username}
          onChange={onChange}
          type="text"
          size="30"
          placeholder="Nome de usuário"
          required
        />
        <InputStyle
          name="email"
          value={form.email}
          onChange={onChange}
          type={"email"}
          size="30"
          placeholder="E-mail"
          required
        />
        <InputStyle
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          size="30"
          placeholder="Senha"
          pattern={"[^ ]{8,16}"}
          title={"Sua senha deve ter no mínimo 8 caracteres"}
          required
        />
      </InputFather>
      <h4>
        Ao continuar, você concorda com o nosso Contrato de usuário e nossa
        política de privacidade
      </h4>
      <>
        <Checkbox />{" "}
        <p>Eu concordo em receber email´s e coisas legais no Labeddit</p>
      </>

      <button>Cadastrar</button>
    </form>
  );
};

export default SignUpForm;
