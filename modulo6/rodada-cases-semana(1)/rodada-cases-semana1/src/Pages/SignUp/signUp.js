import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, DivPassword, InputMaterial, Main } from "./styled";

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
  //Para confirmar
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCheckPass, setShowCheckPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickedShowCheckPassword = () => {
    setShowCheckPass(!showCheckPass);
  };

  const onSubimitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  //Máscara de cpf regex para CPF
  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <Main>
      <p>Cadastrar</p>
      <form onSubmit={onSubimitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
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
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>

        <DivPassword>
          <InputMaterial
            // campo de confirmação
            // error={checkErrPass}
            // helperText={checkErrPass ? errPass : ""}
            id="outlined-adornment-password"
            label="Password"
            name={password}
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder="Mínimo 6 caracters"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
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
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>

        <ButtonStyled type="submit"> Entrar </ButtonStyled>
      </form>
    </Main>
  );
};
export default SignUp;
