import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { goToFeed } from "../../Routes/coordinator";
import { ButtonStyled, InputMaterial, Main } from "./styled";

const SignUpAdress = () => {
  const { form, onChange, clean } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complemente: "",
  });

  const navigate = useNavigate();

  const onSubmitFormAdress = (event) => {
    event.preventDefault();
    addAdress();
  };

  //CHAMANDO O ENDPOINT
  const addAdress = async () => {
    const token = localStorage.getItem("token");
    await axios
      .put(`${BASE_URL}/address`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate)
      })
      .catch((err) => {
        alert(err.response.data)
      });
  };

  return (
    <Main>
      <Header title={"Cadastrar endereço"} back/>
      
      <form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Número"}
          name="number"
          type={"text"}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complemente"
          type={"text"}
          placeholder={"Complemento"}
          variant="outlined"
          value={form.complemente}
          onChange={onChange}
        />

        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
      </form>
    </Main>
  );
};
export default SignUpAdress;
