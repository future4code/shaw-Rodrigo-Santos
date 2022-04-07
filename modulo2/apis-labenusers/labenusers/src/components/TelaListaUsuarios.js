import axios from "axios";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
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
    

`;

const CardUsuario = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  justify-content: space-between;
`;

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  //Para imprimir usuarios no momento em que abrir a tela
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, headers)
      .then((res) => {
        //guardar a lista no estado
        this.setState({
          usuarios: res.data,
        });
        //console.log(res.data);
      })
      .catch((error) => {
        //console.log(error.message);
        alert("Ocorreu um problema tente novamente");
      });
  };

  //coloca (id) como parâmetro para pegar apenas aquele user específico (vai no botão)
  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios.delete(url, headers)
    .then((res)=>{
        alert("Usuário(a) deletado(a) com sucesso!")
        //puxa a lista novamente e atualiza
        this.getAllUsers();
    })
    .catch((err)=>{
        alert("Ocorreu um erro, tente novamente")
    })
  };

  //como a função deleteUser usa um parâmetro (id) precisamos colocar uma arroy function no onClick
  render() {
    const renderUsuarioName = this.state.usuarios.map((usuario) => {
      return (
        <CardUsuario key={usuario.id}>
          {usuario.name}
          
          <button onClick={()=>this.deleteUser(usuario.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <Main>
        <h1>Labenusers</h1>

        <h2>Lista de usuarios</h2>

        <ul>{renderUsuarioName}</ul>

        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
      </Main>
    );
  }
}
export default TelaListaUsuarios;
