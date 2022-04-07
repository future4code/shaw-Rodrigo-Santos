import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import TelaListaUsuarios from "./components/TelaListaUsuarios";
import TelaCadastro from "./components/TelaCadastro";

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

class App extends React.Component {
  //Troca de telas
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Erro! Página não encontrada :( </div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return (
      <>
        <div>{this.escolheTela()}</div>
      </>
    );
  }
}
export default App;
