import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Content,
  Graphics,
  Header,
  ItemTable,
  Maincontainer,
  Table,
  TableHead,
  TableRows,
} from "./styled";

const Feed = () => {
  //chamando o hook useForm
  const { form, onChange, clean } = useForm({
    first_name: "",
    last_name: "",
    participation: null,
  });

  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [participTotal, setParticipTotal] = useState(0);
  const [valores, setValores] = useState([]);

  const onSubimitForm = (event) => {
    event.preventDefault();

    userCreator();
  };

  //abaixo chamando os endpoints
  const userCreator = async () => {
    await axios
      .post(`${BASE_URL}/user/register`, form)
      .then((res) => {
        console.log(res);
        setAtualiza(!atualiza);
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

  useEffect(() => {
    getUsers();

    let total = 0;

    listaUsers.forEach((item) => {
      total += Number(item.participation);
      setParticipTotal(total);

      const valoresUsers = listaUsers.map((valor) => {
        return valor.participation;
      });
      setValores(valoresUsers);
    });
  }, [atualiza]);

  // biblioteca
  ChartJS.register(ArcElement, Tooltip, Legend);
  const dataBase = {
    hidden: true,
    datasets: [
      {
        data: valores,
        backgroundColor: ["#14FF00", "rgba(188,188,188, 0.1)", "blue"],
        borderColor: ["#14FF00", "rgba(188,188,188, 0.1)", "blue"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Maincontainer>
      <Header>
        <form onSubmit={onSubimitForm}>
          <input
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

          <input
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

          <input
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

          <button type="submit"> Entrar </button>
        </form>
      </Header>

      <Content>
        <h1>DATA</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
        <Graphics>
          {listaUsers.length > 0 ? (
            <Table>
              <TableHead>
                <ItemTable> </ItemTable>
                <ItemTable>Primeiro nome</ItemTable>
                <ItemTable>Segundo nome</ItemTable>
                <ItemTable>Participação</ItemTable>
              </TableHead>
              {listaUsers.map((linha) => {
                return (
                  <TableRows>
                    <ItemTable>{linha.id}</ItemTable>
                    <ItemTable>{linha.first_name}</ItemTable>
                    <ItemTable>{linha.last_name}</ItemTable>
                    <ItemTable>{`${(
                      (Number(linha.participation) * 100) /
                      participTotal
                    ).toFixed(1)}%`}</ItemTable>
                  </TableRows>
                );
              })}
            </Table>
          ) : (
            <></>
          )}
          <div>
            <Doughnut data={dataBase}/>
          </div>
        </Graphics>
      </Content>
    </Maincontainer>
  );
};

export default Feed;
