import axios from "axios";
import React from "react";
import Tela from "./components/Tela";

class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
  };


  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const headers = {
      headers: {
        Authorization: "rodrigo-santos-shaw",
      },
    };
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({
          usuarios: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  componentDidMount = () => {
    this.getAllUsers();
  }

  creatUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    const headers = {
      headers: {
        Authorization: "rodrigo-santos-shaw",
      },
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res)
        this.getAllUsers();
        alert(`O usuário ${body.name} foi criado!`);
        this.setState({
          inputEmail: "",
          inputName: "",
        });
      })
      .catch((error) => {
        alert(`Erro ao cadastrar`);
      });
  };

  deleteUser = (id) =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}"
    const headers = {
      headers: {
        Authorization: "rodrigo-santos-shaw",
      },
    }
    axios
      .delete(url, headers)
      this.getAllUsers()

    }

  onChangeNameValue = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  renderizaTela = () => {
    if (this.state.tela === 2) {
      return <Tela />;
    }
  };

  mudarTela = () => {
    if (this.state.tela === 1) {
      this.setState({ tela: this.state.tela + 1 });
    }
  };

  render() {
    const renderUsuario = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}>{usuario.inputName}</li>; <button/>
    });

    return (
      <>

        {this.renderizaTela()}


        <div>
          <input
            placeholder="Nome:"
            value={this.state.inputName}
            onChange={this.onChangeNameValue}
          />

          <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmailValue}
          />
        </div>

        <div>
          <button onClick={this.creatUser}>Criar Usuário</button>
        </div>

      
        <div>
          <button onClick={this.mudarTela}>Muda Tela</button>
        </div>

        {renderUsuario}
      </>
    );
  }
}export default App;