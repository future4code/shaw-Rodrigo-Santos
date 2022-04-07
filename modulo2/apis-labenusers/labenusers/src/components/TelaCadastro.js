import axios from "axios";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: column;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    align-items: center;
    padding: 5px;
    border: 1px solid gray;
    

`;

const Input = styled.div`
    display: flex;
    padding: 0.8%;
    border-radius: 2%;

`

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

class TelaCadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  creatUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        //console.log(res);
        alert(`O usuário(a) ${body.name} foi criado!`);

        //para limpar o input após o cadastro
        this.setState({
          inputName: "",
          inputEmail: "",
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  onChangeNomeValue = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <Main>
        <h1>Labenusers</h1>

        <h2>Página de Cadastro</h2>

        <h3>Criar usuário</h3>

        <div>
          <input
            placeholder="Nome:"
            value={this.state.inputName}
            onChange={this.onChangeNomeValue}
          />
        </div>
        <div>
          <input
            placeholder="Email:"
            value={this.state.inputEmail}
            onChange={this.onChangeEmailValue}
          />
        </div>

        <Input>
          <button onClick={this.creatUser}>Criar Usuário</button>
        </Input>

        <button onClick={this.props.irParaLista}>
          Ir Para Lista de Usuarios
        </button>
      </Main>
    );
  }
}
export default TelaCadastro;
