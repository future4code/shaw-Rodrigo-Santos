import styled from "styled-components";

export const Main = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Perfil = styled.div`
  text-align: center;
  height: 5%;
  border-bottom: 1px solid black;
`;

export const Informações = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PerfilPessoa = styled.div`
  display: flex;
  height: 20%;
  justify-content: space-between;
  div:nyh-child(1) {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
`;

export const EnderecoPessoa = styled.div`
  height: 10%;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
`;

export const HistoricoCompras = styled.div`
  height: 70%;
`;
