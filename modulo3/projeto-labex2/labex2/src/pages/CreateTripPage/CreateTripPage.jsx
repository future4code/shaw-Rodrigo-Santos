import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";

const CreateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 76vh;

  @media (max-width: 480px) {
    height: 76%;
  }
`;

const Input = styled.input`
  font-size: 12px;
  border: #fff;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  margin: 1rem;
  width: 30vh;
  background-color: rgba(232,240,254,255);
`;

const InputsFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  button {
    margin: 16px;
    color: #161616;
    font-size: 32px;
    font-weight: 500;
    padding: 16px 12px;
    border: #fff;
    border-radius: 6px;
    /* background: ; */
    width: auto;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(168, 13, 13, 0.19);
    cursor: pointer;
  }
  button:hover {
    background: #f7d36a;
    color: black;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Não está logado");
      navigate.push(`/login`);
    }
  }, []);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durantionInDays: "",
  });

  const [trips, setTrips] = useState([]);

  const creatTrip = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTrips(res.data);
        alert("Viagem criada com sucesso");
      })

      .catch((err) => {
        console.log(err.res.message);
        alert(err.res.message);
      });

    cleanFields();
  };

  //Data atual ou futura
  const today = new Date();
  const minDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)) +
    "-" +
    ("0" + today.getDate());

  return (
    <center>
      <CreateStyle>
        <h1>Crie uma viagem</h1>

        <form onSubmit={creatTrip}>
          <InputsFather>
            <Input
              name="name"
              type="text"
              size="50"
              placeholder="Título"
              value={form.name}
              /* onChange diretamente no input */
              /* onChange={(e) => setForm(e.target.value)} */
              onChange={onChange}
              required
              pattern={"^.{5,}$"}
              tittle={"O nome deve ter no mínimo 5 letras"}
            />
            <Input
              name="planet"
              type="text"
              size="50"
              placeholder="Planeta"
              value={form.planet}
              onChange={onChange}
              required
            />
            <Input
              name="date"
              type="date"
              size="50"
              placeholder="Data"
              value={form.date}
              onChange={onChange}
              required
              min={minDate}

            />
            <Input
              name="durationInDays"
              type="number"
              size="50"
              placeholder="Duração(Em dias)"
              value={form.durationInDays}
              onChange={onChange}
              required
              min={50}
            />
            <Input
              name="description"
              type="text"
              size="50"
              placeholder="Descrição"
              value={form.description}
              onChange={onChange}
              required
              pattern={"^.{30,}$"}
              title={"No mínimo 30 caracteres"}
            />
          </InputsFather>
          <Nav>
            <button>Inscrever</button>
          </Nav>
        </form>
        <Nav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </Nav>
      </CreateStyle>
    </center>
  );
}
