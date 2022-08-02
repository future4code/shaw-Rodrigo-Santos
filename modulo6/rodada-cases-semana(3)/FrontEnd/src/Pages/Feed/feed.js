import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";
import { useForm } from "../../Hooks/useForm";

const Feed = () => {
  const { form, onChange, clean } = useForm({
    first_name: "",
    last_name: "",
    participation: null,
  });

  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false)

  const onSubimitForm = (event) => {
    event.preventDefault();

    userCreator();
  };

  const userCreator = async () => {
    await axios
      .post(`${BASE_URL}/user/register`, form)
      .then((res) => {
        console.log(res);
        setAtualiza(!atualiza)
        clean();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getUsers = async () => {
    await axios
      .get(`${BASE_URL}/user/getUsers`)
      .then((res) => {
        console.log(res.data);
        setListaUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect (()=>{
    getUsers()
  }, [])

  return (
    <Main>
      <Form onSubmit={onSubimitForm}>
        <InputMaterial
          id="outlined-basic"
          label="first_name"
          name={"first_name"}
          type={"text"}
          variant="outlined"
          placeholder="Primeiro nome"
          value={form.first_name}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label="last_name"
          name={"last_name"}
          type={"text"}
          variant="outlined"
          placeholder="Sobrenome"
          value={form.last_name}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label="participation"
          name={"participation"}
          type={"text"}
          variant="outlined"
          placeholder="Valor da participação"
          value={Number(form.participation)}
          onChange={onChange}
          required
        />

        <ButtonStyled type="submit"> Entrar </ButtonStyled>
      </Form>
    </Main>
  );
};

export default Feed;
