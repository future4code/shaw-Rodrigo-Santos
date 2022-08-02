import React, { useEffect, useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled, DivPassword, InputMaterial, Main } from "./styled";
import Header from "../../Components/Header/Header";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/url";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileEdit = () => {
  const person = useRequestData({}, `${BASE_URL}/profile`);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const getPerson = async () => {
    const response = await axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setCpf(response.data.user.cpf);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProfile = async () => {
    const body = {
      name,
      email,
      cpf,
    };

    await axios
      .put(`${BASE_URL}/profile`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getPerson();
    
  }, []);

  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const cpfMask = (value) => {
    if (person[0].user && cpf) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  const onSubimitForm = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <Main>
      <Header title={"Editar"} back />

      <form onSubmit={onSubimitForm}>
        <InputMaterial
          id="outlined-basic"
          type={"text"}
          name="name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputMaterial
          id="outlined-basic"
          name="email"
          type={"email"}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputMaterial
          id="outlined-basic"
          name="cpf"
          type={"text"}
          variant="outlined"
          value={cpfMask(cpf)}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <ButtonStyled type="submit"> Salvar </ButtonStyled>
      </form>
    </Main>
  );
};
export default ProfileEdit;
