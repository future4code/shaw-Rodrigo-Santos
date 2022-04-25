import React from "react";
import axios from "axios";
import styled from "styled-components";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  color: white;
`;


const CardLista = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  background-color: #343434;
  border-radius: 20px;
  &:hover{
      cursor: pointer;
      background-color: #42474a;
  }
`;

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

export default class ListaPlaylist extends React.Component {
  state = {
    listaDeListas: [],
    
  };

  

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, headers)
      .then((res) => {
        //console.log(res.data);
        this.setState({
          listaDeListas: res.data.result.list,
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ocorreu um problema, tente novamente");
      });
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    axios
      .delete(url, headers)
      .then((res) => {
        alert(`Lista deletada com sucesso!`);
        this.getAllPlaylists();
      })
      .catch((err) => {
        console.log(err.message);
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    const renderizaPlaylist = this.state.listaDeListas.map((playlist) => {
      return (
        <CardLista 
            key={playlist.id}
            onClick={()=> this.props.goToDetalhePlay(playlist)} >  

            {playlist.name}

          <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
        </CardLista>
      );
    });

    return (
      <Tela>
        <h1> LABEFY </h1>

        <h2>Suas playlists</h2>

        <ul>{renderizaPlaylist}</ul>
      </Tela>
    );
  }
}
