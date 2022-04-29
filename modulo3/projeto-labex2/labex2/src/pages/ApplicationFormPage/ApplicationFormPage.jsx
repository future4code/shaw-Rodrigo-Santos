import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToApplicationFormPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";

const ApplicMain = styled.div`
  height: 80vh;
`;

const Nav = styled.div`
  button {
    color: #161616;
    font-size: 32px;
    font-weight: 500;
    padding: 16px 12px;
    /* border: #fff; */
    border-radius: 6px;
    /* background: ; */
    width: auto;
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(168, 13, 13, 0.19);
    cursor: pointer;
  }
  button:hover {
    /* background: #7869bf; */
    background: #f44926;
    color: white;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  font-size: 12px;
  border: solid 1px black;
  border-radius: 10px;
  color: black;
  padding: 7px 10px;
  font-weight: bold;
  margin: 1rem;
  width: 30vh;
`;

const InputsFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [trips, setTrips] = useState([]);
  const [body, setBody] = useState({});

  //chamando o custom hook useForm:
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  console.log(params);
  
  const upDateBody = (event) => {
    //evita de atualizar a tela após o submeter do formulário(bloquear o evento padrão)
    event.preventDefault();
    console.log({ form });
    return setBody(form);
  };

  const applyToTrip = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips/${params.id}/apply`,body)
      .then((res) => {
        console.log("cadastrado com sucesso", res.data);
        alert("cadastrado com sucesso", res.data.message);
      })
      .catch((err) => {
        console.log("Deu erro", err.response.data);
      });
  };

  useEffect(() => {
    applyToTrip();
  }, [body]);

  const pegaTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  //didUpdate
  useEffect(() => {
    pegaTrips();
  }, []);

  const tripChoice = trips.map((trip) => {
    return (
      <option key={trip.id} onChange={(e) => setTrips(e.target.value)}>
        {trip.name} id= {trip.id}
      </option>
    );
  });

  return (
    <center>
      <h1>Inscrever-se para uma viagem</h1>
      <ApplicMain>
        <h2>Escolha uma viagem</h2>

        <form onSubmit={upDateBody}>
          {/* <select>{tripChoice}</select> */}

          <InputsFather>
            <Input
              name="name"
              type="text"
              size="50"
              placeholder="Nome"
              value={form.name}
              /* onChange diretamente no input */
              /* onChange={(e) => setForm(e.target.value)} */
              onChange={onChange}
              required
            />
            <Input
              name="age"
              type="number"
              size="50"
              placeholder="Idade"
              value={form.age}
              onChange={onChange}
              required
            />
            <Input
              name="applicationText"
              type="text"
              size="50"
              placeholder="Texto de candidatura"
              value={form.applicationText}
              onChange={onChange}
              required
            />
            <Input
              name="profession"
              type="text"
              size="50"
              placeholder="Profissão"
              value={form.profession}
              onChange={onChange}
              required
            />
            <Input
              name="country"
              type="select"
              size="50"
              placeholder="Países"
              value={form.country}
              onChange={onChange}
              required
            />
          </InputsFather>
          <Nav>
            <button>Inscrever</button>
          </Nav>
        </form>
        <Nav>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </Nav>
      </ApplicMain>
    </center>
  );
}
