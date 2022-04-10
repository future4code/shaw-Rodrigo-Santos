import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardAdd = styled.div`
  
  
  border-radius: 10px;
  background-color: #121212;
  color: white;
  padding: 1%;
 
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

export default class AdicionaMusica extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert(`Música ${body.name} adicionada com sucesso!!`);
        this.setState({ name: "", artist: "", url: "" });
        this.props.getPlaylistTracks();
      })
      .catch((err) => {
        alert("Tente novamente");
      });
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  render() {
    return (
      <>
        <CardAdd>
          <h3>Adicione uma música</h3>
          <input
            placeholder="Nome"
            value={this.state.name}
            onChange={this.handleName}
          />

          <input
            placeholder="Artista"
            value={this.state.artist}
            onChange={this.handleArtist}
          />

          <input
            placeholder="Url"
            value={this.state.url}
            onChange={this.handleUrl}
          />

          <Botao onClick={this.addTrackToPlaylist}>Cadastrar</Botao>
        </CardAdd>
      </>
    );
  }
}
