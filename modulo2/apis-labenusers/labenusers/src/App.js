import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import Tela2 from "./components/Tela2";

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({
          usuarios: res.data
        })
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
        console.log(res);
        this.getAllUsers();
        alert(`O usuário ${body.name} foi criado!`);
        this.setState({
          inputNome: "",
          inputEmail: "",
        });
      })
      .catch((error) => {
        alert("Erro ao cadastrar");
      });
  };

  onChangeNomeValue = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  deleteUser = (id) => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}";
      
    axios
      .delete(url, headers)
      .then(

      )
    this.getAllUsers();
  };

  

  

  render() {
    const renderUsuarioName = this.state.usuarios.map((usuario) => {
      return (
        <li key={usuario.id}>{usuario.name}
        <button onClick={this.deleteUser}>delete</button>
        </li>
        
      );
    });

    return (
      <>
        <ul>{renderUsuarioName} TESTEEEEEEEEEEEEEEEEEE</ul>
        

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

        <div>
          <button onClick={this.creatUser}>Criar Usuário</button>
        </div>

      </>
    );
  }
}
export default App;
