import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, DivPassword, InputMaterial, Main } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { goToSignUpAdress } from "../../Routes/coordinator";

const SignUp = () => {
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errPass, setErrPass] = useState("");
  const [checkErrPass, setCheckErrPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCheckPass, setShowCheckPass] = useState(false);

  //Máscara de cpf regex para CPF
  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickedShowCheckPassword = () => {
    setShowCheckPass(!showCheckPass);
  };

  const onSubimitForm = (event) => {
    event.preventDefault();

    if (form.password === confirmPassword) {
      setCheckErrPass(false);
    } else {
      setCheckErrPass(true);
    }

    signUp(form, clean, Navigate);
  };

  //CHAMANDO O ENDPOINT
  const signUp = (body, clean, navigate) => {
    axios
      .post(`${BASE_URL}/signUp`, body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        alert("Cadastro realizado com sucesso");
        clean();
        goToSignUpAdress(navigate);
      })
      .catch((err) => {
        console.log("Erro", err.response);
        alert("Erro no cadastro!", err.data);
      });
  };

  return (
    <Main>
      <p>Cadastrar</p>
      <form onSubmit={onSubimitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          type={"text"}
          name="name"
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Email"}
          name="email"
          type={"email"}
          placeholder={"Digite seu email"}
          variant="outlined"
          value={form.email}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cpf"}
          name="cpf"
          type={"text"}
          placeholder={"Digite seu Cpf"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />

        <DivPassword>
          <InputMaterial
            error={checkErrPass}
            helperText={checkErrPass ? errPass : ""}
            id="outlined-adornment-password"
            label="Password"
            name={password}
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder="Mínimo 6 caracters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{
              minLength: 6,
              title: "A senha deve conter no mínimo 6 caracters",
            }}
            required
          />

          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
          </IconButton>
        </DivPassword>

        <DivPassword>
          <InputMaterial
            // campo de confirmação
            error={checkErrPass}
            helperText={
              checkErrPass ? "Deve ser a mesma senha da anterior" : ""
            }
            id="outlined-adornment-password"
            label="Confirme password"
            name={confirm}
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder="Confirmar"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            inputProps={{
              minLength: 6,
              title: "A senha deve ser a mesma que a anterior",
            }}
            required
          />

          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickedShowCheckPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
          </IconButton>
        </DivPassword>

        <ButtonStyled type="submit"> Entrar </ButtonStyled>
      </form>
    </Main>
  );
};
export default SignUp;

