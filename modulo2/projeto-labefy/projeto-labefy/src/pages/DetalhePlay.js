import React from "react";
import axios from "axios";
import styled from "styled-components";
import ListaPlaylist from "./ListaPlaylist";
import AdicionaMusica from "../components/AdicionaMusica";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  height: 100vh;
  color: white;
`;

const CardLista = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 12px;
  margin: 15px;
  width: 25vw;
  height: 25vh;
  justify-content: space-between;
  align-items: center;
  background-color: #343434;
  border-radius: 10px;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #42474a;
  }
`;

const Botao = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  border: 1px solid black;
  background-color: #343434;
  border-radius: 5px;
  padding: 1em;
  &:hover {
    cursor: pointer;
    background-color: #42474a;
  }
`;

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

export default class DetalhePlay extends React.Component {
  state = {
    tracks: [],
    name: "",
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  /* componentDidUpdate(prevProps, prevState) {
    if (this.state.tracks !== prevState.tracks) {
      this.getPlaylistTracks();
    }
  } */

  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id.id}/tracks`;

    axios
      .get(url, headers)
      .then((res) => this.setState({ tracks: res.data.result.tracks }))
      .catch((err) => console.log(err.response));
  };

  getNome = () => {
    axios
      .get(this.props.name)
      .then((res) => this.setState({ name: res.data.name }))
      .catch((err) => console.log(err.response));
  };

  deleteTrack = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id.id}/tracks/${id}`;

    axios
      .delete(url, headers)
      .then((res) => {
        alert(`Música deletada com sucesso!`);
        this.getPlaylistTracks();
      })
      .catch((err) => {
        console.log(err.message);
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    const renderizaTrack = this.state.tracks.map((track) => {
      return (
        <CardLista key={track.id}>
          <h4>{track.artist}</h4>

          <h4>{track.name}</h4>

          <audio src={track.url} controls></audio>
          <button onClick={() => this.deleteTrack(track.id)}>x</button>
        </CardLista>
      );
    });

    return (
      <>
        <Tela>
          <h1>LABEFY</h1>
          <>{/* <>ID: {this.props.id.id}</> */}</>

          <h2>{this.props.id.name}</h2>

          <AdicionaMusica
            id={this.props.id.id}
            getPlaylistTracks={this.getPlaylistTracks}
          />

          <>{renderizaTrack}</>

          <Botao onClick={this.props.goToPlaylistPage}>
            Voltar para Listas
          </Botao>
        </Tela>
      </>
    );
  }
}
