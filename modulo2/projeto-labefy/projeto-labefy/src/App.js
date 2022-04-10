import React from "react";
import axios from "axios";
import styled from "styled-components";
import CriarPlaylist from "./pages/CriarPlaylist";
import ListaPlaylist from "./pages/ListaPlaylist";
import DetalhePlay from "./pages/DetalhePlay";

const TelaButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #121212;
`

export default class App extends React.Component {
  state = {
    telaAtual: "criar",
    clickedPlaylistId: "",
  };

  goToDetalhePlay = (id) => {
    this.setState({ telaAtual: "detalhe", clickedPlaylistId: id });
  };

  goToPlaylistPage = () => {
    this.setState({ telaAtual: "lista", clickedPlaylistId: "" });
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlaylist />;
      case "lista":
        return <ListaPlaylist goToDetalhePlay={this.goToDetalhePlay} />;
      case "detalhe":
        return <DetalhePlay id={this.state.clickedPlaylistId} goToPlaylistPage={this.goToPlaylistPage} />;
      default:
        return <CriarPlaylist goToDetalhePlay={this.goToDetalhePlay} />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  render() {
    return (
      <div>
        <TelaButton>
        <button onClick={() => this.mudaTela("criar")}>Home</button>
        <button onClick={() => this.mudaTela("lista")}>Lista de Playlists</button>
        <button onClick={() => this.mudaTela("detalhe")}>Detalhes da Playlist</button>

        </TelaButton>
        {this.escolherTela()}
      </div>
    );
  }
}
