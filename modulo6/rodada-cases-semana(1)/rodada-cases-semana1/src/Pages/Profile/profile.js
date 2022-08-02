import React from "react";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToProfileEdit } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
  EnderecoPessoa,
  HistoricoCompras,
  Informações,
  Main,

  PerfilPessoa,
} from "./styled";



const Profile = () => {
  useProtectedPage();

  const person = useRequestData({}, `${BASE_URL}/profile`);
  const navigate = useNavigate();

  return (
    <div>
      <Header title={"Meu perfil"} />
      <Main>
        <Informações>
          <PerfilPessoa>
            <div>
              <p>Nome: {person[0].user && person[0].user.name}</p>
              <p>Email: {person[0].user && person[0].user.email}</p>
              <p>CPF: {person[0].user && person[0].user.cpf}</p>
            </div>
            <Button onClick={() => goToProfileEdit(navigate, person[0].user.id)}>Editar</Button>
          </PerfilPessoa>
          <EnderecoPessoa>
            <div>
              <h4>Endereço cadastrado</h4>
              <p>{person[0].user && person[0].user.address}</p>
            </div>
            <div >
            {/*   Editar */}
            </div>
          </EnderecoPessoa>
          <HistoricoCompras>Histórico de compras</HistoricoCompras>
        </Informações>
      </Main>
      <MenuBottom page={"profile"} />
    </div>
  );
};
export default Profile;
