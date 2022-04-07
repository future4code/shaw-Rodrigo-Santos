import React from "react";
import axios from "axios";
import styled from "styled-components";
import CriarPlaylist from "./pages/CriarPlaylist";
import ListaPlaylist from "./pages/ListaPlaylist";
import DetalhePlay from "./pages/DetalhePlay";

export default class App extends React.Component {
  state = {
    telaAtual: "criar",
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlaylist />;
      case "lista":
        return <ListaPlaylist />;
      case "detalhe":
        return <DetalhePlay />;
      default:
        return <CriarPlaylist />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <>
        <button onClick={() => this.mudaTela("criar")}>Home</button>
        <button onClick={() => this.mudaTela("lista")}>
          Lista de Playlists
        </button>
        <button onClick={() => this.mudaTela("detalhe")}>
          Detalhes da Playlist
        </button>

        {this.escolherTela()}
      </>
    );
  }
}
